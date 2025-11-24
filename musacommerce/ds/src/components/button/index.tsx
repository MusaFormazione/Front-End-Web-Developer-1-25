import type { MouseEventHandler, ReactNode } from "react";
import "./style.scss";

interface Props {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  label: string;
  variant?: "primary" | "secondary" | "link";
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

function Button({ children, label, onClick, className = "" , variant = "primary", disabled = false }: Props) {
  const classNames = `${className} mds-button-${variant}`;
  return <button className={classNames} disabled={disabled} onClick={onClick}>
    { children ?? label}
  </button>;
}

export { Button };
