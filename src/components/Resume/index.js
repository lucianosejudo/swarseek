import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectSelectedItem } from 'components/Search/selectors'

function Resume({ selectedItem }) {
  return (
    <div className="resume">
      {selectedItem && selectedItem.name}
    </div>
  )
}

Resume.propTypes = {
  selectedItem: PropTypes.object,
}

const mapStateToProps = state => ({
  selectedItem: selectSelectedItem(state),
})

const actions = {
}

export default connect(mapStateToProps, actions)(Resume);

