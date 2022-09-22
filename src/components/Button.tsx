import React, { FC, ReactNode } from 'react';
import cn from 'classnames';

interface Props {
    onClick?: () => void;
    className?: string;
    children: ReactNode;
}

export const Button: FC<Props> = ({ onClick, className, children }) => {
    return (
        <button className={cn('button text', className)} onClick={onClick}>
            {children}
        </button>
    );
};
