import React, { FC, MouseEvent, useState } from 'react';

interface Props {
    onChange?: (value: string) => void;
    placeholder?: string;
    items: { value: string | number, label: string }[];
}

export const Select: FC<Props> = ({ onChange, placeholder, items }) => {
    const [val, setVal] = useState('');

    const handleClick = (e: MouseEvent<HTMLLIElement>) => {
        const { value } = e.currentTarget;
        setVal(`${value}`);
        onChange && onChange(`${value}`);
    };

    return (
        <div className='select'>
            <div className='select__field'>{val ?? placeholder}</div>
            <ul className='select__list'>
                {
                    items.map(({ value, label }) =>
                        <li className='select__list-item' onClick={handleClick} value={value}>{label}</li>,
                    )
                }
            </ul>
        </div>
    );
};
