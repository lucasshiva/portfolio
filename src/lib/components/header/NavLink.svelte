<script lang="ts">
  type Props = {
    href: string;
    text: string;
    isMobile?: boolean;
  };

  let { href, text, isMobile = false }: Props = $props();
</script>

{#if isMobile}
  <a {href} class="text-base font-light p-0.5 w-fit">{text}</a>
{:else}
  <a
    {href}
    class="relative text-sm transition-colors group font-light text-white/80 hover:text-white sm:text-base md:text-lg">
    {text}
    <span
      class="h-0.5 w-0 absolute bg-primary -bottom-1 left-0 transition-all duration-300 group-hover:w-full"
    ></span>
  </a>
{/if}
