import Link from "next/link";
import { Plus } from "react-feather";

const Create = ({ styles }) => {
  return (
    <Link href="/create">
      <a className={styles.section}>
        <div>
          <h3>Create</h3>
          <p>Create a new game and start inviting people</p>
        </div>
        <Plus />
      </a>
    </Link>
  );
};

export default Create;
