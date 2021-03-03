import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { ArrowLeft } from "react-feather";
import { getToken, isAuthToken, setToken } from "../../../api/auth";
import { API_JOIN_URL } from "../../../api/constants";
import Button from "../../elements/Button";

import styles from "./Join.module.css";
import JoinGameForm from "./JoinGameForm";

const JoinPage: FC = () => {
  const { push } = useRouter();

  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: any) => {
    const body = { ...data, token: getToken() };
    const response = await axios.post(API_JOIN_URL, body);

    setError(response.data.error);

    if (response.data.action === "password_needed") {
      setShowPassword(true);
      return;
    }

    if (isAuthToken(response.data)) {
      setToken(response.data);
      push("/lobby");
    }
  };

  return (
    <main>
      <Head>
        <title>Cards Against Humanists | Join game</title>
      </Head>

      <nav>
        <Button href="/" text="Back" Icon={ArrowLeft} />
      </nav>

      <div className="container">
        <div id={styles.header}>
          <h1 className="title">Join game</h1>
          <p>Join an existing game</p>
        </div>
        <JoinGameForm
          close={() => setShowPassword(false)}
          showPassword={showPassword}
          onSubmit={onSubmit}
        />
        {error && <p>{error}</p>}
      </div>
    </main>
  );
};

export default JoinPage;
