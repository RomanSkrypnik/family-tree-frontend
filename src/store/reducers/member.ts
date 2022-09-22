import { BranchDto, MemberState, MemberDto } from '../../ts';

export enum ActionType {
    SET_BRANCHES = 'SET_BRANCHES',
    SET_EDIT = 'SET_EDIT',
    SET_MEMBER = 'SET_MEMBER',
    FETCH_BRANCHES = 'FETCH_BRANCHES'
}

interface ActionSetBranches {
    type: ActionType.SET_BRANCHES;
    payload: BranchDto[];
}

interface ActionSetMember {
    type: ActionType.SET_MEMBER;
    payload: MemberDto | null;
}

interface ActionEdit {
    type: ActionType.SET_EDIT;
    payload: { operation: string, isEditing: boolean };
}

interface ActionFetchBranches {
    type: ActionType.FETCH_BRANCHES;
}

type Action = ActionSetBranches | ActionSetMember | ActionEdit | ActionFetchBranches;

const initialState: MemberState = { members: [], isEditing: false, operation: '', member: null };

export const member = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.SET_BRANCHES:
            return { ...state, members: action.payload };
        case ActionType.SET_MEMBER:
            return { ...state, member: action.payload };
        case ActionType.SET_EDIT:
            const { isEditing, operation } = action.payload;
            return { ...state, isEditing, operation };
        default:
            return state;
    }
};

export default member;
