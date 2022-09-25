import React from 'react';
import { useCloseDialog, useFetchMembers } from '../hooks';
import { Dialog } from './Dialog';
import { TextInput } from './TextInput';
import DatePicker from 'react-datepicker';
import { Select } from './Select';

export const CreateDialog = () => {
    const handleClick = useCloseDialog(true);
    const { data } = useFetchMembers();

    return (
        <Dialog onClick={handleClick}>
            <form>
                <TextInput placeholder='Name' />
                <DatePicker onChange={(date: Date) => console.log('test')} />
                {/*<Select  />*/}
            </form>
        </Dialog>
    );
};
