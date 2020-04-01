import { createSelector } from 'reselect'
import { get } from 'lodash'

export const selectSearchLoading = state => state.search.loading
export const selectSelectedItem = state => state.search.selectedItem
export const selectCategory = state => state.search.category
export const selectCount = state => state.search.data.count
export const selectSearchData = state => get(state, 'search.data')
export const selectSearchResults = createSelector(
    [selectSearchData],
    data => data?.results
)