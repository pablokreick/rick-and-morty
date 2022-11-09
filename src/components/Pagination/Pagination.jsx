import React from "react";
import "./pagination.css";

const Pagination = ({ info, handleClick }) => {
	return (
		<div className="pagination">
			<button
				className="pagination__button"
				onClick={() => handleClick(info.prev)}
			>
				Previous
			</button>
			<button
				className="pagination__button"
				onClick={() => handleClick(info.next)}
			>
				Next
			</button>
		</div>
	);
};

export default Pagination;
