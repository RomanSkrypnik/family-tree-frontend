import React, { FC } from 'react';
import { useAppDispatch, useTypedSelector } from '../hooks';
import { ActionType } from '../store/reducers/member';
import cn from 'classnames';
import { MemberDto } from '../ts';

interface Props {
    member: MemberDto;
}

export const BranchItem: FC<Props> = ({ member }) => {
    const { children } = member;
    const dispatch = useAppDispatch();
    const { isEditing } = useTypedSelector(state => state.member);

    const handleClick = () => {
        if (isEditing) {
            dispatch({ type: ActionType.SET_MEMBER, payload: member });
        }
    };

    return (
        <li className='branch-item'>
            <div className={cn('branch-item__inner', isEditing && '_clickable')} onClick={handleClick}>
                <div className='branch-item__name text'>{member.name}</div>
                <div className='branch-item__birth text'>{member.birth}</div>
            </div>
            {
                children.length > 0 &&
                <ul className='branch-item__list'>
                    {
                        children.map(child => <BranchItem member={child} key={child.id} />)
                    }
                </ul>
            }
        </li>
    );
};
