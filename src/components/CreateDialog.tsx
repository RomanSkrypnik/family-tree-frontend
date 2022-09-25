import React from 'react';
import { useCloseDialog, useFetchMembers } from '../hooks';
import { Dialog } from './Dialog';
import { TextInput } from './TextInput';
import DatePicker from 'react-datepicker';
import { Select } from './Select';
import { Button } from './Button';

export const CreateDialog = () => {
    const handleClick = useCloseDialog(true);
    const { data } = useFetchMembers();

    return (
        <Dialog onClick={handleClick}>
            <form>
                <div className='dialog__inputs'>
                    <TextInput placeholder='Name' />
                    <DatePicker
                        selected={new Date()}
                        dateFormat='yyyy-MM-dd'
                        className='input _date'
                        onChange={(date: Date) => console.log('test')}
                    />
                </div>
                <Select className='dialog__select' placeholder='Select parent' items={data} />
                <div className='dialog__buttons'>
                    <Button className='_success'>Create</Button>
                    <Button className='_danger'>Close</Button>
                </div>
            </form>
        </Dialog>
    );
};
