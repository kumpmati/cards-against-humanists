import Link from "next/link";
import { FC } from "react";

import styles from "./Button.module.css";

interface Props {
  href?: string;
  text?: string;
  Icon?: FC;
  iconRight?: boolean;
  onClick?: () => any;
}

const Button: FC<Props> = ({ href, text, Icon, iconRight, onClick }) => {
  const ButtonComponent = (
    <a
      onClick={onClick}
      className={`${styles.button} ${iconRight ? styles.right : ""} ${
        !text && styles.noText
      }`}>
      {Icon && <Icon />}
      {text && <p>{text}</p>}
    </a>
  );

  if (!href) return ButtonComponent;
  else return <Link href={href}>{ButtonComponent}</Link>;
};

export default Button;
