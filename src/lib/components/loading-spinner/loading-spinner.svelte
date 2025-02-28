<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';

	interface Props {
		loadingText?: string;
	}

	let { loadingText = m.loading() }: Props = $props();
</script>

<span class="loading-container" data-testid="loading-spinner-container">
	<span data-testid="loading-spinner-text">{loadingText}</span>
	<div class="loading-spinner">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
</span>

<style lang="scss">
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
