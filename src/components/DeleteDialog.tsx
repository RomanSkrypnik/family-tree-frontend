import React from 'react';
import { Dialog } from './Dialog';
import { useAppDispatch, useCloseDialog, useTypedSelector } from '../hooks';
import { Button } from './Button';
import { ActionType } from '../store/reducers/member';

export const DeleteDialog = () => {
    const handleClick = useCloseDialog();
    const { member } = useTypedSelector(state => state.member);
    const dispatch = useAppDispatch();

    const handleDecline = () => {
        dispatch({ type: ActionType.SET_MEMBER, payload: null });
    };

    return (
        <>
            {
                member &&
                <Dialog onClick={handleClick}>
                    <h2 className='dialog__heading text'>
                        Are you sure you want to delete this user?
                    </h2>
                    <div className='dialog__buttons'>
                        <Button className='dialog__button _success'>Yes</Button>
                        <Button className='dialog__button _danger' onClick={handleDecline}>No</Button>
                    </div>
                </Dialog>
            }
        </>
    );
};
