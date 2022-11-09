import React from "react";
import { Search } from "react-bootstrap-icons";
import Background from "../../assets/images/background.jpg";
import "./header.css";

const Header = ({ handleChange }) => {
	return (
		<header className="header">
			<img
				className="background"
				src={Background}
				alt="fondo de Rick and Morty"
			/>
			<div className="searchBar">
				<div className="search">
					<input
						className="search__input"
						type="text"
						onChange={handleChange}
					/>
					<Search className="search__icon" />
				</div>
			</div>
		</header>
	);
};

export default Header;
