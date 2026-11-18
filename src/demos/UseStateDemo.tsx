import { useState } from 'react';

export function UseStateDemo() {
  // Khởi tạo state 'count' với giá trị 0
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>Giá trị: <strong>{count}</strong></p>
      <div className="row">
        <button onClick={() => setCount((c) => c + 1)}>Tăng (+)</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}
