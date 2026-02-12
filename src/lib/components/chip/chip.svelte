
<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet<[string]>;
	}

	let { children }: Props = $props();
</script>

<button class="chip">
  {@render children('')}
</button>

<style lang="scss">
  .chip {
    box-sizing: border-box;
    background-color: var(--clr-surface-a20);
    color: var(--clr-light-a0);
    padding: 8px 12px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    transition: 250ms ease-in-out;
    will-change: background-color, color;
    display: inline-block;
    width: fit-content;
  }
</style>