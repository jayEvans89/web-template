<script lang="ts">
	import BackLink from '$lib/components/back-link/back-link.svelte';
	import OathButton from '$lib/components/oauth-button/oauth-button.svelte';
</script>

<section class="login-page">
	<div class="login-page__form">
		<h1>Welcome back!</h1>
		<p>Please enter your details</p>

		<OathButton provider="Google"></OathButton>
	</div>
</section>

<style lang="scss">
	.login-page {
		height: 100vh;
		&__form {
			display: flex;
			height: 100%;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}
</style>
