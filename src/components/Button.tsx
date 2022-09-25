import React, { FC, ReactNode } from 'react';
import cn from 'classnames';

interface Props {
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    className?: string;
    children: ReactNode;
}

export const Button: FC<Props> = ({ type, onClick, className, children }) => {
    return (
        <button type={type ?? 'button'} className={cn('button text', className)} onClick={onClick}>
            {children}
        </button>
    );
};
