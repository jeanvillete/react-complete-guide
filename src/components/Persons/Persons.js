import React, {Component} from 'react'
import Person from '../Person/Person'

class Persons extends Component {
    /** this method bellow should only be declared on real class-based components where declares and managed state, otherwise warnings are going to be thrown by react */
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps', props)
    //     return state
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate')
        return true; /** decides whether it should still update the model, true continues and false stops it */
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate')
        return { sampleMessage: 'Snapshot!!!'};
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