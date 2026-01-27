"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import FeatureImagePicker, {
  type FeatureImageValue,
} from "@/app/admin/dashboard/blogs/_components/FeatureImagePicker";
import RichTextEditor from "@/app/admin/dashboard/blogs/_components/RichTextEditor";
import { getAdminAuthHeaders } from "@/lib/auth";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

const NewBlogPage = () => {
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [featureImage, setFeatureImage] = useState<FeatureImageValue>({
    type: "none",
  });
  const [categories, setCategories] = useState<Array<{ id: string; name: string }>>([]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const res = await fetch(`${API_URL}/categories`, {
          headers: new Headers({
            ...getAdminAuthHeaders(),
          }),
        });
        if (!res.ok) return;
        const data = (await res.json()) as Array<{ id: string; name: string }>;
        setCategories(data);
        if (data.length > 0 && !categoryId) {
          setCategoryId(data[0].id);
        }
      } catch {
        // ignore
      }
    };
    loadCategories();
  }, []);

  const submitPost = async (status: "DRAFT" | "PUBLISHED") => {
    setSaving(true);
    setError(null);
    setSuccess(null);
    try {
      if (!title.trim() || !categoryId || !excerpt.trim() || !content.trim()) {
        throw new Error("All fields are required.");
      }
      if (featureImage.type === "none") {
        throw new Error("Feature image is required.");
      }
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content_html", content);
      formData.append("category_id", categoryId);
      formData.append("status_value", status);
      formData.append("excerpt_html", excerpt);
      if (featureImage.type === "url" && featureImage.url) {
        const url = featureImage.url.startsWith(API_URL)
          ? featureImage.url.replace(API_URL, "")
          : featureImage.url;
        formData.append("image_url", url);
      }
      if (featureImage.type === "file" && featureImage.file) {
        formData.append("image_file", featureImage.file);
      }

      const res = await fetch(`${API_URL}/blogs`, {
        method: "POST",
        headers: new Headers({
          ...(getAdminAuthHeaders() as Record<string, string>),
        }),
        body: formData,
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.detail || "Unable to save post.");
      }
      setSuccess(status === "PUBLISHED" ? "Post published." : "Draft saved.");
      setTitle("");
      setExcerpt("");
      setContent("");
      setFeatureImage({ type: "none" });
    } catch (err) {
      setError((err as Error)?.message || "Unable to save post.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/admin/dashboard/blogs"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <div>
              <p className="text-sm text-muted-foreground">Create blog post</p>
              <h1 className="text-2xl font-semibold text-foreground">New blog draft</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => submitPost("DRAFT")}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              disabled={saving}
            >
              <Save className="h-4 w-4" />
              Save draft
            </button>
            <button
              type="button"
              onClick={() => submitPost("PUBLISHED")}
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors disabled:opacity-70"
              disabled={saving}
            >
              Publish
            </button>
          </div>
        </div>
        {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}
        {success ? <p className="mt-3 text-sm text-emerald-700">{success}</p> : null}
      </header>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <section className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <label className="text-sm font-medium text-foreground">Title</label>
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Enter a clear, patient-friendly headline"
              className="mt-3 w-full rounded-xl border border-slate-200 px-4 py-3 text-base font-medium text-foreground focus:border-emerald-500 focus:outline-none"
            />
          </div>

          <RichTextEditor
            initialValue={content}
            onChange={setContent}
            placeholder="Write the body of the blog post here. Use short paragraphs, headings, and bullet lists."
          />
        </section>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-sm font-semibold text-foreground">Post settings</h2>
            <div className="mt-4 space-y-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Category
                </label>
                <select
                  value={categoryId}
                  onChange={(event) => setCategoryId(event.target.value)}
                  className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <FeatureImagePicker value={featureImage} onChange={setFeatureImage} />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-sm font-semibold text-foreground">Excerpt</h2>
            <textarea
              rows={4}
              placeholder="Short summary for previews and SEO."
              value={excerpt}
              onChange={(event) => setExcerpt(event.target.value)}
              className="mt-3 w-full resize-none rounded-xl border border-slate-200 px-3 py-2 text-sm text-foreground"
            />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default NewBlogPage;
