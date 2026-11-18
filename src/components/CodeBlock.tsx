import { useMemo, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-tsx';
import { Check, ChevronDown, ChevronUp, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  fileName: string;
}

export function CodeBlock({ code, fileName }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const trimmedCode = useMemo(() => code.trimEnd(), [code]);
  const lineCount = useMemo(() => trimmedCode.split('\n').length, [trimmedCode]);
  const isLong = lineCount > 35;

  const highlightedHtml = useMemo(() => {
    const grammar = Prism.languages.tsx ?? Prism.languages.typescript;
    return Prism.highlight(trimmedCode, grammar, 'tsx');
  }, [trimmedCode]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(trimmedCode);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="code-wrapper">
      <div className="code-toolbar">
        <div className="code-file-info">
          <div className="window-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span className="code-filename">{fileName}</span>
        </div>

        <div className="code-actions">
          {isLong && (
            <button
              type="button"
              className="code-action-btn"
              onClick={() => setExpanded((prev) => !prev)}
            >
              {expanded ? (
                <>
                  <ChevronUp size={14} /> Thu gọn
                </>
              ) : (
                <>
                  <ChevronDown size={14} /> Mở rộng ({lineCount} dòng)
                </>
              )}
            </button>
          )}
          <button
            type="button"
            className={`code-action-btn ${copied ? 'copied' : ''}`}
            onClick={handleCopy}
          >
            {copied ? (
              <>
                <Check size={14} /> Đã copy
              </>
            ) : (
              <>
                <Copy size={14} /> Copy code
              </>
            )}
          </button>
        </div>
      </div>

      <div className={`code-scroll ${expanded ? 'expanded' : ''}`}>
        <div style={{ display: 'flex', minWidth: 'max-content' }}>
          <div
            aria-hidden="true"
            style={{
              userSelect: 'none',
              padding: '0.9rem 0.9rem 0.9rem 0.75rem',
              textAlign: 'right',
              color: '#475569',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              lineHeight: 1.55,
              borderRight: '1px solid rgba(148, 163, 184, 0.12)',
              minWidth: '3rem',
            }}
          >
            {Array.from({ length: lineCount }, (_, idx) => (
              <div key={idx}>{idx + 1}</div>
            ))}
          </div>
          <pre className="code-pre" style={{ paddingLeft: '1rem', paddingRight: '1.25rem', flex: 1 }}>
            <code
              className="language-tsx"
              dangerouslySetInnerHTML={{ __html: highlightedHtml }}
            />
          </pre>
        </div>
      </div>
    </div>
  );
}

