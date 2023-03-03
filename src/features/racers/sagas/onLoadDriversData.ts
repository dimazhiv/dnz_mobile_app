import { call, put, takeLatest } from 'redux-saga/effects';
import { onLoadDriversData, setDriversData } from '../slice';
import { loadDriversData } from '../services';
import { LoadedDrivers } from '../../../types/LoadedDrivers';

export function* _onLoadDriversData() {
  console.log('----saga racers._onLoadDriversData saga-----');
  const limit = 10;
  const offset = 60;
  try {
    const driversData = (yield call(loadDriversData, limit, offset)) as LoadedDrivers;
    yield put(setDriversData(driversData));
  } catch (error) {
    console.error(error);
  }
}

export function* watchOnLoadDriversData() {
  yield takeLatest(onLoadDriversData.type, _onLoadDriversData);
}
