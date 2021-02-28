import { ArrowRight } from "react-feather";
import Link from "next/link";

const Join = ({ styles }) => {
  return (
    <Link href="/join">
      <a className={styles.section}>
        <div>
          <h3>Join</h3>
          <p>Join a game someone else has made</p>
        </div>
        <ArrowRight />
      </a>
    </Link>
  );
};

export default Join;
