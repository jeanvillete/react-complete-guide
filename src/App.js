import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [ personsState, setPersonsState ] = useState(
    {
      persons: [
        {
          name: 'Jean',
          age: 32
        },
        {
          name: 'Gabi',
          age: 28
        },
        {
          name: 'Dani',
          age: 28
        }
      ]
    }
  )

  const switchNameHandler = () => {
    // DONT DO THIS: personsState.persons[0].name = 'Jean Villete';
    setPersonsState({
      persons: [
        {
          name: 'Jean Villete',
          age: 32
        },
        {
          name: 'Gabriella',
          age: 28
        },
        {
          name: 'Dani',
          age: 28
        }
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hi I'm a React app!</h1>

      <button onClick={switchNameHandler}>Switch name</button>

      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
}

export default app;
