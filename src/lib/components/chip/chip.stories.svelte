<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Chip from './chip.svelte';
	import type { Snippet } from 'svelte';
	import { withActions } from 'storybook/actions/decorator';
	import ChipGroup from './chip-group/chip-group.svelte';

	const { Story } = defineMeta({
		title: 'Actions/Chip',
		component: Chip,
		render: template,
		decorators: [withActions]
	});
</script>

{#snippet template({...args})}
<ChipGroup>
	<Chip>
		Chip 1
	</Chip>
	<Chip>
		Chip 2
	</Chip>
	<Chip>
		Chip 3
	</Chip>
</ChipGroup>
{/snippet}

<Story name="Basic" />

