# Hook_React — Học 15 React Hooks với TypeScript & Live UI

[![CI/CD - Build, Test & Deploy](https://github.com/hhhuuunnnggg-design/Hook_React/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/hhhuuunnnggg-design/Hook_React/actions/workflows/ci-cd.yml)

**Live Demo:** https://hhhuuunnnggg-design.github.io/Hook_React/

Ứng dụng học tập tương tác tổng hợp **15 React Hooks** từ `Danh sách tất cả React Hooks.docx`, xây dựng bằng **React 18 + TypeScript + Vite**.

Mỗi Hook trên trang được trình bày theo 3 phần nối tiếp nhau:
1. **Giải thích chi tiết**: Hook làm được gì, khi nào nên dùng, và lưu ý thực tế.
2. **Code Logic (React + TypeScript)**: Đoạn mã ngắn gọn, tập trung hoàn toàn vào logic của hook, được đọc trực tiếp từ chính file `.tsx` đang chạy.
3. **Giao diện hoạt động thực tế (Live UI Preview)** ngay bên dưới đoạn code để tương tác kiểm chứng trực tiếp.

## Danh sách 15 React Hooks

| # | Hook | Phiên bản | File Demo |
|---|------|-----------|-----------|
| 01 | `useState` | React 16.8+ | `src/demos/UseStateDemo.tsx` |
| 02 | `useEffect` | React 16.8+ | `src/demos/UseEffectDemo.tsx` |
| 03 | `useRef` | React 16.8+ | `src/demos/UseRefDemo.tsx` |
| 04 | `useContext` | React 16.8+ | `src/demos/UseContextDemo.tsx` |
| 05 | `useMemo` | React 16.8+ | `src/demos/UseMemoDemo.tsx` |
| 06 | `useCallback` | React 16.8+ | `src/demos/UseCallbackDemo.tsx` |
| 07 | `useReducer` | React 16.8+ | `src/demos/UseReducerDemo.tsx` |
| 08 | `useLayoutEffect` | React 16.8+ | `src/demos/UseLayoutEffectDemo.tsx` |
| 09 | `useTransition` | React 18 | `src/demos/UseTransitionDemo.tsx` |
| 10 | `useDeferredValue` | React 18 | `src/demos/UseDeferredValueDemo.tsx` |
| 11 | `useId` | React 18 | `src/demos/UseIdDemo.tsx` |
| 12 | `useImperativeHandle` | React 16.8+ | `src/demos/UseImperativeHandleDemo.tsx` |
| 13 | `useDebugValue` | React 16.8+ | `src/demos/UseDebugValueDemo.tsx` |
| 14 | `useSyncExternalStore` | React 18 | `src/demos/UseSyncExternalStoreDemo.tsx` |
| 15 | `useInsertionEffect` | React 18 | `src/demos/UseInsertionEffectDemo.tsx` |

## Cài đặt & Chạy dự án

```bash
# Cài dependencies
npm install

# Chạy dev server (mặc định http://localhost:5173)
npm run dev

# Kiểm tra TypeScript & build production
npm run build

# Chạy toàn bộ test (Vitest + React Testing Library)
npm test
```

## Cấu trúc thư mục

```text
src/
├── components/
│   ├── CodeBlock.tsx      # Syntax highlighting TSX + Copy code
│   └── HookSection.tsx    # Card hiển thị Giải thích + Code + Live UI
├── data/
│   └── hooksRegistry.ts   # Danh sách & metadata 15 React Hooks
├── demos/                 # 15 React + TypeScript demo độc lập
├── styles/                # Global theme (Light/Dark) & Demo styles
├── test/
│   └── hooks.test.tsx     # 16 test cases cho 15 hooks & App
├── types/
│   └── hook.ts            # Định nghĩa kiểu TypeScript
├── App.tsx
└── main.tsx
```
