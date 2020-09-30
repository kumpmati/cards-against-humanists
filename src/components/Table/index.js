import React from "react";
import "./Table.css";

/*
 * Components
 */
import Card from "../Card";
import CardPack from "../CardPack";
import List from "../List";

/*
 * Table
 */
function Table({ current_question, submitted_cards, game_status, send }) {
	const spreadCards = game_status === "CZAR_CHOOSES_ANSWER";

	return (
		<section id="table">
			<div id="current-question">
				{current_question && <Card data={current_question} />}
			</div>

			<List
				id="submitted-cards"
				className={spreadCards ? "spread" : ""}
				items={submitted_cards}
				Component={CardPack}
				// submit the clicked item as the winner
				itemOnClick={(item) => send({ winner: item })}
			/>
		</section>
	);
}

export default Table;
