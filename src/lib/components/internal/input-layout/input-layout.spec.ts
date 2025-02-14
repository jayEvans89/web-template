import { cleanup, render, screen } from '@testing-library/svelte';
import { createRawSnippet } from 'svelte';
import { afterEach, describe, expect, it } from 'vitest';
import InputLayout from './input-layout.svelte';

function getSlot() {
  return createRawSnippet(() => {
    return {
      render: () => `<input/>`
    };
  });
}

describe('Input layout', () => {
  afterEach(() => {
    cleanup()
  })

  it(': renders with the correct label', () => {
    render(InputLayout, {
      props: {
        label: "First name",
        id: "inputId",
        input: getSlot()
      }
    })

    const label = screen.getByTestId('layout-label')
    expect(label.innerHTML).toBe('First name')
  })

  it(': Does not show the hint text', () => {
    render(InputLayout, {
      props: {
        label: "First name",
        id: "inputId",
        input: getSlot(),
      }
    })

    const hintText = screen.queryByTestId('layout-hint-text')
    expect(hintText).toBeNull()
  })

  it(': Shows the hint text with the correct text', () => {
    render(InputLayout, {
      props: {
        label: "First name",
        id: "inputId",
        input: getSlot(),
        hintText: "Enter your first name"
      }
    })

    const hintText = screen.getByTestId('layout-hint-text')
    expect(hintText).not.toBeNull()
    expect(hintText.innerHTML).toBe('Enter your first name')
  })
})
