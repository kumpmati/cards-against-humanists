import Link from "next/link";
import { FC } from "react";

import styles from "./Button.module.css";

interface Props {
  href: string;
  text: string;
  Icon: FC;
  iconRight?: boolean;
}

const Button: FC<Props> = ({ href, text, Icon, iconRight }) => {
  return (
    <Link href={href}>
      <a className={`${styles.button} ${iconRight ? styles.right : ""}`}>
        <Icon />
        <p>{text}</p>
      </a>
    </Link>
  );
};

export default Button;
