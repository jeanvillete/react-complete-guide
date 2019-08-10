import React from 'react'

const userOutput = props => {
    
    const {firstParagraph} = props

    return (
        <div>
            <p>{firstParagraph}</p>
            <p>second paragraph, set hardcoded text</p>
        </div>
    )
}

export default userOutput