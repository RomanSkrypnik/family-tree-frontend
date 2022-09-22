import React from 'react';
import { Dialog } from './Dialog';
import { useCloseDialog, useTypedSelector } from '../hooks';

export const DeleteDialog = () => {
    const handleClick = useCloseDialog();

    // const { member } = useTypedSelector(state => state.branch);

    return (
        <>
            {/*{*/}
            {/*    member &&*/}
            {/*    <Dialog onClick={handleClick}>*/}
            {/*        <div>*/}
            {/*            delete*/}
            {/*        </div>*/}
            {/*    </Dialog>*/}
            {/*}*/}
        </>
    );
};
