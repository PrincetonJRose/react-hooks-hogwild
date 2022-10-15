import React, { useEffect, useState } from 'react'
import hogsData from "../porkers_data"
import FilterHogs from './FilterHogs'
import HogCard from './HogCard'
import SortHogs from './SortHogs'


const HogsContainer =( )=> {

    const [ hogs, setHogs ] = useState( [] )
    const [ flippedHogs, setFlippedHogs ] = useState( [] )
    const [ filter, setFilter ] = useState( 'All' )
    const [ sort, setSort ] = useState( 'None' )


    useEffect( () => {
        let addHogIds = hogsData.map( ( hog, index ) => {
            return { ...hog, id: index + 1 }
        })
        setHogs( addHogIds )
    }, [] )
    
    const flipHog = id => {
        flippedHogs.includes( id ) ?
            setFlippedHogs( flippedHogs.filter( hogId => hogId !== id ) )
        :
            setFlippedHogs( [...flippedHogs, id ] )
    }

    const filterHogs =( )=> {
        let filteredHogs = []
        if ( filter === 'true' )
            filteredHogs = hogs.filter( hog => hog.greased )
        else if ( filter === 'false' )
            filteredHogs = hogs.filter( hog => !hog.greased )
        else filteredHogs = [ ...hogs ]

        return sortHogs( filteredHogs )
    }

    const sortHogs = filteredHogs => {
        let sortedHogs = [ ...filteredHogs ]
        if ( sort === 'Weight' )
            return sortedHogs.sort( ( hog1, hog2 ) => hog1.weight - hog2.weight )
        else if ( sort === 'Name' )
            return sortedHogs.sort( ( hog1, hog2 ) => hog1.name.toLowerCase().localeCompare( hog2.name.toLowerCase() ) )
        else return sortedHogs
    }

    const renderHogs = filterHogs().map( ( hog ) =>
        <HogCard
            hog = { hog }
            key = { hog.id }
            flipHog = { flipHog }
            flippedHogs = { flippedHogs }
        />)

    const changeFilter = newFilter => setFilter( newFilter )

    const changeSort = newSort => setSort( newSort )

        return (
        <div>
            <SortHogs changeSort = { changeSort } />
            <FilterHogs changeFilter = { changeFilter } />
            <br />
            <div className='ui grid container'>
                { renderHogs }
            </div>
        </div>
    )
}

export default HogsContainer