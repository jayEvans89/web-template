<script lang="ts">
	import type { Props } from './oauth-button-types';
  import { icons } from './provider-logos'

	let { provider }: Props = $props();

	const providerEndpoint = $derived(`/login/${provider.toLowerCase()}`);
	const providerLogo = $derived(icons[provider.toLowerCase()]);
</script>

<a class="oauth-button" data-testid="oAuthButton" href={providerEndpoint}>
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
	<span class="oauth-button__text">
    Continue with {provider}
  </span>
</a>

<style lang="scss">
	.oauth-button {
		display: block;
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

    &__text {
      display: block;
      margin: auto;
    }
	}
</style>
