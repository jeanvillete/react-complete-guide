import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'

class App extends Component {

  state = {
    inputfield: ""
  }

  inputFieldHandler = event => {
    const inputfield = event.target.value
    this.setState({inputfield})
  }

  render() {
    const {inputfield} = this.state

    return (
      <div className="App">
        <input type="text" name="inputfield" onChange={this.inputFieldHandler} size='50' />
        <ValidationComponent inputLength={inputfield.length} />
      </div>
    );
  }
}

export default App