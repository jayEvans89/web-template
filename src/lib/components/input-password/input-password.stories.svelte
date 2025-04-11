<script lang="ts" module>
	import { defineMeta, setTemplate, type Args } from '@storybook/addon-svelte-csf';
	import InputPassword from './input-password.svelte';
	import type { ComponentProps, Snippet } from 'svelte';
	import { withActions } from '@storybook/addon-actions/decorator';

	const { Story } = defineMeta({
		title: 'Form/Input password',
		component: InputPassword,
		args: {
      label: "Password",
      value: "",
      hintText: "Please enter your password",
			invalid: false,
			name: 'password',
			customError: '',
			required: true,
			showPasswordStrength: false,
			passwordStrength: 0
		},
		argTypes: {
			customError: {
				control: {
					type: 'text'
				}
			}
		},
		decorators: [withActions]
	});
</script>

<script lang="ts">
	setTemplate(template as any);
</script>

{#snippet template({...args}: ComponentProps<typeof InputPassword>)}
	<InputPassword {...args}></InputPassword>
{/snippet}

<Story name="Basic" />
