import { useMemo, useState } from 'react';

function factorial(n: number): number {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

export function UseMemoDemo() {
  const [num, setNum] = useState<number>(5);
  const [count, setCount] = useState<number>(0);

  // Chỉ tính lại giai thừa khi 'num' thay đổi
  const memo = useMemo(() => ({
    value: factorial(num),
    time: new Date().toLocaleTimeString('vi-VN'),
  }), [num]);

  return (
    <div className="stack">
      <p>{num}! = <strong>{memo.value.toLocaleString('vi-VN')}</strong> (Tính lúc: {memo.time})</p>
      <div className="row">
        <button onClick={() => setNum((n) => (n >= 12 ? 1 : n + 1))}>Đổi số ({num})</button>
        <button onClick={() => setCount((c) => c + 1)}>Count không liên quan: {count}</button>
      </div>
    </div>
  );
}
