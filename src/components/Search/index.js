import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { debounce } from 'lodash'
import InputSearch from 'components/InputSearch'
import { fetchData } from './slice'

function Search({ fetchData }) {

  function onChange(e) {
    fetchData(e)
  }

  return (
    <div className="search">
      <InputSearch onChange={debounce(onChange, 300)}/>
    </div>
  )
}

Search.propTypes = {
  fetchData: PropTypes.func.isRequired,
  loading: PropTypes.bool,
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, { fetchData })(Search);