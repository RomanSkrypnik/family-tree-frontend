import $api from '../http';
import { MemberDto } from '../ts';
import { AxiosResponse } from 'axios';

export class MemberService {

    static async getAll(): Promise<AxiosResponse<MemberDto[]>> {
        return await $api.get<MemberDto[]>('/members');
    }

}
