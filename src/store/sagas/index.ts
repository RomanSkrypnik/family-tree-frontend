import { takeLatest, call, put } from 'redux-saga/effects';
import { BranchService } from '../../services';
import { BranchDto } from '../../ts';
import { AxiosResponse } from 'axios';
import { ActionType } from '../reducers/branch';

export function* fetchBranches() {
    try {
        const data: AxiosResponse<BranchDto[]> = yield call(BranchService.getAll);
        yield put({ type: ActionType.SET_BRANCHES, payload: data.data });
    } catch (e) {
        throw e;
    }
}

export function* watchClickSaga() {
    yield takeLatest(ActionType.FETCH_BRANCHES, fetchBranches);
}

export default function* rootSaga() {
    yield watchClickSaga();
}
