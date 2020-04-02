import { call, put, takeLatest , all } from 'redux-saga/effects'
import { 
  fetchData,
  fetchDataError,
  fetchDataSuccess,
  selectItem,
  fetchExtraData,
  fetchExtraDataSuccess,
  fetchExtraDataFail,
  loadMoreData,
  loadMoreDataSuccess,
  loadMoreDataFail
} from './slice'
import { fetchDataApi, fetchFromApi } from './api'
import { EXTRA_DATA } from './utils'

function* fetchDataWorker({ payload }) {
   try {
    let { data } = yield call(fetchDataApi, payload)
		yield put(fetchDataSuccess(data));
   } catch (e) {
    yield put(fetchDataError({ error: e.message }));
   }
}

function* fetchDataWatcher() {
  yield takeLatest(fetchData().type, fetchDataWorker);
}

function* fetchExtraDataWorker({ payload }) {
  try {
    yield put(fetchExtraData())
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

function* loadMoreDataWorker({ payload }) {
  try {
   let { data } = yield call(fetchFromApi, payload)
   yield put(loadMoreDataSuccess(data));
  } catch (e) {
   yield put(loadMoreDataFail({ error: e.message }));
  }
}

function* loadMoreDataWatcher() {
 yield takeLatest(loadMoreData().type, loadMoreDataWorker);
}


function * rootSaga() {
  yield all([
    fetchDataWatcher(),
    fetchExtraDataWatcher(),
    loadMoreDataWatcher()
  ])
}

export default rootSaga;