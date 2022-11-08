import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./character.css";

const Character = ({ character }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleClick = () => {
		setIsModalOpen(!isModalOpen);
	};

	return (
		<>
			<div
				className={`character character--${character.status}`}
				onClick={handleClick}
			>
				<img
					className="character__image"
					src={character.image}
					alt={character.name}
				/>
				<h2 className="character__name">{character.name}</h2>
			</div>
			{isModalOpen && <Modal character={character} handleClick={handleClick} />}
		</>
	);
};

export default Character;
