import Head from "next/head";
import { ArrowLeft } from "react-feather";
import Button from "../../components/Button";
import styles from "./Info.module.css";

const InfoPage = () => {
  return (
    <main>
      <Head>
        <title>Cahum | Info</title>
      </Head>

      <nav>
        <Button href="/" text="Home" Icon={ArrowLeft} />
      </nav>

      <div className="content">
        <div id={styles.header}>
          <h1 className="title">Info</h1>
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
              question card, and reads it to the other players. All the other
              players must then submit one or more cards which they think are
              funny. The cards will be face down until everyone has submitted
              their cards.
            </p>
            <p>
              After every player has submitted an answer, the cards are shown.
              The Czar will then read the question out loud again, substituting
              the blank space(s) in the question card with the given answer
              cards. The Czar must then pick the winning card(s). The player who
              submitted the winning card(s) gets a point and is chosen as the
              next Czar. A new round then begins.
            </p>
          </section>

          <section id="legal">
            <h2>Legal stuff</h2>

            <p>
              Cards Against Humanists is a copy of{" "}
              <a target="noreferrer" href="https://cardsagainsthumanity.com">
                Cards Against Humanity
              </a>
              . It is free to use. The website and its source code are
              distributed under the{" "}
              <a
                target="noreferrer"
                href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
                Creative Commons BY-NC-SA 4.0 license
              </a>
              . All credit for the fun game and for the cards in the 'Cards
              Against Humanity (English)' pack goes to the people at Cards
              Against Humanity.
            </p>
          </section>

          <section>
            <h2>Website</h2>
            <p>
              This is an open source project by Matias Kumpulainen. Here's his{" "}
              <a href="https://mvkump.dev">Website</a>.
            </p>
            <p>
              You are free to look at and copy the source code, here are the
              GitHub links:
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
          <section>
            <h3>Frameworks and libraries</h3>
            <ul>
              <li>
                <a
                  href="https://nextjs.org/"
                  target="noreferrer"
                  referrerPolicy="no-referrer">
                  Next.js
                </a>
              </li>
              <li>
                <a
                  href="https://boardgame.io"
                  target="noreferrer"
                  referrerPolicy="no-referrer">
                  Boardgame.io
                </a>
              </li>
              <li>
                <a
                  href="https://firebase.google.com/"
                  target="noreferrer"
                  referrerPolicy="no-referrer">
                  Firebase
                </a>
              </li>
              <li>
                <a
                  href="https://feathericons.com/"
                  target="noreferrer"
                  referrerPolicy="no-referrer">
                  Feather icons
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
