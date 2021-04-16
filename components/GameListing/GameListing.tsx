import { FC } from "react";
import { ArrowRight } from "react-feather";
import { GameListing as GameListingType } from "../../game/types";
import Button from "../Button";

import styles from "./styles.module.css";

const GameListing: FC<PropsI> = ({ game, cardPacks }) => {
  const connectedPlayers = game.players.filter((p) => !!p.name).length;
  const maxPlayers = game.players.length;

  const activeCardPacks = cardPacks
    .filter((pack) => game.setupData.packs.includes(pack.code))
    .map((pack) => pack.name);

  return (
    <div className={styles.game}>
      <p className={styles.game__players}>
        {connectedPlayers} / {maxPlayers} Players
      </p>

      <p className={styles.game__packs}>{activeCardPacks.join(", ")}</p>

      <div className={styles.game__join}>
        <Button
          text="Join"
          href={`/join?code=${game.matchID}`}
          Icon={ArrowRight}
          iconRight
        />
      </div>
    </div>
  );
};

export default GameListing;

interface PropsI {
  game: GameListingType;
  cardPacks: { name: string; code: string; editable: boolean }[];
}
