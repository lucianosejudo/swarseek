  import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { debounce } from 'lodash'
import InputSearch from 'components/InputSearch'
import ItemList from 'components/ItemList'
import { selectSearchLoading, selectSearchResults } from './selectors'
import { fetchUsers, selectItem } from './slice'

function Search({ fetchUsers, results, selectItem }) {

  function onChange(search) {
    fetchUsers(search)
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
  fetchUsers: PropTypes.func.isRequired,
  loading: PropTypes.bool,
}

const mapStateToProps = state => ({
  loading: selectSearchLoading(state),
  results: selectSearchResults(state)
})

const actions = {
  selectItem,
  fetchUsers
}

export default connect(mapStateToProps, actions)(Search);