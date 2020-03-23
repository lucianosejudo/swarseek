import { call, put, takeLatest } from 'redux-saga/effects'
import { 
  fetchData,
  fetchDataError,
  fetchDataSuccess,
  fetchMovies,
  fetchMoviesError,
  fetchMoviesSuccess,
} from './slice'
import { fetchDataApi } from './api'

function* fetchUserWorker({ payload }) {
   try {
		const { data } = yield call(fetchDataApi, payload)
		yield put(fetchDataSuccess(data));
   } catch (e) {
    yield put(fetchDataError({ error: e.message }));
   }
}

function* fetchDataWatcher() {
  yield takeLatest(fetchData().type, fetchUserWorker);
}

function* fetchMoviesWorker({ payload }) {
   try {
		const { data } = yield call(fetchData, payload)
		yield put(fetchMoviesSuccess(data));
   } catch (e) {
		yield put(fetchMoviesError({ error: e.message }));
   }
}

function* fetchMoviesWatcher() {
  yield takeLatest(fetchMovies().type, fetchMoviesWorker);
}


export default [fetchDataWatcher, fetchMoviesWatcher];