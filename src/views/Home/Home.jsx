import React, { useState } from "react";
import CharacterList from "../../components/CharacterList/CharacterList";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import Pagination from "../../components/Pagination/Pagination";
import { useInfo } from "../../hooks/useInfo";
import { BASE_URL } from "../../services/base_url";
import "./home.css";

const Home = () => {
	const [url, setUrl] = useState(BASE_URL);
	const { page, isLoading } = useInfo(url);

	const handleChange = (e) => {
		setTimeout(() => {
			let newUrl = BASE_URL;
			newUrl += e.target.value !== "" ? `/?name=${e.target.value}` : "";
			setUrl(newUrl);
		}, 1500);
	};

	const handleClick = (newUrl) => {
		if (newUrl !== null) {
			setUrl(newUrl);
		}
	};

	return (
		<div className="bg--dark">
			<Header handleChange={handleChange} />
			{isLoading ? (
				<Loading />
			) : (
				<div>
					<Pagination handleClick={handleClick} info={page.info} />
					<div className="characters bg--dark">
						<CharacterList characters={page.results} />
					</div>
					<Pagination handleClick={handleClick} info={page.info} />
				</div>
			)}
		</div>
	);
};

export default Home;
