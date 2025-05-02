<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';

	let { children, data } = $props();
</script>

{@render children()}
<ul>
	<li>
		<a href="/">
			{ m.go_to_landing_page()}
		</a>
	</li>
	{#if data.loggedInUser.role === 'admin'}
		<li>
			<a href="/admin">
				Admin
			</a>
		</li>
	{/if}
	<li>
		<a href="/logout">
			{ m.logout() }
		</a>
	</li>
</ul>
