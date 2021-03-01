import { ArrowLeft } from "react-feather";
import Button from "../../elements/Button";

import styles from "./Join.module.css";

const JoinPage = () => {
  return (
    <main>
      <div className="container">
        <Button href="/" text="Home" Icon={ArrowLeft} />
        <div id={styles.header}>
          <h1 className="title">Join game</h1>
          <p>Join an existing game</p>
        </div>
      </div>
    </main>
  );
};

export default JoinPage;
