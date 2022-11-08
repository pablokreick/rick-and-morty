import React from "react";
import Background from "../../assets/images/background.jpg";
import "./header.css";

const Header = () => {
	return (
		<header className="header">
			<img
				className="background"
				src={Background}
				alt="fondo de Rick and Morty"
			/>
		</header>
	);
};

export default Header;
