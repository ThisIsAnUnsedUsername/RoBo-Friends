import React from 'react';

const SearchBox = ({searchField, searchChange}) => {

    return (
        <div className='pa2'>
            <input 
                className = 'pa3 ba b--green bg-lightest-blue'
                type = 'search' 
                placeholder = 'search robot' 
                onChange = {searchChange}//inline add event listener, but it will pass input's this which is undefined
                // onChange = {(e) => searchChange}//however it will pass the object this where the function is defined if we defined asynchrounus arrow function here
            /> {/*html element without close tag need a '/'*/}
        </div>
    );
};

export default SearchBox;