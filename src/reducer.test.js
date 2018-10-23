import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constant';

import * as reducer from './reducer'; //import anything from reducer.js as reducers.xxxx

describe('searchRobots', () => {
	const initialStateSearch = {
		searchField: ''
	};
	it('should return the initial state', () => {
		expect(reducer.searchRobots(undefined, { searchField: '' })).toEqual({
			//if argument is undefined, the argument will take default value
			searchField: ''
		});
	});
	it('should handle change serachfield event', () => {
		expect(
			reducer.searchRobots(initialStateSearch, {
				type: CHANGE_SEARCH_FIELD,
				payload: 'abc'
			})
		).toEqual({
			//if argument is undefined, the argument will take default value
			searchField: 'abc'
		});
	});
});

describe('requestRobots', () => {
	const initialStateRobots = {
		isPending: false,
		robots: [],
		error: ''
	};
	it('should return the initial state', () => {
		expect(reducer.requestRobots(undefined, {})).toEqual(initialStateRobots);
	});
	it('should handle pending robot request', () => {
		expect(
			reducer.requestRobots(initialStateRobots, {
				type: REQUEST_ROBOTS_PENDING
			})
		).toEqual({ ...initialStateRobots, isPending: true });
	});
	it('should handle success robot request', () => {
		expect(
			reducer.requestRobots(initialStateRobots, {
				type: REQUEST_ROBOTS_SUCCESS,
				payload: [{ id: '123', name: 'test', email: 'test@gmail.com' }]
			})
		).toEqual({
			...initialStateRobots,
			isPending: false,
			robots: [{ id: '123', name: 'test', email: 'test@gmail.com' }]
		});
	});
	it('should handle failed robot request', () => {
		expect(
			reducer.requestRobots(initialStateRobots, {
				type: REQUEST_ROBOTS_FAILED,
				payload: 'failed'
			})
		).toEqual({
			...initialStateRobots,
			isPending: false,
			error: 'failed'
		});
	});
});
