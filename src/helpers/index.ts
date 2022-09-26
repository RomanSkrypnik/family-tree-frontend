import { CreateChildResponse, MemberDto, MemberTreeDto } from '../ts';

export function addMember(member: MemberTreeDto, child: Omit<CreateChildResponse, 'rootId'>) {
    if (member.id === child.parent.id) {
        const { parent, ...mChild } = child;
        return { ...member, children: [...member.children, mChild] };
    }
    if (!member.children) return member;
    let children: MemberTreeDto[] = [];
    for (const mChild of member.children) {
        children = [...children, addMember(mChild, child)];
    }
    return { ...member, children };
}

export function removeMember(member: MemberTreeDto, id: number) {
    if (member.id === id) return null;
    if (!member.children) return member;
    let children: MemberTreeDto[] = [];
    for (const mChild of member.children) {
        const child = removeMember(mChild, id);
        child && children.push(child);
    }
    return { ...member, children };
}

export function changeMember(member: MemberTreeDto, child: MemberDto) {
    if (member.id === child.id) return { ...member, ...child };
    if (!member.children) return member;
    let children: MemberTreeDto[] = [];
    for (const mChild of member.children) {
        children = [...children, changeMember(mChild, child)];
    }
    return { ...member, children };
}
