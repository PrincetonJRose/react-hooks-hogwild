import React from 'react'

const FilterHogs = props => {

    return (
        <div>
            Filter by: 
            <select onChange = { (e) => props.changeFilter( e.target.value ) }>
                <option value = { "All" }>
                    All
                </option>
                <option value = { true }>
                    Greased
                </option>
                <option value = { false }>
                    Not Greased
                </option>
            </select>
        </div>
    )
}

export default FilterHogs