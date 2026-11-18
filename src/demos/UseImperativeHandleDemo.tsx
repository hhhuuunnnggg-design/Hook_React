import { forwardRef, useImperativeHandle, useRef } from 'react';

interface InputHandle {
  focusAndFill: () => void;
}

const FancyInput = forwardRef<InputHandle>((_, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Chỉ lộ hàm focusAndFill() ra cho Component Cha gọi
  useImperativeHandle(ref, () => ({
    focusAndFill: () => {
      if (!inputRef.current) return;
      inputRef.current.value = 'Đã gọi từ Component Cha!';
      inputRef.current.focus();
    },
  }));

  return <input ref={inputRef} type="text" placeholder="Input của Con" />;
});

export function UseImperativeHandleDemo() {
  const ref = useRef<InputHandle>(null);
  return (
    <div className="row">
      <FancyInput ref={ref} />
      <button onClick={() => ref.current?.focusAndFill()}>Gọi từ Cha</button>
    </div>
  );
}
