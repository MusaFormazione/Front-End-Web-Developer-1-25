import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';

import Knots from './Knots.jsx';

describe('Knots Component', () => {
  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  it('renders senza errori', () => {
    render(<Knots knots={0} setKnots={() => {}} />);
    expect(screen.getByRole('slider')).toBeInTheDocument();
  });

  it('mostra il valore corretto dei nodi', () => {
    const { getByLabelText } = render(<Knots knots={15} setKnots={() => {}} />);
    expect(getByLabelText('Nodi 15')).toBeInTheDocument();
  });

  it('chiama setKnots al cambiamento del valore', () => {
    const mockSetKnots = vi.fn();
    const { getByRole } = render(<Knots knots={10} setKnots={mockSetKnots} />);
    const slider = getByRole('slider');

    fireEvent.change(slider, { target: { value: 20 } });
    expect(mockSetKnots).toHaveBeenCalledWith('20');
  });
});
