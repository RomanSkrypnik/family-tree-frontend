import { MemberService } from '../services';
import { useQuery } from '@tanstack/react-query';

const fetchMembers = async () => {
    return await MemberService.get();
};

export function useFetchMembers() {
    return useQuery(['members'], fetchMembers);
}
