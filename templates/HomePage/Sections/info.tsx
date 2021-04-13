import Link from "next/link";
import { Info as InfoIcon } from "react-feather";

const Info = ({ styles }) => {
  return (
    <Link href="/info">
      <a className={styles.section}>
        <div>
          <h3>Info</h3>
          <p>Learn more about the game and this website</p>
        </div>
        <InfoIcon />
      </a>
    </Link>
  );
};

export default Info;
