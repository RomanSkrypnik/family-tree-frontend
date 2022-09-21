import { BranchDto, BranchState } from '../../ts';

enum ActionType {
    SET_BRANCHES = 'SET_BRANCHES',
}

interface ActionSetBranches {
    type: ActionType.SET_BRANCHES;
    payload: BranchDto[];
}

export type Action = ActionSetBranches;

const initialState: BranchState = { branches: [] };

export const branch = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.SET_BRANCHES:
            return { ...state, branches: action.payload };
        default:
            return state;
    }
};

export default branch;
