import { MemberDto } from './member';

export interface BranchDto {
    id: number;
    members: MemberDto[];
}

export interface BranchState {
    branches: BranchDto[];
    member: MemberDto | null;
    isEditing: false;
    operation: string;
}
