import { FETCH_BRANCHES, SET_BRANCHES } from '../constants';
import { BranchDto } from '../../ts';

export const fetchBranches = () => ({ type: FETCH_BRANCHES });
export const setBranches = (branches: BranchDto[]) => ({ type: SET_BRANCHES, payload: branches });
