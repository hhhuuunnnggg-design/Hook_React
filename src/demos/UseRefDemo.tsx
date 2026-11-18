import { useRef, useState } from 'react';

export function UseRefDemo() {
  const inputRef = useRef<HTMLInputElement>(null); // Trỏ trực tiếp DOM
  const clickRef = useRef<number>(0); // Đổi giá trị không re-render
  const [, forceRender] = useState<number>(0);

  return (
    <div className="stack">
      <div className="row">
        <input ref={inputRef} type="text" defaultValue="Ô nhập liệu" />
        <button onClick={() => inputRef.current?.focus()}>Focus Input</button>
      </div>
      <div className="row">
        <button onClick={() => { clickRef.current += 1; }}>
          Tăng Ref ngầm (+1)
        </button>
        <button onClick={() => forceRender((n) => n + 1)}>
          Xem Ref thật ({clickRef.current})
        </button>
      </div>
    </div>
  );
}
