<script lang="ts" module>
	import { defineMeta, setTemplate, type Args } from '@storybook/addon-svelte-csf';
	import InputText from './input-text.svelte';
	import type { Snippet } from 'svelte';
	import { withActions } from '@storybook/addon-actions/decorator';

	const { Story } = defineMeta({
		title: 'Form/Input text',
		component: InputText,
		args: {
      label: "First name",
      value: "John",
      hintText: "Enter your first name",
			invalid: false,
			name: 'first-name'
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
	<InputText {...args}></InputText>
{/snippet}

<Story name="Basic" />
