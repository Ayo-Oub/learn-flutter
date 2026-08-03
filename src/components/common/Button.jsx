import { Link } from "react-router-dom";
import "./Button.css";

/**
 * Bouton réutilisable.
 * variant: "primary" | "secondary" | "ghost"
 * size: "sm" | "md"
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon = null,
  onClick,
  type = "button",
  disabled = false,
  as: As = "button",
  href,
  ...rest
}) {
  const className = `btn btn--${variant} btn--${size}`;

  if (As === "a") {
    const isInternal = href?.startsWith("/");
    if (isInternal) {
      return (
        <Link to={href} className={className} {...rest}>
          {icon && <span className="btn__icon">{icon}</span>}
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer" {...rest}>
        {icon && <span className="btn__icon">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {icon && <span className="btn__icon">{icon}</span>}
      {children}
    </button>
  );
}
