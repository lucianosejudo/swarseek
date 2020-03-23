import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectSelectedItem } from 'components/Search/selectors'
import { selectItem } from 'components/Search/slice'

function Resume({ item }) {
  return (
    <div className="resume">
      {item && (
        <>
          {Object.keys(item).map(key => <div>{`${key}: ${item[key]}`}</div>)}
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

