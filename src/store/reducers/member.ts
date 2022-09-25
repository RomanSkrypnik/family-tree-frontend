import { ChildDto, MemberDto, MemberState } from '../../ts';
import { addChildren } from '../../helpers';

export enum ActionType {
    SET_MEMBERS = 'SET_MEMBERS',
    SET_EDIT = 'SET_EDIT',
    SET_MEMBER = 'SET_MEMBER',
    FETCH_MEMBERS = 'FETCH_MEMBERS',
    CREATE_CHILD = 'CREATE_CHILD',
    ADD_MEMBER = 'ADD_MEMBER',
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
    type: ActionType.ADD_MEMBER;
    payload: ChildDto;
}

export interface ActionCreateMember {
    type: ActionType.CREATE_CHILD;
    payload: { birth: string, name: string, parentId: number };
}

export type Action =
    ActionSetMembers
    | ActionSetMember
    | ActionEdit
    | ActionFetchMembers
    | ActionAddMember
    | ActionCreateMember;

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
        case ActionType.ADD_MEMBER:
            const { root } = action.payload;
            const stateRoot = state.members.find(member => member.id === root.id);
            if (stateRoot) {
                console.log(addChildren(stateRoot, action.payload));
            }
            return { ...state };
        default:
            return state;
    }
};

export default member;
