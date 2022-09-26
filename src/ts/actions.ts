import {
    CreateChildResponse,
    CreateChildDto,
    CreateMemberDto,
    MemberDto,
    MemberTreeDto, RemoveMemberResponse, UpdateMemberDto, UpdateMemberResponse,
} from './member';

export enum ActionType {
    SET_MEMBERS = 'SET_MEMBERS',
    SET_EDIT = 'SET_EDIT',
    SET_MEMBER = 'SET_MEMBER',
    FETCH_MEMBERS = 'FETCH_MEMBERS',
    CREATE_CHILD = 'CREATE_CHILD',
    ADD_CHILD = 'ADD_CHILD',
    CREATE_MEMBER = 'CREATE_MEMBER',
    ADD_MEMBER = 'ADD_MEMBER',
    REMOVE_MEMBER = 'REMOVE_MEMBER',
    DELETE_MEMBER = 'DELETE_MEMBER',
    UPDATE_MEMBER = 'UPDATE_MEMBER',
    CHANGE_MEMBER = 'CHANGE_MEMBER'
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
    payload: CreateChildResponse;
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

export interface ActionDeleteMember {
    type: ActionType.DELETE_MEMBER;
    payload: number;
}

export interface ActionRemoveMember {
    type: ActionType.REMOVE_MEMBER;
    payload: RemoveMemberResponse;
}

export interface ActionUpdateMember {
    type: ActionType.UPDATE_MEMBER;
    payload: UpdateMemberDto;
}

export interface ActionChangeMember {
    type: ActionType.CHANGE_MEMBER;
    payload: UpdateMemberResponse;
}

export type Action =
    ActionSetMembers
    | ActionSetMember
    | ActionEdit
    | ActionFetchMembers
    | ActionAddChild
    | ActionCreateChild
    | ActionCreateMember
    | ActionAddMember
    | ActionDeleteMember
    | ActionRemoveMember
    | ActionUpdateMember
    | ActionChangeMember;
