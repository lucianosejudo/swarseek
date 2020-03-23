import { createSlice } from '@reduxjs/toolkit'

const SearchSlice = createSlice({
  name: 'search',
  initialState: {
    loading: false,
    data: {},
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
    selectItem(state, action) {
      state.selectedItem = action.payload
    }
  }
})

export const { fetchData, fetchDataError, fetchDataSuccess, selectItem } = SearchSlice.actions

export default SearchSlice.reducer