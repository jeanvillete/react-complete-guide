import React from 'react'
import './CharComponent.css'

const charComponent = props => {
    const {charValue} = props
    return (
        <div className='CharComponent'>
            {charValue}
        </div>
    )
}

export default charComponent