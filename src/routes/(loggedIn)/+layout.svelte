<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
</script>

<slot />
<ul>
	<li>
		<a href="/">
			{ m.go_to_landing_page()}
		</a>
	</li>
	<li>
		<a href="/logout">
			{ m.logout() }
		</a>
	</li>
</ul>
