import React from 'react'
import PropTypes from 'prop-types'
import Avatar from 'components/Avatar'
import getImageFromUrl from 'components/utils/getImgFromUrl'
import './styles.scss'

function ItemList({ items, onItemClick }) {
  return (
    <ul className="item-list">
      {items.map((item, key) =>
        <li className="item-list__item" onClick={() => onItemClick(item)} key={key}>
          <Avatar src={getImageFromUrl(item.url, item.title ? 'films' : 'characters')} />
          <div className="item-list__item-label">
            {item.name || item.title}
          </div>
        </li>  
      )}
    </ul>
  )
}

ItemList.propTypes = {
  items: PropTypes.array,
  onItemClick: PropTypes.func,
}

export default ItemList

