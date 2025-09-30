import { render, cleanup, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';

import Notice from './Notice';

describe('Notice Component', () => {
  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  it('renders senza errori', () => {
    render(<Notice message="Test Message" type="success" />);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('mostra il messaggio corretto', () => {
    const testMessage = "Condizioni perfette per il windsurf";
    render(<Notice message={testMessage} type="success" />);
    expect(screen.getByRole('alert')).toHaveTextContent(testMessage);
  });

  it('applica la classe di tipo corretta', () => {
    render(<Notice message="Test Message" type="success" />);
    expect(screen.getByRole('alert')).toHaveClass('alert-success');
  });

  it('non rende nulla se il messaggio è vuoto', () => {
    const { container } = render(<Notice message="" type="success" />);
    expect(container).toBeEmptyDOMElement();
  });
});
