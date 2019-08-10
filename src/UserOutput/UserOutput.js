import React, { Component } from 'react'

class UserOutput extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const {firstParagraph} = this.props

        return (
            <div>
                <p>{firstParagraph}</p>
                <p>second paragraph, set hardcoded text</p>
            </div>
        )
    }
}

export default UserOutput