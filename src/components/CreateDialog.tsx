import React from 'react';
import { useCloseDialog } from '../hooks';
import { Dialog } from './Dialog';
import { TextInput } from './TextInput';
import DatePicker from 'react-datepicker';
import { Select } from './Select';

export const CreateDialog = () => {
    const handleClick = useCloseDialog();

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
