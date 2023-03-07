import { call, put, takeLatest } from 'redux-saga/effects';
import { onLoadDriverInfo, onRacesPress } from '../sagaActions';
import { navigateTo } from '../../../App';
import { RACES_SCREEN } from '../../../rootConstants';
import { PayloadAction } from '@reduxjs/toolkit';

export function* _onRacesPress({ payload }: PayloadAction<string>) {
  console.log('----saga racers._onRacesPress saga-----', payload);
  yield call(navigateTo, RACES_SCREEN, null);
  yield put(onLoadDriverInfo(payload));
}

export function* watchOnRacesPress() {
  yield takeLatest(onRacesPress.type, _onRacesPress);
}
