import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

class App extends Component {
  state = {
    username: "Jean Villete, present on state, initial value"
  }

  inputEventHandler = event => {
    this.setState({username: event.target.value})
  }

  render() {
    const {username} = this.state

    return (
      <div className="App">
        <UserInput changed={this.inputEventHandler} value={username}/>
        <UserOutput firstParagraph={username}/>
      </div>
    );
  }
}

export default App;
