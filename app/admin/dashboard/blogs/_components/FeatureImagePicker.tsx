"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Image as ImageIcon, Link2, UploadCloud } from "lucide-react";

export type FeatureImageValue = {
  type: "url" | "file" | "none";
  url?: string;
  file?: File | null;
};

type FeatureImagePickerProps = {
  value?: FeatureImageValue;
  onChange?: (value: FeatureImageValue) => void;
};

const MAX_IMAGE_BYTES = 3 * 1024 * 1024;
const MAX_IMAGE_LABEL = "Max 3 MB";

const FeatureImagePicker = ({ value, onChange }: FeatureImagePickerProps) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [link, setLink] = useState(value?.url ?? "");
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLink(value?.url ?? "");
  }, [value?.url]);

  const preview = useMemo(() => {
    const url = value?.url || "";
    if (value?.type === "file" && url) return url;
    if (value?.type === "url" && url) {
      if (url.startsWith("http://") || url.startsWith("https://")) return url;
      if (url.startsWith("/")) return `${API_URL}${url}`;
      return url;
    }
    return filePreview;
  }, [value, filePreview, API_URL]);

  const handleLinkChange = (next: string) => {
    setLink(next);
    setError(null);
    if (!next.trim()) {
      onChange?.({ type: "none" });
      return;
    }
    onChange?.({ type: "url", url: next.trim() });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (file.size > MAX_IMAGE_BYTES) {
      setError(`Image too large. ${MAX_IMAGE_LABEL}.`);
      if (fileInputRef.current) fileInputRef.current.value = "";
      onChange?.({ type: "none" });
      return;
    }
    setError(null);
    const objectUrl = URL.createObjectURL(file);
    setFilePreview(objectUrl);
    onChange?.({ type: "file", file, url: objectUrl });
  };

  const handleClear = () => {
    setLink("");
    setFilePreview(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    onChange?.({ type: "none" });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Feature image
        </label>
        <div className="mt-2 flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600">
          <Link2 className="h-4 w-4" />
          <input
            type="text"
            value={link}
            onChange={(event) => handleLinkChange(event.target.value)}
            placeholder="Paste image URL"
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>
        <p className="mt-2 text-xs text-slate-400">{MAX_IMAGE_LABEL}</p>
      </div>
      <div className="flex items-center gap-3">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
        >
          <UploadCloud className="h-4 w-4" />
          Upload file
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="text-xs font-semibold text-slate-400 hover:text-slate-600"
        >
          Clear
        </button>
      </div>

      {error ? <p className="text-xs text-red-600">{error}</p> : null}

      <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-4 text-center text-xs text-slate-500">
        {preview ? (
          <div className="space-y-3">
            <img
              src={preview}
              alt="Feature preview"
              className="mx-auto max-h-48 rounded-lg object-cover"
            />
            <p>Preview</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <ImageIcon className="h-6 w-6 text-slate-400" />
            <p>No image selected yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureImagePicker;
