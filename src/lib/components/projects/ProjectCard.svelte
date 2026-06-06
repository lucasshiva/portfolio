<script lang="ts">
  import type { Project } from "$lib/types";
  import ProjectCardBody from "./ProjectCardBody.svelte";
  import ProjectCardImage from "./ProjectCardImage.svelte";

  type Props = {
    project: Project;
  };

  let { project }: Props = $props();
</script>

<div
  class="project group relative flex flex-col transition-all duration-300 hover:-translate-y-1 bg-background rounded-2xl border border-card hover:border-primary/60 overflow-hidden">
  <ProjectCardImage url={project.imageUrl} alt={project.title} />
  <ProjectCardBody {project} />
</div>
