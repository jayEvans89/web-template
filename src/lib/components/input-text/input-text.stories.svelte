<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import InputText from './input-text.svelte';
	import type { ComponentProps, Snippet } from 'svelte';
	import { withActions } from '@storybook/addon-actions/decorator';

	const { Story } = defineMeta({
		title: 'Form/Input text',
		component: InputText,
		args: {
      label: "First name",
      value: "John",
      hintText: "Enter your first name",
			invalid: false,
			name: 'first-name',
			customError: '',
			required: true
		},
		argTypes: {
			customError: {
				control: {
					type: 'text'
				}
			}
		},
		render: template,
		decorators: [withActions]
	});
</script>

{#snippet template({...args}: ComponentProps<typeof InputText>)}
	<InputText {...args}></InputText>
{/snippet}

<Story name="Basic" />
