import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

function ItemList({ items, onItemClick }) {
  return (
    <ul className="item-list">
      {items.map((item, key) =>
        <li onClick={() => onItemClick(item)} key={key}>{item.name}</li>  
      )}
    </ul>
  )
}

ItemList.propTypes = {
  items: PropTypes.array,
  onItemClick: PropTypes.func,
}

export default ItemList

