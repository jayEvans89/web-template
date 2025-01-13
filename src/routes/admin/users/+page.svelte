<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	console.log(data);
</script>

<h2>Users</h2>

<table>
	<thead>
		<tr>
			<th>Id</th>
			<th>Name</th>
			<th>Email</th>
			<th>Created</th>
			<th>Role</th>
		</tr>
	</thead>
	<tbody>
		{#each data.users as user}
			<tr>
				<td>{user.id}</td>
				<td>{user.name}</td>
				<td>{user.email}</td>
				<td>{user.created}</td>
				<td>{user.role}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style lang="scss">
	table {
		width: 100%;

		th {
			text-align: left;
			padding: 10px 0;
		}

		tr {
			border-bottom: 1px solid #ccc;
		}

		td {
			padding: 10px 0;
		}
	}
</style>