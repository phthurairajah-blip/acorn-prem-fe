"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

const EditCategoryPage = () => {
  const [name, setName] = useState("Digestive Health");

  const saveCategory = async () => {
    return {
      name,
    };
  };

  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/admin/dashboard/categories"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <div>
              <p className="text-sm text-muted-foreground">Edit category</p>
              <h1 className="text-2xl font-semibold text-foreground">{name}</h1>
            </div>
          </div>
          <button
            type="button"
            onClick={saveCategory}
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
          >
            <Save className="h-4 w-4" />
            Save changes
          </button>
        </div>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <label className="text-sm font-medium text-foreground">Category name</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter category name"
          className="mt-3 w-full rounded-xl border border-slate-200 px-4 py-3 text-base font-medium text-foreground focus:border-emerald-500 focus:outline-none"
        />
      </section>
    </div>
  );
};

export default EditCategoryPage;
