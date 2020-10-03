import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div id="Home">
      <h1>Cards Against Humanists</h1>
      <Link className="link" to="/new">
        Uusi peli
      </Link>
      <Link className="link" to="/join">
        Liity peliin
      </Link>
    </div>
  );
}

export default Home;
