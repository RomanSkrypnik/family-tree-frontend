import { useTypedSelector } from './useTypedSelector';

export const useFindChild = (branchId: number, userId?: number) => {
    const { branches } = useTypedSelector(state => state.branch);
    const branch = branches.find(({ id }) => branchId === id);
    return branch?.members.find(({ id }) => id === userId);
};
