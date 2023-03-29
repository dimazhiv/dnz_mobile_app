import { takeLatest } from 'redux-saga/effects';
import { testSaga } from 'redux-saga-test-plan';
import { onLoadPhotosList } from '../sagaActions';
import { loadPhotosList } from '../services';
import { setPhotos } from '../slice';
import {_onLoadPhotosList, watchOnLoadPhotosList} from './onLoadPhotosList';

describe('galleryFeature.onLoadPhotosList saga', () => {
  it('should do properly actions for load photos list', () => {
    const photos = {
      photosIds: ['8432423659', '8047948330'],
      byId: {
        '13892714966': {
          farm: 8,
          has_comment: 0,
          id: '13892714966',
          is_primary: 0,
          isfamily: 0,
          isfriend: 0,
          ispublic: 1,
          owner: '36587311@N08',
          secret: 'ae06a2ee97',
          server: '7460',
          title: 'mountain'
        },
        '14412870627': {
          farm: 4,
          has_comment: 0,
          id: '14412870627',
          is_primary: 0,
          isfamily: 0,
          isfriend: 0,
          ispublic: 1,
          owner: '85737574@N02',
          secret: '5a469dda2a',
          server: '3896',
          title: 'Neighbours'
        },
      }
    };
    testSaga(_onLoadPhotosList)
        .next()
        .call(loadPhotosList)
        .next(photos)
        .put(setPhotos(photos))
        .next()
        .isDone();
  });
});

describe('galleryFeature.onLoadPhotosList watcher', () => {
  it('should fire on onLoadPhotosList action', () => {
    const generator = watchOnLoadPhotosList();
    expect(generator.next().value).toEqual(takeLatest(onLoadPhotosList.type, _onLoadPhotosList));
  });
});
