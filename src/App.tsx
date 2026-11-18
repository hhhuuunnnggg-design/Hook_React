import { useEffect, useMemo, useState } from 'react';
import {
  Atom,
  ChevronLeft,
  ChevronRight,
  Layers,
  ListOrdered,
  Moon,
  Search,
  Sun,
} from 'lucide-react';
import { HOOKS_LIST } from './data/hooksRegistry';
import { HookSection } from './components/HookSection';
import type { HookCategory } from './types/hook';

const CATEGORIES: Array<'Tất cả' | HookCategory> = [
  'Tất cả',
  'Cơ bản',
  'Tối ưu hiệu năng',
  'Quản lý State nâng cao',
  'React 18 Concurrent',
  'Thư viện & Đặc biệt',
];

export function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<'Tất cả' | HookCategory>('Tất cả');
  const [activeHookId, setActiveHookId] = useState<string>(HOOKS_LIST[0].id);
  const [focusMode, setFocusMode] = useState<boolean>(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const filteredHooks = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return HOOKS_LIST.filter((hook) => {
      const matchCategory = selectedCategory === 'Tất cả' || hook.category === selectedCategory;
      const matchQuery =
        !q ||
        hook.name.toLowerCase().includes(q) ||
        hook.shortSummary.toLowerCase().includes(q) ||
        hook.category.toLowerCase().includes(q);
      return matchCategory && matchQuery;
    });
  }, [searchTerm, selectedCategory]);

  const activeFocusHook = useMemo(() => {
    if (filteredHooks.length === 0) return null;
    return filteredHooks.find((h) => h.id === activeHookId) ?? filteredHooks[0];
  }, [filteredHooks, activeHookId]);

  const handleSelectHook = (hookId: string) => {
    setActiveHookId(hookId);
    if (!focusMode) {
      const el = document.getElementById(hookId);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const activeIndex = activeFocusHook
    ? filteredHooks.findIndex((h) => h.id === activeFocusHook.id)
    : -1;

  return (
    <div>
      <header className="app-header">
        <div className="app-header-inner">
          <div className="brand">
            <div className="brand-icon" aria-hidden="true">
              <Atom size={22} />
            </div>
            <div>
              <h1 className="brand-title">15 React Hooks — TypeScript & Live UI</h1>
              <p className="brand-subtitle">
                Giải thích chi tiết + Code React TypeScript + Giao diện chạy thật ngay dưới mỗi đoạn code
              </p>
            </div>
          </div>

          <div className="header-controls">
            <div className="search-box">
              <Search size={15} />
              <input
                type="text"
                className="search-input"
                placeholder="Tìm hook (vd: useState, memo)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <button
              type="button"
              className={`mode-btn ${focusMode ? 'active' : ''}`}
              onClick={() => setFocusMode((prev) => !prev)}
              title="Chuyển giữa xem tất cả hoặc học từng hook một"
            >
              {focusMode ? <Layers size={15} /> : <ListOrdered size={15} />}
              {focusMode ? 'Chế độ: Từng Hook' : 'Chế độ: Xem tất cả'}
            </button>

            <button
              type="button"
              className="icon-btn"
              onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
              aria-label="Đổi giao diện Sáng/Tối"
            >
              {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
              {theme === 'light' ? 'Tối' : 'Sáng'}
            </button>
          </div>
        </div>
      </header>

      <div className="app-layout">
        <aside className="sidebar" aria-label="Danh sách 15 React Hooks">
          <h2 className="sidebar-heading">Mục lục 15 Hooks (Phổ biến → Ít dùng)</h2>
          <ul className="sidebar-list">
            {HOOKS_LIST.map((hook) => {
              const isActive = activeHookId === hook.id;
              return (
                <li key={hook.id}>
                  <button
                    type="button"
                    className={`sidebar-item-btn ${isActive ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedCategory('Tất cả');
                      setSearchTerm('');
                      handleSelectHook(hook.id);
                    }}
                  >
                    <span className="sidebar-item-left">
                      <span className="sidebar-order">{String(hook.order).padStart(2, '0')}</span>
                      <span className="sidebar-name">{hook.name}</span>
                    </span>
                    {hook.reactVersion && <span className="sidebar-tag">R18</span>}
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        <main>
          <div className="hero-banner">
            <h2>Học trọn bộ 15 React Hooks bằng TypeScript tương tác trực tiếp</h2>
            <p>
              Mỗi hook gồm 3 phần nối tiếp nhau: <strong>Giải thích công dụng</strong> →{' '}
              <strong>Code React + TypeScript thực tế</strong> →{' '}
              <strong>Giao diện chạy thật ngay bên dưới</strong> để bạn bấm nút và kiểm chứng ngay lập tức.
            </p>
          </div>

          <div className="filter-bar" role="tablist" aria-label="Lọc theo nhóm hook">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                className={`filter-pill ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredHooks.length === 0 ? (
            <div className="empty-state">
              <p>Không tìm thấy hook nào phù hợp với từ khóa &quot;{searchTerm}&quot;.</p>
              <button
                type="button"
                className="demo-btn demo-btn-primary"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('Tất cả');
                }}
              >
                Hiện lại tất cả 15 Hooks
              </button>
            </div>
          ) : focusMode && activeFocusHook ? (
            <>
              <HookSection hook={activeFocusHook} />
              <div className="focus-nav">
                <button
                  type="button"
                  className="demo-btn"
                  disabled={activeIndex <= 0}
                  onClick={() =>
                    activeIndex > 0 && handleSelectHook(filteredHooks[activeIndex - 1].id)
                  }
                >
                  <ChevronLeft size={16} /> Hook trước
                </button>
                <span className="demo-muted">
                  Đang xem {activeIndex + 1} / {filteredHooks.length}: <strong>{activeFocusHook.name}</strong>
                </span>
                <button
                  type="button"
                  className="demo-btn demo-btn-primary"
                  disabled={activeIndex >= filteredHooks.length - 1}
                  onClick={() =>
                    activeIndex < filteredHooks.length - 1 &&
                    handleSelectHook(filteredHooks[activeIndex + 1].id)
                  }
                >
                  Hook tiếp theo <ChevronRight size={16} />
                </button>
              </div>
            </>
          ) : (
            filteredHooks.map((hook) => <HookSection key={hook.id} hook={hook} />)
          )}
        </main>
      </div>
    </div>
  );
}
export default App;

