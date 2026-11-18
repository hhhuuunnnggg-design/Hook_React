import { useId } from 'react';

function PasswordField({ label }: { label: string }) {
  const id = useId(); // Sinh ID duy nhất không trùng lặp
  return (
    <div className="row">
      <label htmlFor={id}>{label} ({id}):</label>
      <input id={id} type="password" placeholder="Bấm label để focus" />
    </div>
  );
}

export function UseIdDemo() {
  return (
    <div className="stack">
      <PasswordField label="Mật khẩu" />
      <PasswordField label="Nhập lại" />
    </div>
  );
}
