import { createContext, useContext, useState } from 'react';

type Theme = 'light' | 'dark';
const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
  theme: 'light',
  toggle: () => {},
});

function ThemedButton() {
  const { theme, toggle } = useContext(ThemeContext); // Đọc trực tiếp từ Context
  return (
    <button className={theme === 'dark' ? 'btn-dark' : ''} onClick={toggle}>
      Theme: {theme.toUpperCase()} (Bấm đổi)
    </button>
  );
}

export function UseContextDemo() {
  const [theme, setTheme] = useState<Theme>('light');
  const toggle = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <ThemedButton />
    </ThemeContext.Provider>
  );
}
