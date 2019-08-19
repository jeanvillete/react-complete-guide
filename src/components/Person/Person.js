import React, {Component} from 'react';
import './Person.css'

class Person extends Component {
    /** this method bellow should only be declared on real class-based components where declares and managed state, otherwise warnings are going to be thrown by react */
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Person.js] getDerivedStateFromProps', props)
    //     return state
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Person.js] shouldComponentUpdate')
        return true; /** decides whether it should still update the model, true continues and false stops it */
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Person.js] getSnapshotBeforeUpdate')
        return null;
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