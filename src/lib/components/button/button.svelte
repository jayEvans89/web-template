<script lang="ts">
	import type { Snippet } from 'svelte';
	import LoadingSpinner from '../loading-spinner/loading-spinner.svelte';

	interface Props {
		children: Snippet<[string]>;
		variant?: 'secondary';
		loading?: boolean;
		clickEvent?: () => void;
	}

	let { children, variant, loading, clickEvent }: Props = $props();

	function clickHandler() {
		if (!loading && clickEvent) {
			clickEvent();
		}
	}
</script>

<button class={variant} onclick={clickHandler} data-testid="button">
	{#if loading}
		<span data-testid="loading-container">
			<LoadingSpinner></LoadingSpinner>
		</span>
	{:else}
		{@render children('')}
	{/if}
</button>

<style lang="scss">
	button {
		box-sizing: border-box;
		background-color: #000;
		color: #fff;
		padding: 12px 20px;
		border-radius: 8px;
		border: none;
		cursor: pointer;
		font-size: 1rem;
		font-weight: 500;
		transition: 250ms ease-in-out;
		will-change: background-color, color;

		&:hover {
			background-color: #333;
		}
	}

	.secondary {
		background-color: #fff;
		color: #000;
		border: 1px solid #000;

		&:hover {
			background-color: #f5f5f5;
		}
	}
</style>
