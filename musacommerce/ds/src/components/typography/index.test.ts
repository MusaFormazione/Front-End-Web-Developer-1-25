import { describe, expect, it } from 'vitest';
import { render, screen, } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';


import { Typography, type HeaderLevel, type TypographyElement, type Color, type Decoration, type PropsTypography} from '.';

interface PropsTest {
  level?: number;
  type: string;
  text: string;
  color: string;
  decoration: string;
}

function generateProps(props: PropsTest): PropsTypography {
  return {
    level: props.level as HeaderLevel,
    type: props.type as TypographyElement,
    text: props.text,
    color: props.color as Color,
    decoration: props.decoration as Decoration
  };
}

describe('Typography Component', () => {
  it('should render Heading level 1 correctly', () => {

    const props = generateProps({ level: 1, type: "heading", text: 'Heading 1', color: "#0A2540", decoration: "none" });
    const heading = Typography(props);
    expect(heading).toBeDefined();
  });

  it('should render Body Text correctly', () => {
    const props = generateProps({ type: "body", text: 'Esempio di Body Text', color: "#212529", decoration: "none" });
    const bodyText = Typography(props);
    render(bodyText);
    const renderedText = screen.getByText('Esempio di Body Text');
    expect(renderedText).toBeDefined();
  });

});
