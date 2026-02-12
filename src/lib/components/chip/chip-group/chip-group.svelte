
<script lang="ts">
	import type { Snippet } from 'svelte';
	import Chip from '../chip.svelte';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="chip-group">
  {@render children?.()}
</div>

<style lang="scss">
  .chip-group {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
</style>