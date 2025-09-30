import { render, cleanup, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';

import MeteoButtons from './MeteoButtons.jsx';

describe('MeteoButtons Component', () => {
  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  it('renders senza errori', () => {
    render(<MeteoButtons />);
    const bottoneSole= screen.getByText('Soleggiato');
    expect(bottoneSole).toBeInTheDocument();
  });

  it('evidenzia solo il bottone selezionato', () => {
    render(<MeteoButtons meteo="sun" setMeteo={() => {}} />);
    const elementoSelezionato = screen.getByText('Soleggiato');
    const elementoNonSelezionato = screen.getByText('Nuvoloso');
    const elementNonSelezionato2 = screen.getByText('Piovoso');
    expect(elementoSelezionato).toHaveAttribute('data-musa-meteo-sun', 'true');
    expect(elementoNonSelezionato).toHaveAttribute('data-musa-meteo-cloud', 'false');
    expect(elementNonSelezionato2).toHaveAttribute('data-musa-meteo-rain', 'false');

    expect(elementoSelezionato).toHaveStyle('box-shadow: 0 0 16px rgba(249, 177, 62, 0.85)');
  });
})
