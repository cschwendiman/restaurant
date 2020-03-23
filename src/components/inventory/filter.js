import React from "react"
import PropTypes from "prop-types"

const Filter = ({ name, toggleFilter }) => {
    return (
        <button className={name} onClick={() => toggleFilter(name)}>
            {name}
        </button>
    )
}

Filter.propTypes = {
    name: PropTypes.string.isRequired,
    toggleFilter: PropTypes.func.isRequired,
}
  
export default Filter