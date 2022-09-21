import $api from '../http';
import { BranchDto } from '../ts';
import { AxiosResponse } from 'axios';

export class BranchService {

    static async getAll(): Promise<AxiosResponse<BranchDto[]>> {
        return await $api.get<BranchDto[]>('/branches');
    }

}
