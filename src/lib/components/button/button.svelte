<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet<[string]>;
		variant?: 'secondary';
		loading?: boolean;
    clickEvent?: () => void;
	}

	let { children, variant, loading, clickEvent }: Props = $props();

  function clickHandler() {
		console.log('click internal')
    if (!loading && clickEvent) {
      clickEvent();
    }
  }
</script>

<button class="{variant}" onclick={clickHandler}>
	{#if loading}
		<span class="loading-container">
			Loading
			<div class="loading-spinner">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
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

	.loading-container {
		display: flex;
		gap: 8px;
	}

	.loading-spinner {
		display: flex;
		position: relative;
		width: 16px;
		height: 16px;
		justify-content: center;
		align-items: center;

		div {
			display: block;
			position: absolute;
			width: 16px;
			height: 16px;
			margin: 8px;
			border: 2px solid currentColor;
			border-radius: 50%;
			animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
			border-color: currentColor transparent transparent transparent;

			&:nth-child(1) {
				animation-delay: -0.45s;
			}

			&:nth-child(2) {
				animation-delay: -0.3s;
			}

			&:nth-child(3) {
				animation-delay: -0.15s;
			}
		}
	}

	@keyframes lds-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
