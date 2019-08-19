import React, { Component } from 'react';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit'

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

    return (
      <div className='App'> 
        <Cockpit
          title={this.props.appTitle}
          showPersons={showPersons}
          persons={persons}
          deletePersonHandler={this.deletePersonHandler}
          nameChangeHandler={this.nameChangeHandler}
          togglePersonsHandler={this.togglePersonsHandler}/>
      </div>
    );
  }
}

export default App;
