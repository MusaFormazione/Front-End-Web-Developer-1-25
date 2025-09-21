import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';

import App from './App';

describe('App Component', () => {
  it('renders senza errori', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
});
