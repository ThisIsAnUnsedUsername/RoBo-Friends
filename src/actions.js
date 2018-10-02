import { CHANGE_SEARCH_FIELD } from './constant';

export const setSearchField = text => ({
	type: CHANGE_SEARCH_FIELD, //constant is capitalized
	payload: text//payload is common name, it is name of the data
});
