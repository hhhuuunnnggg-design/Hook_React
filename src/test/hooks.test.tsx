import { act, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import App from '../App';
import { HOOKS_LIST } from '../data/hooksRegistry';
import { UseCallbackDemo } from '../demos/UseCallbackDemo';
import { UseContextDemo } from '../demos/UseContextDemo';
import { UseDebugValueDemo } from '../demos/UseDebugValueDemo';
import { UseDeferredValueDemo } from '../demos/UseDeferredValueDemo';
import { UseEffectDemo } from '../demos/UseEffectDemo';
import { UseIdDemo } from '../demos/UseIdDemo';
import { UseImperativeHandleDemo } from '../demos/UseImperativeHandleDemo';
import { UseInsertionEffectDemo } from '../demos/UseInsertionEffectDemo';
import { UseLayoutEffectDemo } from '../demos/UseLayoutEffectDemo';
import { UseMemoDemo } from '../demos/UseMemoDemo';
import { UseReducerDemo } from '../demos/UseReducerDemo';
import { UseRefDemo } from '../demos/UseRefDemo';
import { UseStateDemo } from '../demos/UseStateDemo';
import { UseSyncExternalStoreDemo } from '../demos/UseSyncExternalStoreDemo';
import { UseTransitionDemo } from '../demos/UseTransitionDemo';

describe('15 React Hooks + TypeScript Concise Demos', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('01. useState: tăng count và reset về 0', () => {
    render(<UseStateDemo />);
    expect(screen.getByText('Giá trị:')).toHaveTextContent('Giá trị: 0');

    fireEvent.click(screen.getByRole('button', { name: 'Tăng (+)' }));
    fireEvent.click(screen.getByRole('button', { name: 'Tăng (+)' }));
    expect(screen.getByText('Giá trị:')).toHaveTextContent('Giá trị: 2');

    fireEvent.click(screen.getByRole('button', { name: 'Reset' }));
    expect(screen.getByText('Giá trị:')).toHaveTextContent('Giá trị: 0');
  });

  it('02. useEffect: chạy timer và dừng bằng cleanup', () => {
    vi.useFakeTimers();
    render(<UseEffectDemo />);

    expect(screen.getByText('0s')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Bắt đầu' }));

    act(() => {
      vi.advanceTimersByTime(3000);
    });
    expect(screen.getByText('3s')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Tạm dừng' }));
    act(() => {
      vi.advanceTimersByTime(2000);
    });
    expect(screen.getByText('3s')).toBeInTheDocument();
  });

  it('03. useRef: focus input và cập nhật ref ngầm không re-render cho tới khi ép state', () => {
    render(<UseRefDemo />);
    const input = screen.getByDisplayValue('Ô nhập liệu');

    fireEvent.click(screen.getByRole('button', { name: 'Focus Input' }));
    expect(input).toHaveFocus();

    fireEvent.click(screen.getByRole('button', { name: 'Tăng Ref ngầm (+1)' }));
    fireEvent.click(screen.getByRole('button', { name: 'Tăng Ref ngầm (+1)' }));
    expect(screen.getByRole('button', { name: /Xem Ref thật/ })).toHaveTextContent('Xem Ref thật (0)');

    fireEvent.click(screen.getByRole('button', { name: /Xem Ref thật/ }));
    expect(screen.getByRole('button', { name: /Xem Ref thật/ })).toHaveTextContent('Xem Ref thật (2)');
  });

  it('04. useContext: đọc và đổi theme qua Context', () => {
    render(<UseContextDemo />);
    const btn = screen.getByRole('button');
    expect(btn).toHaveTextContent('Theme: LIGHT (Bấm đổi)');

    fireEvent.click(btn);
    expect(btn).toHaveTextContent('Theme: DARK (Bấm đổi)');
  });

  it('05. useMemo: đổi số tính giai thừa, bấm count khác giữ nguyên cache', () => {
    render(<UseMemoDemo />);
    expect(screen.getByText('120')).toBeInTheDocument();

    const pBefore = screen.getByText(/Tính lúc:/).textContent;
    fireEvent.click(screen.getByRole('button', { name: /Count không liên quan/ }));
    expect(screen.getByRole('button', { name: 'Count không liên quan: 1' })).toBeInTheDocument();
    expect(screen.getByText(/Tính lúc:/).textContent).toBe(pBefore);

    fireEvent.click(screen.getByRole('button', { name: 'Đổi số (5)' }));
    expect(screen.getByText('720')).toBeInTheDocument();
  });

  it('06. useCallback: giữ nguyên render count của Con khi Cha re-render', () => {
    render(<UseCallbackDemo />);
    const childBtn = screen.getByRole('button', { name: /Con \(Render:/ });
    expect(childBtn).toHaveTextContent('Con (Render: 1 lần)');

    fireEvent.click(screen.getByRole('button', { name: 'Re-render Cha (+1)' }));
    expect(childBtn).toHaveTextContent('Con (Render: 1 lần)');

    fireEvent.click(childBtn);
    expect(screen.getByText(/Bấm từ Con:/)).toHaveTextContent('Bấm từ Con: 1');
  });

  it('07. useReducer: tăng, giảm và reset bằng dispatch', () => {
    render(<UseReducerDemo />);
    fireEvent.click(screen.getByRole('button', { name: '+1' }));
    fireEvent.click(screen.getByRole('button', { name: '+1' }));
    expect(screen.getByText('2')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: '-1' }));
    expect(screen.getByText('1')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Reset' }));
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('08. useLayoutEffect: chuyển kích thước hộp và đo đồng bộ', () => {
    render(<UseLayoutEffectDemo />);
    expect(screen.getByText(/Chiều rộng đo được:/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Đổi kích thước hộp' }));
    expect(screen.getByText(/Chiều rộng đo được:/)).toBeInTheDocument();
  });

  it('09. useTransition: lọc danh sách 1500 items không chặn input', () => {
    render(<UseTransitionDemo />);
    expect(screen.getByText('Tìm thấy 1500 mục')).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText('Nhập số để lọc (vd: 12)...'), {
      target: { value: '1500' },
    });
    expect(screen.getByText('Tìm thấy 1 mục')).toBeInTheDocument();
  });

  it('10. useDeferredValue: cập nhật query và deferredQuery', () => {
    render(<UseDeferredValueDemo />);
    fireEvent.change(screen.getByPlaceholderText('Gõ liên tục vào đây...'), {
      target: { value: 'Hooks' },
    });
    expect(screen.getByText(/Gõ tức thì: "Hooks" \| Trì hoãn: "Hooks"/)).toBeInTheDocument();
  });

  it('11. useId: sinh ID duy nhất khác nhau cho hai PasswordField', () => {
    render(<UseIdDemo />);
    const labels = screen.getAllByText(/\(:r/);
    expect(labels).toHaveLength(2);
    expect(labels[0].textContent).not.toBe(labels[1].textContent);
  });

  it('12. useImperativeHandle: cha gọi focusAndFill trên con qua ref', () => {
    render(<UseImperativeHandleDemo />);
    const input = screen.getByPlaceholderText('Input của Con');
    fireEvent.click(screen.getByRole('button', { name: 'Gọi từ Cha' }));
    expect(input).toHaveValue('Đã gọi từ Component Cha!');
    expect(input).toHaveFocus();
  });

  it('13. useDebugValue: custom hook đổi trạng thái Online/Offline', () => {
    render(<UseDebugValueDemo />);
    expect(screen.getByText('Online 🟢')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Đổi trạng thái' }));
    expect(screen.getByText('Offline 🔴')).toBeInTheDocument();
  });

  it('14. useSyncExternalStore: tăng state từ store ngoài React', () => {
    render(<UseSyncExternalStoreDemo />);
    expect(screen.getByText(/Store ngoài React:/)).toHaveTextContent('Store ngoài React: 0');

    fireEvent.click(screen.getByRole('button', { name: 'Tăng từ Store (+1)' }));
    expect(screen.getByText(/Store ngoài React:/)).toHaveTextContent('Store ngoài React: 1');
  });

  it('15. useInsertionEffect: chèn thẻ <style> động vào document.head', () => {
    render(<UseInsertionEffectDemo />);
    fireEvent.click(screen.getByRole('button', { name: 'Đỏ' }));
    const styleEl = document.head.querySelector('style[data-demo="useInsertionEffect"]');
    expect(styleEl).not.toBeNull();
    expect(styleEl?.textContent).toContain('#e11d48');
  });

  it('App: hiển thị đủ 15 Hooks với code ngắn gọn <= 35 dòng và Live UI bên dưới', () => {
    render(<App />);
    expect(HOOKS_LIST).toHaveLength(15);

    for (const hook of HOOKS_LIST) {
      expect(hook.code.trimEnd().split('\n').length).toBeLessThanOrEqual(35);
      const section = document.getElementById(hook.id);
      expect(section).not.toBeNull();
      expect(within(section!).getByText(`Live UI Preview — ${hook.name}`)).toBeInTheDocument();
    }

    const useStateSection = document.getElementById('useState')!;
    const livePreview = useStateSection.querySelector('.live-preview-body') as HTMLElement;
    fireEvent.click(within(livePreview).getByRole('button', { name: 'Tăng (+)' }));
    expect(within(livePreview).getByText('Giá trị:')).toHaveTextContent('Giá trị: 1');
  });
});
