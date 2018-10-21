import { shallow, mount, render } from 'enzyme';
//most of the time you use only shallow test
//mount is full dom API rendering, need to atleast run in browser similar environment like jsdom or headless browser
//render, render something to a static html, work similar like shallow, render us cheerio library, render children
import Card from './Card';
import React from 'react';

//shallow rendering, include child element but will not render child component, keep test nice and clean

it('expect to render Card component', () => {
	expect(shallow(<Card />).length).toEqual(1);
	expect(shallow(<Card />)).toMatchSnapshot(); //snapshot testing, create and compare with snapshot, detect changes, good for pure component
});

console.log(shallow(<Card />));
