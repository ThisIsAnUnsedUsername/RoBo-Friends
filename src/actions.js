import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constant';

export const setSearchField = text => ({
	//({object member}) equal to return{object member}, unable to return {object member} without () in short clean way
	type: CHANGE_SEARCH_FIELD, //constant is capitalized
	payload: text //payload is common name, it is name of the data
});

export const requestRobots = (apicall, url) => dispatch => {
	//redux expecting object when calling action, however with redux-thunk, we can run function
	dispatch({ type: REQUEST_ROBOTS_PENDING }); //dispatch return object
	return apicall(url) //make http request to fetch repsonse
		.then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
		.catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));
};
