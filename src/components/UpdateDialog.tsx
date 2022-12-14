import React from 'react';
import { Dialog } from './Dialog';
import { useAppDispatch, useCloseDialog, useTypedSelector } from '../hooks';
import { ActionType } from '../ts';
import { Controller, useForm } from 'react-hook-form';
import { TextInput } from './TextInput';
import DatePicker from 'react-datepicker';
import { Button } from './Button';
import { updateSchema } from '../schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';

interface FormValues {
    name: string;
    birth: Date;
}

export const UpdateDialog = () => {
    const dispatch = useAppDispatch();
    const handleClick = useCloseDialog();
    const { member } = useTypedSelector(state => state.member);
    const { handleSubmit, control } = useForm<FormValues>({ resolver: yupResolver(updateSchema) });

    const onSubmit = (data: FormValues) => {
        if (member) {
            dispatch({ type: ActionType.UPDATE_MEMBER, payload: { ...data, id: member.id } });
            handleClick();
        }
    };

    return (
        <>
            {
                member &&
                <Dialog onClick={handleClick}>
                    <h2 className='text-center text'>Update member</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='dialog__inputs'>
                            <Controller
                                name='name'
                                control={control}
                                defaultValue={member.name}
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
                                defaultValue={new Date(member.birth)}
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
                        <div className='dialog__buttons'>
                            <Button type='submit' className='_success'>Update</Button>
                            <Button onClick={handleClick} className='_danger'>Close</Button>
                        </div>
                    </form>
                </Dialog>
            }
        </>
    );
};
