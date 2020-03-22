import { combineReducers } from 'redux'
import searchReducer from 'components/Search/slice'

export default combineReducers({
  search: searchReducer,
})