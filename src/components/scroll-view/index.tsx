import React, { useState, useRef, LegacyRef } from "react";
import styles from './index.module.css';
type showPosition = [
    swiper: LegacyRef<HTMLDivElement>,
    prev: () => void,
    next: () => void,
    left: number,
    showIdx: number,
]

export default function ScrollView(props) {
    const { imgs } = props;
    const [swiper, prev, next, left, showIdx] = useShowPosition(0, imgs.length);
    return (
        <>
            <div className={styles["swiper-container"]}>
                <div style={{ left }} className={styles["swiper"]} ref={swiper}>
                    {
                        imgs.map(item => (
                            <div className={styles["swiper-item"]} key={item}>
                                <img src={item} className={styles["swiper-img"]} alt="" />
                            </div>
                        ))
                    }
                </div>
                <div className={styles["dot-content"]}>
                    <div className={styles["dot-box"]}>
                        {
                            imgs.map((item, idx) => (
                                <div className={styles['dot-wrap']} key={item}>
                                    <span className={`${styles.dot + (showIdx === idx ? ' ' + styles['show-dot'] : '')}`}></span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <span className={styles["prev"]} onClick={prev}>《GO</span>
                <span className={styles["next"]} onClick={next}>GO》</span>
            </div>
        </>
    )
}

function useShowPosition(defaultIdx: number, num: number): showPosition {
    const [showIdx, setIdx] = useState(defaultIdx);
    const [left, setLeft] = useState(0);
    const [moving, setMoving] = useState(false);
    const swiper = useRef<HTMLDivElement>();
    const prev = () => {
        if (moving) return;
        setMoving(true);
        setTimeout(() => setMoving(false), 500);
        const itemWidth = swiper.current.clientWidth;
        const goIdx = showIdx <= 0 ? num - 1 : showIdx - 1;
        setLeft(-goIdx * itemWidth);
        setIdx(goIdx);
    };
    const next = () => {
        if (moving) return;
        setMoving(true);
        setTimeout(() => setMoving(false), 500);
        const itemWidth = swiper.current.clientWidth;
        const goIdx = showIdx >= num - 1 ? 0 : showIdx + 1;
        setLeft(-goIdx * itemWidth);
        setIdx(goIdx);
    };
    return [
        swiper,
        prev,
        next,
        left,
        showIdx,
    ]
}
