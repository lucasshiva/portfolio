<script lang="ts">
  import type { Project } from "$lib/types";
  import IconInfo from "~icons/lucide/info";
  import ProjectCard from "./ProjectCard.svelte";

  type Props = {
    projects: Project[];
  };

  let { projects }: Props = $props();
</script>

<section id="projects" class="py-24 px-6 bg-muted">
  <div class="max-w-6xl mx-auto">
    <div class="text-center md:text-left">
      <h2 class="text-4xl md:text-5xl lg:text-6xl mb-4">Projects</h2>
      <div class="flex items-center justify-center md:justify-start gap-2 mb-8">
        <IconInfo class="text-primary" />
        <p class="text-muted-foreground max-w-2xl text-base md:text-lg">
          Projects are automatically populated using GitHub's API.
        </p>
      </div>
    </div>
    {#if projects !== undefined && projects.length >= 1}
      <div class="projects">
        <div
          class="grid md:grid-cols-2 lg:grid-cols-3 max-w-sm sm:max-w-lg md:max-w-full mx-auto gap-10 mb-12 px-12 md:px-8 lg:px-0 py-8">
          {#each projects as project}
            <ProjectCard {project} />
          {/each}
        </div>
      </div>
    {:else}
      <div
        class="flex flex-col items-center justify-center p-16 text-center border-2 border-dashed border-muted rounded-2xl bg-card/30">
        <div class="bg-muted p-4 rounded-full mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="text-muted-foreground">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-foreground mb-2">No projects found!</h3>
        <p class="text-muted-foreground max-w-md">
          I haven't published any projects yet, or I'm currently updating my portfolio. Check back
          soon.
        </p>
      </div>
    {/if}
  </div>
</section>
