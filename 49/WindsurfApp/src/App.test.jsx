import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';

import App from './App';

describe('App Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders senza errori', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });

  it('componenti principali sono presenti', () => {
    const { getByText, getByRole } = render(<App />);
    expect(getByText('Windsurf App')).toBeInTheDocument();
    expect(getByRole('img')).toBeInTheDocument(); // WindSurfing
    expect(getByText('Soleggiato')).toBeInTheDocument(); // MeteoButtons
    expect(getByRole('slider')).toBeInTheDocument(); // Knots
  });
});
