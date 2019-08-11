import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 'id-1', name: 'Jean', age: 32 },
      { id: 'id-2', name: 'Gabi', age: 28 },
      { id: 'id-3', name: 'Dani', age: 28 },
      { id: 'id-4', name: 'Day', age: 30 },
      { id: 'id-5', name: 'Herry', age: 22 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: newName,
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

  nameChangeHandler = (event) => {
    this.setState(
      {
        persons: [
          {
            name: 'Jean Villete, from on changed',
            age: 32
          },
          {
            name: event.target.value,
            age: 28
          },
          {
            name: 'Dani',
            age: 28
          }
        ]
      }
    )
  }

  togglePersonsHandler = () => {
    this.setState(
      {
        ...this.state,
        showPersons: !this.state.showPersons
      }
    )
  }

  deletePersonHandler = index => {
    const persons = [...this.state.persons]
    persons.splice(index, 1)

    this.setState({persons})
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React app!</h1>

        <button onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {
          this.state.showPersons ?
          <div>
            {
              this.state.persons.map( (person, index) => 
                <Person 
                  key={person.id}
                  id={`person-${index}`}
                  click={() => this.deletePersonHandler(index)}
                  name={person.name} 
                  age={person.age}/>
              )
            }
          </div>
          : null
        }
      </div>
    );
  }
}

export default App;
