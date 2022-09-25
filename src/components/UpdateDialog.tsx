import React from 'react';
import { Dialog } from './Dialog';
import { useCloseDialog, useTypedSelector } from '../hooks';

export const UpdateDialog = () => {
    const handleClick = useCloseDialog();
    const { member } = useTypedSelector(state => state.member);

    return (
        <>
            {
                member &&
                <Dialog onClick={handleClick}>
                    <div>
                        update
                    </div>
                </Dialog>
            }
        </>
    );
};
