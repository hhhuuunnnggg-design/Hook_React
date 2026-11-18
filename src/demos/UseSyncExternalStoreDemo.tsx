import { useSyncExternalStore } from 'react';

// Store nằm hoàn toàn bên ngoài React
let count = 0;
const listeners = new Set<() => void>();
const store = {
  subscribe: (fn: () => void) => { listeners.add(fn); return () => listeners.delete(fn); },
  getSnapshot: () => count,
  increment: () => { count += 1; listeners.forEach((fn) => fn()); },
};

export function UseSyncExternalStoreDemo() {
  const value = useSyncExternalStore(store.subscribe, store.getSnapshot);

  return (
    <div className="row">
      <p>Store ngoài React: <strong>{value}</strong></p>
      <button onClick={() => store.increment()}>Tăng từ Store (+1)</button>
    </div>
  );
}
