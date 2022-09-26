import { ChildDto, MemberTreeDto } from '../ts';

export function addChild(member: MemberTreeDto, child: ChildDto) {
    if (member.id === child.parent.id) {
        const { parent, root, ...mChild } = child;
        return { ...member, children: [...member.children, mChild] };
    }
    if (!member.children) return member;
    let children: MemberTreeDto[] = [];
    for (let mChild of member.children) {
        children = [...children, addChild(mChild, child)];
    }
    return { ...member, children };
}

export function removeChild(member: MemberTreeDto, id: number) {
    if (member.id === id) return null;
    if (!member.children) return member;
    let children: MemberTreeDto[] = [];
    for (let mChild of member.children) {
        const child = removeChild(mChild, id);
        child && children.push(child);
    }
    return { ...member, children };
}
