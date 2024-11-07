
<script lang="ts">
  import { onMount } from 'svelte';
export let data
  onMount(() => {
    console.log('Dashboard page');
  });
</script>

<h1>Dashboard</h1>
<p>Logged in as {data.user.name}</p>
