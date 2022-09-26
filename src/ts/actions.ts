import { ChildDto, CreateChildDto, CreateMemberDto, MemberDto, MemberTreeDto } from './member';

export enum ActionType {
    SET_MEMBERS = 'SET_MEMBERS',
    SET_EDIT = 'SET_EDIT',
    SET_MEMBER = 'SET_MEMBER',
    FETCH_MEMBERS = 'FETCH_MEMBERS',
    CREATE_CHILD = 'CREATE_CHILD',
    ADD_CHILD = 'ADD_CHILD',
    CREATE_MEMBER = 'CREATE_MEMBER',
    ADD_MEMBER = 'ADD_MEMBER'
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

interface ActionAddChild {
    type: ActionType.ADD_CHILD;
    payload: ChildDto;
}

export interface ActionCreateChild {
    type: ActionType.CREATE_CHILD;
    payload: CreateChildDto;
}

export interface ActionCreateMember {
    type: ActionType.CREATE_MEMBER;
    payload: CreateMemberDto;
}

export interface ActionAddMember {
    type: ActionType.ADD_MEMBER;
    payload: MemberTreeDto;
}

export type Action =
    ActionSetMembers
    | ActionSetMember
    | ActionEdit
    | ActionFetchMembers
    | ActionAddChild
    | ActionCreateChild
    | ActionCreateMember
    | ActionAddMember;
