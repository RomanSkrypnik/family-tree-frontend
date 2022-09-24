import { useTypedSelector } from './useTypedSelector';
import { useEffect } from 'react';
import { MemberDto, RecursiveMember } from '../ts';

export function useConvertIntoBranch() {
    const { members } = useTypedSelector(state => state.member);
    const sorted = members.sort((m1, m2) => new Date(m1.birth).getTime() - new Date(m2.birth).getTime());
    const test = (obj: MemberDto): RecursiveMember | MemberDto => {
        if (obj.children.length === 0) return obj;
        const children = [];
        for (let child of obj.children) {
            const idx = sorted.findIndex(({ id }) => id === child.userId);
            if (idx !== -1) {
                children.push(test(members[idx]));
                sorted.splice(idx, 1);
            }
        }
        return { ...obj, children } as RecursiveMember;
    };

    useEffect(() => {
        sorted.forEach(member => {
            console.log(test(member));
        });
    }, [sorted]);
}
