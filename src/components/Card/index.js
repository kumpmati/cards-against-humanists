import React from "react";
import "./Card.css";

const isFunc = f => typeof f === "function";

/*
 * Card
 */
function Card({ data, onClick, selectionNum }) {
	const { text, required_cards } = data;

	const cardType = required_cards > 0 ? "card question" : "card";
	const className = selectionNum ? `${cardType} selected` : cardType;
	const onClickFunc = isFunc(onClick) ? () => onClick(data) : () => null;

	return (
		<div className={className} onClick={onClickFunc}>
			<p>{text}</p>

			{selectionNum ? <p className="selection-number">{selectionNum}</p> : ""}
			{required_cards > 1 ? (
				<p className="required-num">Valitse {required_cards}</p>
			) : null}
		</div>
	);
}

export default Card;
