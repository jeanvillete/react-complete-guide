import React from 'react'

const userInput = props => {

    const {changed} = props
    const {value} = props

    return (
        <div>
            <input type="text" value={value} onChange={changed} size="50" />
        </div>
    )
}

export default userInput