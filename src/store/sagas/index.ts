import { takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_BRANCHES, SET_BRANCHES } from '../constants';
import { BranchService } from '../../services';
import { BranchDto } from '../../ts';
import { AxiosResponse } from 'axios';

export function* fetchBranches() {
    try {
        const data: AxiosResponse<BranchDto[]> = yield call(BranchService.getAll);
        yield put({ type: SET_BRANCHES, payload: data.data });
    } catch (e) {
        throw e;
    }
}

export function* watchClickSaga() {
    yield takeLatest(FETCH_BRANCHES, fetchBranches);
}

export default function* rootSaga() {
    yield watchClickSaga();
}
