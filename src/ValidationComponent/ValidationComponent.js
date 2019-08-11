import React from 'react';

const validationComponent = props => {

    const {inputLength} = props

    return (
        <div className='ValidationComponent'>
            {inputLength}
        </div>
    )
}

export default validationComponent