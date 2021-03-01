import { FC } from "react";
import { ArrowLeft } from "react-feather";
import Button from "../../elements/Button";

import styles from "./Join.module.css";
import JoinGameForm from "./JoinGameForm";

const JoinPage: FC = () => {
  const onSubmit = (d: any) => console.log(d);

  return (
    <main>
      <div className="container">
        <Button href="/" text="Back" Icon={ArrowLeft} />
        <div id={styles.header}>
          <h1 className="title">Join game</h1>
          <p>Join an existing game</p>
        </div>
        <JoinGameForm onSubmit={onSubmit} />
      </div>
    </main>
  );
};

export default JoinPage;
