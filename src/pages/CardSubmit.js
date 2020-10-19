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

  const [cards, setCards] = useState([]);

  // input fields
  const [cardText, setCardText] = useState("");
  const [cardPack, setCardPack] = useState("");
  const [isQuestion, setIsQuestion] = useState(false);
  const [cardNum, setCardNum] = useState(1);
  const [infoText, setInfoText] = useState("");

  // sends cards to server
  const sendCards = async () => {
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
      <div className="grid">
        <form id="card-form">
          <h2>Luo kortti</h2>
          <section>
            <fieldset className="form-fieldset ui-input __first">
              <input
                type="text"
                id="card-text"
                value={cardText}
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
                  min="1"
                  max="5"
                  value={cardNum}
                  onChange={e => setCardNum(e.target.value)}
                />
              </div>
            ) : null}
          </section>
          <Button disabled={!cardText.length} onClick={createCard} text="Luo" />
          <p>{infoText}</p>
        </form>
        <section>
          <h2>Korttisi</h2>
          <div id="cards">
            {cards.map((c, i) => (
              <Card data={c} onClick={() => removeCard(i)} />
            ))}
          </div>
          <br></br>
          <Button
            inverse
            padded
            disabled={cards.length === 0}
            text="Lähetä arvioitavaksi"
            onClick={sendCards}
          />
        </section>
      </div>
    </div>
  );
}

export default CardSubmit;
