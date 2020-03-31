import React from 'react'
import PropTypes from 'prop-types'
import CharacterResume from './CharacterResume'
import FilmResume from './FilmResume'
import './styless.scss'
function Resume({ item , selectItem }) {
  return (
    <div className="resume">
        <>
        {item.name
          ? <CharacterResume character={item} selectItem={selectItem} />
          : <FilmResume film={item} />
        }
        </>
    </div>
  )
}

Resume.propTypes = {
  selectedItem: PropTypes.object,
}

export default Resume;

