import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import './styles.scss'

export default function Menu() {
  return (
    <ul className="menu">
      <li className="menu__item">Personajes</li>
      <li className="menu__item">Peliculas</li>
    </ul>
  )
}
