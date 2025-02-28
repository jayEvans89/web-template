<script lang="ts" module>
	import { defineMeta, setTemplate, type Args } from '@storybook/addon-svelte-csf';
	import LoadingSpinner from './loading-spinner.svelte';

	const { Story } = defineMeta({
		title: 'Loading/Loading spinner',
		component: LoadingSpinner,
		args: {
			loadingText: undefined
		}
	});
</script>

<script lang="ts">
	setTemplate(template);
</script>

{#snippet template(args: Args<typeof Story>)}
	<LoadingSpinner {...args}></LoadingSpinner>
{/snippet}

<Story name="Basic" />
