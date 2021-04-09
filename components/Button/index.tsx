import Link from "next/link";
import { FC } from "react";

import styles from "./Button.module.css";

interface Props {
  href?: string;
  text?: string;
  Icon?: FC;
  iconRight?: boolean;
  onClick?: () => any;
  disabled?: string;
}

const Button: FC<Props> = ({
  href,
  text,
  Icon,
  iconRight,
  onClick,
  disabled,
}) => {
  const buttonClassNames = `
    ${styles.button}
    ${iconRight ? styles.right : ""}
    ${!text && styles.noText}
    ${disabled ? styles["button--disabled"] : ""}
  `;

  const ButtonComponent = (
    <a
      title={disabled}
      aria-disabled={!!disabled}
      onClick={!!disabled ? null : onClick}
      className={buttonClassNames}>
      {Icon && <Icon />}
      {text && <p>{text}</p>}
    </a>
  );

  if (!href) return ButtonComponent;
  else return <Link href={href}>{ButtonComponent}</Link>;
};

export default Button;
