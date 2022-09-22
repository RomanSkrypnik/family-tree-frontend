import { BranchDto, BranchState, MemberDto } from '../../ts';

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
    payload: MemberDto;
}

interface ActionEdit {
    type: ActionType.SET_EDIT;
    payload: { operation: string, isEditing: boolean };
}

interface ActionFetchBranches {
    type: ActionType.FETCH_BRANCHES;
}

type Action = ActionSetBranches | ActionSetMember | ActionEdit | ActionFetchBranches;

const initialState: BranchState = { branches: [], isEditing: false, operation: '', member: null };

export const branch = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.SET_BRANCHES:
            return { ...state, branches: action.payload };
        case ActionType.SET_MEMBER:
            return { ...state, member: action.payload };
        case ActionType.SET_EDIT:
            const { isEditing, operation } = action.payload;
            return { ...state, isEditing, operation };
        default:
            return state;
    }
};

export default branch;
