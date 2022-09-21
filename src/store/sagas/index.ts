import { takeLatest } from 'redux-saga/effects';
import { FETCH_BRANCHES } from '../constants';

export function* workerSaga() {

}

export function* watchClickSaga() {
    yield takeLatest(FETCH_BRANCHES, workerSaga);
}

export default function* rootSaga() {
    yield watchClickSaga();
}
