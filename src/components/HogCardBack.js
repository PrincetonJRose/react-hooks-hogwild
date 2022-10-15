import React from 'react'


const HogCardBack = props => {

    const { hog } = props

    const renderHogDetails = []

    for ( let key in hog ) {
        if ( key !== 'name' && key !== 'image' && key !== 'id')
            renderHogDetails.push( <p className='hoggyText'>{`${ key }: ${ hog[key] }`}</p> )
    }

    return (
        <div className = 'pigTile minPigTile'>
            {
                renderHogDetails
            }
        </div>
    )
}

export default HogCardBack