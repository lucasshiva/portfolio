<script lang="ts">
  type Props = {
    source: string;
    icon: any;
  };

  let { source, icon: Icon }: Props = $props();
</script>

<a
  href={source}
  target="_blank"
  class="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground hover:rotate-12 hover:scale-105">
  <Icon class="size-6" />
</a>
