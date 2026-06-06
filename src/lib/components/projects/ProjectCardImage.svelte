<script lang="ts">
  import IconImage from "~icons/lucide/image";

  let imageFailed = $state(false);

  type Props = {
    url: string | null;
    alt: string;
  };

  let { url, alt }: Props = $props();
</script>

<div class="relative aspect-4/3 overflow-hidden flex items-center justify-center">
  {#if url && !imageFailed}
    <img
      src={url}
      {alt}
      loading="lazy"
      onerror={() => (imageFailed = true)}
      class="object-cover w-full h-full group-hover:scale-105" />
  {:else}
    <div
      class="flex flex-col items-center justify-center h-full w-full text-foreground opacity-80 group-hover:scale-110">
      <IconImage class="size-20 md:size-24 lg:size-28 xl:size-32" />
      <span class="text-xs md:text-sm font-medium uppercase tracking-wider p-2">No Image</span>
      <div class="absolute inset-0 bg-linear-to-t from-card/70 to-transparent pointer-events-none">
      </div>
    </div>
  {/if}
</div>
