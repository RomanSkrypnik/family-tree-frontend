import React, { FC, ReactNode } from 'react';
import { Portal } from './Portal';

interface Props {
    onClick: () => void;
    children: ReactNode;
}

export const Dialog: FC<Props> = ({ onClick, children }) => {
    return (
        <Portal onClick={onClick}>
            <div className='dialog'>
                {children}
            </div>
        </Portal>
    );
};
