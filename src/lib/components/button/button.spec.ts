import { cleanup, render, screen } from '@testing-library/svelte';
import { createRawSnippet } from 'svelte';
import { afterEach, describe, expect, it } from 'vitest';
import Button from './button.svelte';

function getButtonText(buttonText: string) {
  return createRawSnippet(() => {
    return {
      render: () => buttonText
    };
  });
}

describe('Button', () => {
  afterEach(() => {
    cleanup()
  })

  it(': renders with the correct text', () => {
    render(Button, {
      props: {
        children: getButtonText('Click me')
      }
    })

    const button = screen.getByTestId('button')
    expect(button.innerHTML).toBe('<!---->Click me<!---->')
  })

  it(': shows the loading state', () => {
    render(Button, {
      props: {
        children: getButtonText('Click me'),
        loading: true
      }
    })

    const loadingContainer = screen.getByTestId('loading-container')
    expect(loadingContainer).not.toBeNull()
  })
})
