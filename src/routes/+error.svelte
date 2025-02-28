<script lang="ts">
  import { page } from '$app/state';
</script>

<h1>{page.status}: {#if page.error}{page.error.message}{/if}</h1>