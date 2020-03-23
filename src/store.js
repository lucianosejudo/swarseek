import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
import searchSaga from 'components/Search/saga'

export default function configureAppStore() {
	const sagaMiddleware = createSagaMiddleware()

	const store = configureStore({
		reducer: rootReducer,
		middleware: [sagaMiddleware],
	})
	sagaMiddleware.run(...searchSaga)

	return store
}