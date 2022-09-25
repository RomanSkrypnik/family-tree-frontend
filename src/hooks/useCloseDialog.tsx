import { useAppDispatch } from './useAppDispatch';
import { ActionType } from '../store/reducers/member';

export const useCloseDialog = (create?: boolean) => {
    const dispatch = useAppDispatch();

    const handleEditing = () => {
        dispatch({ type: ActionType.SET_EDIT, payload: { operation: '', isEditing: false } });
    };
    const handleCreate = () => {
        dispatch({ type: ActionType.SET_MEMBER, payload: null });
    };

    return create ? handleEditing : handleCreate;
};
