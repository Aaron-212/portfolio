<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '../app.css';

  let { children } = $props();
</script>

<svelte:head>
  <title>Aaron212</title>
</svelte:head>

<Header />
<main class="mt-16 select-none">{@render children()}</main>
<Footer />
