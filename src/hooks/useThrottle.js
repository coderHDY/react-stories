import { useState, useEffect } from 'react';

export default function useThrottle(fn, dependencies = [], timeout) {
    let [timer, setTimer] = useState(null);
    useEffect(() => {
        if (timer) {
            clearTimeout(timer);
            setTimer(null);
        }
        setTimer(setTimeout(() => {
            fn.call(null);
            setTimer(null);
        }, timeout));

        return () => {
            clearTimeout(timer);
        };
    }, dependencies);
}