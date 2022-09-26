import { takeLatest, call, put } from 'redux-saga/effects';
import { MemberService } from '../../services';
import { AxiosResponse } from 'axios';
import {
    ActionDeleteMember,
    ActionUpdateMember,
    CreateChildResponse,
    MemberTreeDto,
    RemoveMemberResponse,
    UpdateMemberResponse,
} from '../../ts';
import { ActionCreateChild, ActionCreateMember, ActionType } from '../../ts';

export function* fetchBranches() {
    try {
        const data: AxiosResponse<MemberTreeDto[]> = yield call(MemberService.getTrees);
        yield put({ type: ActionType.SET_MEMBERS, payload: data.data });
    } catch (e) {
        throw e;
    }
}

export function* createChild(action: ActionCreateChild) {
    try {
        const data: AxiosResponse<CreateChildResponse> = yield call(MemberService.createChild, action.payload);
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

export function* deleteMember(action: ActionDeleteMember) {
    try {
        const data: AxiosResponse<RemoveMemberResponse> = yield call(MemberService.delete, action.payload);
        yield put({ type: ActionType.REMOVE_MEMBER, payload: data.data });
    } catch (e) {
        throw e;
    }
}

export function* updateMember(action: ActionUpdateMember) {
    try {
        const data: AxiosResponse<UpdateMemberResponse> = yield call(MemberService.update, action.payload);
        yield put({ type: ActionType.CHANGE_MEMBER, payload: data.data });
    } catch (e) {
        throw e;
    }
}

export function* watchClickSaga() {
    yield takeLatest(ActionType.FETCH_MEMBERS, fetchBranches);
    yield takeLatest(ActionType.CREATE_CHILD, createChild);
    yield takeLatest(ActionType.CREATE_MEMBER, createMember);
    yield takeLatest(ActionType.DELETE_MEMBER, deleteMember);
    yield takeLatest(ActionType.UPDATE_MEMBER, updateMember);
}

export default function* rootSaga() {
    yield watchClickSaga();
}
