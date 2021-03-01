import { ArrowLeft } from "react-feather";
import Button from "../../elements/Button";
import styles from "./Create.module.css";
import CreateGameForm from "./CreateGameForm";

const CreatePage = () => {
  const onSubmit = (d: any) => console.log(d);

  return (
    <main>
      <div className="container">
        <Button href="/" text="Back" Icon={ArrowLeft} />
        <div id={styles.header}>
          <h1 className="title">Create game</h1>
          <p>Create a fresh game and start inviting people</p>
        </div>
        <div id={styles.content}>
          <CreateGameForm onSubmit={onSubmit} />
        </div>
      </div>
    </main>
  );
};

export default CreatePage;
