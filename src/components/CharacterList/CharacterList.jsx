import React from "react";
import Character from "../Character/Character";

const CharacterList = ({ characters }) => {
	return (
		<>
			{characters?.map((character) => (
				<Character key={character.id} character={character} />
			))}
		</>
	);
};

export default CharacterList;
