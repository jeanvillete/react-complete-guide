import React, { Component } from 'react'

class UserInput extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const {changed} = this.props
        const {value} = this.props
    
        return (
            <div>
                <input type="text" value={value} onChange={changed} size="50" />
            </div>
        )
    }
}

export default UserInput