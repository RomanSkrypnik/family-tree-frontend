import { useTypedSelector } from './useTypedSelector';
import member from '../store/reducers/member';

export function useConvertIntoBranch() {
    const { members } = useTypedSelector(state => state.member);

    const obj = {};

    const sorted = members.sort((m1, m2) => new Date(m1.birth).getTime() - new Date(m2.birth).getTime());

    for (let i = 0; i < members.length; i++) {
        const branchId = members[i].branchId;
        // @ts-ignore
        obj[branchId] = obj[branchId] ? [...obj[branchId], members[i]] : [members[i]];
    }

    for (let i = 0; i < Object.keys(obj).length; i++) {

    }

    console.log(obj);
}
