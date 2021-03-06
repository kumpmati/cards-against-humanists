import React from "react";
import Play from "./Phases/Play/Play";
import WaitForPlayers from "./Phases/WaitForPlayers/WaitForPlayers";

const Board = (props: any) => {
  const phase = props.ctx?.phase;

  switch (phase) {
    default:
    case "waitForPlayers":
      return <WaitForPlayers {...props} />;

    case "play":
      return <Play {...props} />;

    case "choose":
      return <h1>choose</h1>;
  }
};

export default Board;
