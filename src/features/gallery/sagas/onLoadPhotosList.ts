import { call, put, takeLatest } from 'redux-saga/effects';
import { loadPhotosList } from '../services';
import { onLoadPhotosList } from '../sagaActions';
import { setPhotos } from '../slice';
import { NormalizedPhotos } from '../../../types/NormalizedPhotos';

export function* _onLoadPhotosList() {
  console.log('----saga galleryFeature._onLoadPhotosList saga-----');
  try {
    const photos = (yield call(loadPhotosList)) as NormalizedPhotos;
    yield put(setPhotos(photos));
    console.log('!!!!!!!!CONSOLE!!!!!!!!: ', photos);
  } catch (error) {
    console.error(error);
  }
}

export function* watchOnLoadPhotosList() {
  yield takeLatest(onLoadPhotosList.type, _onLoadPhotosList);
}
