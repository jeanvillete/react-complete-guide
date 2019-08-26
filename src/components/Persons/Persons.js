import React, {Component} from 'react'
import Person from '../Person/Person'

class Persons extends Component {

    state = {}

    constructor(props) {
        super(props)
        console.log('[Persons.js] constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps', props, state)
        return state
    }

    componentDidMount() {
        console.log('[Persons.js] componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate')
        return true; /** decides whether it should still update the model, true continues and false stops it */
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate', prevProps, prevState)
        return { sampleMessage: '[Persons.js] Snapshot!!!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate')
        console.log('[Persons.js] snapshot message; ', snapshot.sampleMessage)
    }

    render() {
        const {persons} = this.props
        const {clicked, changed} = this.props

        console.log('[Persons.js] render')
        return persons.map( (person, index) => 
                <Person
                    key={person.id}
                    id={`person-${index}`}
                    click={() => clicked(index)}
                    changed={(event) => changed(event, index)}
                    name={person.name} 
                    value={person.name} 
                    age={person.age}/>
            )
    }
}

export default Persons