import $api from '../http';
import { UpdateMemberDto, CreateChildDto, MemberDto, CreateMemberDto } from '../ts';
import { AxiosResponse } from 'axios';

export class MemberService {

    static async get() {
        return await $api.get<MemberDto[]>('/members');
    }

    static async getTrees() {
        return await $api.get<MemberDto[]>('/members/trees');
    }

    static async delete(id: number): Promise<AxiosResponse<MemberDto>> {
        return await $api.delete(`/members/${id}`);
    }

    static async createChild(body: CreateChildDto) {
        return await $api.post('/members/create-child', body);
    }

    static async create(body: CreateMemberDto) {
        return await $api.post('/members', body);
    }

    static async update(body: UpdateMemberDto) {
        return await $api.patch('/members', body);
    }

}
