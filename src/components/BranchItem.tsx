import React, { FC } from 'react';
import { MemberDto } from '../ts';
import { useFindChild } from '../hooks/useFindChild';
import { useAppDispatch, useTypedSelector } from '../hooks';
import { ActionType } from '../store/reducers/branch';

interface Props {
    member: MemberDto;
}

export const BranchItem: FC<Props> = ({ member }) => {
    const children = useFindChild(member.branchId, member.children);

    const dispatch = useAppDispatch();

    const { isEditing } = useTypedSelector(state => state.branch);

    const handleClick = () => {
        if (isEditing) {
            dispatch({ type: ActionType.SET_MEMBER, payload: member });
        }
    };

    return (
        <li className='branch-item'>
            <div className='branch-item__inner' onClick={handleClick}>
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
