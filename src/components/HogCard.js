import React from 'react'
import HogCardFront from './HogCardFront'
import HogCardBack from './HogCardBack'

const HogCard =( props )=> {

    const { hog, flipHog, flippedHogs } = props

    return (
        <div className='ui eight wide column' onClick={ () => flipHog( hog.id ) }>
            {
                flippedHogs.includes( hog.id ) ?
                    <HogCardBack hog = { hog } />
                :
                    <HogCardFront hog = { hog } />
            }
        </div>
    )
}

export default HogCard