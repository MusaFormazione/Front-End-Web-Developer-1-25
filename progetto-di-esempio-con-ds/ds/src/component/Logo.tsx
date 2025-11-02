type Color = "lightblue" | "lightgreen" | "lightcoral" | "lightyellow";
type TextColor = "darkblue" | "darkgreen" | "darkred" | "black";
interface Props {
  color?: Color;
  label?: string;
  textColor?: TextColor;
}

function Logo({color, label, textColor}: Props) {
  return <div style={{backgroundColor: color, color: textColor}}>{label}</div>;
}

export default Logo;
