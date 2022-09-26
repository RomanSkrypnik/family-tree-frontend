import { Action, ActionType, MemberState } from '../../ts';
import { addChild, removeChild } from '../../helpers';

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
            const { root } = action.payload;
            const stateRootIdx = state.members.findIndex(({ id }) => id === root.id);
            if (stateRootIdx !== -1) {
                const members = addChild(state.members[stateRootIdx], action.payload);
                return { ...state, ...state.members.splice(stateRootIdx, 1, members) };
            }
            return state;
        }
        case ActionType.ADD_MEMBER:
            return { ...state, members: [...state.members, action.payload] };
        case ActionType.REMOVE_MEMBER: {
            const { root, id } = action.payload;
            const stateRootIdx = state.members.findIndex(({ id }) => id === root.id);
            if (stateRootIdx !== -1) {
                const members = removeChild(state.members[stateRootIdx], id);
                if (members) {
                    return { ...state, ...state.members.splice(stateRootIdx, 1, members) };
                }
                return { ...state, ...state.members.splice(stateRootIdx, 1) };
            }
            return state;
        }
        default:
            return state;
    }
};

export default member;
