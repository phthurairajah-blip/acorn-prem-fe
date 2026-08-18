"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Bold, Italic } from "lucide-react";

type RichTextEditorProps = {
  initialValue?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
};

const TOOLBAR = [
  { label: "Bold", command: "bold", icon: Bold },
  { label: "Italic", command: "italic", icon: Italic },
];

const RichTextEditor = ({ initialValue = "", placeholder, onChange }: RichTextEditorProps) => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    if (!isDirty && editorRef.current && editorRef.current.innerHTML !== initialValue) {
      editorRef.current.innerHTML = initialValue;
    }
  }, [initialValue, isDirty]);

  const handleInput = useCallback(() => {
    const html = editorRef.current?.innerHTML ?? "";
    setIsDirty(true);
    setValue(html);
    onChange?.(html);
  }, [onChange]);

  const handleCommand = useCallback(
    (command: string, commandValue?: string) => {
      if (!editorRef.current) return;
      editorRef.current.focus();
      document.execCommand(command, false, commandValue);
      handleInput();
    },
    [handleInput]
  );

  const isEmpty = useMemo(
    () =>
      (isDirty ? value : initialValue)
        .replace(/<br\s*\/?>/gi, "")
        .replace(/<[^>]*>/g, "")
        .replace(/&nbsp;/g, " ")
        .trim().length === 0,
    [initialValue, isDirty, value]
  );

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-soft">
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 px-6 py-4">
        {TOOLBAR.map((tool) => {
          const Icon = tool.icon;
          return (
            <button
              key={tool.label}
              type="button"
              onClick={() => handleCommand(tool.command)}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50"
            >
              <Icon className="h-3.5 w-3.5" />
              {tool.label}
            </button>
          );
        })}
      </div>
      <div className="relative p-6">
        {isEmpty ? (
          <div className="pointer-events-none absolute left-10 top-9 text-sm text-slate-400">
            {placeholder ?? "Write your post content here..."}
          </div>
        ) : null}
        <div
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          onInput={handleInput}
          className="min-h-[320px] rounded-xl border border-slate-200 px-4 py-3 text-sm leading-7 text-foreground focus:border-emerald-500 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default RichTextEditor;
