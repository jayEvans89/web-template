<script lang="ts">
  import type { Snippet } from 'svelte';

  let { children }: { children: Snippet } = $props();
</script>

<div class="container">
  {@render children()}
</div>

<style>
  .container {
    color: var(--clr-text);
    background-color: var(--clr-surface-a0);
    padding: 3em;
    margin: 0;
  }
</style>