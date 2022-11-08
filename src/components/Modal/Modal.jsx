import React from "react";
import ReactDOM from "react-dom";
import "./modal.css";

const Modal = ({ character, handleClick }) => {
	const element = (
		<div className="overlay" onClick={handleClick}>
			<div className="modal" onClick={(e) => e.stopPropagation()}>
				<img
					className="modal__image"
					src={character.image}
					alt={character.name}
				/>
				<h2 className="modal__name">{character.name}</h2>
				<p className="modal__text">
					Status:{" "}
					<span className={`modal__text--${character.status}`}>
						{character.status}
					</span>
				</p>
				<p className="modal__text modal__text--gray">
					Specie: {character.species}
				</p>
				<p className="modal__text modal__text--gray">
					origin: {character.origin.name}
				</p>
				<p className="modal__text modal__text--gray">
					location: {character.location.name}
				</p>
			</div>
		</div>
	);

	return ReactDOM.createPortal(element, document.getElementById("modal"));
};

export default Modal;
