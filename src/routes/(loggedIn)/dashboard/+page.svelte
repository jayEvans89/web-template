<script lang="ts">
	import { onMount } from 'svelte';
	import * as m from '$lib/paraglide/messages.js';
	import type { AvailableLanguageTag } from '$lib/paraglide/runtime.js';
	import { i18n } from '$lib/i18n.js';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';

	export let data;

  function switchToLanguage(newLanguage: AvailableLanguageTag) {
		const canonicalPath = i18n.route($page.url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		goto(localisedPath);
	}
</script>

<h1>{m.dashboard()}</h1>
<p>{m.hello_world({ name: data.user.name})}</p>
<p>Email: { data.user.email }</p>

<div>
  <p>Switch language</p>
	<button onclick={() => switchToLanguage('en')}>en</button>
	<button onclick={() => switchToLanguage('fr')}>fr</button>
</div>
