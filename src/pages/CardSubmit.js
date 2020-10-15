import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CardSubmit.css";

import Card from "../components/Card";

function CardSubmit() {
	const [cards, setCards] = useState([]);

	const [cardText, setCardText] = useState("");
	const [isQuestion, setIsQuestion] = useState(false);
	const [cardNum, setCardNum] = useState(1);

	/*
	 * Create a card based on input
	 */
	const createCard = e => {
		e.preventDefault();

		const newCard = { text: cardText };
		if (isQuestion) newCard.required_cards = cardNum;
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
		setIsQuestion(false);
		setCardNum(1);
	};

	return (
		<div className="container wide">
			<Link className="back-link" to="/">
				Takaisin
			</Link>
			<h1>Submit new cards</h1>
			<div className="grid">
				<form id="card-form">
					<h2>Create new cards</h2>
					<section>
						<label htmlFor="card-text">Text</label>
						<input
							id="card-text"
							type="text"
							value={cardText}
							onChange={e => setCardText(e.target.value)}
						/>
					</section>
					<section id="question">
						<div>
							<label htmlFor="card-question">Question</label>
							<input
								id="card-question"
								type="checkbox"
								checked={isQuestion}
								onClick={() => setIsQuestion(q => !q)}
							/>
						</div>
						{isQuestion ? (
							<div>
								<label htmlFor="card-num">Required Cards</label>
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
					<input
						type="submit"
						onClick={createCard}
						value={isQuestion ? "Create question" : "Create answer"}
					/>
				</form>
				<section>
					<h2>Your cards</h2>
					<div id="cards">
						{cards.map((c, i) => (
							<Card data={c} onClick={() => removeCard(i)} />
						))}
					</div>
				</section>
			</div>
		</div>
	);
}

export default CardSubmit;
