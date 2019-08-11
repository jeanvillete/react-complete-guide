import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
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
                <Person id={`person-${index}`}
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
