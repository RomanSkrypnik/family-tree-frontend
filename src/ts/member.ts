import { ChildrenDto } from './children';

export interface MemberDto {
    id: number;
    name: string;
    birth: string;
    children: ChildrenDto[];
    branchId: number;
}
