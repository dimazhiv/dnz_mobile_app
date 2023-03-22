import { all, call } from 'redux-saga/effects';
import { saga as racersSaga } from './features/racers';
import { saga as gallerySaga } from './features/gallery';
import { saga as appSaga } from './features/app';

function* rootSaga() {
  yield all([call(appSaga), call(gallerySaga), call(racersSaga)]);
}

export default rootSaga;
