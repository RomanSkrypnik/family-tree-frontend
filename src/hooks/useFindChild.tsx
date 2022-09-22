import { useTypedSelector } from './useTypedSelector';
import { ChildrenDto, MemberDto } from '../ts';

// export const useFindChild = (branchId: number, children: ChildrenDto[]): MemberDto[] => {
//     const { branches } = useTypedSelector(state => state.branch);
//     const branch = branches.find(({ id }) => branchId === id);
//     return children.map(child => branch?.members.find(({ id }) => child.userId === id) as MemberDto);
// };
