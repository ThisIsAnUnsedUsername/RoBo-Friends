import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '800px'}}>{/*JSX expression of returing an style object, this syntax so weird is probaly because value inside value*/}
            {props.children}{/*children is anything inside the scroll container, just DOM*/}
        </div>
    );
};

export default Scroll;