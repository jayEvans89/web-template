
<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		/** The URL to navigate to when the link is clicked */
		href: string;

		/** The text content to show on the link */
		children: Snippet<[string]>;
	}
	let { href, children }: Props = $props();
</script>

<a {href} class="back-link" data-testid="backLink">
	<svg
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
    class="back-link__icon"
	>
		<path
			d="M19 12H5M5 12L12 19M5 12L12 5"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
	<span class="back-link__text" data-testid="backLinkText">
		{@render children('')}
	</span>
</a>

<style lang="scss">
	.back-link {
		text-decoration: none;
    cursor: pointer;
    margin-bottom: 8px;
    color: currentColor;

    @media (prefers-reduced-motion: no-preference) {
      &:hover {
        color: currentColor;

        .back-link__icon {
          transform: translateX(-0.125rem);
        }
      }
    }

    &__icon {
      width: 1rem;
      height: 1rem;
      vertical-align: middle;
      margin-top: -.2rem;
      transition: 250ms ease-in-out;
      will-change: transform;
    }

		&__text {
			text-decoration: underline;
		}
	}
</style>
