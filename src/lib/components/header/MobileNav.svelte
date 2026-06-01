<!-- MobileNav.svelte -->
<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import IconMenu from "~icons/lucide/menu";
  import IconClose from "~icons/lucide/x";
  import ResumeButton from "../common/ResumeButton.svelte";
  import NavLink from "./NavLink.svelte";
  import NavLogo from "./NavLogo.svelte";

  let open = $state(false);

  type Props = {
    class?: string;
  };

  let { class: className = "" }: Props = $props();
</script>

<nav class={twMerge("relative", className)}>
  <!-- Top bar: logo left, burger right -->
  <div class="flex items-center justify-between px-8 sm:px-10 py-4">
    <NavLogo />
    <button
      onclick={() => (open = !open)}
      class="text-muted-foreground hover:text-foreground transition-colors p-1"
      aria-label="Toggle menu"
      aria-expanded={open}>
      {#if open}
        <IconClose />
      {:else}
        <IconMenu />
      {/if}
    </button>
  </div>

  <!-- Dropdown -->
  {#if open}
    <div class="flex flex-col px-8 sm:px-10 pb-6 gap-2">
      <NavLink href="#about" text="About" isMobile />
      <NavLink href="#technologies" text="Technologies" isMobile />
      <NavLink href="#projects" text="Projects" isMobile />
      <NavLink href="#contact" text="Contact" isMobile />
      <div class="mt-2">
        <ResumeButton />
      </div>
    </div>
  {/if}
</nav>
