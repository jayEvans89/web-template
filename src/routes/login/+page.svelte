<script lang="ts">
	import BackLink from '$lib/components/back-link/back-link.svelte';
	import OathButton from '$lib/components/oauth-button/oauth-button.svelte';
</script>

<section>
  <BackLink href="/">Back to home</BackLink>
	<h1>Login</h1>

	<OathButton provider="Google"></OathButton>
</section>
