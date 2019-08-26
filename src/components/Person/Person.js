import React, {Component} from 'react';
import './Person.css'

class Person extends Component {

    state = {}

    constructor(props) {
        super(props)
        console.log('[Person.js] constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[Person.js] getDerivedStateFromProps', props, state)
        return state
    }

    componentDidMount() {
        console.log('[Person.js] componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Person.js] shouldComponentUpdate')
        return true; /** decides whether it should still update the model, true continues and false stops it */
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Person.js] getSnapshotBeforeUpdate', prevProps, prevState)
        return { sampleMessage: '[Person.js] Snapshot!!!'};
    }

    componentDidUpdate() {
        console.log('[Person.js] componentDidUpdate')
    }

    render() {
        console.log('[Person.js] render')
    
        const {id, name, age, value} = this.props
        const {click, changed} = this.props
    
        return (
            <div id={id} className='Person'>
                <p onClick={click}>I'm {name} and I am {age} years old!</p>
                <input type="text" onChange={changed} value={value}/>
            </div>
        )
    }
}

export default Person;