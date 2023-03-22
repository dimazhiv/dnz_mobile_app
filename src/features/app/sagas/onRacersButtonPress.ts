import { call, put, takeLatest } from 'redux-saga/effects';
import { navigateTo } from '../../../App';
import { DRIVERS_TABLE_SCREEN } from '../../../rootConstants';
import { PayloadAction } from '@reduxjs/toolkit';
import { initDataRequest } from '../../racers/sagaActions';
import { onRacersButtonPress } from '../sagaActions';

export function* _onRacersButtonPress({ payload }: PayloadAction<string>) {
  console.log('----saga racers._onRacersButtonPress saga-----', payload);
  yield call(navigateTo, DRIVERS_TABLE_SCREEN, null);
  yield put(initDataRequest());
}

export function* watchOnRacersButtonPress() {
  yield takeLatest(onRacersButtonPress.type, _onRacersButtonPress);
}
