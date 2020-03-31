import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectSelectedItem } from 'components/Search/selectors'
import { selectItem } from 'components/Search/slice'
import CharacterResume from './CharacterResume'
import FilmResume from './FilmResume'
import './styless.scss'
function Resume({ item , selectItem }) {
  return (
    <div className="resume">
      {item && (
        <>
        {item.name
        ? <CharacterResume character={item} selectItem={selectItem} />
        : <FilmResume film={item} />}
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

