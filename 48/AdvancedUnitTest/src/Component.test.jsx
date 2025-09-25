import { afterEach, describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

import { Title, Message, Input, Button } from './Components';

describe('Componente Title', () => {
  it('deve renderizzare il componente', () => {
    render(<Title>Titolo</Title>);
    expect(screen.getByText('Titolo')).toBeInTheDocument();
  });
});

describe('Componente Message', () => {
  it('deve renderizzare il componente', () => {
    render(<Message>Messaggio</Message>);
    expect(screen.getByText('Messaggio')).toBeInTheDocument();
  });
});

describe('Componente Input', () => {

  afterEach(() => {
    cleanup()
  })

  it('deve renderizzare il componente', () => {
    render(<Input placeholder="Inserisci testo" />);
    expect(screen.getByPlaceholderText('Inserisci testo')).toBeInTheDocument();
  });

  it('deve mostrare il valore passato come prop', () => {
    render(<Input value="Testo di prova" />);
    expect(screen.getByDisplayValue('Testo di prova')).toBeInTheDocument();
  });

  it('deve mostrare il se cambia il testo', () => {
    let testo = 'Testo iniziale'
    render(<Input value={testo} onChange={() => testo = 'Nuovo testo'} />); // Forziamo un side effet, attenione!
    expect(screen.getByDisplayValue(testo)).toBeInTheDocument();
    // Simula il cambiamento del testo e l'esecuzione della funzione onChange
    fireEvent.change(screen.getByDisplayValue('Testo iniziale'), { target: { value: 'Nuovo testo' } });
    expect(testo).toBe('Nuovo testo')
  });

  it('se cambia il testo deve chiamare la funzione onChange', () => {
    const onChange = vi.fn()
    render(<Input value={'testo'} onChange={onChange} />); // Forziamo un side effet, attenione!
    expect(screen.getByDisplayValue('testo')).toBeInTheDocument();
    // Simula il cambiamento del testo e l'esecuzione della funzione onChange
    fireEvent.change(screen.getByDisplayValue('testo'), { target: { value: 'Nuovo testo' } });
    expect(onChange).toHaveBeenCalled();
  });
});

describe('Componente Button', () => {
  it('deve renderizzare il componente', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });
});
