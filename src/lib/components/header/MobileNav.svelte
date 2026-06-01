<!-- MobileNav.svelte -->
<script lang="ts">
  import { twMerge } from "tailwind-merge";
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          viewBox="0 0 24 24">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      {:else}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
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
