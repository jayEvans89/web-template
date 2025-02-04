<script lang="ts" module>
	import { defineMeta, setTemplate, type Args } from '@storybook/addon-svelte-csf';
	import OauthButton from './oauth-button.svelte';

	const { Story } = defineMeta({
		title: 'Actions/oAuth Button',
		component: OauthButton,
		args: {
			provider: 'Google'
		}
	});
</script>

<script lang="ts">
	setTemplate(template);
</script>

{#snippet template(args: Args<typeof Story>)}
	<OauthButton provider={args.provider as 'Google'} />
{/snippet}

<Story name="Basic" />
