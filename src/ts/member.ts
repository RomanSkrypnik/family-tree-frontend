export interface MemberDto {
    id: number;
    name: string;
    birth: string;
}

export interface MemberTreeDto extends MemberDto {
    children: MemberTreeDto[];
}

export interface UpdateMemberResponse extends MemberTreeDto {
    rootId: number;
}

export interface MemberState {
    members: MemberTreeDto[];
    member: MemberTreeDto | null;
    isEditing: boolean;
    operation: string;
}

export interface UpdateMemberDto {
    id: number;
    name: string;
    birth: Date;
}

export interface CreateMemberDto {
    name: string;
    birth: Date;
}

export interface CreateChildDto extends Omit<CreateMemberDto, 'birth'> {
    parentId?: number;
    birth: Date;
}

export interface CreateChildResponse extends MemberTreeDto {
    parent: MemberDto;
    rootId: number;
}

export interface DeleteMemberDto {
    id: number;
}

export interface RemoveMemberDto {
    id: number;
    rootId: number;
}
