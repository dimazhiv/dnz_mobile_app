import { call, put, takeLatest } from 'redux-saga/effects';
import { setDriversData, setMaxOffset } from '../slice';
import { loadDriversData } from '../services';
import { LoadedDrivers } from '../../../types/LoadedDrivers';
import { onLoadDriversData } from '../sagaActions';
import { DRIVERS_NUMBER_LIMIT } from '../../../rootConstants';

export function* _onLoadDriversData() {
  console.log('----saga racers._onLoadDriversData saga-----');
  try {
    const driversData = (yield call(loadDriversData, DRIVERS_NUMBER_LIMIT, 0)) as LoadedDrivers;
    yield put(setDriversData(driversData));
    yield put(setMaxOffset(DRIVERS_NUMBER_LIMIT));
  } catch (error) {
    console.error(error);
  }
}

export function* watchOnLoadDriversData() {
  yield takeLatest(onLoadDriversData.type, _onLoadDriversData);
}
