import Head from "next/head";
import { ArrowLeft } from "react-feather";
import Button from "../../elements/Button";
import CreateGameForm from "./CreateGameForm";
import styles from "./Create.module.css";
import axios from "axios";
import { isAuthToken, setToken } from "../../../api/auth";
import { useRouter } from "next/router";
import { API_CREATE_URL } from "../../../api/constants";

const CreatePage = () => {
  const { push } = useRouter();

  const onSubmit = async (data: any) => {
    const response = await axios.post(API_CREATE_URL, data);

    if (isAuthToken(response.data)) {
      setToken(response.data);
      push("/lobby"); // navigate to lobby
      return;
    }

    console.log(response.data);
  };

  return (
    <main>
      <Head>
        <title>Cards Against Humanists | Create game</title>
      </Head>

      <nav>
        <Button href="/" text="Back" Icon={ArrowLeft} />
      </nav>

      <div className="container">
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
