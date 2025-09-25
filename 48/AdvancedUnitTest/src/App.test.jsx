import { describe, expect, it, afterEach, vi } from 'vitest';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

import App, { Action } from './App';

describe('App Component', () => {
  // Provare a togliere questo e vedere come si rompe il test
  afterEach(() => {
    cleanup()
  })

  it('deve renderizzare il componente', () => {
    render(<App />);
    expect(screen.getByText('Esempi Testing Avanzato')).toBeInTheDocument();
  });

  it('l\'unmount del componente chiama la funzione closeApp', () => {
    let count = 0;
    const closeApp = () => { count++ };
    const { unmount } = render(<App closeApp={closeApp} />);
    unmount();
    expect(count).toBe(1);
  });

  it('facendo clic sul bottone, il contatore aumenta', () => {
    render(<App />);
    const button = screen.getByTestId('counter-button');
    fireEvent.click(button);
    expect(screen.getByText('Contatore:1')).toBeInTheDocument();
  });

  it('se il test viene rieseguito facendo clic sul bottone il contatore aumenta correttamente grazie al cleanup ', () => {
    render(<App />);
    const button = screen.getByTestId('counter-button');
    fireEvent.click(button);
    expect(screen.getByText('Contatore:1')).toBeInTheDocument();
  });

  it('usando spyOn bisogna verificare che la funzione onChange sia chiamata correttamente', () => {
    const spyOnChange = vi.spyOn(Action, 'execute');
    render(<App />);

    fireEvent.click(screen.getByText('Azione'));
    expect(spyOnChange).toHaveBeenCalledWith('ciao');
  })
});
