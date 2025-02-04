import { cleanup, render, screen } from '@testing-library/svelte'
import OauthButton from './oauth-button.svelte';
import { describe, afterEach, expect, it } from 'vitest';


describe('oAuth button', () => {

  afterEach(() => {
    cleanup()
  })

  it('it renders with the correct text', () => {
    render(OauthButton, {
      props: {
        provider: 'Google'
      }
    })

    const text = screen.getByTestId('oAuthButtonText')
    expect(text.innerHTML).toBe('Continue with Google')
  })

  it('it renders with the correct endpoint', () => {
    render(OauthButton, {
      props: {
        provider: 'Google'
      }
    })

    const text = screen.getByTestId('oAuthButton')
    expect(text.getAttribute('href')).toBe('/login/google')
  })
})
