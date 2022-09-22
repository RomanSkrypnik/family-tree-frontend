import { useTypedSelector } from './useTypedSelector';
import member from '../store/reducers/member';
import { useEffect } from 'react';

export function useConvertIntoBranch() {
    const { members } = useTypedSelector(state => state.member);

    const sorted = members.sort((m1, m2) => new Date(m1.birth).getTime() - new Date(m2.birth).getTime());

    // @ts-ignore
    const test = (obj: any) => {
        if (obj.children.length === 0) return obj;
        const children = [];
        for (let i = 0; i < obj.children.length; i++) {
            const child = members.find(child => child.id === obj.children[i].userId);
            children.push(child);
        }
        const childrenTemp = [];
        for (let i = 0; i < children.length; i++) {
            childrenTemp.push(test(children[i]));
        }
        return { ...obj, children: childrenTemp };
    };

    useEffect(() => {
        if (sorted.length > 0) {
            console.log(test(members[0]));
        }
    }, [sorted]);

}
