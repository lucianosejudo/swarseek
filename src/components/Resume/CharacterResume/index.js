import React from 'react'
import { connect } from 'react-redux'
import { selectItem } from 'components/Search/slice'
import Spinner from 'components/Spinner'
import getImageFromUrl from 'components/utils/getImgFromUrl'
import './styles.scss'

function CharacterResume({ character, selectItem, loading }) {
  return (
    <div>
      <div className="character-resume__name">{character.name}</div>
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
            {loading
            ? <Spinner />
            : 
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
            }
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  loading: state.search.loadingExtraData,
})

const actions = {
  selectItem
}

export default connect(mapStateToProps, {...actions})(CharacterResume);
