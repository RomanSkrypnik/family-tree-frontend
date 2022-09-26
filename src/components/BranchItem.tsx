import React, { FC } from 'react';
import { useAppDispatch, useTypedSelector } from '../hooks';
import cn from 'classnames';
import { ActionType, MemberTreeDto } from '../ts';
import { format } from 'date-fns';

interface Props {
    member: MemberTreeDto;
    className?: string;
}

export const BranchItem: FC<Props> = ({ member, className }) => {
    const { children } = member;
    const dispatch = useAppDispatch();
    const { isEditing } = useTypedSelector(state => state.member);
    const birth = format(new Date(member.birth), 'yyyy-MM-dd');

    const handleClick = () => {
        if (isEditing) {
            dispatch({ type: ActionType.SET_MEMBER, payload: member });
        }
    };

    return (
        <li className={cn('branch-item', className)}>
            <div className={cn('branch-item__inner', isEditing && '_clickable')} onClick={handleClick}>
                <div className='branch-item__name text'>{member.name}</div>
                <div className='branch-item__birth text'>{birth}</div>
            </div>
            {
                children.length > 0 &&
                <ul className='branch-item__list'>
                    {member.children.map(child => <BranchItem member={child} className='_child' key={child.id} />)}
                </ul>
            }
        </li>
    );
};
