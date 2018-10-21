import { shallow, mount, render } from 'enzyme';
import CardList from './CardList';
import React from 'react';

it('expect to render CardList component', () => {
	const mockRobots = [
		{ id: 1, name: 'John Snow', username: 'JohnJohn', email: 'john@gmail.com' }
	];
	//map function cannot run with undefined thus need to creat a mock user, or create defauly value

	expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
