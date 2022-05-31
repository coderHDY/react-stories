import { useEffect } from 'react';

export default function useListener(el, eventType, listener) {
    useEffect(() => {
        if (Array.isArray(eventType)) {
            eventType.forEach(type => {
                el.addEventListener(type, listener);
            });
            return () => {
                eventType.forEach(type => {
                    el.removeEventListener(type, listener);
                });
            }
        } else {
            el.addEventListener(eventType, listener);
            return () => {
                el.removeEventListener(eventType, listener);
            }
        }
    })
}