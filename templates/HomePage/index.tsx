import Head from "next/head";

import Create from "./Sections/create";
import Info from "./Sections/info";
import Join from "./Sections/join";

import styles from "./Home.module.css";

const HomePage = () => {
  // useJoinPrompt(); // ask user to join ongoing match if it exists

  return (
    <main>
      <Head>
        <title>Cahum</title>
      </Head>

      <div className="content">
        <h1 className="title">Cards Against Humanists</h1>
        <p id={styles.slogan}>v2.0 (Beta)</p>
        <div>
          <h2>Game</h2>
          <div id={styles.game}>
            <Join styles={styles} />
            <Create styles={styles} />
          </div>
        </div>
        <div>
          <h2>Other</h2>
          <div id={styles.other}>
            <Info styles={styles} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
