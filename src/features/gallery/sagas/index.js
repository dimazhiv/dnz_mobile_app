import { all, call } from 'redux-saga/effects';

import { watchOnLoadPhotosList } from './onLoadPhotosList';

export default function* gallerySaga() {
  yield all([call(watchOnLoadPhotosList)]);
}
