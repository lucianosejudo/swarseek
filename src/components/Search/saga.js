import { call, put, takeLatest } from 'redux-saga/effects'
import { 
  fetchData,
  fetchDataError,
  fetchDataSuccess,
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

export default [fetchDataWatcher];