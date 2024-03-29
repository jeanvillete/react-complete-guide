import React from 'react'
import Persons from '../Persons/Persons'

const cockpit = props => {
    console.log('[Cockpit.js] render')

    const {showPersons, persons} = props
    const {deletePersonHandler, nameChangeHandler, togglePersonsHandler} = props

    const style = {
        backgroundColor: showPersons ? 'red' : 'green',
        font: 'inherit',
        color: 'white',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    }

    return (
        <div>
            <h1>{props.title}</h1>

            <button style={style} onClick={togglePersonsHandler}>Toggle Persons</button>

            {
                showPersons ?
                <div>
                    <Persons
                        persons={persons}
                        clicked={deletePersonHandler}
                        changed={nameChangeHandler}/>
                </div>
                : null
            }
        </div>
    )
}

export default cockpit