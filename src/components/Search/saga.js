import { call, put, takeLatest } from 'redux-saga/effects'
import { 
fetchUsers,
  fetchUsersError,
  fetchUsersSuccess,
  fetchMovies,
  fetchMoviesError,
  fetchMoviesSuccess,
} from './slice'
import { fetchPeopleData } from './api'

function* fetchUserWorker({ payload }) {
   try {
      const { data } = yield call(fetchPeopleData, payload)
      yield put(fetchUsersSuccess(data));
   } catch (e) {
      yield put(fetchUsersError({ error: e.message }));
   }
}

function* fetchDataWatcher() {
  yield takeLatest(fetchUsers().type, fetchUserWorker);
}

function* fetchMoviesWorker({ payload }) {
   try {
      const { data } = yield call(fetchPeopleData, payload)
      yield put(fetchMoviesSuccess(data));
   } catch (e) {
      yield put(fetchMoviesError({ error: e.message }));
   }
}

function* fetchMoviesWatcher() {
  yield takeLatest(fetchMovies().type, fetchMoviesWorker);
}


export default [fetchDataWatcher, fetchMoviesWatcher];