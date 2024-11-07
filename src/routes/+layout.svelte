<script lang="ts">
	import '../styles/main.scss';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';

	let { children } = $props();
</script>

<!-- Header goes here -->

<main>
  <div class="container">
    <ParaglideJS {i18n}>
      {@render children()}
    </ParaglideJS>
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
