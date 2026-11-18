import type { ComponentType } from 'react';

export type HookCategory =
  | 'Cơ bản'
  | 'Tối ưu hiệu năng'
  | 'Quản lý State nâng cao'
  | 'React 18 Concurrent'
  | 'Thư viện & Đặc biệt';

export interface HookDocItem {
  id: string;
  order: number;
  name: string;
  reactVersion?: string;
  category: HookCategory;
  popularity: string;
  shortSummary: string;
  whatItDoes: string[];
  whenToUse: string[];
  keyNote: string;
  fileName: string;
  code: string;
  DemoComponent: ComponentType;
}

