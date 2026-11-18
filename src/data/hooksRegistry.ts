import type { HookDocItem } from '../types/hook';

import { UseStateDemo } from '../demos/UseStateDemo';
import useStateCode from '../demos/UseStateDemo.tsx?raw';

import { UseEffectDemo } from '../demos/UseEffectDemo';
import useEffectCode from '../demos/UseEffectDemo.tsx?raw';

import { UseRefDemo } from '../demos/UseRefDemo';
import useRefCode from '../demos/UseRefDemo.tsx?raw';

import { UseContextDemo } from '../demos/UseContextDemo';
import useContextCode from '../demos/UseContextDemo.tsx?raw';

import { UseMemoDemo } from '../demos/UseMemoDemo';
import useMemoCode from '../demos/UseMemoDemo.tsx?raw';

import { UseCallbackDemo } from '../demos/UseCallbackDemo';
import useCallbackCode from '../demos/UseCallbackDemo.tsx?raw';

import { UseReducerDemo } from '../demos/UseReducerDemo';
import useReducerCode from '../demos/UseReducerDemo.tsx?raw';

import { UseLayoutEffectDemo } from '../demos/UseLayoutEffectDemo';
import useLayoutEffectCode from '../demos/UseLayoutEffectDemo.tsx?raw';

import { UseTransitionDemo } from '../demos/UseTransitionDemo';
import useTransitionCode from '../demos/UseTransitionDemo.tsx?raw';

import { UseDeferredValueDemo } from '../demos/UseDeferredValueDemo';
import useDeferredValueCode from '../demos/UseDeferredValueDemo.tsx?raw';

import { UseIdDemo } from '../demos/UseIdDemo';
import useIdCode from '../demos/UseIdDemo.tsx?raw';

import { UseImperativeHandleDemo } from '../demos/UseImperativeHandleDemo';
import useImperativeHandleCode from '../demos/UseImperativeHandleDemo.tsx?raw';

import { UseDebugValueDemo } from '../demos/UseDebugValueDemo';
import useDebugValueCode from '../demos/UseDebugValueDemo.tsx?raw';

import { UseSyncExternalStoreDemo } from '../demos/UseSyncExternalStoreDemo';
import useSyncExternalStoreCode from '../demos/UseSyncExternalStoreDemo.tsx?raw';

import { UseInsertionEffectDemo } from '../demos/UseInsertionEffectDemo';
import useInsertionEffectCode from '../demos/UseInsertionEffectDemo.tsx?raw';

