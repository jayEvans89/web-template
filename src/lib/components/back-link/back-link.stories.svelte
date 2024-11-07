<script lang="ts" module>
  import { defineMeta, type Args } from '@storybook/addon-svelte-csf';
  import BackLink from "./back-link.svelte";

  const { Story } = defineMeta<{href: string, children: string}>({
    title: 'Actions/Back link',
    component: BackLink,
    decorators: [
      /* ... */
    ],
    args: {
      href: '#test',
      children: 'Back to home'
    },
    argTypes: {
      href: {
        description: 'The URL to navigate to when the link is clicked',
      },
      children: {
        description: 'The text content to show on the link',
      }
    }
  });
</script>

<Story name="Basic">
  {#snippet children(args: Args<typeof Story>)}
   <BackLink href={args.href}>
    {args.children}
  </BackLink>
  {/snippet}
</Story>
