<script lang="ts">
  import IconImage from "~icons/lucide/image";

  let imageFailed = $state(false);

  type Props = {
    url: string | null;
    alt: string;
  };

  let { url, alt }: Props = $props();
</script>

<div
  class="relative aspect-video py-2 overflow-hidden flex items-center rounded-lg justify-center border border-card group-hover:border-primary/40 transition-colors duration-300">
  {#if url && !imageFailed}
    <!-- Background -->
    <img
      src={url}
      alt="Blurred dbackground"
      loading="lazy"
      aria-hidden="true"
      class="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-30 group-hover:opacity-50" />

    <!-- Main image -->
    <img src={url} {alt} loading="lazy" class="relative w-full h-full object-contain" />
  {:else}
    <div
      class="flex flex-col items-center justify-center h-full w-full text-foreground opacity-80 group-hover:scale-105">
      <IconImage class="size-20 md:size-24 lg:size-28 xl:size-30" />
      <span class="text-xs md:text-sm font-medium uppercase tracking-wider p-1">No Image</span>
      <div class="absolute inset-0 bg-linear-to-t from-card/70 to-transparent pointer-events-none">
      </div>
    </div>
  {/if}
</div>
