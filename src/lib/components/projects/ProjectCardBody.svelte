<script lang="ts">
  import type { Project } from "$lib/types";
  import IconGithub from "~icons/lucide/github";

  type Props = {
    project: Project;
  };

  let { project }: Props = $props();

  // If a live URL is not available, fallback to source code instead.
  let primaryUrl = $derived(project.url || project.source);
</script>

<div
  class="flex flex-1 flex-col p-5 md:p-6 group-hover:bg-black/40 bg-black/90 transition-colors duration-300">
  <div class="flex justify-between items-center">
    <h3
      class="text-base md:text-lg lg:text-xl font-medium tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
      <!-- The stretched link: covers the entire card via after: pseudo-element -->
      <a href={primaryUrl} target="_blank" class="after:absolute after:inset-0 after:z-0">
        {project.title}
      </a>
    </h3>
    <!-- z-10 lifts the GitHub link above the stretched overlay -->
    <a
      href={project.source}
      target="_blank"
      class="relative z-10 bg-background border border-card hover:bg-card hover:scale-110 rounded-full p-2">
      <IconGithub />
    </a>
  </div>

  <p
    class="mt-2.5 text-sm md:text-base leading-relaxed text-muted-foreground line-clamp-2 md:line-clamp-3 lg:line-clamp-4">
    {project.description}
  </p>

  {#if project.tags && project.tags.length > 0}
    <div class="mt-auto pt-5 flex flex-wrap gap-2">
      {#each project.tags as tag}
        <span
          class="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs md:text-sm font-medium text-primary border border-muted transition-colors duration-300 group-hover:border-primary/50">
          {tag}
        </span>
      {/each}
    </div>
  {/if}
</div>
