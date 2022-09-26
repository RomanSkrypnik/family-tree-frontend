import React from 'react';
import { useAppDispatch, useCloseDialog, useFetchMembers } from '../hooks';
import { Dialog } from './Dialog';
import { TextInput } from './TextInput';
import DatePicker from 'react-datepicker';
import { Select } from './Select';
import { Button } from './Button';
import { useForm, Controller } from 'react-hook-form';
import { ActionType } from '../ts';
import { yupResolver } from '@hookform/resolvers/yup';
import { createSchema } from '../schemas';
import cn from 'classnames';

interface FormValues {
    name: string;
    birth: Date;
    parentId?: number;
}

export const CreateDialog = () => {
    const handleClick = useCloseDialog(true);
    const { data } = useFetchMembers();
    const { handleSubmit, control } = useForm<FormValues>({ resolver: yupResolver(createSchema) });
    const dispatch = useAppDispatch();

    const onSubmit = (payload: FormValues) => {
        if (payload.parentId) {
            dispatch({ type: ActionType.CREATE_CHILD, payload });
        } else {
            dispatch({ type: ActionType.CREATE_MEMBER, payload });
        }
        handleClick();
    };

    return (
        <Dialog onClick={handleClick}>
            <h2 className='text-center text'>Create member</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='dialog__inputs'>
                    <Controller
                        name='name'
                        control={control}
                        defaultValue=''
                        render={({ field: { onChange, value }, fieldState: { error } }) =>
                            <TextInput
                                className={error && '_error'}
                                onChange={onChange}
                                value={value}
                                placeholder='Name'
                            />
                        }
                    />
                    <Controller
                        name='birth'
                        control={control}
                        defaultValue={new Date()}
                        render={({ field: { onChange, value }, fieldState: { error } }) =>
                            <DatePicker
                                placeholderText='Birth'
                                dateFormat='yyyy-MM-dd'
                                className={cn('input _date', error && '_error')}
                                selected={value}
                                onChange={onChange}
                            />
                        }
                    />
                </div>
                <Controller
                    name='parentId'
                    control={control}
                    render={({ field: { onChange, value }, fieldState: { error } }) =>
                        <Select
                            value={value}
                            onChange={onChange}
                            className={cn('dialog__select', error && '_error')}
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
