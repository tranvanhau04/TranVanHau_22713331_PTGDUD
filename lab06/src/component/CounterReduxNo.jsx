import React, { useState } from 'react';

export default function CounterReduxNo() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>No Redux (useState only)</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <button onClick={() => setCount((c) => c - 1)}>-</button>
    </div>
  );
}
