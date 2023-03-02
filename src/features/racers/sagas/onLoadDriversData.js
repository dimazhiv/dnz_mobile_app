import {call, put, takeLatest} from 'redux-saga/effects';
import {onLoadDriversData, setDriversData} from "../slice" ;
import {loadDriversData} from "../../services/api";

export function* _onLoadDriversData() {

    console.log('----saga racers._onLoadDriversData saga-----');
    const limit = 10;
    const offset = 60;
    try {
        const driversData = yield call(loadDriversData, limit, offset);
        yield put(setDriversData(driversData));
    } catch (error) {
        console.error(error);
    }
}

export function* watchOnLoadDriversData() {
    yield takeLatest(onLoadDriversData.type, _onLoadDriversData);
}
