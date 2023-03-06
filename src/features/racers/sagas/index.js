import { all, call } from 'redux-saga/effects';

import { watchOnRacerButtonPress } from './onRacerButtonPress';
import { watchOnDriverNamePress } from './onDriverNamePress';
import { watchOnLoadDriversData } from './onLoadDriversData';
import { watchOnLoadDriverInfo } from './onLoadDriverInfo';
import { watchOnNextPagePress } from './onNextPagePress';
import { watchOnPrevPagePress } from './onPrevPagePress';
import { watchOnSelectDriversDataForCurrentPage } from './onSelectDriversDataForCurrentPage';

export default function* racersSaga() {
  yield all([
    call(watchOnRacerButtonPress),
    call(watchOnLoadDriversData),
    call(watchOnDriverNamePress),
    call(watchOnLoadDriverInfo),
    call(watchOnNextPagePress),
    call(watchOnPrevPagePress),
    call(watchOnSelectDriversDataForCurrentPage)
  ]);
}
