import styles from './index.module.css';
import { useState } from 'react';
export default function TodoList() {
    const [
        list,
        addList,
        removeItem,
        changeDone,
        clearList,
    ] = useList();
    const [inputVal, changeInput] = useState('');
    const recordList = () => {
        addList(inputVal);
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
                            <input className={styles["check-box"]} type="checkbox" value={!item.done} onChange={() => changeDone(i)} />
                            <span className={styles["todo-item"]}>{item.name}</span>
                            <button className={styles["del-btn"]} onClick={() => removeItem(i)}>删除</button>
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
                <button className={styles["clear-btn"]} onClick={clearList}>清空</button>
            </div>
        </div>
    )
}

function useList(defaultList = [{
    name: '吃饭',
    done: false
}]) {
    const [list, setList] = useState(defaultList);
    const addList = item => {
        const val = item.trim();
        const idx = list.findIndex(item => item.name === val);
        if (idx !== -1 || val === '') return;
        const newList = [{
            name: item,
            done: false,
        }].concat(list);
        setList(newList);
    };
    const removeItem = idx => {
        const newList = list.filter((_, i) => i !== idx);
        setList(newList);
    }
    const changeDone = idx => {
        const newList = list.slice();
        newList[idx].done = !newList[idx].done;
        setList(newList);
    }
    const clearList = () => setList([]);
    return [
        list,
        addList,
        removeItem,
        changeDone,
        clearList,
    ]
}
