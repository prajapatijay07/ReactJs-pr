
import { useEffect, useRef, useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [input, setInput] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleClick = (value) => {
        if (value === '=') {
            try {
                const result = Function('"use strict";return (' + input + ')')();
                setInput(result.toString());
            } catch {
                setInput('Error');
            }
        } else if (value === 'Clear') {
            setInput('');
        } else {
            setInput(prev => prev + value);
        }
    };

    const buttons = [
        ['7', '8', '9', '/'],
        ['4', '5', '6', '*'],
        ['1', '2', '3', '-'],
        ['0', '.', '+', '='],
        ['Clear'],
    ];

    return (
        <div className="calculator">
            <h2>Calculator</h2>
            <div className="screen">
                <input
                    ref={inputRef}
                    type="text"
                    readOnly
                    value={input}
                    placeholder="0"
                />
            </div>
            {buttons.map((row, rowIndex) => (
                <div className="button-row" key={rowIndex}>
                    {row.map((btn) => (
                        <button
                            key={btn}
                            onClick={() => handleClick(btn)}
                            className={`btn  ${btn === 'Clear' ? 'clear' : ''}`}
                            >
                            {btn}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Calculator;