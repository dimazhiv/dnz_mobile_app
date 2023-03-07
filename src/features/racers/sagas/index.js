import { all, call } from 'redux-saga/effects';

import { watchOnDriverNamePress } from './onDriverNamePress';
import { watchOnLoadDriverInfo } from './onLoadDriverInfo';
import { watchOnNextPagePress } from './onNextPagePress';
import { watchOnPrevPagePress } from './onPrevPagePress';
import { watchOnSelectDriversDataForCurrentPage } from './onSelectDriversDataForCurrentPage';
import { watchInitDataRequest } from './initDataRequest';

export default function* racersSaga() {
  yield all([
    call(watchInitDataRequest),
    call(watchOnDriverNamePress),
    call(watchOnLoadDriverInfo),
    call(watchOnNextPagePress),
    call(watchOnPrevPagePress),
    call(watchOnSelectDriversDataForCurrentPage)
  ]);
}
