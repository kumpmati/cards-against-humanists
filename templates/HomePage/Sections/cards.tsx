import Link from "next/link";
import { List } from "react-feather";

const Cards = ({ styles }) => {
  return (
    <Link href="/cards">
      <a className={styles.section}>
        <div>
          <h3>Cards</h3>
          <p>Browse cards and submit new ones</p>
        </div>
        <List />
      </a>
    </Link>
  );
};

export default Cards;
