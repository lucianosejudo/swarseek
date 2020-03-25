import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectSelectedItem } from 'components/Search/selectors'
import { selectItem } from 'components/Search/slice'
import './styless.scss'
function Resume({ item , selectItem }) {
  return (
    <div className="resume">
      {item && (
        <>
          <div className="resume__name">{item.name || item.title}</div>
          <div className="resume__eyes">Color de ojos: {item.eye_color}</div>
          <div className="resume__height">Altura: {item.height}cm</div>
          <div className="resume__mass">Peso: {item.mass}kg</div>
          <div className="resume__list">
            <div>Peliculas en las que aparecio:</div>
            <ul>
              {item.films?.map(film =>
                <li
                  className="resume__list-item"
                  onClick={() => selectItem(film)}
                >
                  {film.title}
                </li>
              )}
            </ul>
          </div>
        </>
      )}
    </div>
  )
}

Resume.propTypes = {
  selectedItem: PropTypes.object,
}

const mapStateToProps = state => ({
  item: selectSelectedItem(state),
})

const actions = {
  selectItem
}

export default connect(mapStateToProps, actions)(Resume);

