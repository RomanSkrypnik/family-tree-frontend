import $api from '../http';
import { UpdateMemberDto, CreateChildDto, MemberDto, CreateMemberDto, MemberTreeDto, CreateChildResponse } from '../ts';
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

    static addMember(member: MemberTreeDto, child: Omit<CreateChildResponse, 'rootId'>) {
        if (member.id === child.parent.id) {
            const { parent, ...mChild } = child;
            return { ...member, children: [...member.children, mChild] };
        }
        if (!member.children) return member;
        let children: MemberTreeDto[] = [];
        for (const mChild of member.children) {
            children = [...children, this.addMember(mChild, child)];
        }
        return { ...member, children };
    }

    static removeMember(member: MemberTreeDto, id: number) {
        if (member.id === id) return null;
        if (!member.children) return member;
        let children: MemberTreeDto[] = [];
        for (const mChild of member.children) {
            const child = this.removeMember(mChild, id);
            child && children.push(child);
        }
        return { ...member, children };
    }

    static changeMember(member: MemberTreeDto, child: MemberDto) {
        if (member.id === child.id) return { ...member, ...child };
        if (!member.children) return member;
        let children: MemberTreeDto[] = [];
        for (const mChild of member.children) {
            children = [...children, this.changeMember(mChild, child)];
        }
        return { ...member, children };
    }

}
