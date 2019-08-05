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
    ]
  }

  switchNameHandler = () => {
    // DONT DO THIS: this.state.persons[0].name = 'Jean Villete';
    this.setState({
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

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React app!</h1>

        <button onClick={this.switchNameHandler}>Switch name</button>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
