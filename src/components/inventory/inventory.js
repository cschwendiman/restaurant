import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import Item from "./item"
import Filter from "./filter"
import "./inventory.less"

const Inventory = ({ items }) => {
    const initialFilterState = items.reduce((acc, item) => {
        if (item.colors) {
            item.colors.forEach(color => {
                acc[color] = false;
            });
        }
        return acc;
    }, {});
    const [filters, setFilters] = useState(initialFilterState);
    function toggleFilter(name) {
        setFilters({ ...filters, [name]: !filters[name] });
    }

    return (
        <div className={'inventory'}>
            <div className={'filters'}>
                {Object.keys(filters).map(filter => {
                    return (<Filter key={filter} name={filter} toggleFilter={toggleFilter} />);
                })}
            </div>

            <table className={classNames(filters)}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Colors</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => {
                        return (<Item key={item.id} {...item} />);
                    })}
                </tbody>
            </table>
        </div>
    )
}

Inventory.propTypes = {
  items: PropTypes.array.isRequired,
}

export default Inventory