export const HOOKS_LIST: HookDocItem[] = [
  {
    id: 'useState',
    order: 1,
    name: 'useState',
    category: 'Cơ bản',
    popularity: 'Dùng nhiều nhất #1',
    shortSummary:
      'Lưu trữ và cập nhật trạng thái (state) nội bộ của component. Mỗi khi gọi setter, React tự động render lại giao diện với giá trị mới.',
    whatItDoes: [
      'Khởi tạo một biến trạng thái kèm hàm cập nhật: const [state, setState] = useState<Type>(initialValue).',
      'Giữ nguyên giá trị state qua các lần component re-render (không bị reset về giá trị ban đầu).',
      'Kích hoạt React re-render component và cập nhật DOM khi giá trị state mới khác giá trị cũ.',
    ],
    whenToUse: [
      'Quản lý số đếm (counter), bật/tắt modal, tab đang chọn, dữ liệu người dùng nhập vào form.',
      'Mọi dữ liệu thay đổi theo tương tác người dùng và cần hiển thị trực tiếp lên màn hình.',
    ],
    keyNote:
      'Khi state mới phụ thuộc vào state cũ (như count + 1), hãy dùng dạng hàm callback setCount(prev => prev + 1) để tránh lỗi giá trị cũ (stale state) khi gọi cập nhật nhiều lần liên tiếp.',
    fileName: 'src/demos/UseStateDemo.tsx',
    code: useStateCode,
    DemoComponent: UseStateDemo,
  },
  {
    id: 'useEffect',
    order: 2,
    name: 'useEffect',
    category: 'Cơ bản',
    popularity: 'Rất phổ biến #2',
    shortSummary:
      'Đồng bộ component với hệ thống bên ngoài (side effects) như gọi API, hẹn giờ setInterval/setTimeout, lắng nghe sự kiện hoặc thao tác DOM.',
    whatItDoes: [
      'Chạy đoạn logic side effect sau khi React đã render giao diện lên màn hình.',
      'Kiểm soát thời điểm chạy lại thông qua mảng dependencies ([dep1, dep2]).',
      'Cho phép trả về hàm Cleanup (return () => ...) để hủy timer, hủy fetch, hoặc gỡ event listener khi component unmount hay trước lần chạy tiếp theo.',
    ],
    whenToUse: [
      'Gọi API lấy dữ liệu khi component vừa mount hoặc khi ID thay đổi.',
      'Thiết lập timer (setInterval), WebSocket, hoặc lắng nghe window.addEventListener.',
    ],
    keyNote:
      'Luôn trả về hàm cleanup khi tạo timer hoặc đăng ký sự kiện để tránh rò rỉ bộ nhớ (memory leak). Mảng [] rỗng nghĩa là chỉ chạy 1 lần khi mount.',
    fileName: 'src/demos/UseEffectDemo.tsx',
    code: useEffectCode,
    DemoComponent: UseEffectDemo,
  },
  {
    id: 'useRef',
    order: 3,
    name: 'useRef',
    category: 'Cơ bản',
    popularity: 'Phổ biến #3',
    shortSummary:
      'Tạo một hộp chứa giá trị thay đổi được (.current) xuyên suốt vòng đời component mà KHÔNG làm component re-render, hoặc dùng để trỏ thẳng tới thẻ DOM.',
    whatItDoes: [
      'Truy cập trực tiếp DOM element (như gọi inputRef.current?.focus(), scrollIntoView, đo kích thước).',
      'Lưu giữ dữ liệu ngầm (timer ID, giá trị render trước đó, cờ boolean) mà không kích hoạt render lại UI khi thay đổi .current.',
    ],
    whenToUse: [
      'Focus vào ô input, điều khiển thẻ <video>/<audio>, hoặc tích hợp thư viện DOM bên thứ 3.',
      'Lưu biến đếm/ID mà giao diện không cần vẽ lại ngay khi biến đó đổi.',
    ],
    keyNote:
      'Đừng dùng useRef để lưu dữ liệu cần hiển thị ngay lên giao diện — thay đổi ref.current sẽ KHÔNG khiến React vẽ lại màn hình cho đến khi có một state khác re-render.',
    fileName: 'src/demos/UseRefDemo.tsx',
    code: useRefCode,
    DemoComponent: UseRefDemo,
  },
  {
    id: 'useContext',
    order: 4,
    name: 'useContext',
    category: 'Cơ bản',
    popularity: 'Phổ biến #4',
    shortSummary:
      'Đọc dữ liệu trực tiếp từ React Context ở bất kỳ component con/cháu nào mà không phải truyền props thủ công qua từng tầng (tránh prop drilling).',
    whatItDoes: [
      'Kết nối component trực tiếp với Provider gần nhất phía trên trong cây component.',
      'Tự động re-render các component đang đọc useContext khi giá trị value của Provider thay đổi.',
    ],
    whenToUse: [
      'Chia sẻ Theme (Sáng/Tối), thông tin người dùng đang đăng nhập (Auth), ngôn ngữ (i18n), hoặc cấu hình dùng chung toàn app.',
    ],
    keyNote:
      'Mọi component gọi useContext đều sẽ re-render khi value của Provider đổi. Với dữ liệu thay đổi liên tục từng mili-giây, nên tách nhỏ Context hoặc kết hợp memo.',
    fileName: 'src/demos/UseContextDemo.tsx',
    code: useContextCode,
    DemoComponent: UseContextDemo,
  },
  {
    id: 'useMemo',
    order: 5,
    name: 'useMemo',
    category: 'Tối ưu hiệu năng',
    popularity: 'Tối ưu #5',
    shortSummary:
      'Ghi nhớ (cache) kết quả của một phép tính toán nặng giữa các lần render, chỉ tính toán lại khi dữ liệu phụ thuộc trong mảng dependencies thay đổi.',
    whatItDoes: [
      'Bỏ qua phép tính tốn CPU nếu các biến phụ thuộc không thay đổi so với lần render trước.',
      'Giữ nguyên tham chiếu object/array kết quả để không làm vỡ memoization của component con.',
    ],
    whenToUse: [
      'Lọc, sắp xếp mảng dữ liệu hàng nghìn phần tử hoặc tính toán toán học phức tạp.',
      'Tạo object/array truyền xuống component con có bọc React.memo.',
    ],
    keyNote:
      'Không nên lạm dụng useMemo cho phép tính đơn giản (như a + b), vì bản thân việc so sánh dependencies và lưu cache cũng tốn bộ nhớ.',
    fileName: 'src/demos/UseMemoDemo.tsx',
    code: useMemoCode,
    DemoComponent: UseMemoDemo,
  },
  {
    id: 'useCallback',
    order: 6,
    name: 'useCallback',
    category: 'Tối ưu hiệu năng',
    popularity: 'Tối ưu #6',
    shortSummary:
      'Ghi nhớ (cache) chính tham chiếu của một hàm (function) giữa các lần render để tránh tạo hàm mới mỗi khi component cha render lại.',
    whatItDoes: [
      'Giữ nguyên địa chỉ bộ nhớ (reference equality) của callback function khi dependencies chưa đổi.',
      'Giúp component con bọc React.memo nhận ra prop onClick không đổi và bỏ qua việc re-render thừa.',
    ],
    whenToUse: [
      'Truyền hàm xử lý sự kiện xuống component con nặng đã bọc React.memo.',
      'Dùng một hàm làm dependency bên trong useEffect của component.',
    ],
    keyNote:
      'useCallback chỉ phát huy tác dụng chống re-render con khi component con đó được bọc bằng React.memo (hoặc dùng hàm đó trong dependency array của hook khác).',
    fileName: 'src/demos/UseCallbackDemo.tsx',
    code: useCallbackCode,
    DemoComponent: UseCallbackDemo,
  },
  {
    id: 'useReducer',
    order: 7,
    name: 'useReducer',
    category: 'Quản lý State nâng cao',
    popularity: 'Quản lý State #7',
    shortSummary:
      'Thay thế useState khi state có cấu trúc phức tạp nhiều trường hoặc nhiều hành động cập nhật (actions) khác nhau, đi theo mô hình Reducer thuần khiết.',
    whatItDoes: [
      'Tách toàn bộ logic biến đổi state ra khỏi UI vào một hàm reducer(state, action) dễ test và dễ đọc.',
      'Kết hợp hoàn hảo với TypeScript Discriminated Union để kiểm tra chặt chẽ từng loại action và payload.',
    ],
    whenToUse: [
      'State gồm nhiều giá trị liên quan nhau (giỏ hàng, form nhiều bước, bộ lọc phức tạp, lịch sử undo/redo).',
      'Khi state tiếp theo phụ thuộc phức tạp vào state hiện tại và loại hành động.',
    ],
    keyNote:
      'Hàm reducer phải là pure function (không sửa trực tiếp object state cũ, không gọi API bên trong reducer) — luôn trả về object state mới.',
    fileName: 'src/demos/UseReducerDemo.tsx',
    code: useReducerCode,
    DemoComponent: UseReducerDemo,
  },
  {
    id: 'useLayoutEffect',
    order: 8,
    name: 'useLayoutEffect',
    category: 'Quản lý State nâng cao',
    popularity: 'Nâng cao #8',
    shortSummary:
      'Chạy đồng bộ ngay sau khi React cập nhật DOM nhưng TRƯỚC KHI trình duyệt vẽ (paint) điểm ảnh lên màn hình, giúp đo kích thước và chỉnh layout không bị giật.',
    whatItDoes: [
      'Đọc thông số hình học DOM (getBoundingClientRect, clientHeight, scrollWidth) trước khi người dùng kịp thấy khung hình.',
      'Cho phép cập nhật lại state/vị trí tooltip ngay lập tức trong cùng một khung hình để tránh nhấp nháy (flicker).',
    ],
    whenToUse: [
      'Định vị Tooltip, Popover, Dropdown sao cho không bị tràn mép màn hình dựa vào kích thước thật của phần tử.',
    ],
    keyNote:
      'Vì chạy đồng bộ và chặn trình duyệt vẽ màn hình cho tới khi xong, nên chỉ dùng useLayoutEffect khi thật sự cần đo/sửa DOM trước paint; đa số trường hợp vẫn nên dùng useEffect.',
    fileName: 'src/demos/UseLayoutEffectDemo.tsx',
    code: useLayoutEffectCode,
    DemoComponent: UseLayoutEffectDemo,
  },
  {
    id: 'useTransition',
    order: 9,
    name: 'useTransition',
    reactVersion: 'React 18',
    category: 'React 18 Concurrent',
    popularity: 'React 18 #9',
    shortSummary:
      'Đánh dấu một lần cập nhật state là tác vụ ưu tiên thấp (non-blocking), giữ cho ô gõ phím và nút bấm luôn mượt mà dù UI đang render danh sách nặng.',
    whatItDoes: [
      'Cung cấp cờ isPending (true/false) để hiển thị trạng thái đang xử lý nền.',
      'Cung cấp startTransition(() => setState(...)) cho phép React tạm ngưng render danh sách nặng nếu người dùng tiếp tục gõ phím.',
    ],
    whenToUse: [
      'Tìm kiếm/lọc bảng dữ liệu lớn ngay khi đang gõ mà không muốn ô input bị khựng.',
      'Chuyển tab chứa biểu đồ hoặc danh sách nặng mà vẫn giữ nút bấm phản hồi tức thì.',
    ],
    keyNote:
      'Không bọc hàm điều khiển input trực tiếp (onChange setInputValue) vào startTransition; chỉ bọc phần state gây render nặng (như filterQuery).',
    fileName: 'src/demos/UseTransitionDemo.tsx',
    code: useTransitionCode,
    DemoComponent: UseTransitionDemo,
  },
  {
    id: 'useDeferredValue',
    order: 10,
    name: 'useDeferredValue',
    reactVersion: 'React 18',
    category: 'React 18 Concurrent',
    popularity: 'React 18 #10',
    shortSummary:
      'Tạo ra một bản sao "trì hoãn" của một giá trị đang thay đổi liên tục, giúp UI hiển thị tạm kết quả cũ thay vì đơ cứng khi render lại phần giao diện nặng.',
    whatItDoes: [
      'Trả về giá trị cũ trong lúc React ưu tiên xử lý các tương tác khẩn cấp (như gõ phím), rồi tự cập nhật theo giá trị mới ở nền.',
      'Dễ dàng kiểm tra query !== deferredQuery để làm mờ nhẹ danh sách báo hiệu dữ liệu mới đang được tính.',
    ],
    whenToUse: [
      'Khi bạn nhận giá trị qua props (không sở hữu hàm setState để dùng useTransition) nhưng cần trì hoãn việc render lại component con nặng.',
    ],
    keyNote:
      'Để useDeferredValue phát huy hiệu quả, component nhận giá trị trì hoãn (như SlowList) bắt buộc phải bọc React.memo, nếu không nó vẫn bị render lại theo component cha.',
    fileName: 'src/demos/UseDeferredValueDemo.tsx',
    code: useDeferredValueCode,
    DemoComponent: UseDeferredValueDemo,
  },
  {
    id: 'useId',
    order: 11,
    name: 'useId',
    reactVersion: 'React 18',
    category: 'React 18 Concurrent',
    popularity: 'React 18 #11',
    shortSummary:
      'Sinh ra một chuỗi ID duy nhất, ổn định giữa Server (SSR) và Client (Hydration) để gắn cho các cặp thẻ HTML cần liên kết như <label htmlFor> và <input id>.',
    whatItDoes: [
      'Tự động tạo ID duy nhất cho mỗi instance component dù bạn render component đó 2 hay 100 lần trên cùng một trang.',
      'Đảm bảo khớp hoàn toàn giữa server-rendered HTML và client React tree, tránh lỗi hydration mismatch.',
    ],
    whenToUse: [
      'Gắn thuộc tính htmlFor, id, aria-describedby, aria-labelledby trong các component form tái sử dụng nhiều lần.',
    ],
    keyNote:
      'Tuyệt đối KHÔNG dùng useId để làm prop key trong vòng lặp list.map() — key của danh sách phải đến từ dữ liệu (như item.id).',
    fileName: 'src/demos/UseIdDemo.tsx',
    code: useIdCode,
    DemoComponent: UseIdDemo,
  },
  {
    id: 'useImperativeHandle',
    order: 12,
    name: 'useImperativeHandle',
    category: 'Thư viện & Đặc biệt',
    popularity: 'Chuyên biệt #12',
    shortSummary:
      'Tùy biến chính xác những phương thức/thuộc tính nào mà component con cho phép component cha gọi thông qua ref (kết hợp với forwardRef).',
    whatItDoes: [
      'Ẩn toàn bộ DOM node gốc bên trong component con, chỉ lộ ra một API gọn gàng an toàn (ví dụ: focusAndHighlight, clear, scrollToTop).',
      'Kiểm soát chặt kiểu TypeScript của ref handle thông qua generic của forwardRef<HandleType, PropsType>.',
    ],
    whenToUse: [
      'Xây dựng thư viện UI component (Input tùy biến, Modal, Video Player, Canvas) cần cha kích hoạt hành động mệnh lệnh.',
    ],
    keyNote:
      'Chỉ dùng khi thật sự cần điều khiển hành động (như focus, scroll, play/pause). Với dữ liệu thông thường, hãy ưu tiên truyền props theo luồng dữ liệu một chiều của React.',
    fileName: 'src/demos/UseImperativeHandleDemo.tsx',
    code: useImperativeHandleCode,
    DemoComponent: UseImperativeHandleDemo,
  },
  {
    id: 'useDebugValue',
    order: 13,
    name: 'useDebugValue',
    category: 'Thư viện & Đặc biệt',
    popularity: 'Debug Custom Hook #13',
    shortSummary:
      'Gắn nhãn thông tin trực quan cho Custom Hook của bạn để khi mở tiện ích mở rộng React DevTools trên trình duyệt, lập trình viên đọc được trạng thái ngay lập tức.',
    whatItDoes: [
      'Hiển thị chuỗi mô tả hoặc giá trị đã format bên cạnh tên Custom Hook trong tab Components của React DevTools.',
      'Hỗ trợ tham số thứ 2 là hàm format (useDebugValue(val, formatFn)) để chỉ format khi DevTools thực sự đang mở.',
    ],
    whenToUse: [
      'Khi viết các Custom Hook dùng chung cho team hoặc thư viện (useAuth, useOnlineStatus, useFetch) cần dễ theo dõi trong DevTools.',
    ],
    keyNote:
      'useDebugValue không ảnh hưởng đến giao diện người dùng cuối trên trình duyệt — nó chỉ phục vụ developer soi trong React DevTools (hoặc được mô phỏng trong demo bên dưới).',
    fileName: 'src/demos/UseDebugValueDemo.tsx',
    code: useDebugValueCode,
    DemoComponent: UseDebugValueDemo,
  },
  {
    id: 'useSyncExternalStore',
    order: 14,
    name: 'useSyncExternalStore',
    reactVersion: 'React 18',
    category: 'Thư viện & Đặc biệt',
    popularity: 'Thư viện Store #14',
    shortSummary:
      'Kết nối và lắng nghe an toàn một kho dữ liệu (store) nằm hoàn toàn bên ngoài React hoặc API trình duyệt, đảm bảo không bị lỗi lệch dữ liệu (tearing) ở chế độ Concurrent.',
    whatItDoes: [
      'Đăng ký lắng nghe thay đổi từ store ngoài React qua hàm subscribe và đọc dữ liệu hiện tại qua getSnapshot.',
      'Đồng bộ tức thì mọi component đang subscribe cùng một store dù thay đổi được gọi từ ngoài React.',
    ],
    whenToUse: [
      'Tích hợp state manager ngoài React (như Redux, Zustand), store tự viết bằng biến JS thuần, hoặc theo dõi API trình duyệt (navigator.onLine, matchMedia, localStorage).',
    ],
    keyNote:
      'Hàm getSnapshot phải trả về cùng một tham chiếu (cached snapshot) nếu dữ liệu chưa thay đổi, nếu không React sẽ báo lỗi vòng lặp render vô hạn.',
    fileName: 'src/demos/UseSyncExternalStoreDemo.tsx',
    code: useSyncExternalStoreCode,
    DemoComponent: UseSyncExternalStoreDemo,
  },
  {
    id: 'useInsertionEffect',
    order: 15,
    name: 'useInsertionEffect',
    reactVersion: 'React 18',
    category: 'Thư viện & Đặc biệt',
    popularity: 'CSS-in-JS #15',
    shortSummary:
      'Hook cực kỳ chuyên biệt dành cho tác giả thư viện CSS-in-JS để chèn thẻ <style> vào DOM trước khi bất kỳ useLayoutEffect nào kịp chạy và đo kích thước.',
    whatItDoes: [
      'Chạy sớm nhất trong pha commit (trước cả useLayoutEffect và useEffect) để đảm bảo CSS rules đã có mặt trong <head>.',
      'Tránh tình trạng useLayoutEffect đo nhầm kích thước phần tử do style chưa được áp dụng.',
    ],
    whenToUse: [
      'Chỉ khi bạn tự viết thư viện CSS-in-JS runtime (kiểu styled-components hoặc Emotion) tự sinh thẻ <style> động.',
    ],
    keyNote:
      'Trong useInsertionEffect KHÔNG thể truy cập ref DOM (vì ref chưa gắn) và KHÔNG nên gọi setState. (Ghi chú: trong file docx gốc, mục này bị đánh trùng số 14, đây là hook thứ 15/15).',
    fileName: 'src/demos/UseInsertionEffectDemo.tsx',
    code: useInsertionEffectCode,
    DemoComponent: UseInsertionEffectDemo,
  },
];

