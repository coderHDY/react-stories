import styles from './index.module.css';
import { useState, useReducer } from 'react';

const ADD = 'add';
const DEL = 'del';
const CLEAR = 'clear';
const TOGGLE_DONE = 'toggleDone';

const reducerMap = new Map([
    [CLEAR, () => []],
    [ADD, (list, payload) => [payload, ...list]],
    [DEL, (list, payload) => list.filter(item => item.name !== payload.name)],
    [TOGGLE_DONE, (list, payload) => list.map(item => item.name === payload.name ? { ...item, done: !item.done } : item)],
])

const listReducer = (list, action) => {
    const { type, payload } = action;
    const newList = reducerMap.get(type)(list, payload);
    localStorage.setItem('todo-list', JSON.stringify(newList));
    return newList;
}

const initState = JSON.parse(localStorage.getItem('todo-list')) || [];

export default function TodoList() {
    const [inputVal, changeInput] = useState('');
    const [list, dispatch] = useReducer(listReducer, initState);

    const recordList = () => {
        const val = inputVal.trim();
        const idx = list.findIndex(item => item.name === val);
        if (idx !== -1 || val === '') return;
        dispatch({ type: ADD, payload: { name: inputVal, done: false } });
        changeInput('');
    }
    return (
        <div className={styles["todo-list-box"]}>
            <div className={styles["search-box"]}>
                <input className={styles["input-box"]} type="text" value={inputVal} onChange={e => changeInput(e.target.value)} onKeyUp={e => e.code === 'Enter' ? recordList() : ''} />
                <button className={styles["add-btn"]} onClick={recordList}>添加</button>
            </div>
            <dl className={styles["item-list"]}>
                {
                    list.map((item, i) => (
                        <li key={item.name} className={styles["list-item"]}>
                            <input className={styles["check-box"]} type="checkbox" value={!item.done} onChange={() => dispatch({ type: TOGGLE_DONE, payload: item })} />
                            <span className={styles["todo-item"]}>{item.name}</span>
                            <button className={styles["del-btn"]} onClick={() => dispatch({ type: DEL, payload: item })}>删除</button>
                        </li>
                    ))
                }
            </dl>
            <div className={styles["calc-list"]}>
                <span className={styles["totol-font"]}>总计：</span>
                <span className={styles["totol-num"]}>
                    {
                        list.filter(item => item.done === true).length
                    }/{
                        list.length
                    }
                </span>
                <button className={styles["clear-btn"]} onClick={() => dispatch({ type: CLEAR })}>清空</button>
            </div>
        </div>
    )
}
