import { ChildDto, MemberTreeDto } from '../ts';

export function addChildren(member: MemberTreeDto, child: ChildDto) {
    if (!member.children) return member;
    if (member.id === child.parent.id) return { ...member, children: [...member.children, child] };
    for (let mChild of member.children) addChildren(mChild, child);
    return member;
}
