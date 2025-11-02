import "./style.css"

type PrimaryColor = "#0A2540"
type NeutralColor = "#212529"
type AccentColor = "#007BFF"

type Color =  PrimaryColor | NeutralColor | AccentColor

interface PropsHeading {
  level?: 1 | 2 | 3;
  text: string;
  color: Color;
}

function Heading({ level, text, color }: PropsHeading) {
  switch (level) {
    case 1:
      return <h1 className="mds-heading-1" style={{ color }}>{text}</h1>;
    case 2:
      return <h2 className="mds-heading-2" style={{ color }}>{text}</h2>;
    case 3:
      return <h3 className="mds-heading-3" style={{ color }}>{text}</h3>;
    default:
      return <h1 className="mds-heading-1" style={{ color }}>{text}</h1>;
  }
}

interface PropsBodyText {
  text: string;
  color: Color;
}
function BodyText({ text, color }: PropsBodyText) {
  return <p className="mds-body-text" style={{ color }}>{text}</p>;
}

interface PropsSubtitle {
  text: string;
}

function Subtitle({ text }: PropsSubtitle) {
  return <span className="mds-subtitle">{text}</span>;
}

interface PropsHelperText {
  text: string;
}
function HelperText({ text }: PropsHelperText) {
  return <span className="mds-helper-text">{text}</span>;
}

export { Heading, BodyText, Subtitle, HelperText };
