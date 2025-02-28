import { cleanup, render, screen } from '@testing-library/svelte';
import { afterEach, describe, expect, it } from 'vitest';
import LoadingSpinner from './loading-spinner.svelte';

describe('Button', () => {
  afterEach(() => {
    cleanup()
  })

  it(': renders with the default text', () => {
    render(LoadingSpinner)

    const text = screen.getByTestId('loading-spinner-text')
    expect(text.innerHTML).toBe('Loading')
  })

  it(': renders with the custom loading text', () => {
    render(LoadingSpinner, {
      props: {
        loadingText: 'Custom loading text'
      }
    })

    const text = screen.getByTestId('loading-spinner-text')
    expect(text.innerHTML).toBe('Custom loading text')
  })
})
