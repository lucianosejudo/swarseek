  import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { debounce } from 'lodash'
import InputSearch from 'components/InputSearch'
import ItemList from 'components/ItemList'
import { selectSearchLoading, selectSearchResults, selectCategory } from './selectors'
import { fetchData, selectItem } from './slice'

function Search({
    category,
    fetchData,
    results,
    selectItem,
  }) {

  function onChange(search) {
    fetchData({ category, search })
  }

  function onItemClick(item) {
    selectItem(item)
  }

  return (
    <div className="search">
      <InputSearch onChange={debounce(onChange, 300)}/>
      <div className="search__results">
        {results && <ItemList items={results} onItemClick={onItemClick} />}
      </div>
    </div>
  )
}

Search.propTypes = {
  fetchData: PropTypes.func.isRequired,
  loading: PropTypes.bool,
}

const mapStateToProps = state => ({
  category: selectCategory(state),
  loading: selectSearchLoading(state),
  results: selectSearchResults(state)
})

const actions = {
  selectItem,
  fetchData
}

export default connect(mapStateToProps, actions)(Search);