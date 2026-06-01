<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import ResumeButton from "../common/ResumeButton.svelte";
  import NavLink from "./NavLink.svelte";
  import NavLogo from "./NavLogo.svelte";

  type Props = {
    class?: string;
  };

  let { class: className = "" }: Props = $props();
</script>

<nav
  class={twMerge(
    "justify-between items-center max-w-7xl mx-auto px-8 sm:px-10 md:px-14 lg:px-16",
    className,
  )}>
  <div>
    <NavLogo />
  </div>
  <div class="flex justify-center gap-6 p-6 md:p-8">
    <NavLink href="#about" text="About" />
    <NavLink href="#technologies" text="Technologies" />
    <NavLink href="#projects" text="Projects" />
    <NavLink href="#contact" text="Contact" />
  </div>
  <div>
    <ResumeButton />
  </div>
</nav>
