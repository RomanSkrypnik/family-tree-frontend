import { ChildDto, CreateChildDto, MemberDto, MemberState } from '../../ts';
import { addChild } from '../../helpers';

export enum ActionType {
    SET_MEMBERS = 'SET_MEMBERS',
    SET_EDIT = 'SET_EDIT',
    SET_MEMBER = 'SET_MEMBER',
    FETCH_MEMBERS = 'FETCH_MEMBERS',
    CREATE_CHILD = 'CREATE_CHILD',
    ADD_CHILD = 'ADD_CHILD',
}

interface ActionSetMembers {
    type: ActionType.SET_MEMBERS;
    payload: MemberDto[];
}

interface ActionSetMember {
    type: ActionType.SET_MEMBER;
    payload: MemberDto | null;
}

interface ActionEdit {
    type: ActionType.SET_EDIT;
    payload: { operation: string, isEditing: boolean };
}

interface ActionFetchMembers {
    type: ActionType.FETCH_MEMBERS;
}

interface ActionAddMember {
    type: ActionType.ADD_CHILD;
    payload: ChildDto;
}

export interface ActionCreateChild {
    type: ActionType.CREATE_CHILD;
    payload: CreateChildDto;
}

export type Action =
    ActionSetMembers
    | ActionSetMember
    | ActionEdit
    | ActionFetchMembers
    | ActionAddMember
    | ActionCreateChild;

const initialState: MemberState = { members: [], isEditing: false, operation: '', member: null };

export const member = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.SET_MEMBERS:
            return { ...state, members: action.payload };
        case ActionType.SET_MEMBER:
            return { ...state, member: action.payload };
        case ActionType.SET_EDIT:
            const { isEditing, operation } = action.payload;
            return { ...state, isEditing, operation };
        case ActionType.ADD_CHILD:
            const { root } = action.payload;
            const stateRootIdx = state.members.findIndex(member => member.id === root.id);
            if (stateRootIdx !== -1) {
                const members = addChild(state.members[stateRootIdx], action.payload);
                return { ...state, ...state.members.splice(stateRootIdx, 1, members) };
            }
            return state;
        default:
            return state;
    }
};

export default member;
