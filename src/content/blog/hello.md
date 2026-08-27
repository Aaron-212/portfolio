---
title: 你好，Astro！
date: 2026-08-27
---

今天，把我的博客从Hexo迁移到了Hugo。算上以前从Wordpress到Jekyll，再到Hexo，这个博客已经经历了三次迁移（但是内容也没增加多少）。

在这里，分享些我的经验。

## 一个个的，咋都不行啊，几个菜啊

### Wordpress

当初从Wordpress迁移出来，就是因为Wordpress对Markdown支持不佳。虽然有官方iOS应用可以远程编辑，不需要Git。
但是，WP官方应用的设计相比于网页版功能太缺失，而且还不能兼容WP的Markdown插件。
在电脑上写Markdown，在手机上写只能回到可视化编辑，实在是太割裂。

### Jekyll

于是乎，切到了GitHub官方推荐的Jekyll。Jekyll本身是不错，可是对我有个问题：他是基于Ruby的。你可能会问：“Ruby怎么了？”。
是，Ruby是个不错的语言，但是在Mac上有大问题：Apple在macOS中内置的Ruby会和用户自行安装的Ruby冲突，而且这种冲突不是说什么指定运行哪个Ruby能解决的。
而且这个冲突不是我能解决的，就连大部分程序员都解决不了。有人甚至借此开发了什么付费服务，专门解决此类问题。（还在用Jekyll的时候刷到过，现在找不到了）

### Hexo

于是乎，切到了基于NodeJS的Hexo。但是Hexo的Theme太少了，而且我用的Theme Next，也有一个大Bug：在本机生成的页面和在GitHub Workflows中生成的页面是不一样的。
也就是说，整个网页在我这里看和在线上看是不同的。

那我用个屁啊!

### Hugo

于是乎，现在就切到了基于Go语言的Hugo，希望不会出大问题。

> 四个架构，四种编程语言，全给我碰过了（）

## Markdown Matters

经过了如此多的迁移，某种程度上坚定了我用Markdown的信念。

何出此言？因为自从我从Wordpress导出Markdown后，迁移从未如此轻松（）

Markdown，轻量化的格式，丰富的样式，不论用何种生成器转换到HTML都很耐看。
可以说，Markdown比LaTeX更易用，比Word/Pages更快捷。

当然，专业排版还是得交给这些软件。

> 有时候甚至得交给InDesign

## GitHub Pages + Cloudflare

GitHub Pages作为GitHub免费提供的静态网站托管服务，虽然没有被墙，但是如果有自己的域名还是建议套层Cloudflare，一来可以监控流量、套DNS，二来可以提供一层额外的保护。

毕竟如果是在中国大陆科技公司购买的域名那里直接使用DNS服务的话（如DNSPod），你的个人信息在Whois上是一览无余的。

> 当然你想用免费域名也行

## Git

Markdown和LaTeX相似，都是需要经过“编译”才能得到成品的文档格式，LaTeX主要是”编译“到PDF，而Markdown则是HTML等。这也就意味着，他们的源文件是可以被Git管理的，于是乎利用Markdown/LaTeX写作，不仅可以省掉大量不必的排版工作，还可以通过Git进行版本管理，免得那天你想用回哪个以前的版本。

额外的好处还有一个：练习Git命令

> 用回第一稿吧

## Visual Studio Code

不得不说，微软写IDE是有水平的，捏出来VSC这个人见人爱的编程软件（bushi）

不过VSC的精髓不在于其本身，而是在他呢恐怖的扩展性：插件市场。
所以，如果想用好VSC，去装插件，把你的VSC变成个瑞士军刀。

> 典中典之VSC啥都能写

暂时总结了这些经验，希望有用。
