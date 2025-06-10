<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import OauthButton from './oauth-button.svelte';

	const { Story } = defineMeta({
		title: 'Actions/oAuth Button',
		component: OauthButton,
		args: {
			provider: 'Google'
		},
		render: template,
	});
</script>

{#snippet template({ ...args })}
	<OauthButton provider={args.provider} />
{/snippet}

<Story name="Basic" />
