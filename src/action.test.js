import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constant';
import * as actions from './actions';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import { apicall } from './api/api';
//need this redux mock store to create mockstore and access to dispatch
//need react thunk or else cant dispatch in action

const mockStore = configureMockStore([thunkMiddleware]);
const url = 'https://jsonplaceholder.typicode.com/users';
//create store + middleware to use, this mean that the store is expecting thunkmiddleware(a function)

describe('setSearchField', () => {
	const text = 'Looool';
	const expectedAction = {
		type: CHANGE_SEARCH_FIELD,
		payload: text
	};
	it('search robot action', () => {
		expect(actions.setSearchField(text)).toEqual(expectedAction);
	});
});

describe('request Robot', () => {
	//this is how we deal with async redux action
	it('handling pending', () => {
		const store = mockStore(); //store that has [middleware] expect(wait) the return is function, not object
		store.dispatch(actions.requestRobots(apicall, url)); //dispatch this action
		const action = store.getActions(); //get the return of dispatched actionS, you will get array of object
		const expectedAction = {
			type: REQUEST_ROBOTS_PENDING
		};
		expect(action[0]).toEqual(expectedAction); //the function already carried out, so here just compare value without running function
	});

	it('request robot success', () => {
		expect.assertions(1);
		const store2 = mockStore();
		const prom = store2.dispatch(actions.requestRobots(apicall, url));
		return prom.then(data => {
			expect(store2.getActions()[1]).toEqual({
				type: REQUEST_ROBOTS_SUCCESS,
				payload: data.payload
			});
		});
	});
	it('request robot failed', () => {
		expect.assertions(1);
		const url2 = 'https://jsonplaceholder.typicode/users';
		const store2 = mockStore();
		const prom = store2.dispatch(actions.requestRobots(apicall, url2));
		return prom.then(data => {
			expect(store2.getActions()[1]).toEqual({
				type: REQUEST_ROBOTS_FAILED,
				payload: data.payload
			});
		});
	});
});
