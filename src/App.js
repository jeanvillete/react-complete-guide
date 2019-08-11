import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {

  state = {
    inputField: ''
  }

  inputFieldHandler = event => {
    const inputField = event.target.value
    this.setState({inputField})
  }

  render() {
    const {inputField} = this.state

    return (
      <div className='App'>
        <input type='text' onChange={this.inputFieldHandler} size='50' />
        <ValidationComponent inputLength={inputField.length} />

        {
          inputField.split('')
            .filter( charValue => charValue !== ' ' )
            .map( charValue => <CharComponent charValue={charValue} /> )
        }
      </div>
    )
  }
}

export default App