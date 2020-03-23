import { createSlice } from '@reduxjs/toolkit'

const SearchSlice = createSlice({
  name: 'search',
  initialState: {
    loading: false,
    data: {},
    category: 'people'
  },
  reducers: {
    fetchData(state, action) {
      state.loading = true
    },
    fetchDataError(state, action) {
      state.loading = false
      state.error = action.payload.error
    },
    fetchDataSuccess(state, action) {
      state.data = action.payload
      state.loading = false
    },
    fetchMovies(state, action) {
      state.loading = true
    },
    fetchMoviesError(state, action) {
      state.loading = false
      state.error = action.payload.error
    },
    fetchMoviesSuccess(state, action) {
      state.data = action.payload
      state.loading = false
    },
    selectItem(state, action) {
      state.selectedItem = action.payload
    },
    changeCategory(state, action) {
      state.category = action.payload
    }
  }
})

export const {
  fetchData,
  fetchDataError,
  fetchDataSuccess,
  fetchMovies,
  fetchMoviesError,
  fetchMoviesSuccess,
  selectItem,
  changeCategory
} = SearchSlice.actions

export default SearchSlice.reducer