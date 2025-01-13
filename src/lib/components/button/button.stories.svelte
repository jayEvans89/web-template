<script lang="ts" module>
	import { defineMeta, setTemplate, type Args } from '@storybook/addon-svelte-csf';
	import Button from './button.svelte';
	import type { Snippet } from 'svelte';

	const { Story } = defineMeta({
		title: 'Actions/Button',
		component: Button,
		args: {
      children: 'Submit' as unknown as Snippet<[string]>,
      loading: false,
      variant: ''
		},
		argTypes: {
			children: {
				description: 'The text content to show on the button',
        control: 'text',
				name: 'Button text'
			},
      variant: {
        description: 'The variant of the button',
        control: 'select',
        options: ['', 'secondary'],
        name: 'Button variant'
      }
		},
		actions: {
			clickEvent: { table: { disable: false } }
		}
	});
</script>

<script lang="ts">
	setTemplate(template);
</script>

{#snippet template(args: Args<typeof Story>)}
	<Button {...args} clickEvent={() => {}}>
		{args.children}
	</Button>
{/snippet}

<Story name="Basic" />
