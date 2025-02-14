<script>
	import InputText from '$lib/components/input-text/input-text.svelte';

	let inputValue = $state('James');
</script>

<section>
	<h1>SvelteKit web template</h1>
	<p>This repo uses the following tech stack</p>
	<ul>
		<li>Sveltekit</li>
		<li>DrizzleOrm</li>
		<li>Turso Database</li>
		<li>Storybook</li>
		<li>Vitest</li>
		<li>Auth from Lucia guide</li>
		<li>Paraglide for translations</li>
	</ul>

	<p>Authentication had already been setup with <strong>Google OAuth</strong></p>
	<p>Go to <a href="/login">Login</a></p>
	<p>Go to <a href="/dashboard">Dashboard</a></p>
</section>
