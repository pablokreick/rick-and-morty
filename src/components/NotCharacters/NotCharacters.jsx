import React from "react";
import Pickle from "../../assets/images/pickle.gif";
import "./notCharacters.css";

const NotCharacters = ({ error }) => {
	return (
		<div className="notCharacters">
			<h2 className="notCharacters__text">{error}</h2>
			<img className="notCharacters__image" src={Pickle} alt="pepinillo" />
		</div>
	);
};

export default NotCharacters;
