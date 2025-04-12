const BASE_URL = process.env.STRAPI_URL;

export const fetchDataFromStrapi = async (route) => {
	const url = `${BASE_URL}/${route}`;

	try {
		const response = await fetch(url);
		const data = await response.json();
		return data.data;
	} catch (err) {
		console.log(err);
		throw new Error(`Could not fetch data from ${url}`);
	}
};
