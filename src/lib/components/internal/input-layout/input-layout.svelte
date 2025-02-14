<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		label: string;
		hintText?: string;
		id: string;
		input: Snippet;
		errorMessage: string;
		invalid?: boolean;
	}

	let { ...props }: Props = $props();

	// $inspect(props.errorMessage)
</script>

<div class="form-input">
	<label class="form-input__label" for={props.id} data-testid="layout-label"
		>{props.label}</label
	>
	{#if props.hintText}
		<p class="form-input__hint" data-testid="layout-hint-text">{props.hintText}</p>
	{/if}

	{#if props.invalid}
		<p class="form-input__error" data-testid="layout-error-message">
			{props.errorMessage}
		</p>
	{/if}

	{@render props.input()}
</div>

<style lang="scss">
	@use '$styles/core/mixins/form-input' as *;

	@include form-input;
	@include form-input-hint;
	@include form-input-error;
</style>
