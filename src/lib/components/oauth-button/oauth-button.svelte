<script lang="ts">
	import { icons } from './provider-logos';

	interface Props {
		provider: 'Google'
	}

	let { provider }: Props = $props();

	const providerEndpoint = $derived(`/login/${provider.toLowerCase()}`);
	const providerLogo = $derived(icons[provider.toLowerCase()]);
</script>

<a class="oauth-button oauth-button--{provider.toLowerCase()}" data-testid="oAuthButton" href={providerEndpoint}>
	<svg
		width="24px"
		height="24px"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		focusable="false"
	>
		<title>{provider} logo</title>
		{@html providerLogo}
	</svg>
	<span class="oauth-button__text" data-testid="oAuthButtonText">
		Continue with {provider}
	</span>
</a>

<style lang="scss">
	.oauth-button {
		display: flex;
		border-radius: 9999px;
		padding: 0 40px;
		height: 48px;
		text-decoration: none;
		border: 1px solid black;
		max-width: 300px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: currentColor;
		gap: 8px;

		&--google {
			background: #fff;
			color: #000;
		}

		&__text {
			display: block;
			margin: auto;
		}
	}
</style>
