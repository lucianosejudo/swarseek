  import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { connect } from 'react-redux'
import { debounce } from 'lodash'
import Spinner from 'components/Spinner'
import Pagination from 'components/Pagination'
import InputSearch from 'components/InputSearch'
import ItemList from 'components/ItemList'
import {
  selectSearchLoading,
  selectSearchResults,
  selectCategory,
  selectCount,
} from './selectors'
import { fetchData, selectItem } from './slice'
import './styles.scss'

function Search({
    category,
    fetchData,
    results,
    loading,
    selectItem,
    count
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
      <div className={cn('search__results', { 'search__results--loading': loading }) }>
        {results && (
          <>
            <ItemList items={results} onItemClick={onItemClick} />
            <Pagination count={count} />
          </>
        )}

        {loading && <Spinner />}
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
  results: selectSearchResults(state),
  count: selectCount(state)
})

const actions = {
  selectItem,
  fetchData
}

export default connect(mapStateToProps, actions)(Search);