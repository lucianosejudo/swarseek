import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import InfiniteScroll from 'react-infinite-scroller';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux'
import { debounce } from 'lodash'
import Spinner from 'components/Spinner'
import InputSearch from 'components/InputSearch'
import ItemList from 'components/ItemList'
import {
  selectSearchLoading,
  selectSearchResults,
  selectCategory,
  selectCount,
  selectSearchNextPage,
} from './selectors'
import { fetchData, selectItem, loadMoreData } from './slice'
import './styles.scss'

function Search({
    category,
    fetchData,
    results,
    loading,
    selectItem,
    nextPage,
    loadMoreData
  }) {

  function onChange(search) {
    fetchData({ category, search })
  }

  function onItemClick(item) {
    selectItem(item)
  }

  function handleLoadMore() {
    loadMoreData(nextPage)
  }

  return (
    <div className="search">
      <InputSearch onChange={debounce(onChange, 300)}/>
      <div className={cn('search__results', { 'search__results--loading': loading }) }>
        {results && (
          <InfiniteScroll
            pageStart={0}
            loadMore={() => handleLoadMore()}
            hasMore={!!nextPage}
            loader={<div style={{ textAlign: 'center' }}><CircularProgress /></div>}
          >
            <ItemList items={results} onItemClick={onItemClick} />
          </InfiniteScroll>
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
  count: selectCount(state),
  nextPage: selectSearchNextPage(state)
})

const actions = {
  selectItem,
  fetchData,
  loadMoreData
}

export default connect(mapStateToProps, actions)(Search);