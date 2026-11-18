import { useState, useTransition } from 'react';

const ITEMS = Array.from({ length: 1500 }, (_, i) => `Item #${i + 1}`);

export function UseTransitionDemo() {
  const [input, setInput] = useState<string>('');
  const [query, setQuery] = useState<string>('');
  const [isPending, startTransition] = useTransition();

  const onChange = (value: string) => {
    setInput(value); // Cập nhật ô gõ tức thì
    startTransition(() => setQuery(value)); // Lọc danh sách ở mức ưu tiên thấp
  };

  const list = ITEMS.filter((item) => item.includes(query));

  return (
    <div className="stack">
      <input value={input} onChange={(e) => onChange(e.target.value)} placeholder="Nhập số để lọc (vd: 12)..." />
      <p>{isPending ? '⏳ Đang lọc...' : `Tìm thấy ${list.length} mục`}</p>
      <div className="scroll-list">{list.map((item) => <div key={item}>{item}</div>)}</div>
    </div>
  );
}
