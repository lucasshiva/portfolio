<script lang="ts">
  import DesktopNav from "./DesktopNav.svelte";
  import MobileNav from "./MobileNav.svelte";
</script>

<header class="w-full border-b border-card">
  <DesktopNav class="hidden md:flex" />
  <MobileNav class="md:hidden" />
</header>
