import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

function ItemList({ items }) {
  return (
    <ul className="item-list">
      {items.map(item =>
        <li>{item.name}</li>  
      )}
    </ul>
  )
}

ItemList.propTypes = {
  items: PropTypes.array,
}

export default ItemList

