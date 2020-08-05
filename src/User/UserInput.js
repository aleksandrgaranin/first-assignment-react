import React from 'react';
import './User.css'

const userInput = (props) => {
    return (
        <div className="UserInput">
            <input type="text" 
            onChange={props.changed} 
            value={props.currentName}></input>
        </div>
    );
};
export default userInput;