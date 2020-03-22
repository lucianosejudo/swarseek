import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import './styles.scss'

export default function Menu() {
  return (
    <div className="menu">
      <MenuList>
        <MenuItem className="menu__item">Personajes</MenuItem>
        <MenuItem className="menu__item">Peliculas</MenuItem>
      </MenuList>
    </div>
  )
}
