import { call, put, takeLatest } from 'redux-saga/effects';
import { setDriversData, setMaxOffset } from '../slice';
import { loadDriversData } from '../services';
import { LoadedDrivers } from '../../../types/LoadedDrivers';
import { initDataRequest } from '../sagaActions';
import { DRIVERS_NUMBER_LIMIT } from '../../../rootConstants';

export function* _initDataRequest() {
  console.log('----saga racers._initDataRequest saga-----');
  try {
    const driversData = (yield call(loadDriversData, DRIVERS_NUMBER_LIMIT, 0)) as LoadedDrivers;
    yield put(setDriversData(driversData));
    yield put(setMaxOffset(DRIVERS_NUMBER_LIMIT));
  } catch (error) {
    console.error(error);
  }
}

export function* watchInitDataRequest() {
  yield takeLatest(initDataRequest.type, _initDataRequest);
}
