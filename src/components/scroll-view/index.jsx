import React, { useState, useRef } from "react";
import styles from './index.module.css';

export default function ScrollView(props) {
    const { imgs } = props;
    const [container, swiper, prev, next, left] = useShowIdx(0, imgs.length);
    return (
        <>
            <div className={styles["swiper-container"]} ref={container}>
                <div style={{ left }} className={styles["swiper"]} ref={swiper}>
                    {
                        imgs.map(item => (
                            <div className={styles["swiper-item"]} key={item}>
                                <img src={item} className={styles["swiper-img"]} alt="" />
                            </div>
                        ))
                    }
                </div>
                <span className={styles["prev"]} onClick={prev}>《GO</span>
                <span className={styles["next"]} onClick={next}>GO》</span>
            </div>
        </>
    )
}

function useShowIdx(defaultIdx, all) {
    const [idx, setIdx] = useState(defaultIdx);
    const [left, setLeft] = useState(0);
    const [moving, setMoving] = useState(false);
    const swiper = useRef();
    const container = useRef();
    const prev = () => {
        if (moving) return;
        setMoving(true);
        setTimeout(() => setMoving(false), 500);
        const itemWidth = swiper.current.clientWidth;
        const goIdx = idx <= 0 ? all - 1 : idx - 1;
        setLeft(-goIdx * itemWidth);
        setIdx(goIdx);
    };

    const next = () => {
        if (moving) return;
        setMoving(true);
        setTimeout(() => setMoving(false), 500);
        const itemWidth = swiper.current.clientWidth;
        const goIdx = idx >= all - 1 ? 0 : idx + 1;
        setLeft(-goIdx * itemWidth);
        setIdx(goIdx);
    };
    return [
        container,
        swiper,
        prev,
        next,
        left,
    ]
}
