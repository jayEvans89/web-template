<script lang="ts">
	import '../styles/main.scss';

	let { children } = $props();
	console.log('layout page')
</script>

<!-- Header goes here -->

<main>
	<div class="container">
		{@render children()}
	</div>
</main>

<!-- Footer goes here -->

<style lang="scss">
	main {
		background: rgb(241, 242, 251);
		width: 100vw;
		height: 100vh;
	}

	.container {
		width: 90vw;
		max-width: 1100px;
		margin: 0 auto;
		padding-top: 24px;

		@media (min-width: 420px) {
			width: 80vw;
		}
	}
</style>
