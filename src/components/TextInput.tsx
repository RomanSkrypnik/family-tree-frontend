import React, { FC } from 'react';

interface Props {
    name?: string;
    onChange?: () => void;
    placeholder?: string;
    value?: string;
}

export const TextInput: FC<Props> = ({ name, placeholder, value, onChange }) => {
    return (
        <input type='text' className='input' name={name} placeholder={placeholder} value={value} onChange={onChange} />
    );
};
