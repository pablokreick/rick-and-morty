import { useEffect, useState } from "react";
import { getInfo } from "../services/getInfo";

export const useInfo = (url) => {
	const [page, setPage] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getInfo(url)
			.then((response) => setPage(response))
			.finally(() => {
				setTimeout(() => {
					setIsLoading(false);
				}, 2000);
			});
	}, [url]);

	return { page, isLoading };
};
