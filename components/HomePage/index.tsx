import Create from "./Create";
import Info from "./Info";
import Join from "./Join";

import styles from "./Home.module.css";

const HomePage = () => {
  return (
    <main>
      <div className="container">
        <h1 id={styles.title}>Cards Against Humanists</h1>
        <p id={styles.slogan}>v2.0</p>
        <div>
          <h2>Game</h2>
          <div id={styles.game}>
            <Create styles={styles} />
            <Join styles={styles} />
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
