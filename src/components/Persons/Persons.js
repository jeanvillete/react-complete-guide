import React from 'react'
import Person from '../Person/Person'

const persons = props => {
    console.log('[Persons.js] render')
    return props.persons.map( (person, index) => 
            <Person
                key={person.id}
                id={`person-${index}`}
                click={() => props.clicked(index)}
                changed={(event) => props.changed(event, index)}
                name={person.name} 
                value={person.name} 
                age={person.age}/>
        )
}

export default persons