<script lang="ts">
  import About from "$lib/components/about/About.svelte";
  import Footer from "$lib/components/footer/Footer.svelte";
  import Header from "$lib/components/header/Header.svelte";
  import Hero from "$lib/components/hero/Hero.svelte";
  import ScrollButton from "$lib/components/hero/ScrollButton.svelte";
  import Projects from "$lib/components/projects/Projects.svelte";
  import Technologies from "$lib/components/technologies/Technologies.svelte";

  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

<div id="app" class="bg-background text-foreground min-h-screen flex flex-col">
  <div id="landing" class="flex flex-col min-h-screen justify-between items-center">
    <Header />
    <Hero />
    <ScrollButton />
  </div>

  <About />
  <Technologies />
  <Projects projects={data.projects} />
  <Footer />
</div>
