import React from "react";
import "./character.css";

const Character = ({ character }) => {
	return (
		<div className={`character character--${character.status}`}>
			<img
				className="character__image"
				src={character.image}
				alt={character.name}
			/>
			<h2 className="character__name">{character.name}</h2>
		</div>
	);
};

export default Character;
