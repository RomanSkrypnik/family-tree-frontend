import React, { FC } from 'react';

interface Props {
    onChange?: () => void;
    placeholder?: string;
    value?: string;
}

export const TextInput: FC<Props> = ({ placeholder, value, onChange }) => {
    return (
        <input type='text' className='input' placeholder={placeholder} value={value} onChange={onChange} />
    );
};
