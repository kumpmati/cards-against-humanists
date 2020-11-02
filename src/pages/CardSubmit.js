import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./CardSubmit.css";

import WSApiContext from "../api/websocket";

import Card from "../components/Card";
import Button from "../components/Button";
import types from "../api/types/message";

function CardSubmit() {
  // websocket api
  const ws = useContext(WSApiContext);

  const maxCards = 4;

  const [cards, setCards] = useState([]);

  // input fields
  const [cardText, setCardText] = useState("");
  const [cardPack, setCardPack] = useState("");
  const [isQuestion, setIsQuestion] = useState(false);
  const [cardNum, setCardNum] = useState(1);
  const [infoText, setInfoText] = useState("");

  // sends cards to server
  const sendCards = async () => {
    // make sure that user meant to send cards
    const ok =
      window.confirm(
        "Oletko varma? Kortit ovat tämän jälkeen kaikkien käytettävissä."
      ) && cards.length <= maxCards;
    if (!ok) return;

    const r = await ws.requestAsync({
      type: types.CardSubmission,
      data: { cards },
    });
    if (r.success) {
      setCards([]);
      setInfoText("");
    } else if (r.error) {
      console.error(r.data);
      //setInfoText(r.data || "Jotain meni pieleen");
    }
  };

  /*
   * Create a card based on input
   */
  const createCard = e => {
    e.preventDefault();

    const newCard = { text: cardText };
    if (isQuestion) newCard.required_cards = cardNum;
    if (cardPack.length) newCard.pack = cardPack;
    setCards([...cards, newCard]);

    resetFields();
  };

  /*
   * Remove card at index
   */
  const removeCard = i => {
    const _cards = [...cards];
    _cards.splice(i, 1);
    setCards(_cards);
  };

  /*
   * Reset inputs to defaults
   */
  const resetFields = () => {
    setCardText("");
    setCardPack("");
    setIsQuestion(false);
    setCardNum(1);
  };

  return (
    <div className="container wide">
      <Link className="back-link" to="/">
        Takaisin
      </Link>
      <h1>Luo uusia kortteja</h1>
      <p>Tällä lomakkeella voit lisätä kortteja korttien tietokantaan.</p>
      <h3>
        Katsothan ennen lähettämistä{" "}
        <a className="link" href="/format" target="_blank">
          muotoiluohjeet
        </a>{" "}
        sekä{" "}
        <a className="link" href="/browse" target="_blank">
          ettei samanlaisia kortteja ole jo olemassa.
        </a>
      </h3>
      <div className="grid">
        <form id="card-form">
          <h2>Luo kortti</h2>
          <section>
            <fieldset className="form-fieldset ui-input __first">
              <input
                type="text"
                id="card-text"
                value={cardText}
                maxLength={100}
                onChange={e => setCardText(e.target.value)}
              />
              <label htmlFor="card-text">
                <span data-text="Teksti">Teksti</span>
              </label>
            </fieldset>
          </section>
          <section id="question">
            <div>
              <label htmlFor="card-question">Kysymys</label>
              <input
                id="card-question"
                type="checkbox"
                checked={isQuestion}
                onClick={() => setIsQuestion(q => !q)}
              />
            </div>
            {isQuestion ? (
              <div>
                <label htmlFor="card-num">Tarvittavat kortit</label>
                <input
                  id="card-num"
                  type="number"
                  min={1}
                  max={3}
                  value={cardNum}
                  onChange={e => setCardNum(e.target.value)}
                />
              </div>
            ) : null}
          </section>
          <Button
            disabled={!cardText.length || cards.length >= maxCards}
            onClick={createCard}
            text="Luo"
          />
          <p>{infoText}</p>
        </form>
        <section>
          <h2>Korttisi (max {maxCards} kerrallaan)</h2>
          <div id="ready-cards">
            {cards.map((c, i) => (
              <Card data={c} onClick={() => removeCard(i)} />
            ))}
          </div>
          <br></br>
          <Button
            inverse
            padded
            disabled={cards.length === 0 || cards.length > maxCards}
            text="Lisää peliin"
            onClick={sendCards}
          />
        </section>
      </div>
    </div>
  );
}

export default CardSubmit;
