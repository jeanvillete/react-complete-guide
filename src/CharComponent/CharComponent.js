import React from 'react'
import './CharComponent.css'

const charComponent = props => {
    const {charValue} = props
    const {clicked} = props

    if (charValue === ' ') {
        return null
    }
    
    return (
        <div className='CharComponent' onClick={clicked}>
            {charValue}
        </div>
    )
}

export default charComponent