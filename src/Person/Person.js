import React from 'react';
import './Person.css'

const person = (props) => {

    const {id, name, age, value} = props
    const {click, changed} = props

    return (
        <div id={id} className='Person'>
            <p  onClick={click}>I'm {name} and I am {age} years old!</p>
            <input type="text" onChange={changed} value={value}/>
        </div>
    )
}

export default person;