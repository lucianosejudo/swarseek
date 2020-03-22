import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { debounce } from 'lodash'
import InputSearch from 'components/InputSearch'
import ItemList from 'components/ItemList'
import { selectSearchLoading, selectSearchResults } from './selectors'
import { fetchData } from './slice'

function Search({ fetchData, results }) {

  function onChange(e) {
    fetchData(e)
  }

  return (
    <div className="search">
      <InputSearch onChange={debounce(onChange, 300)}/>
      <div className="search__results">
        {results && <ItemList items={results} />}
      </div>
    </div>
  )
}

Search.propTypes = {
  fetchData: PropTypes.func.isRequired,
  loading: PropTypes.bool,
}

const mapStateToProps = state => ({
  loading: selectSearchLoading(state),
  results: selectSearchResults(state)
})

export default connect(mapStateToProps, { fetchData })(Search);