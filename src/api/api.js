export const apicall = link =>
	fetch(link) //make http request to fetch repsonse
		.then(response => response.json());
