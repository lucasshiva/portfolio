<script lang="ts">
  import type { Project } from "$lib/types";
  import IconImage from "~icons/lucide/image";

  type Props = {
    project: Project;
  };

  let { project }: Props = $props();

  // Track image load state
  let imageFailed = $state(false);
</script>

<article
  class="group relative flex flex-col h-full overflow-hidden rounded-xl border border-background bg-background text-card-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(129,140,248,0.15)]">
  <div
    class="relative aspect-video w-full overflow-hidden bg-background flex items-center justify-center">
    {#if project.imageUrl && !imageFailed}
      <img
        src={project.imageUrl}
        alt={project.title}
        loading="lazy"
        onerror={() => (imageFailed = true)}
        class="h-full w-full object-cover transition-transform duration-300 will-change-transform group-hover:scale-105" />
      <div class="absolute inset-0 bg-linear-to-t from-card/70 to-transparent pointer-events-none">
      </div>
    {:else}
      <div class="flex flex-col items-center justify-center text-muted-foreground opacity-50">
        <IconImage class="size-20" />
        <span class="text-xs md:text-sm font-medium uppercase tracking-wider p-2">No Image</span>
        <div
          class="absolute inset-0 bg-linear-to-t from-card/70 to-transparent pointer-events-none">
        </div>
      </div>
    {/if}
  </div>

  <div class="flex flex-1 flex-col p-5 md:p-6">
    <h3
      class="text-xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
      <a
        href={project.source}
        target="_blank"
        rel="noopener noreferrer"
        class="focus:outline-hidden">
        <span class="absolute inset-0 z-10" aria-hidden="true"></span>
        {project.title}
      </a>
    </h3>

    <p class="mt-2.5 text-sm leading-relaxed text-muted-foreground line-clamp-3 flex-1">
      {project.description}
    </p>

    {#if project.tags && project.tags.length > 0}
      <div class="mt-5 flex flex-wrap gap-2 z-20">
        {#each project.tags as tag}
          <span
            class="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-primary border border-muted transition-colors duration-300 group-hover:border-primary/50">
            {tag}
          </span>
        {/each}
      </div>
    {/if}
  </div>
</article>
