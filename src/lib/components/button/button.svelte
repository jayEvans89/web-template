<script lang="ts">
	import type { Snippet } from 'svelte';
	import LoadingSpinner from '../loading-spinner/loading-spinner.svelte';

	interface Props {
		children: Snippet<[string]>;
		variant?: 'secondary';
		loading?: boolean;
		loadingText?: string;
		clickEvent?: () => void;
	}

	let { children, variant, loading, clickEvent, loadingText }: Props = $props();

	function clickHandler() {
		if (!loading && clickEvent) {
			clickEvent();
		}
	}
</script>

<button class={variant} onclick={clickHandler} data-testid="button">
	{#if loading}
		<span data-testid="loading-container">
			<LoadingSpinner loadingText={loadingText || undefined}></LoadingSpinner>
		</span>
	{:else}
		{@render children('')}
	{/if}
</button>

<style lang="scss">
	button {
		box-sizing: border-box;
		background-color: var(--clr-primary-a20);
		color: var(--clr-dark-a0);
		padding: 12px 20px;
		border-radius: 8px;
		border: none;
		cursor: pointer;
		font-size: 1rem;
		font-weight: 500;
		transition: 250ms ease-in-out;
		will-change: background-color, color;
		display: inline-block;
		width: fit-content;

		&:hover {
			background-color: var(--clr-primary-a10);;
		}
	}

	.secondary {
		background-color: var(--clr-surface-a50);
		color: var(-clr-light-a0);
		border: 1px solid #000;

		&:hover {
			background-color: #f5f5f5;
		}
	}
</style>
