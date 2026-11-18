import { memo, useCallback, useRef, useState } from 'react';

const ChildButton = memo(({ onClick }: { onClick: () => void }) => {
  const renders = useRef(0);
  renders.current += 1;
  return <button onClick={onClick}>Con (Render: {renders.current} lần)</button>;
});

export function UseCallbackDemo() {
  const [count, setCount] = useState<number>(0);
  const [clicks, setClicks] = useState<number>(0);

  // Giữ nguyên tham chiếu hàm để ChildButton không re-render theo Cha
  const handleChildClick = useCallback(() => {
    setClicks((c) => c + 1);
  }, []);

  return (
    <div className="stack">
      <p>Cha: <strong>{count}</strong> | Bấm từ Con: <strong>{clicks}</strong></p>
      <div className="row">
        <button onClick={() => setCount((c) => c + 1)}>Re-render Cha (+1)</button>
        <ChildButton onClick={handleChildClick} />
      </div>
    </div>
  );
}
