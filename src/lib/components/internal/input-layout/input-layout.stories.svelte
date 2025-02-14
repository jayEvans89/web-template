<script lang="ts" module>
	import { defineMeta, setTemplate, type Args } from '@storybook/addon-svelte-csf';
	import InputLayout from './input-layout.svelte';
	import { withActions } from '@storybook/addon-actions/decorator';
	import InputText from '$lib/components/input-text/input-text.svelte';
	import type { Snippet } from 'svelte';

	const { Story } = defineMeta({
		title: 'Internal/Input Layout',
		component: InputLayout,
		args: {
      label: "First name",
      hintText: "Enter your first name",
      id: 'inputId',
      input: 'Input component goes here' as unknown as Snippet,
			errorMessage: '' as unknown as Snippet<[string]>
		},
		argTypes: {
		},
		decorators: [withActions]
	});
</script>

<script lang="ts">
	setTemplate(template);
</script>

{#snippet template(args: Args<typeof Story>)}
	<InputLayout {...args}>
		{#snippet input()}
    	{args.input}
		{/snippet}
    {args.errorMessage}
  </InputLayout>
{/snippet}

<Story name="Basic" />
