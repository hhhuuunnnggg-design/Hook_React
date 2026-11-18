import { useLayoutEffect, useRef, useState } from 'react';

export function UseLayoutEffectDemo() {
  const boxRef = useRef<HTMLDivElement>(null);
  const [wide, setWide] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);

  // Đo kích thước DOM đồng bộ trước khi trình duyệt paint màn hình
  useLayoutEffect(() => {
    if (boxRef.current) setWidth(Math.round(boxRef.current.offsetWidth));
  }, [wide]);

  return (
    <div className="stack">
      <div ref={boxRef} className="box" style={{ width: wide ? '100%' : '220px' }}>
        Chiều rộng đo được: <strong>{width}px</strong>
      </div>
      <div className="row">
        <button onClick={() => setWide((w) => !w)}>Đổi kích thước hộp</button>
      </div>
    </div>
  );
}
