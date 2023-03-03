import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import racersSlice from "./features/racers/slice";
import rootSaga from "./rootSaga";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import {constants as racersConstants} from "./features/racers"
import AsyncStorage from "@react-native-community/async-storage";

export default function setupStore(initialState = {}) {

    const racersPersistConfig = {
        key: [racersConstants.NAME],
        storage: AsyncStorage
    };

    const sagaMiddleware = createSagaMiddleware();
    const store = configureStore({
            reducer: {racers: persistReducer(racersPersistConfig, racersSlice)},
            middleware:
                (getDefaultMiddleware) =>
                    getDefaultMiddleware({
                        thunk: false,
                        serializableCheck: {
                            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                        },
                    }).concat(sagaMiddleware)
        },
    )
    sagaMiddleware.run(rootSaga);

    const persistor = persistStore(store);
    return {persistor, store};
};

export type RootState = ReturnType<typeof racersSlice>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['persistor'];
