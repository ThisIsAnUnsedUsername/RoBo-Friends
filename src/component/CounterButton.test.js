import { shallow, mount, render } from 'enzyme';
import CounterButton from './CounterButton';
import React from 'react';

it('expect to render CounterButton component', () => {
	const mockColor = 'red';
	expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it('correctly increment the counter', () => {
	const mockColor = 'red';
	const wrapper = shallow(<CounterButton color={mockColor} />);
	wrapper.find('[id="counter"]').simulate('click');
	wrapper.find('[id="counter"]').simulate('click');
	//find is method from eznyme, find element which has id=counter
	//simulate click event on element which id = counter
	expect(wrapper.state()).toEqual({ count: 2 });
	wrapper.find('[id="counter"]').simulate('click');
	expect(wrapper.state()).toEqual({ count: 3 });
	wrapper.find('[id="counter"]').simulate('keypress');
	expect(wrapper.state()).toEqual({ count: 3 });
	wrapper.find('[id="counter"]').simulate('click');
	//expect(wrapper.props()).toEqual({ color: 'red' });//children element props belong to parent props too, state is also chidren propertise of props
	expect(wrapper.props().color).toEqual('red'); //prop return propertise of the node
});
