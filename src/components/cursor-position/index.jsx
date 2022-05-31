import React, { useState } from 'react';
import useListener from '../../hooks/useListener';
import './index.css';
export default function CusorPosition() {
    const [x, y] = useCursor();
    return (
        <div>
            <span>x:{x}</span>
            <span>y:{y}</span>
        </div>
    )
}

function useCursor() {
    const [{ x, y }, setPosition] = useState({ x: 0, y: 0 })
    const moveListener = e => {
        setPosition({
            x: e.pageX,
            y: e.pageY,
        });
    };
    useListener(window, ['mousemove', 'touchmove', 'click'], moveListener);
    return [x, y]
}