import { memo, useDeferredValue, useState } from 'react';

const SlowList = memo(({ text }: { text: string }) => {
  const items = Array.from({ length: 120 }, (_, i) => `${text || 'Mục'} #${i + 1}`);
  return <div className="scroll-list">{items.map((x, i) => <div key={i}>{x}</div>)}</div>;
});

export function UseDeferredValueDemo() {
  const [query, setQuery] = useState<string>('');
  const deferredQuery = useDeferredValue(query); // Trì hoãn cập nhật cho list nặng

  return (
    <div className="stack">
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Gõ liên tục vào đây..." />
      <p>Gõ tức thì: &quot;{query}&quot; | Trì hoãn: &quot;{deferredQuery}&quot;</p>
      <SlowList text={deferredQuery} />
    </div>
  );
}
