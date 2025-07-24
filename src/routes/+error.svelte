<script>
  import { page } from '$app/state';
</script>

<div class="flex h-[75vh] w-full flex-col items-center justify-center gap-2">
  <div class="flex flex-row items-center justify-center gap-4">
    <h1 class="text-3xl font-bold lg:text-6xl">{page.status}</h1>
    <h1 class="text-3xl font-light lg:text-6xl">{page.error?.message}</h1>
  </div>
  <span>Check the URL?</span>
</div>
