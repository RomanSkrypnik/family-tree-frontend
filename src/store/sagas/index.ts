import { takeLatest, call, put } from 'redux-saga/effects';
import { MemberService } from '../../services';
import { AxiosResponse } from 'axios';
import { ActionCreateChild, ActionType } from '../reducers/member';
import { ChildDto, MemberDto } from '../../ts';

export function* fetchBranches() {
    try {
        const data: AxiosResponse<MemberDto[]> = yield call(MemberService.getTrees);
        yield put({ type: ActionType.SET_MEMBERS, payload: data.data });
    } catch (e) {
        throw e;
    }
}

export function* createChild(action: ActionCreateChild) {
    try {
        const data: AxiosResponse<ChildDto> = yield call(MemberService.createChild, action.payload);
        yield put({ type: ActionType.ADD_CHILD, payload: data.data });
    } catch (e) {
        throw e;
    }
}

export function* watchClickSaga() {
    yield takeLatest(ActionType.FETCH_MEMBERS, fetchBranches);
    yield takeLatest(ActionType.CREATE_CHILD, createChild);
}

export default function* rootSaga() {
    yield watchClickSaga();
}
