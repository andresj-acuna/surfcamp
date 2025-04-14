const BASE_URL = process.env.STRAPI_URL || 'http://127.0.0.1:1337';

export const fetchDataFromStrapi = async (route) => {
	const url = `${BASE_URL}/api/${route}`;

	try {
		const response = await fetch(url, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await response.json();
		return data.data;
	} catch (err) {
		console.log(err);
		throw new Error(`Could not fetch data from ${url}`);
	}
};

export const normalizeInfoBlock = (entry) => {
	const attrs = entry.attributes;

	return {
		id: entry.id,
		headline: attrs.headline,
		text: attrs.text,
		reversed: attrs.showImageRight,
		imageSrc: BASE_URL + attrs.image?.data?.attributes?.url || '',
		button: attrs.button
			? {
					text: attrs.button?.text || '',
					color: attrs.button?.colour || '',
					href: `/${attrs.button?.slug || ''}`,
			  }
			: null,
	};
};
