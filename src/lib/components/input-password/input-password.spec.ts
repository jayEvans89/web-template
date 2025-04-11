import { cleanup, render, screen } from '@testing-library/svelte';
import { afterEach, describe, expect, it } from 'vitest';
import InputText from './input-password.svelte';

describe('Input text', () => {
  afterEach(() => {
    cleanup()
  })

  it(': renders with the correct label text', () => {
    render(InputText, {
      props: {
        label: 'First name',
        name: 'first_name',
      }
    })

    const label = screen.getByTestId('layout-label')
    expect(label.innerHTML).toBe('First name')
  })

  it(': renders with the correct name attribute', () => {
    render(InputText, {
      props: {
        label: 'First name',
        name: 'first_name',
      }
    })

    const input = screen.getByTestId('textInput')
    expect(input.getAttribute('name')).toBe('first_name')
  })

  it(': renders with the correct hint text', () => {
    render(InputText, {
      props: {
        label: 'First name',
        name: 'first_name',
        hintText: 'Enter your first name',
      }
    })

    const hintText = screen.getByTestId('layout-hint-text')
    expect(hintText.innerHTML).toBe('Enter your first name')
  })

  it(': shows the error state', () => {
    render(InputText, {
      props: {
        label: 'First name',
        name: 'first_name',
        hintText: 'Enter your first name',
        invalid: true
      }
    })

    const input = screen.getByTestId('textInput')
    expect(input.classList.contains('form-input__input--invalid')).toBeTruthy()
  })

  it(': renders with the default error message', () => {
    render(InputText, {
      props: {
        label: 'First name',
        name: 'first_name',
        hintText: 'Enter your first name',
        invalid: true
      }
    })

    const errorMessage = screen.getByTestId('layout-error-message')
    expect(errorMessage.innerHTML).toBe('This field is required')
  })

  it(': renders with a custom error message', () => {
    render(InputText, {
      props: {
        label: 'First name',
        name: 'first_name',
        hintText: 'Enter your first name',
        invalid: true,
        customError: 'Custom error message'
      }
    })

    const errorMessage = screen.getByTestId('layout-error-message')
    expect(errorMessage.innerHTML).toBe('Custom error message')
  })

  it(': renders with the password strength meter', () => {
    render(InputText, {
      props: {
        label: 'First name',
        name: 'first_name',
        hintText: 'Enter your first name',
        showPasswordStrength: true
      }
    })

    const passwordStrength = screen.getByTestId('password-strength')
    expect(passwordStrength).toBeTruthy()
  })

  it(': renders with the correct password strength text', async () => {
    let component = render(InputText, {
      props: {
        label: 'First name',
        name: 'first_name',
        hintText: 'Enter your first name',
        showPasswordStrength: true
      }
    })

    let passwordStrengthText = screen.getByTestId('password-strength-text')
    expect(passwordStrengthText.innerHTML).toBe('Too weak')

    component.unmount();
    component = render(InputText, {
      props: {
        label: 'First name',
        name: 'first_name',
        hintText: 'Enter your first name',
        showPasswordStrength: true,
        passwordStrength: 2
      }
    });

    passwordStrengthText = screen.getByTestId('password-strength-text')
    expect(passwordStrengthText.innerHTML).toBe('Could be stronger')

    component.unmount();
    component = render(InputText, {
      props: {
        label: 'First name',
        name: 'first_name',
        hintText: 'Enter your first name',
        showPasswordStrength: true,
        passwordStrength: 3
      }
    });

    passwordStrengthText = screen.getByTestId('password-strength-text')
    expect(passwordStrengthText.innerHTML).toBe('Strong password')
  })
})
