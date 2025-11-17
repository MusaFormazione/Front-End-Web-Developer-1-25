import "./style.css"

export const TEXT_COLOR = "#212529"
export const ACCENT_COLOR = "#007BFF"
export const PRIMARY_COLOR = "#0A2540"
export const SECONDARY_TEXT_COLOR = "#63748b"

export type Color =  "#0A2540" | "#212529" | "#007BFF" | "#63748b"

export type Decoration = "none" | "underline" | "line-through"

interface PropsBaseTypography {
  color?: Color;
  text: string;
  decoration?: Decoration;
}

export type TypographyElement = "heading" | "body" | "subtitle" | "helper";
export type HeaderLevel = 1 | 2 | 3;


export interface PropsTypography extends PropsBaseTypography {
  level?: HeaderLevel;
  type: TypographyElement;
}
function Typography(props: PropsTypography) {
  const { type } = props;
  switch (type) {
    case "heading":
      return <Heading {...props} />;
    case "body":
      return <BodyText {...props} />;
    case "subtitle":
      return <Subtitle {...props} />;
    case "helper":
      return <HelperText {...props} />;
    default:
      return null;
  }
}

function Heading({ level, text, color = TEXT_COLOR, decoration = "none" }: PropsTypography) {
  switch (level) {
    case 1:
      return <h1 className="mds-heading-1" style={{ color, textDecoration: decoration }}>{text}</h1>;
    case 2:
      return <h2 className="mds-heading-2" style={{ color, textDecoration: decoration }}>{text}</h2>;
    case 3:
      return <h3 className="mds-heading-3" style={{ color, textDecoration: decoration }}>{text}</h3>;
    default:
      return <h1 className="mds-heading-1" style={{ color, textDecoration: decoration }}>{text}</h1>;
  }
}

function BodyText({ text, color, decoration }: PropsBaseTypography) {
  return <p className="mds-body-text" style={{ color, textDecoration: decoration }}>{text}</p>;
}

function Subtitle({ text, color, decoration }: PropsBaseTypography) {
  return <span className="mds-subtitle" style={{ color, textDecoration: decoration }}>{text}</span>;
}

function HelperText({ text, color, decoration }: PropsBaseTypography) {
  return <span className="mds-helper-text" style={{ color, textDecoration: decoration }}>{text}</span>;
}

// Eventualmente si puo esportare ogni singolo componente per i test unitari
// const UnitTests = {
//   Typography,
//   HelperText,
//   Subtitle,
//   BodyText,
//   Heading
// };

// export { Typography, UnitTests };

export { Typography };
