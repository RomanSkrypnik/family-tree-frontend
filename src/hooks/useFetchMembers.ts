import { MemberService } from '../services';
import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { MemberDto } from '../ts';

const fetchMembers = async () => {
    return await MemberService.get();
};

const select = (members: AxiosResponse<MemberDto[]>) => {
    return members.data.map(({ name, id }) => ({ label: `${id}-${name}`, value: id }));
};

export function useFetchMembers() {
    return useQuery(['members'], fetchMembers, { select });
}
