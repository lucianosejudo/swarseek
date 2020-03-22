import { createSelector } from 'reselect'
import { get } from 'lodash'

export const selectSearchLoading = state => state.search.loading
export const selectSearchData = state => get(state, 'search.data')
export const selectSearchResults = createSelector(
    [selectSearchData],
    data => data?.results
)