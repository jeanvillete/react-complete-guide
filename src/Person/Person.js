import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className='Person' onClick={props.click}>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <input type="text" onChange={props.changed} value={props.value}/>
        </div>
    )
}

export default person;