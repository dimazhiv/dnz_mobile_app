import { call, put, takeLatest } from 'redux-saga/effects';
import { setActiveDriverInfo } from '../slice';
import { onLoadDriverInfo } from '../sagaActions';
import { loadDriverInfoData } from '../services';
import { DriverData } from '../../../types/DriverData';

export function* _onLoadDriverInfo({ payload }) {
  console.log('----saga racers._onLoadDriversData saga-----', payload);
  try {
    const driverInfo = (yield call(loadDriverInfoData, payload)) as DriverData;
    yield put(setActiveDriverInfo(driverInfo));
  } catch (error) {
    console.error(error);
  }
}

export function* watchOnLoadDriverInfo() {
  yield takeLatest(onLoadDriverInfo.type, _onLoadDriverInfo);
}
