import { takeLatest } from 'redux-saga/effects';
import { onDriverNamePress } from '../sagaActions';

export function* _onDriverNamePress() {
  console.log('----saga racers._onDriverNamePress saga-----');
}

export function* watchOnDriverNamePress() {
  yield takeLatest(onDriverNamePress.type, _onDriverNamePress);
}
