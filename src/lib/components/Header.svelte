<script lang="ts">
  import Icon from "@iconify/svelte";
  import { fly } from "svelte/transition";

  let isHovering = false;
  function handleMouseEnter() {
    isHovering = true;
  }
  function handleMouseLeave() {
    isHovering = false;
  }
  function toggleHover() {
    isHovering = !isHovering;
  }

  let hoveredSection = "Home";
  function handleSectionHover(section: string) {
    hoveredSection = section;
  }

  const links = [
    {
      label: "Home",
      href: "/",
      links: [
        {
          label: "About",
          href: "/about"
        }
      ]
    },
    {
      label: "Projects",
      href: "/projects",
      links: [
        {
          label: "McSrvrS",
          href: "#"
        }
      ]
    },
    {
      label: "Blog",
      href: "/blog",
      links: [
        {
          label: "Hello",
          href: "#"
        }
      ]
    },
    {
      label: "Docs",
      href: "/docs",
      links: [
        {
          label: "Hello",
          href: "#"
        }
      ]
    },
    {
      label: "Other Links",
      href: "#",
      links: [
        {
          label: "CNBlogs",
          href: "https://www.cnblogs.com/Aaron212"
        }
      ]
    }
  ];

  $: activeLink = links.find((link) => link.label === hoveredSection);
</script>

<header
  class={`pointer-events-none fixed top-0 z-50 h-dvh w-dvw backdrop-blur-none transition-all duration-250 ease-in-out select-none md:delay-250
    ${isHovering ? "bg-neutral-50/25 backdrop-blur-xl dark:bg-neutral-900/25" : "bg-neutral-50/0 dark:bg-neutral-900/0 "}
  `}
>
  <div
    role="navigation"
    class={`pointer-events-auto flex h-12 w-full flex-col items-center overflow-clip bg-neutral-50/80 backdrop-blur-xl transition-all duration-250 ease-in-out md:delay-250 dark:bg-neutral-900/80
      ${isHovering ? "h-[75vh] backdrop-blur-none md:h-80" : ""}
    `}
    onmouseenter={() => handleMouseEnter()}
    onmouseleave={() => handleMouseLeave()}
  >
    <div
      class="flex h-12 w-full flex-shrink-0 flex-row flex-nowrap items-center gap-6 px-6 transition-none md:w-3/4 md:px-0"
    >
      <h1 class="text-lg font-bold text-black dark:text-white">Aaron212</h1>
      <div class="hidden flex-row items-center gap-4 lg:flex">
        {#each links.slice(0, -1) as link (link.label)}
          <a class="text-black dark:text-white" href={link.href} onmouseenter={() => handleSectionHover(link.label)}
            >{link.label}</a
          >
        {/each}
      </div>
      <div class="flex-grow"><!-- Spacer --></div>
      <a href="https://x.com/AR___212"><Icon icon="fa7-brands:x-twitter" /></a>
      <a href="https://github.com/Aaron-212"><Icon icon="fa7-brands:github" /></a>
      <Icon class="md:hidden" ontouchstart={() => toggleHover()} icon="fa7-solid:bars" />
    </div>
    <div
      class={`trasition-[opacity] flex w-full justify-center duration-250 ease-in-out md:delay-250
              ${isHovering ? "opacity-100" : "opacity-0"}
            `}
    >
      <!-- Desktop -->
      <div class="mt-8 hidden w-3/4 flex-shrink-0 overflow-hidden lg:grid lg:items-start">
        {#key activeLink}
          <div
            class="col-start-1 row-start-1 flex min-w-40 flex-col gap-2 justify-self-start"
            in:fly={{ x: 100 }}
            out:fly={{ x: 100 }}
          >
            {#if activeLink}
              <div class="flex min-w-40 flex-col gap-2 transition-all">
                <p class="text-sm text-slate-700 dark:text-slate-300">{activeLink.label}</p>
                {#each activeLink.links as sublink (sublink.label)}
                  <a
                    class="text-2xl font-extrabold text-slate-800 transition-all duration-200 ease-in-out hover:text-black dark:text-slate-200 dark:hover:text-white"
                    href={sublink.href}
                  >
                    {sublink.label}
                  </a>
                {/each}
              </div>
            {/if}
          </div>
        {/key}
        {#each links.slice(-1) as link (link.label)}
          <div class="col-start-1 row-start-1 flex min-w-40 flex-col items-end gap-2 justify-self-end">
            <p class="text-sm text-slate-700 dark:text-slate-300">{link.label}</p>
            {#each link.links as sublink (sublink.label)}
              <a
                class="text-2xl font-extrabold text-slate-800 transition-all duration-200 ease-in-out hover:text-black dark:text-slate-200 dark:hover:text-white"
                href={sublink.href}
              >
                {sublink.label}
              </a>
            {/each}
          </div>
        {/each}
      </div>

      <!-- Mobile -->
      <div class="mt-8 flex w-full flex-shrink-0 flex-col gap-2 overflow-hidden px-5 lg:hidden">
        {#each links as link (link.label)}
          {#each link.links as sublink (sublink.label)}
            <a
              class="text-2xl font-extrabold text-slate-800 transition-all duration-200 ease-in-out hover:text-black dark:text-slate-200 dark:hover:text-white"
              href={sublink.href}
            >
              {sublink.label}
            </a>
          {/each}
        {/each}
      </div>
    </div>
  </div>
</header>
