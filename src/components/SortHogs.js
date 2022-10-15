import React from 'react'

const SortHogs = props => {

    return (
        <div>
            Sort by:
            <select onChange = { (e) => props.changeSort( e.target.value ) }>
                <option value = 'None'>None</option>
                <option value = 'Name'>Name</option>
                <option value = 'Weight'>Weight</option>
            </select>
        </div>
    )
}

export default SortHogs