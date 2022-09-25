import React from 'react';
import { useAppDispatch, useCloseDialog, useFetchMembers } from '../hooks';
import { Dialog } from './Dialog';
import { TextInput } from './TextInput';
import DatePicker from 'react-datepicker';
import { Select } from './Select';
import { Button } from './Button';
import { useForm, Controller } from 'react-hook-form';
import { ActionType } from '../store/reducers/member';

interface FormValues {
    name: string;
    birth: string;
    parentId?: number;
}

export const CreateDialog = () => {
    const handleClick = useCloseDialog(true);
    const { data } = useFetchMembers();
    const { handleSubmit, control } = useForm<FormValues>();
    const dispatch = useAppDispatch();

    const onSubmit = (payload: FormValues) => {
        if (payload.parentId) {
            dispatch({ type: ActionType.CREATE_CHILD, payload });
        }
        handleClick();
    };

    return (
        <Dialog onClick={handleClick}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='dialog__inputs'>
                    <Controller
                        name='name'
                        control={control}
                        render={({ field: { onChange, value } }) => <TextInput onChange={onChange} value={value}
                                                                               placeholder='Name' />}
                    />
                    <Controller
                        name='birth'
                        control={control}
                        render={({ field: { onChange, value } }) =>
                            <DatePicker
                                placeholderText='Input birth'
                                showTimeInput={false}
                                selected={new Date()}
                                dateFormat='yyyy-MM-dd'
                                className='input _date'
                                value={value}
                                onChange={onChange}
                            />
                        }
                    />
                </div>
                <Controller
                    name='parentId'
                    control={control}
                    render={({ field: { onChange, value } }) =>
                        <Select
                            value={value}
                            onChange={onChange}
                            className='dialog__select'
                            placeholder='Select parent'
                            items={data}
                        />
                    }
                />
                <div className='dialog__buttons'>
                    <Button type='submit' className='_success'>Create</Button>
                    <Button onClick={handleClick} className='_danger'>Close</Button>
                </div>
            </form>
        </Dialog>
    );
};
