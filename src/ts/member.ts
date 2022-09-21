export interface MemberDto {
    id: number;
    name: string;
    birth: string;
    children: { id: number, userId: number } | null;
    branchId: number;
}
