import React from 'react';
import './style.css';

const UserInput = (props) => {
    const styles = {
        margin: '10px auto'
    }
    return (
        <div style={styles}>
            <input onChange={props.update} value={props.username}/>
        </div>
    );
}

export default UserInput;