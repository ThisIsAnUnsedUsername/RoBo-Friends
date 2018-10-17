import React from 'react';

const SearchBox = ({ searchChange }) => {
	console.log('SearchBox');
	return (
		<div className="pa2">
			<input
				aria-label="Search Robots" //for asistive technology, add accesibility score
				className="pa3 ba b--green bg-lightest-blue"
				type="search"
				placeholder="search robot"
				onChange={searchChange} //inline add event listener, but it will pass input's this which is undefined
				// onChange = {(e) => searchChange}//however it will pass the object this where the function is defined if we defined asynchrounus arrow function here
			/>{' '}
			{/*html element without close tag need a '/'*/}
		</div>
	);
};

export default SearchBox;
