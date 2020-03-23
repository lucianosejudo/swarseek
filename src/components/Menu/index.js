import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cn from 'classnames'
import { selectCategory } from 'components/Search/selectors'
import { changeCategory } from 'components/Search/slice'
import './styles.scss'

const menuItems = [{
  label: 'Personajes',
  category: 'personajes',
}, {
  label: 'Peliculas',
  category: 'peliculas'
}];

function Menu({ category, changeCategory }) {
  return (
    <ul className="menu">
      {menuItems.map(item => 
        <li
          className={cn('menu__item', {'menu__item--selected': category === item.category })}
          key={item.category}
          onClick={() => changeCategory(item.category)}
        >
          {item.label}
        </li>
      )}
    </ul>
  )
}

Menu.prototype = {
  category: PropTypes.string,
  selectCategory: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  category: selectCategory(state)
})

const actions = {
  changeCategory,
}

export default connect(mapStateToProps, actions)(Menu);
