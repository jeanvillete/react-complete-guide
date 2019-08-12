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

  switchNameHandler = newName => {
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

  nameChangeHandler = (event, index) => {
    const persons = [...this.state.persons]
    persons[index].name = event.target.value

    this.setState({persons})
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
    const {showPersons, persons} = this.state

    const style = {
      backgroundColor: showPersons ? 'red' : 'green',
      font: 'inherit',
      color: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi I'm a React app!</h1>

        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {
          showPersons ?
          <div>
            {
              persons.map( (person, index) => 
                <Person 
                  key={person.id}
                  id={`person-${index}`}
                  click={() => this.deletePersonHandler(index)}
                  changed={(event) => this.nameChangeHandler(event, index)}
                  name={person.name} 
                  value={person.name} 
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
