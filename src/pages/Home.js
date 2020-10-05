import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import "./Home.css";

function Home() {
	return (
		<div id="Home">
			<h1>Cards Against Humanists</h1>
			<div id="nav">
				<Link className="link" to="/new">
					<Button padded text="Luo uusi huone" />
				</Link>
				<Link className="link" to="/join">
					<Button padded text="Liity huoneeseen" />
				</Link>
			</div>
		</div>
	);
}

export default Home;
