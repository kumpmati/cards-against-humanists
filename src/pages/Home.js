import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Cards Against Humanists</h1>
      <Link to="/new">New Game</Link>
      <Link to="/join">Join Game</Link>
    </div>
  );
}

export default Home;
