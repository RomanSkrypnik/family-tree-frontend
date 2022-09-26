import { useAppDispatch } from './useAppDispatch';
import { ActionType } from '../ts';

export const useCloseDialog = (create?: boolean) => {
    const dispatch = useAppDispatch();

    const handleEditing = () => {
        dispatch({ type: ActionType.SET_EDIT, payload: { operation: '', isEditing: false } });
        dispatch({ type: ActionType.SET_MEMBER, payload: null });
    };
    const handleCreate = () => {
        dispatch({ type: ActionType.SET_EDIT, payload: { operation: '', isEditing: false } });
    };

    return create ? handleCreate : handleEditing;
};
