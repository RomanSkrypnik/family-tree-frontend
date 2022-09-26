import React, { FC } from 'react';
import cn from 'classnames';

interface Props {
    className?: string;
    name?: string;
    onChange?: () => void;
    placeholder?: string;
    value?: string;
}

export const TextInput: FC<Props> = ({ className, name, placeholder, value, onChange }) => {
    return (
        <input
            type='text'
            className={cn('input', className)}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};
