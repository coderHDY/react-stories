import React, { useState } from "react";
import PropTypes from 'prop-types';
import useThrottle from "../../hooks/useThrottle";

export function ThrottleInput({ timeout }) {
    const [val, setVal] = useState('');
    const input = (e) => setVal(e.target.value);

    const [fetchDatas, setFetchDatas] = useState([]);
    const getData = () => val.trim() ? setFetchDatas(fetchDatas.concat(val.trim())) : '';
    useThrottle(getData, [val], +timeout);
    return (
        <div>
            <input type="text" value={val} onInput={input} />
            <div>
                <h3>已发送的网络请求:</h3>
                {
                    fetchDatas.map(item => (<div>{item}</div>))
                }
            </div>
        </div>
    )
}

ThrottleInput.propTypes = {
    /**
     * How long would you want to wait
     */
    timeout: PropTypes.number.isRequired,
}
ThrottleInput.defaultProps = {
    timeout: 200
}