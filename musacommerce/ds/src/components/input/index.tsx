import "./style.scss"

interface Props {
  name: string;
  label: string;
  helpText?: string;
  dimension?: "small" | "medium" | "large";
  status: "error" | "success" | "warning" | "info" | "normal";
  type: "text" | "password" | "email" | "number";
}

function Input({ name, type, label, status = "normal", dimension = "medium", helpText }: Props) {
  return <div className={`mds-input ${status} ${dimension}`}>
    <label htmlFor={name}>{label}</label>
    <input type={type} name={name} id={name} />
    {helpText && <small>{helpText}</small>}
  </div>;
}

export { Input };
