import { put, takeLatest } from 'redux-saga/effects';
import {onLoadDriversData, onRacerButtonPress} from '../sagaActions';

export function* _onRacerButtonPress({}) {
  console.log('----saga racers._onRacerButtonPress saga-----');
  yield put(onLoadDriversData());
}

export function* watchOnRacerButtonPress() {
  yield takeLatest(onRacerButtonPress.type, _onRacerButtonPress);
}
