<script lang="ts" module>
  import { defineMeta, type Args } from '@storybook/addon-svelte-csf';
  import OauthButton from "./oauth-button.svelte";
	import type { Props } from './oauth-button-types';

  const { Story } = defineMeta<{ provider: Props}>({
    title: 'Actions/oAuth Button',
    component: OauthButton,
    decorators: [
      /* ... */
    ],
    args: {
      provider: 'Google'
    },
    argTypes: {
      provider: {
        description: 'The provider to authenticate with',
        options: ['Google'],
        control: { type: 'select' }
      }
    }
  });
</script>

<Story name="Basic">
  {#snippet children(args: Args<typeof Story>)}
    <OauthButton provider={args.provider} />
  {/snippet}
</Story>
