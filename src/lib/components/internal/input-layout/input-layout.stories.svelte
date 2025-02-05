<script lang="ts" module>
	import { defineMeta, setTemplate, type Args } from '@storybook/addon-svelte-csf';
	import InputLayout from './input-layout.svelte';
	import { withActions } from '@storybook/addon-actions/decorator';
	import InputText from '$lib/components/input-text/input-text.svelte';

	const { Story } = defineMeta({
		title: 'Internal/Input Layout',
		component: InputLayout,
		args: {
      label: "First name",
      hintText: "Enter your first name",
      id: 'inputId',
      children: 'Input component goes here'
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
    {args.children}
  </InputLayout>
{/snippet}

<Story name="Basic" />
