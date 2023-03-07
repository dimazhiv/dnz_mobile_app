import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import racersSlice from './features/racers/slice';
import rootSaga from './rootSaga';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { constants as racersConstants } from './features/racers';
import AsyncStorage from '@react-native-community/async-storage';

const racersPersistConfig = {
  key: racersConstants.NAME,
  storage: AsyncStorage
};

const rootReducer = combineReducers({
  racers: racersSlice
  // racers: persistReducer(racersPersistConfig, racersSlice)
});

export default function setupStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    devTools: true,
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: false,
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
      }).concat(sagaMiddleware)
  });
  sagaMiddleware.run(rootSaga);

  // const persistor = persistStore(store);
  return { store };
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
// export type AppDispatch = AppStore['persistor'];
