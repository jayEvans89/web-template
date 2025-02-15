<script lang="ts">
	import InputLayout from '../internal/input-layout/input-layout.svelte';

	interface Props {
		label: string;
		value?: string;
		hintText?: string;
		name: string;
		invalid?: boolean;
		customError?: string;
		required?: boolean;
	}

	let { value = $bindable(), invalid = $bindable(false), customError = $bindable(), ...props }: Props = $props();

	const inputId = Math.random().toString(36).substring(7);

	let isDirty = $state(false)

	function onKeydown(event: KeyboardEvent) {
		const allowedKeys = ['Escape', 'Tab', 'ArrowLeft', 'ArrowRight', 'Shift', 'Control', 'Alt', 'Meta'];
		const key = event.key;

		if (!allowedKeys.includes(key) && props.required) {
			isDirty = true;
		}
	}

	function onBlur() {
		if (value !== '') {
			isDirty = true;
		}

		if (isDirty) {
			validation();
		}
	}

	function validation() {
		if (props.required && !value) {
			invalid = true
			return false;
		}

		invalid = false;
		return true;
	}

	function onInput() {
		if (isDirty) {
			validation();
		}
	}
</script>

<InputLayout {...props } invalid={invalid} id={inputId} errorMessage={customError ? customError : 'This field is required'}>
	{#snippet input()}
		<input
			class="form-input__input {invalid ? 'form-input__input--invalid' : ''}"
			name={props.name}
			type="text"
			bind:value
			id={inputId}
			aria-describedby={`${inputId}-hint-text ${inputId}-error-message`}
			required={props.required}
			data-testid="textInput"
			onkeydown={onKeydown}
			onblur={onBlur}
			oninput={onInput}
		/>
	{/snippet}
</InputLayout>

<style lang="scss">
	@use '$styles/core/mixins/form-input' as *;

	@include form-input-input;
</style>
