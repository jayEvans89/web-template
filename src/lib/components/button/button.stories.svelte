<script lang="ts" module>
	import { defineMeta, setTemplate, type Args } from '@storybook/addon-svelte-csf';
	import Button from './button.svelte';
	import type { Snippet } from 'svelte';
	import { withActions } from '@storybook/addon-actions/decorator';

	const { Story } = defineMeta({
		title: 'Actions/Button',
		component: Button,
		args: {
      children: 'Submit' as unknown as Snippet<[string]>,
      loading: false,
      variant: undefined
		},
		argTypes: {
			children: {
				description: 'The text content to show on the button',
        control: 'text',
				name: 'Slotted Text'
			},
      variant: {
        description: 'The variant of the button',
        control: 'select',
        options: ['', 'secondary'],
        name: 'Button variant'
      },
			clickEvent: {
				action: 'clickEvent'
			}
		},
		decorators: [withActions]
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
<Story name="Secondary" args={{variant: 'secondary'}} />
