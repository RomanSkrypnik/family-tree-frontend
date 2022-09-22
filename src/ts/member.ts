import { ChildrenDto } from './children';

export interface MemberDto {
    id: number;
    name: string;
    birth: string;
    children: ChildrenDto[];
    branchId: number;
}

export interface MemberState {
    members: MemberDto[];
    member: MemberDto | null;
    isEditing: false;
    operation: string;
}

export interface RecursiveMember extends Omit<MemberDto, 'children'> {
    children: MemberDto[];
}
