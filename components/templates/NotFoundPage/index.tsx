import Head from "next/head";
import { ArrowLeft } from "react-feather";
import Button from "../../Button";
import styles from "./NotFound.module.css";

const NotFoundPage = () => {
  return (
    <main>
      <Head>
        <title>Cards Against Humanists | 404</title>
      </Head>

      <nav>
        <Button href="/" text="Home" Icon={ArrowLeft} />
      </nav>

      <div className="container">
        <div id={styles.content}>
          <h1>404</h1>
          <p>Page not found</p>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
