import { call, put, takeLatest , all } from 'redux-saga/effects'
import { 
  fetchData,
  fetchDataError,
  fetchDataSuccess,
  selectItem,
  fetchExtraDataSuccess,
  fetchExtraDataFail,
} from './slice'
import { fetchDataApi, fetchFromApi } from './api'
import { EXTRA_DATA } from './utils'

function* fetchUserWorker({ payload }) {
   try {
    let { data } = yield call(fetchDataApi, payload)
		yield put(fetchDataSuccess(data));
   } catch (e) {
    yield put(fetchDataError({ error: e.message }));
   }
}

function* fetchDataWatcher() {
  yield takeLatest(fetchData().type, fetchUserWorker);
}

function* fetchExtraDataWorker({ payload }) {
  try {
    const keys = Object.keys(payload)
    const extraData = keys.filter(key => EXTRA_DATA.includes(key))

    for (const field of extraData) {
      const calls = payload[field].map(api => call(fetchFromApi, api))
      const results = yield all(calls)
      const data = results.map(res => res.data)
      yield put(fetchExtraDataSuccess({ field, data }))
    }
  } catch (e) {
   yield put(fetchExtraDataFail({ error: e.message }));
  }
}

function* fetchExtraDataWatcher() {
 yield takeLatest(selectItem().type, fetchExtraDataWorker);
}

function * rootSaga() {
  yield all([
    fetchDataWatcher(),
    fetchExtraDataWatcher(),
  ])
}

export default rootSaga;