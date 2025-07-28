import { useState } from "react";

import "./Counter.css";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const incCount = () => {
    setCount((count) => count + 1);
  };

  const decCount = () => {
    setCount((count) => count - 1);
  };

  return (
    <div className="counter">
      <div className="count-number">count {count}</div>
      <div className="actions">
        <button onClick={incCount}>++</button>
        <button onClick={decCount}>--</button>
      </div>
    </div>
  );
};
