import React from "react"
import PropTypes from "prop-types"

const Item = ({ name, qty, colors = [] }) => {
    return (
        <tr className={colors.join(' ')}>
            <td>{name}</td>
            <td>{colors.join()}</td>
            <td>{qty}</td>
        </tr>
    )
}

Item.propTypes = {
    name: PropTypes.string.isRequired,
    qty: PropTypes.string.isRequired,
    colors: PropTypes.array.isRequired,
}
  
export default Item