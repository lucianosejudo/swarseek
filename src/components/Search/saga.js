import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchData, fetchDataError, fetchDataSuccess } from './slice'
import { fetchPeopleData } from './api'

function* fetchUser({ payload }) {
   try {
      const { data } = yield call(fetchPeopleData, payload)
      yield put(fetchDataSuccess(data));
   } catch (e) {
      yield put(fetchDataError({ error: e.message }));
   }
}

function* fetchDataWatcher() {
  yield takeLatest(fetchData().type, fetchUser);
}

export default fetchDataWatcher;