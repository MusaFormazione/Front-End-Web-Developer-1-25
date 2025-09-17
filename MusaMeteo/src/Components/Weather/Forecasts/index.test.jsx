import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';

import Forecasts from '.';

describe('Forecasts Component', () => {
  it('renders correctly', () => {
    const { container } = render(<Forecasts
      weather={{daily : { maxTemperature: 20, minTemperature: 10, rainSum: 5 }}}
      positionState={{ positionVisible: false, setPositionVisible: () => {} }}
      setDebug={() => {}} />);
    expect(container).toBeInTheDocument();
  });

  it('renders correctly with empty weather data', () => {
    const { container } = render(<Forecasts
      weather={{}}
      setDebug={() => {}}
      positionState={{ positionVisible: false, setPositionVisible: () => {} }}
      />);
    expect(container).toBeInTheDocument();
  });

  it('renders with navbar', () => {
    const { container } = render(<Forecasts
      weather={{daily : { maxTemperature: 20, minTemperature: 10, rainSum: 5 }}}
      setDebug={() => {}}
      positionState={{ positionVisible: false, setPositionVisible: () => {} }}
      />);
    expect(container.querySelectorAll('#meteo-navbar').length).toBeGreaterThan(0);
  })
});
