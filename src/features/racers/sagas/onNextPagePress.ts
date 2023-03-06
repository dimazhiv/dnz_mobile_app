import { put, select, takeLatest } from 'redux-saga/effects';
import { setCurrentPage } from '../slice';
import { onNextPagePress, onSelectDriversDataForCurrentPage } from '../sagaActions';
import { getCurrentPage } from '../selectors';

export function* _onNextPagePress() {
  console.log('----saga racers._onNextPagePress saga-----');
  const currentPageNumber: number = yield select(getCurrentPage);
  const nextPage = currentPageNumber + 1;
  yield put(setCurrentPage(nextPage));

  yield put(onSelectDriversDataForCurrentPage(nextPage));
}

export function* watchOnNextPagePress() {
  yield takeLatest(onNextPagePress.type, _onNextPagePress);
}
