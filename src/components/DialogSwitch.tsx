import React from 'react';
import { useTypedSelector } from '../hooks';
import { CreateDialog } from './CreateDialog';
import { DeleteDialog } from './DeleteDialog';
import { UpdateDialog } from './UpdateDialog';

export const DialogSwitch = () => {
    // const { operation } = useTypedSelector(state => state.branch);

    // const renderModal = () => {
        // switch (operation) {
        //     case 'create':
        //         return <CreateDialog />;
        //     case 'delete':
        //         return <DeleteDialog />;
        //     case 'update':
        //         return <UpdateDialog />;
        //     default:
    //             return null;
    //     }
    // };

    return (
        <>
            {/*{renderModal()}*/}
        </>
    );
};
