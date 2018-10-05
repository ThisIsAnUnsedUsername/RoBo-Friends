import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	// if (true) {
	// 	throw new Error('NOOOOOOOOO');
	// }
	const cardArrayComponent = robots.map((user, i) => {
		return (
			<Card
				key={i} //need key or else error, https://reactjs.org/docs/lists-and-keys.html#keys
				id={robots[i].id}
				name={robots[i].name}
				email={robots[i].email}
			/>
		);
	});

	return <div>{cardArrayComponent}</div>;
};

export default CardList;
