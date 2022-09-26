export interface MemberDto {
    id: number;
    name: string;
    birth: string;
}

export interface UpdateMemberResponse extends MemberDto {
    root: MemberDto;
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
    id: number;
    name: string;
    birth: string;
}

export interface CreateMemberDto {
    name: string;
    birth: Date;
}

export interface CreateChildDto extends Omit<CreateMemberDto, 'birth'> {
    parentId?: number;
    birth: Date;
}

export interface ChildDto extends Omit<MemberDto, 'children'> {
    parent: MemberDto;
    root: MemberDto;
    children: MemberTreeDto[];
}

export interface DeleteMemberDto {
    id: number;
}

export interface RemoveMemberDto {
    id: number;
    root: MemberDto;
}
