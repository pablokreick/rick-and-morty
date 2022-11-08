import React from "react";
import Portal from "../../assets/images/portal.gif";
import "./loading.css";

const Loading = () => {
	return (
		<div className="loading">
			<img className="loading__image" src={Portal} alt="" />
		</div>
	);
};

export default Loading;
