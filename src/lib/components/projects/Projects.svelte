<script lang="ts">
  import type { Project } from "$lib/types";
  import IconInfo from "~icons/lucide/info";
  import IconX from "~icons/lucide/x";
  import ProjectCard from "./ProjectCard.svelte";

  type Props = {
    projects: Project[];
    fetchedAt: Date;
  };

  let { projects, fetchedAt }: Props = $props();
  let dateString = $derived(
    fetchedAt.toLocaleString("en-US", { dateStyle: "long", timeStyle: "medium" }),
  );
</script>

<section id="projects" class="py-24 px-2 md:px-4 lg:px-6 bg-muted">
  <div class="max-w-6xl mx-auto">
    <div class="text-center md:text-left">
      <h2 class="text-4xl md:text-5xl lg:text-6xl mb-4">Projects</h2>
      <div class="flex flex-col p-2 lg:flex-row md:justify-between mb-6">
        <div class="flex items-center justify-center md:justify-start gap-2">
          <IconInfo class="text-primary" />
          <p class="max-w-2xl text-base md:text-lg">
            Projects are automatically populated using GitHub's API.
          </p>
        </div>
        <p class="text-muted-foreground">
          Last fetched {dateString}
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
        class="flex flex-col items-center justify-center p-20 mt-12 text-center border border-primary/40 rounded-2xl">
        <div class="bg-background p-4 rounded-full mb-4">
          <IconX class="size-6" />
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
