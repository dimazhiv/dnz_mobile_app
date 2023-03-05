import { call, put, takeLatest } from 'redux-saga/effects';
import { onDriverNamePress, onLoadDriverInfo } from '../sagaActions';
import { navigateTo } from '../../../App';
import { DRIVER_INFO_SCREEN } from '../../../rootConstants';

export function* _onDriverNamePress({ payload }) {
  console.log('----saga racers._onDriverNamePress saga-----', payload);
  yield call(navigateTo, DRIVER_INFO_SCREEN);
  yield put(onLoadDriverInfo(payload));
}

export function* watchOnDriverNamePress() {
  yield takeLatest(onDriverNamePress.type, _onDriverNamePress);
}
