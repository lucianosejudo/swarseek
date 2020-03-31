import React from 'react'
import getImageFromUrl from 'components/utils/getImgFromUrl'
import './styles.scss'

export default function CharacterResume({ character, selectItem }) {
  return (
    <div>
      <div className="character-resume__name">{character.name || character.title}</div>
      <div className="character-resume__data">
        <div className="character-resume__data-img">
          <img
            src={getImageFromUrl(character.url, 'characters')}
            alt={character.name}
          />
        </div>
        <div>
          <div className="character-resume__data-eyes">Color de ojos: {character.eye_color}</div>
          <div className="character-resume__data-height">Altura: {character.height}cm</div>
          <div className="character-resume__data-mass">Peso: {character.mass}kg</div>
          <div className="character-resume__list">
            <div>Peliculas en las que aparecio:</div>
            <ul>
              {character.films?.map(film =>
                <li
                  className="character-resume__list-item"
                  onClick={() => selectItem(film)}
                  key={film.title}
                >
                  {film.title}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
