import { useTypedSelector } from './useTypedSelector';
import { useEffect } from 'react';
import { MemberDto, RecursiveMember } from '../ts';

export function useConvertIntoBranch() {
    const { members } = useTypedSelector(state => state.member);

    const obj = {};

    const sorted = members.sort((m1, m2) => new Date(m1.birth).getTime() - new Date(m2.birth).getTime());

    const test = (obj: MemberDto): RecursiveMember | MemberDto => {
        if (obj.children.length === 0) return obj;
        const children: (RecursiveMember | MemberDto)[] = [];
        for (let child of obj.children) {
            const foundChild = members.find(({ id }) => id === child.userId);
            foundChild && children.push(test(foundChild));
        }
        return { ...obj, children } as RecursiveMember;
    };

    useEffect(() => {
        if (sorted.length > 0) {
            console.log(test(members[0]));
            // test(members[0]);
        }
    }, [sorted]);

    // for (let i = 0; i < sorted.length; i++) {
    //     const branchId = members[i].branchId;
    //     // @ts-ignore
    //     obj[branchId] = obj[branchId] ? [...obj[branchId], members[i]] : [members[i]];
    // }
    //
    // for (let key in obj) {
    //
    // }
}
