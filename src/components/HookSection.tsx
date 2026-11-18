import { useState } from 'react';
import { Code2, Lightbulb, Play, RotateCcw, Sparkles, Wrench } from 'lucide-react';
import type { HookDocItem } from '../types/hook';
import { CodeBlock } from './CodeBlock';

interface HookSectionProps {
  hook: HookDocItem;
}

export function HookSection({ hook }: HookSectionProps) {
  const [demoResetKey, setDemoResetKey] = useState(0);
  const { DemoComponent } = hook;

  return (
    <section id={hook.id} className="hook-card" aria-labelledby={`heading-${hook.id}`}>
      <header className="hook-card-header">
        <div className="hook-title-row">
          <span className="hook-order-badge">
            #{String(hook.order).padStart(2, '0')}
          </span>
          <h3 id={`heading-${hook.id}`} className="hook-name">
            {hook.name}
          </h3>
          {hook.reactVersion && (
            <span className="hook-version-badge">{hook.reactVersion}</span>
          )}
        </div>

        <div className="hook-meta-badges">
          <span className="meta-pill">{hook.category}</span>
          <span className="meta-pill">{hook.popularity}</span>
        </div>
      </header>

      <p className="hook-short-summary">{hook.shortSummary}</p>

      <div className="explain-grid">
        <div className="explain-box">
          <h4>
            <Sparkles size={15} /> Hook này làm được gì?
          </h4>
          <ul>
            {hook.whatItDoes.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="explain-box">
          <h4>
            <Wrench size={15} /> Khi nào nên dùng?
          </h4>
          <ul>
            {hook.whenToUse.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="key-note-box">
        <Lightbulb size={17} />
        <div>
          <strong>Lưu ý quan trọng:</strong> {hook.keyNote}
        </div>
      </div>

      <div className="block-label-row">
        <span className="block-label">
          <Code2 size={15} /> Logic Code (React + TypeScript)
        </span>
      </div>
      <CodeBlock code={hook.code} fileName={hook.fileName} />

      <div className="block-label-row">
        <span className="block-label">
          <Play size={15} /> Giao diện hoạt động thực tế (Ngay dưới đoạn code)
        </span>
      </div>
      <div className="live-preview-wrapper">
        <div className="live-preview-header">
          <span className="live-indicator">
            <span className="pulse-dot" aria-hidden="true" />
            Live UI Preview — {hook.name}
          </span>
          <button
            type="button"
            className="reset-demo-btn"
            onClick={() => setDemoResetKey((k) => k + 1)}
            title="Khởi tạo lại trạng thái demo ban đầu"
          >
            <RotateCcw size={13} /> Reset Demo
          </button>
        </div>
        <div className="live-preview-body">
          <DemoComponent key={demoResetKey} />
        </div>
      </div>
    </section>
  );
}

