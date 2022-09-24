import { useTypedSelector } from './useTypedSelector';
import { useEffect, useState } from 'react';
import { MemberDto, RecursiveMember } from '../ts';
import { sortByBirth } from '../helpers/member';

export function useConvertIntoRecursive() {
    const [arr, setArr] = useState<RecursiveMember[]>([]);
    const { members } = useTypedSelector(state => state.member);
    const sorted = sortByBirth(members);
    const test = (obj: MemberDto): RecursiveMember => {
        if (obj.children.length === 0) return { ...obj, children: [] };
        const children: RecursiveMember[] = [];
        for (let child of obj.children) {
            const idx = sorted.findIndex(({ id }) => id === child.userId);
            if (idx !== -1) {
                children.push(test(members[idx]));
                sorted.splice(idx, 1);
            }
        }
        return { ...obj, children };
    };

    useEffect(() => {
        let res: RecursiveMember[] = [];
        sorted.forEach(member => {
            res = [...res, test(member)];
        });
        setArr(res);
    }, [sorted]);

    return arr;
}
