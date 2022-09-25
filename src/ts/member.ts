export interface MemberDto {
    id: number;
    name: string;
    birth: string;
}

export interface MemberTreeDto extends MemberDto {
    children: MemberTreeDto[];
}

export interface MemberState {
    members: MemberTreeDto[];
    member: MemberTreeDto | null;
    isEditing: boolean;
    operation: string;
}

export interface UpdateMemberDto {
    name: string;
    birth: string;
}

export interface CreateMemberDto {
    name: string;
    birth: string;
}

export interface CreateChildDto extends CreateMemberDto {
    parentId?: number;
}

export interface ChildDto extends Omit<MemberDto, 'children'> {
    parent: MemberDto;
    root: MemberDto;
    children: MemberTreeDto[];
}
