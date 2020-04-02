import { createSlice } from '@reduxjs/toolkit'

const SearchSlice = createSlice({
  name: 'search',
  initialState: {
    loading: false,
    data: {},
    category: 'people'
  },
  reducers: {
    fetchData(state) {
      state.loading = true
    },
    fetchDataError(state, { payload }) {
      state.loading = false
      state.error = payload.error
    },
    fetchDataSuccess(state, { payload }) {
      state.data = payload
      state.loading = false
    },
    fetchExtraDataSuccess(state, { payload }) {
      state.selectedItem[payload.field] = payload.data
    },
    fetchExtraDataFail(state, { payload }) {
      state.loading = false
      state.error = payload.error
    },
    loadMoreData(state) {

    },
    loadMoreDataSuccess(state, { payload }) {
      state.data = {
        ...payload,
        results: [...state.data.results, ...payload.results],
      }
    },
    loadMoreDataFail(state, { payload }) {
      state.error = payload
    },
    selectItem(state, { payload }) {
      state.selectedItem = payload
    },
    changeCategory(state, { payload }) {
      state.category = payload
      state.data = {}
    }
  }
})

export const {
  fetchData,
  fetchDataError,
  fetchDataSuccess,
  selectItem,
  changeCategory,
  fetchExtraDataSuccess,
  fetchExtraDataFail,
  loadMoreData,
  loadMoreDataSuccess,
  loadMoreDataFail
} = SearchSlice.actions

export default SearchSlice.reducer