import React from 'react';
import './User.css'

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Hello my name is {props.name} </p>      
            <p>my mom named me {props.name} </p>
            <p>{props.children}</p>      
        </div>
    );
};
export default userOutput;