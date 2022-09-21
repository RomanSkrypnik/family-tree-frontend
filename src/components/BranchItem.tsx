import React, { FC } from 'react';
import { MemberDto } from '../ts';
import { useFindChild } from '../hooks/useFindChild';

interface Props {
    member: MemberDto;
}

export const BranchItem: FC<Props> = ({ member }) => {
    const children = useFindChild(member.branchId, member.children?.userId);

    return (
        <>
            <div>
                <div>{member.name}</div>
                <div>{member.birth}</div>
            </div>
            {children && <BranchItem member={children} />}
        </>
    );
};
