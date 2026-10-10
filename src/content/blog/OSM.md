---
title: "利用OSM/OGF建立自己的地图服务器（未完成）"
date: 2023-07-17
---

本项目未完成，很可能会终止。

## 序言

上周末无聊逛谷歌，搜到一个逆天大项目：<https://opengeofiction.net/>（下简称OGF）。OGF利用开源的网页地图项目OpenStreetMap（下简称OSM），进行修改，成功的创建了一个可供所有人实现自己想象中的地图的地方。但是，原作者对OGF的限制相当大，毕竟原作者称OGF中的行星Ogeiff是“平行世界中的另一个地球”，并不能出现什么科幻、玄幻要素。

我就想，能不能复刻OGF这个项目？实践发现，有可能，但是我没弄成（

## 架构

要搭建自己的地图服务器，先要了解一下OSM的服务器架构。

```mermaid
architecture-beta
    group osm(cloud)[OpenStreetMap]

    service browser(internet)[用户浏览器]

    service render(server)["渲染服务器 RENDERER"] in osm
    service website(server)["中央服务器 OSM-WEBSITE"] in osm
    service search(server)["搜索服务器 NOMINATIM"] in osm

    service renderDB(database)["渲染数据库 储存 tiles"] in osm
    service centralDB(database)["中央数据库 储存矢量地图数据和用户数据"] in osm
    service searchDB(database)["搜索数据库 储存搜索索引"] in osm

    browser:R --> L:website

    render:B -- T:website
    website:B -- T:search

    render:R -- L:renderDB
    website:R -- L:centralDB
    search:R -- L:searchDB
```

### 中央服务器（openstreetmap-website）

项目地址：<https://github.com/openstreetmap/openstreetmap-website>

主要负责向用户发送HTML、CSS、地图图像块（tiles）等相关文件，供浏览器渲染网页；额外负责处理并储存用户数据（OSM需要账号才能编辑）和由大量用户编辑组成的整个矢量地图。

### 渲染服务器（openstreetmap-tile-server）

项目地址：<https://github.com/gravitystorm/openstreetmap-carto>

<https://github.com/Overv/openstreetmap-tile-server>（Docker一键版）

负责将矢量地图数据渲染成PNG并储存在数据库中。

具体为什么不是直接推送矢量数据给用户呢？我也不清楚，可能是开销太大。

### 搜索服务器（nominatim）

项目地址：<https://github.com/osm-search/Nominatim>

提取矢量地图中所有的名称信息并创建索引，可以使用户更快地搜索地图元素。

### 服务器间相关

一般来说，为了性能与可扩展性，OSM是把这三个项目部署在不同的服务器上。

但是我们没那么多钱，只能部署在同一个服务器上了（

## 搭建

你需要一台Ubuntu服务器，版本18.04LTS以上，推荐22.04LTS。

### 主服务器

参考自<https://github.com/openstreetmap/openstreetmap-website/blob/master/INSTALL.md>

安装依赖

```bash
sudo apt-get update
sudo apt-get install ruby ruby-dev ruby-bundler \
    libvips-dev libxml2-dev libxslt1-dev nodejs \
    build-essential git-core \
    postgresql postgresql-contrib libpq-dev libsasl2-dev \
    libffi-dev libgd-dev libarchive-dev libbz2-dev npm
sudo npm install --global yarn
```

克隆项目

```bash
git clone https://github.com/openstreetmap/openstreetmap-website.git
```

嫌速度慢的，可以把clone depth降到1

```bash
git clone --depth=1 https://github.com/openstreetmap/openstreetmap-website.git
```

接下来安装Ruby Gems

```bash
cd openstreetmap-websitebundle install
```

安装Node依赖

```bash
bundle exec bin/yarn install
```

准备配置文件

```bash
touch config/settings.local.yml
cp config/example.storage.yml config/storage.yml
cp config/example.database.yml config/database.yml
```

准备PostreSQL用户

```bash
sudo -u postgres -i
createuser -s <你的ubuntu用户名>
exit
```

建立数据库

```bash
bundle exec rails db:create
bundle exec rails db:migrate
```

OSM-Website，启动（bushi

```bash
bundle exec rails server
```

最后，打开<http://localhost:3000/>就行了，`CTRL+C`就可以退出。如果需要后台运行，加一个`-d`的flag。如果需要允许外部连接而不是只能在本机浏览，加一个`-b 0.0.0.0`的flag。

到这里，你个OSM网页就跑起来了，但是别看到个网页就那么兴奋，早着呢。一，你看到的地图还是OSM官方的；二，你连账号都没怎么编辑；三，就算你编辑了，你做的编辑只会存在主服务器，并不会渲染出来，也就是说，即便你编辑地图也看不到你做的编辑。

那么下面准备一些账号相关的

参考自<https://github.com/openstreetmap/openstreetmap-website/blob/master/CONFIGURE.md>

首先注册用户，点注册按钮，输入用户名、邮箱和密码，点击注册，同意条款，直到邮箱验证这一步。

接下来激活账号，进入数据库

```bash
bundle exec rails console
```

搜索用户

```sql
user = User.find_by(:display_name => "你刚注册的用户名")
=> #[ "有的话这里会返回一个ID" ]
```

激活

```sql
user.activate!
=> true
```

赋予服主/管理权限

```sql
user.roles.create(:role => "administrator", :granter_id => user.id)
=> #[ ... ]
user.roles.create(:role => "moderator", :granter_id => user.id)
=> #[ ... ]
```

保存修改

```sql
user.save!
=> true
```

最后`quit`退出即可
