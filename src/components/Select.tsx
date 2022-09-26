import React, { FC, MouseEvent, useRef, useState } from 'react';
import cn from 'classnames';
import { Portal } from './Portal';
import { useSelectList } from '../hooks';

interface Props {
    value?: ValueType;
    onChange?: (value: string) => void;
    placeholder?: string;
    className?: string;
    items?: { value: string | number, label: string }[];
}

type ValueType = string | number | null | undefined;

export const Select: FC<Props> = ({ value, onChange, placeholder, className, items }) => {
    const [val, setVal] = useState<ValueType>(value);
    const [opened, setOpened] = useState(false);
    const ref = useRef<HTMLButtonElement>(null);
    const { bottom, width, left } = useSelectList(ref);

    const handleChange = (e: MouseEvent<HTMLLIElement>) => {
        const { value, textContent } = e.currentTarget;
        setVal(textContent);
        handleClick();
        onChange && onChange(`${value}`);
    };

    const handleClick = () => setOpened(!opened);

    return (
        <div className={cn('select', className)}>
            <button disabled={!items || items.length === 0} ref={ref} type='button' onClick={handleClick}
                    className='select__button text'>{val ?? placeholder}</button>
            {
                opened &&
                <Portal onClick={handleClick}>
                    <ul className={cn('select__list')}
                        style={{ transform: `translate(${left}px, ${bottom}px)`, width: `${width}px` }}>
                        {
                            items && items.map(({ value, label }) =>
                                <li className='select__list-item text' onClick={handleChange} value={value}
                                    key={value}>{label}</li>,
                            )
                        }
                    </ul>
                </Portal>
            }
        </div>
    );
};
