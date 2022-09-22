import { MemberDto } from './member';

export interface BranchDto {
    id: number;
    members: MemberDto[];
}
