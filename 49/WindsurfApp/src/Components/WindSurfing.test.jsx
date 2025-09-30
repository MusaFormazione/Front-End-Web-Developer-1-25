import { render, cleanup, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';


import WindSurfing from './WindSurfing';

describe('WindSurfing Component', () => {
  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  it('renders senza errori', () => {
    render(<WindSurfing knots={10} meteo="sun" />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('mostra l\'immagine corretta per meteo soleggiato "sun"', () => {
    render(<WindSurfing knots={0} meteo="sun" />);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute('src', '/src/Components/assets/beach-sun.png');
  });

  it('mostra l\'immagine corretta per meteo nuvoloso "cloud"', () => {
    render(<WindSurfing knots={0} meteo="cloud" />);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute('src', '/src/Components/assets/beach-cloud.png');
  });

  it('mostra l\'immagine corretta per meteo piovoso "rain"', () => {
    render(<WindSurfing knots={0} meteo="rain" />);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute('src', '/src/Components/assets/beach-rain.png');
  });

  it('mostra l\'immagine corretta per nodi adatti al surf (16) e meteo soleggiato "sun"', () => {
    render(<WindSurfing knots={16} meteo="sun" />);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute('src', '/src/Components/assets/beach-sun-windsurf.png');
  });

  it('mostra l\'immagine corretta per nodi adatti al surf (16) e meteo nuvoloso "cloud"', () => {
    render(<WindSurfing knots={16} meteo="cloud" />);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute('src', '/src/Components/assets/beach-cloud-windsurf.png');
  });

  it('mostra l\'immagine corretta per nodi adatti al surf (16) e meteo piovoso "rain"', () => {
    render(<WindSurfing knots={16} meteo="rain" />);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute('src', '/src/Components/assets/beach-rain-windsurf.png');
  });
});
