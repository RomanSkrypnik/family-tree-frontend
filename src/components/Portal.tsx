import { FC, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
    onClick: (e: MouseEvent) => void;
    transparent?: boolean;
    children: ReactNode;
}

export const Portal: FC<Props> = ({ onClick, transparent = false, children }) => {

    const [container] = useState(() => document.createElement('div'));

    useEffect(() => {
        const activeOverlay = document.getElementsByClassName('_black');

        document.body.appendChild(container);

        const className = getClassName(activeOverlay);

        container.classList.add('overlay');
        className && container.classList.add(className);
        onClick && container.addEventListener('click', onClick);

        return () => {
            document.body.removeChild(container);
        };
    }, []);

    const getClassName = (activeOverlay: HTMLCollectionOf<Element>) => {
        let className = '';

        if (activeOverlay.length === 0) {
            className = '_black';
        }

        return className;
    };

    return createPortal(children, container);
};
