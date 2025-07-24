<script lang="ts">
  export let data: { posts: any[] };
</script>

<div class="mx-auto my-4 w-full px-6 md:w-3/4 md:px-0">
  <h1 class="mb-6 text-3xl font-bold">Blog</h1>

  <ul class="space-y-4">
    {#each data.posts as { slug, metadata } (metadata.title)}
      <li>
        <a class="text-xl font-semibold" href={`/blog/${slug}`}>
          {metadata.title}
        </a>
        <p class="text-sm text-zinc-500">{new Date(metadata.date).toLocaleDateString()}</p>
        {#if metadata.excerpt}
          <p class="mt-1">{metadata.excerpt}</p>
        {/if}
      </li>
    {/each}
  </ul>
</div>
