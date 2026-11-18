import { useInsertionEffect, useState } from 'react';

export function UseInsertionEffectDemo() {
  const [color, setColor] = useState<string>('#2563eb');

  // Chèn <style> vào <head> trước khi useLayoutEffect chạy
  useInsertionEffect(() => {
    const style = document.createElement('style');
    style.setAttribute('data-demo', 'useInsertionEffect');
    style.textContent = `.live-css { background: ${color}; color: #fff; padding: 10px 14px; border-radius: 8px; font-weight: 600; }`;
    document.head.appendChild(style);
    return () => style.remove();
  }, [color]);

  return (
    <div className="stack">
      <div className="live-css">Box nhận CSS động từ useInsertionEffect</div>
      <div className="row">
        <button onClick={() => setColor('#2563eb')}>Xanh</button>
        <button onClick={() => setColor('#e11d48')}>Đỏ</button>
        <button onClick={() => setColor('#059669')}>Lục</button>
      </div>
    </div>
  );
}
