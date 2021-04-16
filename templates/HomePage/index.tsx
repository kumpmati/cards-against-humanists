import Head from "next/head";

import Create from "./Sections/create";
import Info from "./Sections/info";
import Join from "./Sections/join";

import styles from "./Home.module.css";
import Cards from "./Sections/cards";

const HomePage = () => {
  // useJoinPrompt(); // ask user to join ongoing match if it exists

  return (
    <main>
      <Head>
        <title>Cahum</title>
      </Head>

      <div className="content">
        <h1 className="title">Cards Against Humanists</h1>
        <p id={styles.slogan}>(Beta)</p>

        <section>
          <h2>Game</h2>
          <div id={styles.game}>
            <Join styles={styles} />
            <Create styles={styles} />
          </div>
        </section>

        <br></br>
        <br></br>

        <section>
          <h2>Other</h2>
          <div id={styles.other}>
            <Info styles={styles} />
            <Cards styles={styles} />
          </div>
        </section>

        <br></br>
        <br></br>

        <section id={styles.legal}>
          <p>
            License and attributions can be found in the{" "}
            <a href="/info#legal">info</a> section.
          </p>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
