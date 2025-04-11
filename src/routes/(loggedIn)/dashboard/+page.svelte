<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { locales, setLocale } from '$lib/paraglide/runtime.js';

	export let data;

  function switchToLanguage(newLanguage: typeof locales[number]) {
		setLocale(newLanguage);
	}
</script>

<h1>{m.dashboard()}</h1>
<p>{m.hello_world({ name: data.loggedInUser.name})}</p>
<p>Email: { data.loggedInUser.email }</p>

<div>
  <p>Switch language</p>
	<button onclick={() => switchToLanguage(locales[0])}>en</button>
	<button onclick={() => switchToLanguage(locales[1])}>fr</button>
</div>
