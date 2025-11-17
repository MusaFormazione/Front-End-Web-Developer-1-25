import { Button } from "../button";
import { Typography } from "../typography";

import "./style.scss"

type CardButton = {
  label: string;
  disabled?: boolean;
  onClick: () => void;
}

interface Props {
  button: CardButton
  description: string
  image?: string
  title: string
}
function Card({button, description, image, title}: Props) {
  return <div className="mds-card">
    {image && <img src={image} title={title} /> }
    <Typography text={title} type="heading" level={2} color="#0A2540" />
    <Typography text={description} type="body" color="#63748b" />
    <Button label={button.label} disabled={button.disabled} onClick={button.onClick} />
  </div>
}

export { Card }
