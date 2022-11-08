export const getInfo = (url) => {
	return fetch(url)
		.then((response) => response.json())
		.then((response) => response);
};
