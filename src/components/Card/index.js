import React from "react";
import "./Card.css";

/*
 * Card
 */
function Card({ data, onClick, isSelected }) {
	const { text, required_cards } = data;

	const cardType = required_cards > 0 ? "card question" : "card";
	const selected = typeof isSelected === "function" && isSelected();

	return (
		<div
			className={selected ? cardType + " selected" : cardType}
			onClick={onClick}
		>
			{selected ? <p className="selection-number">{selected}</p> : ""}
			<p>{text}</p>
		</div>
	);
}

export default Card;
