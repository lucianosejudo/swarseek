import React from 'react'
import title from 'assets/images/logo-title.png'
import './styles.scss'

export default function LogoTitle() {
  return (
    <div className="logo">
      <img className="logo__image" src={title} alt="logo" />
    </div>
  )
}

