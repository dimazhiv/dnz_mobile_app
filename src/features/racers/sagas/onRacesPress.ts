import { call, put, select, takeLatest } from 'redux-saga/effects';
import { onRacesPress } from '../sagaActions';
import { navigateTo } from '../../../App';
import { RACES_SCREEN } from '../../../rootConstants';
import { PayloadAction } from '@reduxjs/toolkit';
import { loadDriverRacesData } from '../services';
import { setRacesData, setShowRacesLoading } from '../slice';
import { RaceData } from '../../../types/RaceData';
import { getDriverName } from '../selectors';

export function* _onRacesPress({ payload }: PayloadAction<string>) {
  console.log('----saga racers._onRacesPress saga-----', payload);
  const driverName: string = yield select(getDriverName, payload);
  yield call(navigateTo, RACES_SCREEN, { title: driverName });
  yield put(setShowRacesLoading(true));
  const races: RaceData[] = yield call(loadDriverRacesData, payload);
  yield put(setRacesData(races));
  yield put(setShowRacesLoading(false));
}

export function* watchOnRacesPress() {
  yield takeLatest(onRacesPress.type, _onRacesPress);
}
