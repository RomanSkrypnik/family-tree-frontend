import React from 'react';
import { Button } from './Button';
import { useAppDispatch, useTypedSelector } from '../hooks';
import { ActionType } from '../store/reducers/member';

export const Header = () => {
    const { isEditing } = useTypedSelector(state => state.member);

    const dispatch = useAppDispatch();

    const handleClick = (operation: string, isEditing?: boolean) => {
        dispatch({ type: ActionType.SET_EDIT, payload: { operation, isEditing: !!isEditing } });
    };

    return (
        <header className='header'>
            <h1 className='header__logo text'>Tree</h1>
            {isEditing && <div className='header__note text'>Choose a member</div>}
            <div className='header__buttons'>
                {
                    isEditing ?
                        <Button onClick={() => handleClick('')}>Cancel</Button>
                        :
                        <>
                            <Button onClick={() => handleClick('create')} className='_success'>Create</Button>
                            <Button onClick={() => handleClick('update', true)} className='_warning'>Update</Button>
                            <Button onClick={() => handleClick('delete', true)} className='_danger'>Delete</Button>
                        </>
                }
            </div>
        </header>
    );
};
