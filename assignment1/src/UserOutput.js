import React from 'react';

const UserOutput = (props) => {
    const styles = {
        backgroundColor: '#eee',
        margin: '15px auto',
        width: '50%',
        padding: '10px',
        border: '1px solid gray',
        borderRadius: '5px'
    }

    return (
        <div style={styles}>
            <p>{props.username}</p>
            <p>p2</p>
        </div>
    );
}

export default UserOutput;