<script>
  import About from "$lib/components/about/About.svelte";
  import Header from "$lib/components/header/Header.svelte";
  import Hero from "$lib/components/hero/Hero.svelte";
  import ScrollButton from "$lib/components/hero/ScrollButton.svelte";
</script>

<div id="app" class="bg-background text-foreground min-h-screen flex flex-col">
  <div id="landing" class="flex flex-col min-h-screen justify-between items-center">
    <Header />
    <Hero />
    <ScrollButton />
  </div>

  <About />
</div>
