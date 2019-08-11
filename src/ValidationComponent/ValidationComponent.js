import React from 'react';

const validationComponent = props => {

    const {inputLength} = props

    return (
        <div className='ValidationComponent'>
            { inputLength > 5 ? "Text long enough..." : "Text too short!!!" }
        </div>
    )
}

export default validationComponent