import { useEffect, useState } from 'react';

export function UseEffectDemo() {
  const [seconds, setSeconds] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);

  useEffect(() => {
    if (!running) return;
    const timer = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(timer); // Cleanup khi dừng hoặc unmount
  }, [running]);

  return (
    <div>
      <p>Thời gian: <strong>{seconds}s</strong></p>
      <div className="row">
        <button onClick={() => setRunning((r) => !r)}>
          {running ? 'Tạm dừng' : 'Bắt đầu'}
        </button>
        <button onClick={() => setSeconds(0)}>Reset</button>
      </div>
    </div>
  );
}
