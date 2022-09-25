export interface MemberDto {
    id: number;
    name: string;
    birth: string;
    children: MemberDto[];
    branchId: number;
}

export interface MemberState {
    members: MemberDto[];
    member: MemberDto | null;
    isEditing: boolean;
    operation: string;
}
