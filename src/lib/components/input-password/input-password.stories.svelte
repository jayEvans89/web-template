<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
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
		render: template,
		decorators: [withActions]
	});
</script>

{#snippet template({...args})}
	<InputPassword label={args.label} name={args.name} {...args}/>
{/snippet}

<Story name="Basic" />
