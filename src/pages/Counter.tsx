import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      <span>Click me! (Count: {count})</span>
    </button>
  );
};

export default Counter;
