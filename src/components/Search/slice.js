import { createSlice } from '@reduxjs/toolkit'

const SearchSlice = createSlice({
  name: 'search',
  initialState: {
    loading: false,
    data: {},
    category: 'personajes'
  },
  reducers: {
    fetchUsers(state, action) {
      state.loading = true
    },
    fetchUsersError(state, action) {
      state.loading = false
      state.error = action.payload.error
    },
    fetchUsersSuccess(state, action) {
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
  fetchUsers,
  fetchUsersError,
  fetchUsersSuccess,
  fetchMovies,
  fetchMoviesError,
  fetchMoviesSuccess,
  selectItem,
  changeCategory
} = SearchSlice.actions

export default SearchSlice.reducer