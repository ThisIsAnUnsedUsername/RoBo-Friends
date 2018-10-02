import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constant';

export const setSearchField = text => ({
	type: CHANGE_SEARCH_FIELD, //constant is capitalized
	payload: text //payload is common name, it is name of the data
});

export const requestRobots = () => dispatch => {
	//redux expecting object when calling action, however with redux-thunk, we can run function
	dispatch({ type: REQUEST_ROBOTS_PENDING });
	fetch('https://jsonplaceholder.typicode.com/users') //make http request to fetch repsonse
		.then(response => response.json())
		.then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
		.catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));
};
