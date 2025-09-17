import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';

import WeatherCard from './WeatherCard';

describe('WeatherCard Component', () => {

  it("it renders with correct css class", () => {
    const { container } = render(<WeatherCard daily={{ maxTemperature: 20, minTemperature: 10, rainSum: 5 }} setDebug={() => {}} />);
    expect(container.firstChild).toHaveClass('card shadow m-1');
  })
});
