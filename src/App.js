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

  inputFieldRemoveChar = charIndex => {
    const {inputField} = this.state
    const inputFieldAsArray = inputField.split('')
    inputFieldAsArray.splice(charIndex, 1)

    this.setState({inputField: inputFieldAsArray.join('')})
  }

  render() {
    const {inputField} = this.state

    return (
      <div className='App'>
        <input type='text' onChange={this.inputFieldHandler} value={inputField} size='50' />
        <ValidationComponent inputLength={inputField.length} />

        {
          inputField.split('')
            .map( ( charValue, charIndex ) => 
              {
                return charValue !== ' ' ?
                <CharComponent 
                  charValue={charValue} 
                  clicked={() => this.inputFieldRemoveChar(charIndex)}/>
                : null
              }
            )
        }
      </div>
    )
  }
}

export default App