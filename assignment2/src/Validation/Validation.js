import React from 'react';

const validation = (props) => {
    return (
        props.length > 5?
            <p>Text long enough</p> :
            <p>Text too short</p>
    );
}

export default validation;