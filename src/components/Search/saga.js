import { call, put, takeLatest , all } from 'redux-saga/effects'
import { 
  fetchData,
  fetchDataError,
  fetchDataSuccess,
  selectItem,
} from './slice'
import { fetchDataApi, fetchImage } from './api'

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

function* fetchImageWorker({ payload }) {
  try {
    const data = yield call(fetchImage, payload.name)
    console.log(data)
  } catch (e) {
   yield put(fetchDataError({ error: e.message }));
  }
}

function* fetchImageWatcher() {
 yield takeLatest(selectItem().type, fetchImageWorker);
}

function * rootSaga() {
  yield all([
    fetchImageWatcher(),
    fetchDataWatcher(),
  ])
}

export default rootSaga;