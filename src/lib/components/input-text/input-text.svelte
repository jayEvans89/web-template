<script lang="ts">
	import InputLayout from '../internal/input-layout/input-layout.svelte';

	interface Props {
		label: string;
		value?: string;
		hintText?: string;
		name: string;
		invalid?: boolean;
	}

	let { value = $bindable(), ...props }: Props = $props();

	const inputId = Math.random().toString(36).substring(7);
</script>

<InputLayout {...props} id={inputId}>
	<input
		class="form-input__input {props.invalid ? 'form-input__input--invalid' : ''}"
		name={props.name}
		type="text"
		bind:value
		id={inputId}
		data-testid="textInput"
	/>
</InputLayout>

<style lang="scss">
	@use '$styles/core/mixins/form-input' as *;

	@include form-input-input;
</style>
