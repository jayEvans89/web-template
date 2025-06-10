<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import BackLink from './back-link.svelte';
	import type { Snippet } from 'svelte';

	const { Story } = defineMeta({
		title: 'Actions/Back link',
		component: BackLink,
		args: {
			href: '#test',
      children: 'Back to home'  as unknown as Snippet<[string]>
		},
		argTypes: {
			href: {
				description: 'The URL to navigate to when the link is clicked',
				control: 'text',
				type: 'string'
			},
			children: {
				description: 'The text content to show on the link',
        control: 'text',
				name: 'Link text'
			}
		},
		render: template
	});
</script>

{#snippet template({ ...args })}
	<BackLink href={args.href}>
		{args.children}
	</BackLink>
{/snippet}

<Story name="Basic" />
