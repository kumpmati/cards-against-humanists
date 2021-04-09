import { useRouter } from "next/router";
import { useEffect } from "react";
import { getMatchID, getPlayerInfo } from "../../api";
import { getMatch } from "../../api/lobby";

export const useJoinPrompt = () => {
  const { push } = useRouter();

  useEffect(() => {
    (async () => {
      const playerInfo = getPlayerInfo();
      const matchID = getMatchID();
      const onGoingMatch = await getMatch({ matchID });

      const playerIsInGame = onGoingMatch.players.find(
        (player) =>
          player.id == playerInfo.playerID &&
          player.name == playerInfo.playerName &&
          !player.isConnected
      );

      const wantsToJoin =
        playerIsInGame && confirm("You have an ongoing match, join?");

      if (wantsToJoin) push("/game");
    })();
  }, []);
};
