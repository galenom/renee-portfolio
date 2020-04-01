import { useEffect, useState } from 'react';

export const useScrollLock = (isVisible) => {
    const [positionCoordinates, setPositionCoordinates] = useState(null);

    useEffect(() => {
        const action = isVisible ? 'add' : 'remove';
        document.body.classList[action]('scroll-lock');

        if (isVisible) {
            setPositionCoordinates({ x: window.scrollX, y: window.scrollY })
            window.scrollTo(0, 0);
        } else if (positionCoordinates !== null) {
            const { x, y } = positionCoordinates
            window.scrollTo(x, y);
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisible])
}