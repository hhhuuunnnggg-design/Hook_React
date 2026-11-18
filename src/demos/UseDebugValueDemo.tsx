import { useDebugValue, useState } from 'react';

function useOnlineStatus(initial = true) {
  const [online, setOnline] = useState<boolean>(initial);
  // Hiển thị nhãn trạng thái trong React DevTools
  useDebugValue(online ? 'Online 🟢' : 'Offline 🔴');
  return { online, toggle: () => setOnline((o) => !o) };
}

export function UseDebugValueDemo() {
  const { online, toggle } = useOnlineStatus();
  return (
    <div className="row">
      <span>DevTools Label: <strong>{online ? 'Online 🟢' : 'Offline 🔴'}</strong></span>
      <button onClick={toggle}>Đổi trạng thái</button>
    </div>
  );
}
