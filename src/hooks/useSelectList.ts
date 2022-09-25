import { RefObject, useEffect, useState } from 'react';

export function useSelectList(ref: RefObject<HTMLButtonElement> | null) {
    const [bottom, setBottom] = useState<number>();
    const [left, setLeft] = useState<number>();
    const [width, setWidth] = useState<number>();

    useEffect(() => {
        setTimeout(() => {
            if (ref?.current) {
                const { bottom, left, width } = ref.current.getBoundingClientRect();
                setBottom(bottom);
                setWidth(width);
                setLeft(left);
            }
        }, 50);
    }, [ref]);

    return { bottom, width, left };
}
