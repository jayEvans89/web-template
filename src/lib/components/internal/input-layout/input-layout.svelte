<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		label: string;
		hintText?: string;
		id: string;
		children: Snippet<[string]>;
	}

	let { ...props }: Props = $props();
</script>

<div class="form-input">
	<label class="form-input__label" for={props.id} data-testid="layout-label">{props.label}</label>
	{#if props.hintText}
		<p class="form-input__hint" data-testid="layout-hint-text">{props.hintText}</p>
	{/if}
	{@render props.children('')}
</div>

<style lang="scss">
	@use '$styles/core/mixins/form-input' as *;

	@include form-input;
	@include form-input-hint;
</style>
