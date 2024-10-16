import {useState} from 'react';
import './Counter.css';

const Counter =  () => {

    let [count, setCount] = useState(0);

    const hndleInc = () => {
        console.log("INC");

        setCount(++count);
        
    };
    
    const hndleDec = () => {
        console.log("DEC");
        
        count > 0 && setCount(--count);
    };

    return (
        <div>
            <button onClick={hndleInc}>+</button>
            <span>{count}</span>
            <button onClick={hndleDec}>-</button>
        </div>
    );
};

export default Counter;