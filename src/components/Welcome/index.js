import React from 'react'
import chewbacca from 'assets/images/chewbacca.png'
import vader from 'assets/images/vader.png'
import leia from 'assets/images/leia.png'
import './styles.scss'

export default function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome__title">¡Bienvenido a Swarseek!</div>
      <p className="welcome__label">Busque informacion sobre sus personajes o peliculas favoritas de Star Wars y que...</p>
      <p className="welcome__msg">...LA FUERZA ESTE CONTIGO, SIEMPRE</p>
      <div className="welcome__images">
          <img src={vader} alt="vader" />
          <img src={chewbacca} alt="chewbacca" /> 
          <img src={leia} alt="leia" />
      </div>
    </div>
  )
}
