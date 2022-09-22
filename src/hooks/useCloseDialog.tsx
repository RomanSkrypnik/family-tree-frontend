import { useAppDispatch } from './useAppDispatch';
import { ActionType } from '../store/reducers/member';

export const useCloseDialog = () => {
    const dispatch = useAppDispatch();
    return () => {
        dispatch({ type: ActionType.SET_MEMBER, payload: null });
        dispatch({ type: ActionType.SET_EDIT, payload: { operation: '', isEditing: false } });
    };
};
