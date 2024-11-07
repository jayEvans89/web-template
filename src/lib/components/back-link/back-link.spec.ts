import { cleanup, render, screen } from '@testing-library/svelte'
import BackLink from './back-link.svelte';
import { describe, afterEach, expect, it } from 'vitest';
import { createRawSnippet } from 'svelte';

function getTestSnippet() {
  return createRawSnippet(() => {
    return {
      render: () => `Back to Google`,
    };
  });
}

describe('Back link', () => {

  afterEach(() => {
    cleanup()
  })

  it('it renders with the correct text', () => {
    render(BackLink, {
      props: {
        href: 'www.google.com',
        children: getTestSnippet()
      }
    })

    const text = screen.getByTestId('backLinkText')
    expect(text.innerHTML).toBe('Back to Google<!---->')
  })

  it('it sets the correct url', async () => {
    render(BackLink, {
      props: {
        href: 'www.google.com',
        children: getTestSnippet()
      }
    })

    const backLink = screen.getByTestId('backLink')
    const hrefAttribute = backLink.getAttribute('href')
    expect(hrefAttribute).toBe('www.google.com')
  })
})
