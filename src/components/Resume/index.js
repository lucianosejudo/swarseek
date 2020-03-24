import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectSelectedItem } from 'components/Search/selectors'
import './styless.scss'
function Resume({ item }) {
  return (
    <div className="resume">
      {item && (
        <>
          <div className="resume__name">{item.name}</div>
          <div className="resume__eyes">Color de ojos: {item.eye_color}</div>
          <div className="resume__height">Altura: {item.height}cm</div>
          <div className="resume__mass">Peso: {item.mass}kg</div>
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
}

export default connect(mapStateToProps, actions)(Resume);

