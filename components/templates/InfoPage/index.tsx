import Head from "next/head";
import { ArrowLeft } from "react-feather";
import Button from "../../Button";
import styles from "./Info.module.css";

const InfoPage = () => {
  return (
    <main>
      <Head>
        <title>Cards Against Humanists | Info</title>
      </Head>

      <nav>
        <Button href="/" text="Back" Icon={ArrowLeft} />
      </nav>

      <div className="content">
        <div id={styles.header}>
          <h1 className="title">Info</h1>
          <p>Information about the game and the website</p>
        </div>
        <div id={styles.content}>
          <section>
            <h2>Rules</h2>
            <p>
              This is a clone of the popular card game, Cards Against Humanity.
              If you know the rules for that game, you're all set. If not,{" "}
              <b>here are the basics:</b>
            </p>
            <p>
              The game is played in rounds, and each round one player is the{" "}
              <b>Czar</b>. At the beginning of the round, the Czar gets a
              question card, and reads it out loud to the other players. All the
              other players must now submit an answer card, one which they think
              will win. The cards will be face down until everyone has submitted
              their cards.
            </p>
            <p>
              After every player has submitted an answer (or the round timer has
              run out), the cards are shown. The Czar will then read the
              question out loud again, substituting the blank space(s) in the
              question card with the given answer cards. The Czar must then pick
              the winning card(s). The player who submitted the winning card(s)
              gets a point, and then a new round begins.
            </p>
          </section>
          <section>
            <h2>Website</h2>
            <p>
              This is a passion project by Matias Kumpulainen. Here's his{" "}
              <a href="https://mvkump.dev">Website</a>.
            </p>
            <p>
              This project is open source. If you want to see the code, here are
              the links:
            </p>
            <ul>
              <li>
                <a href="https://github.com/kumpmati/cards-against-humanists">
                  Front-end
                </a>
              </li>
              <li>
                <a href="https://github.com/kumpmati/cards-against-humanists-api">
                  Back-end
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
};

export default InfoPage;
