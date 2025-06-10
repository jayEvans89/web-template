<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import LoadingSpinner from './loading-spinner.svelte';

	const { Story } = defineMeta({
		title: 'Loading/Loading spinner',
		component: LoadingSpinner,
		args: {
			loadingText: ''
		},
		render: template
	});
</script>

{#snippet template({ ...args })}
	<LoadingSpinner loadingText={args.loadingText !== '' ? args.loadingText : undefined}></LoadingSpinner>
{/snippet}

<Story name="Basic" />
