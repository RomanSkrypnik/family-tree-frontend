import { Action, ActionType, MemberState } from '../../ts';
import { MemberService } from '../../services';

const initialState: MemberState = { members: [], isEditing: false, operation: '', member: null };

export const member = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.SET_MEMBERS:
            return { ...state, members: action.payload };
        case ActionType.SET_MEMBER:
            return { ...state, member: action.payload };
        case ActionType.SET_EDIT: {
            const { isEditing, operation } = action.payload;
            return { ...state, isEditing, operation };
        }
        case ActionType.ADD_CHILD: {
            const { rootId, ...member } = action.payload;
            const rootIdx = state.members.findIndex(({ id }) => id === rootId);
            if (rootIdx !== -1) {
                const members = MemberService.addMember(state.members[rootIdx], member);
                return { ...state, ...state.members.splice(rootIdx, 1, members) };
            }
            return state;
        }
        case ActionType.ADD_MEMBER:
            return { ...state, members: [...state.members, action.payload] };
        case ActionType.REMOVE_MEMBER: {
            const { rootId, id } = action.payload;
            const rootIdx = state.members.findIndex(({ id }) => id === rootId);
            if (rootIdx !== -1) {
                const members = MemberService.removeMember(state.members[rootIdx], id);
                if (members) {
                    return { ...state, ...state.members.splice(rootIdx, 1, members) };
                }
                return { ...state, ...state.members.splice(rootIdx, 1) };
            }
            return state;
        }
        case ActionType.CHANGE_MEMBER: {
            const { rootId, ...member } = action.payload;
            const rootIdx = state.members.findIndex(({ id }) => id === rootId);
            if (rootIdx !== -1) {
                const members = MemberService.changeMember(state.members[rootIdx], member);
                return { ...state, ...state.members.splice(rootIdx, 1, members) };
            }
            return state;
        }
        default:
            return state;
    }
};

export default member;
