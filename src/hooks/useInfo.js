import { useEffect, useState } from "react";
import { getInfo } from "../services/getInfo";

export const useInfo = (url) => {
	const [page, setPage] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getInfo(url).then((response) => {
			setTimeout(() => {
				setPage(response);
				setIsLoading(false);
			}, 2000);
		});
	}, [url]);

	return { page, isLoading };
};
