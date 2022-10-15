import React from 'react'

const HogCardFront = props => {

    const { hog } = props

    return (
        <div className = 'pigTile'>
            <h3>
                { hog.name }
            </h3>
            <img className='minPigTile' src={ hog.image } alt="Hog" />
        </div>
    )
}

export default HogCardFront