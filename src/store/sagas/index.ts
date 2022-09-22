import { takeLatest, call, put } from 'redux-saga/effects';
import { MemberService } from '../../services';
import { BranchDto } from '../../ts';
import { AxiosResponse } from 'axios';
import { ActionType } from '../reducers/member';

export function* fetchBranches() {
    try {
        const data: AxiosResponse<BranchDto[]> = yield call(MemberService.getAll);
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
