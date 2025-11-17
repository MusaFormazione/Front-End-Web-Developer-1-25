import type { MouseEventHandler } from "react";
import "./style.scss";

interface Props {
  label: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

function Button({ label, onClick, variant = "primary", disabled = false }: Props) {
  const classNames = `mds-button-${variant}`;
  return <button className={classNames} disabled={disabled} onClick={onClick}>
    {label}
  </button>;
}

export { Button };
