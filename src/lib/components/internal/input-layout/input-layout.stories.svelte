<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import InputLayout from './input-layout.svelte';
	import { withActions } from '@storybook/addon-actions/decorator';
	import InputText from '$lib/components/input-text/input-text.svelte';
	import type { ComponentProps, Snippet } from 'svelte';

	const { Story } = defineMeta({
		title: 'Internal/Input Layout',
		component: InputLayout,
		args: {
      label: "First name",
      hintText: "Enter your first name",
      id: 'inputId',
      input: 'Input component goes here' as unknown as Snippet,
			errorMessage: ''
		},
		render: template,
		decorators: [withActions]
	});
</script>

{#snippet template({...args}: ComponentProps<typeof InputLayout>)}
	<InputLayout {...args}>
		{#snippet input()}
    	{args.input}
		{/snippet}
  </InputLayout>
{/snippet}

<Story name="Basic" />
