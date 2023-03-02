import {all, call} from 'redux-saga/effects';

import {watchOnRacerButtonPress} from './onRacerButtonPress';
import {watchOnDriverNamePress} from "./onDriverNamePress";
import {watchOnLoadDriversData} from "./onLoadDriversData";

export default function* racersSaga() {
    yield all([
        call(watchOnRacerButtonPress),
        call(watchOnLoadDriversData),
        call(watchOnDriverNamePress)
    ]);
}
