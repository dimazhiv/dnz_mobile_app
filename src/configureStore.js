import { configureStore } from '@reduxjs/toolkit'
import racersReducer from './racersReducer';
import rootSaga from './rootSaga';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReducer
  }
})


//
// import { applyMiddleware, createStore } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import { persistStore } from 'redux-persist';
// import rootReducer from './rootReducer';
// import rootSaga from './rootSaga';
//
// export default function configureStore(initialState = {}) {
//   const sagaMiddleware = createSagaMiddleware();
//   const middleware = [sagaMiddleware];
//   const store = configureStore(rootReducer(), initialState,   middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware().concat(middleware));
//   sagaMiddleware.run(rootSaga);
//   const persistor = persistStore(store);
//   return { persistor, store };
}
