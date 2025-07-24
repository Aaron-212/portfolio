<script lang="ts">
  import PostLayout from '$lib/components/PostLayout.svelte';
  export let data;
  const { PostContent, metadata } = data;
</script>

<PostLayout {metadata}>
  <svelte:component this={PostContent} />
</PostLayout>
