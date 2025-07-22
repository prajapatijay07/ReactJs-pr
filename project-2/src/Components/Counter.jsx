import { useState } from 'react';
import './Counter.css';

const Counter = ({ name }) => {
  const [count, setCount] = useState(0);

  const handleDec = () => {
    if (count <= 0) {
      alert("Minimum value is 0");
      return;
    }
    setCount(count - 1);
  };

  const handleRes = () => setCount(0);
  const handleInc = () => setCount(count + 1);

  return (
    <div className="counter-wrapper">
      <div className="glass-card">
        <h1 className="counter-heading">{name}</h1>
        <h2 className="counter-number">{count}</h2>
        <div className="btn-wrapper">
          <button className="btn btn-dec" onClick={handleDec}>−</button>
          <button className="btn btn-res" onClick={handleRes}>Reset</button>
          <button className="btn btn-inc" onClick={handleInc}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
