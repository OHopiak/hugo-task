const toQueryParams = (obj) =>
	Object.keys(obj)
		.map((val, key) => `${key}=${encodeURIComponent(val)}`)
		.join('&');

export {
	toQueryParams
};
