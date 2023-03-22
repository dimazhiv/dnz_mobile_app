import { all, call } from 'redux-saga/effects';
import { watchOnRacersButtonPress } from './onRacersButtonPress';
import { watchOnGalleryButtonPress } from './onGalleryButtonPress';

export default function* appSaga() {
  yield all([call(watchOnRacersButtonPress), call(watchOnGalleryButtonPress)]);
}
