import {all, call} from 'redux-saga/effects';

import {watchOnRacerButtonPress} from './onRacerButtonPress';

export default function* racersSaga() {
    yield all([
        call(watchOnRacerButtonPress)
    ]);
}
