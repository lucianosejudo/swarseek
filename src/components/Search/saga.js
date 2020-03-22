import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchData, fetchDataError, fetchDataSuccess } from './slice'

function* fetchUser(action) {
   try {
      yield put(fetchDataSuccess());
   } catch (e) {
      yield put(fetchDataError({ error: e.message }));
   }
}

function* fetchDataWatcher() {
  yield takeLatest(fetchData().type, fetchUser);
}

export default fetchDataWatcher;