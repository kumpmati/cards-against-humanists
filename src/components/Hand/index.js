import React, { useEffect, useState } from "react";
import { toggleInList } from "./util";
import "./Hand.css";

/*
 * Components
 */
import Button from "../Button";
import Card from "../Card";
import List from "../List";
import CardListStyle from "./CardList.css";
import { compareValues } from "../GameRenderer/util";

/*
 * Card list
 */
function Hand({ cards, current_question, disabled, send }) {
	const [currentCards, setCurrentCards] = useState(cards);
	const [selectedCards, setSelectedCards] = useState([]);

	// on submit send submission request to server
	const submitCards = () => send({ submit: selectedCards });

	// get number of required cards
	const requiredCards =
		current_question && !disabled ? current_question.required_cards : 0;

	useEffect(() => {
		// unselect cards if they are updated
		if (!compareValues(cards, currentCards)) {
			setCurrentCards(cards);
			setSelectedCards([]);
		}
	}, [cards]);

	return (
		<section id="cards">
			<List
				id="card-list"
				className={disabled ? "no-select" : ""}
				style={CardListStyle}
				items={currentCards}
				Component={Card}
				isSelected={(item) => selectedCards.indexOf(item) + 1}
				itemOnClick={(item) => {
					setSelectedCards(toggleInList(item, selectedCards, requiredCards));
				}}
			/>

			{/* Show confirmation button when a card/cards are selected */}
			<div id="confirm-cards">
				{selectedCards.length ? (
					<Button text="✓" onClick={submitCards} big inverse outline />
				) : null}
			</div>
		</section>
	);
}

export default Hand;
