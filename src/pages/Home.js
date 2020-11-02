import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import "./Home.css";

function Home() {
  return (
    <div>
      <div id="Home">
        <h1 id="site-title">Cards Against Humanists</h1>
        <div id="splash">
          <p>
            <b>v1.0</b>
          </p>
        </div>
        <section>
          <h2>Huone</h2>
          <div className="section">
            <Link className="link" to="/new">
              <Button padded text="Luo" />
            </Link>
            <Link className="link" to="/join">
              <Button padded text="Liity" />
            </Link>
          </div>
        </section>
        <section>
          <h2>Kortit</h2>
          <div className="section">
            <Link className="link" to="/submit">
              <Button text="Luo kortteja" />
            </Link>
            <Link className="link" to="/browse">
              <Button text="Selaa kortteja" />
            </Link>
            <Link className="link" to="/format">
              <Button inverse text="Muotoiluohjeet" />
            </Link>
          </div>
        </section>
      </div>
      <div id="author">
        <a
          className="link"
          href="https://github.com/kumpmati/cards-against-humanists"
          target="_blank">
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Home;
