import React from 'react';
import { Button } from './Button';
import { useAppDispatch, useTypedSelector } from '../hooks';

export const Header = () => {
    const { isEditing } = useTypedSelector(state => state.branch);

    const dispatch = useAppDispatch();

    const handleClick = (action: string, isEditing?: boolean) => {
        // @ts-ignore
        dispatch(setAction({ action, isEditing: !!isEditing }));
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
