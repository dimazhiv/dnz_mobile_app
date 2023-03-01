import {all, call} from 'redux-saga/effects';
import {saga as racersSaga} from './features/racers';

function* rootSaga() {
    yield all(
        [
            call(racersSaga)
        ]);
}

export default rootSaga;
