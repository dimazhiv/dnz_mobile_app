import { put, takeLatest } from 'redux-saga/effects';
import {setUser} from "../reducer";

export function* _onRacerButtonPress( ) {
  console.log('----saga racers._onRacerButtonPress saga-----');

  yield put(setUser({username:"FROM SAGA"}));

}

export function* watchOnRacerButtonPress() {
  yield takeLatest('ON_RACER_BUTTON_PRESS', _onRacerButtonPress);
}
