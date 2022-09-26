import { takeLatest, call, put } from 'redux-saga/effects';
import { MemberService } from '../../services';
import { AxiosResponse } from 'axios';
import { ChildDto, MemberDto, MemberTreeDto } from '../../ts';
import { ActionCreateChild, ActionCreateMember, ActionType } from '../../ts';

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

export function* createMember(action: ActionCreateMember) {
    try {
        const data: AxiosResponse<MemberTreeDto> = yield call(MemberService.create, action.payload);
        yield put({ type: ActionType.ADD_MEMBER, payload: data.data });
    } catch (e) {
        throw e;
    }
}

export function* watchClickSaga() {
    yield takeLatest(ActionType.FETCH_MEMBERS, fetchBranches);
    yield takeLatest(ActionType.CREATE_CHILD, createChild);
    yield takeLatest(ActionType.CREATE_MEMBER, createMember);
}

export default function* rootSaga() {
    yield watchClickSaga();
}
