import React from 'react';

const person = (props) => {
    return (
        <div onClick={props.click}>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            {props.children}
        </div>
    )
}

export default person;