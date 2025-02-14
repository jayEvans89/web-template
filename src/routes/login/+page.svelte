<script lang="ts">
	import BackLink from '$lib/components/back-link/back-link.svelte';
	import Button from '$lib/components/button/button.svelte';
	import InputText from '$lib/components/input-text/input-text.svelte';
	import OathButton from '$lib/components/oauth-button/oauth-button.svelte';

	let username = $state('');

	let usernameErrorMessage: string | undefined = $state(undefined);
	let usernameError = $state(false)

	function validation() {
		if (username === '') {
			usernameErrorMessage = 'Username is required';
			usernameError = true;
		} else {
			usernameErrorMessage = undefined;
			usernameError = false;
		}
	}
</script>

<section class="login-page">
	<div class="login-page__form">
		<h1>Welcome back!</h1>
		<p>Please enter your details</p>

		<OathButton provider="Google"></OathButton>

		<p>Or</p>

		<form>
			<InputText
				label="Username"
				hintText="This is normally your email address"
				name="username"
				bind:value={username}
				invalid={usernameError}
				customError={usernameErrorMessage}
			>
			</InputText>
			<Button clickEvent={validation}>Test validation</Button>
		</form>
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
