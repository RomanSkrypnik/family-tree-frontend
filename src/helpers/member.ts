import { MemberDto } from '../ts';

export function sortByBirth(arr: MemberDto[]) {
    return arr.sort((m1, m2) => new Date(m1.birth).getTime() - new Date(m2.birth).getTime());
}
