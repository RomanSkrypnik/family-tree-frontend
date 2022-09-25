import React, { FC, ReactNode, MouseEvent } from 'react';
import { Portal } from './Portal';

interface Props {
    onClick: () => void;
    children: ReactNode;
}

export const Dialog: FC<Props> = ({ onClick, children }) => {
    const handleClick = (e: MouseEvent) => {
        e.nativeEvent.stopImmediatePropagation();
    };

    return (
        <Portal onClick={onClick}>
            <div className='dialog' onClick={handleClick}>
                {children}
            </div>
        </Portal>
    );
};
