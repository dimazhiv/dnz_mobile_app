import {configureStore} from '@reduxjs/toolkit'
import {reducer as racersReducer} from 'racersFeature';
import {persistStore} from "redux-persist";

export default function setupStore(initialState = {}) {
    const store = configureStore({
        racersReducer,
        initialState,
    });
    const persistor = persistStore(store);
    return {persistor, store};
};
