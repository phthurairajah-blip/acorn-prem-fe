"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

type CategoryModalProps = {
  open: boolean;
  mode: "create" | "edit";
  initialName?: string;
  onClose: () => void;
  onSubmit: (name: string) => Promise<void> | void;
};

const CategoryModal = ({
  open,
  mode,
  initialName = "",
  onClose,
  onSubmit,
}: CategoryModalProps) => {
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    if (open) {
      window.addEventListener("keydown", handleKey);
    }
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const name = String(formData.get("name") ?? "").trim();
    if (!name) return;
    await onSubmit(name);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">
              {mode === "create" ? "Create category" : "Edit category"}
            </p>
            <h2 className="text-xl font-semibold text-foreground">
              {mode === "create" ? "New category" : "Update category"}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50"
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-6">
          <label className="text-sm font-medium text-foreground">Category name</label>
          <input
            name="name"
            type="text"
            defaultValue={initialName}
            placeholder="Enter category name"
            className="mt-3 w-full rounded-xl border border-slate-200 px-4 py-3 text-base font-medium text-foreground focus:border-emerald-500 focus:outline-none"
          />
        </div>

        <div className="mt-6 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {mode === "create" ? "Create" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoryModal;
