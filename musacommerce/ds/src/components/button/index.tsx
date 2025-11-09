import "./style.scss";

interface Props {
  label: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

function Button({ label, variant = "primary", disabled = false }: Props) {
  const classNames = `mds-button-${variant}`;
  return <button className={classNames} disabled={disabled}>
    {label}
  </button>;
}

export { Button };
