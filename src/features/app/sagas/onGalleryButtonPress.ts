import { call, put, takeLatest } from 'redux-saga/effects';
import { navigateTo } from '../../../App';
import { GALLERY_SCREEN} from '../../../rootConstants';
import { PayloadAction } from '@reduxjs/toolkit';
import { onGalleryButtonPress } from '../sagaActions';
import { onLoadPhotosList } from '../../gallery/sagaActions';

export function* _onGalleryButtonPress({ payload }: PayloadAction<string>) {
  console.log('----saga racers._onRacersButtonPress saga-----', payload);
  yield call(navigateTo, GALLERY_SCREEN, null);
  yield put(onLoadPhotosList());
}

export function* watchOnGalleryButtonPress() {
  yield takeLatest(onGalleryButtonPress.type, _onGalleryButtonPress);
}
