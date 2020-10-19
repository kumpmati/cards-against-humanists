import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BrowseCards.css";

/*
 * API
 */
import WSApiContext from "../api/websocket";
import types from "../api/types/message";

function BrowseCards() {
  const ws = useContext(WSApiContext);

  const [activeCards, setActiveCards] = useState({
    answers: [],
    questions: [],
  });

  useEffect(() => {
    (async () => {
      // request list of all active cards from server
      const r = await ws.requestAsync({
        type: types.GetData,
        data: { type: "active-cards" },
      });
      if (r.answers && r.questions) setActiveCards(r);
    })();
  }, []);

  return (
    <div className="container wide">
      <Link className="back-link" to="/">
        Takaisin
      </Link>
      <h1>Selaa pelattavia kortteja</h1>
      <div id="active-cards">
        <section id="questions">
          <h2>Kysymyskortit</h2>
          <ul className="card-list">
            {activeCards.questions.map(c => (
              <li>{c.text || " "}</li>
            ))}
          </ul>
        </section>
        <section id="answers">
          <h2>Vastauskortit</h2>
          <ul className="card-list">
            {activeCards.answers.map(c => (
              <li>{c.text}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default BrowseCards;
