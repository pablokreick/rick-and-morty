import React, { useState } from "react";
import CharacterList from "../../components/CharacterList/CharacterList";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import { useInfo } from "../../hooks/useInfo";
import { BASE_URL } from "../../services/base_url";
import "./home.css";

const Home = () => {
	const [url, setUrl] = useState(BASE_URL);
	const { page, isLoading } = useInfo(url);

	return (
		<div>
			<Header />
			{isLoading ? (
				<Loading />
			) : (
				<div>
					<div className="characters bg--dark">
						<CharacterList characters={page.results} />
					</div>
				</div>
			)}
		</div>
	);
};

export default Home;
