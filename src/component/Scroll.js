import React from 'react';

const Scroll = props => {
	return (
		<div
			style={{
				overflowY: 'scroll',
				border: '1px solid black',
				height: '800px'
			}}
		>
			{/*first bracket is to indicate that this is an js expression, second bracket is an object*/}
			{props.children}
			{/*children is anything inside the scroll container, just DOM*/}
		</div>
	);
};

export default Scroll;
