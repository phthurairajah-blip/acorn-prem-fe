"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";
import FeatureImagePicker, {
  type FeatureImageValue,
} from "@/app/admin/dashboard/blogs/_components/FeatureImagePicker";
import RichTextEditor from "@/app/admin/dashboard/blogs/_components/RichTextEditor";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
const formatApiError = (data: { status?: number; message?: string; detail?: string } | null) => {
  if (!data) return "Unable to update post.";
  const message = data.message || data.detail;
  if (data.status && message) return `${data.status}: ${message}`;
  return message || "Unable to update post.";
};

const EditBlogPage = () => {
  const params = useParams<{ id: string }>();
  const blogId = params?.id;
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<"DRAFT" | "PUBLISHED">("DRAFT");
  const [featureImage, setFeatureImage] = useState<FeatureImageValue>({
    type: "none",
  });
  const [categories, setCategories] = useState<Array<{ id: string; name: string }>>([]);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const getAuthHeader = () => {
    const token = localStorage.getItem("admin_token");
    if (!token) return undefined;
    return { Authorization: `Bearer ${token}` } as HeadersInit;
  };

  useEffect(() => {
    if (!blogId) return;
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const [categoriesRes, blogRes] = await Promise.all([
          fetch(`${API_URL}/categories`, {
            headers: new Headers({
              "Content-Type": "application/json",
              ...(getAuthHeader() as Record<string, string> | undefined),
            }),
          }).then(async (res) => (res.ok ? res.json() : [])),
          fetch(`${API_URL}/blogs/${blogId}`, {
            headers: new Headers({
              "Content-Type": "application/json",
              ...(getAuthHeader() as Record<string, string> | undefined),
            }),
          }).then(async (res) => {
            if (!res.ok) throw new Error((await res.json().catch(() => ({})))?.detail);
            return res.json();
          }),
        ]);

        setCategories(categoriesRes);

        const blog = blogRes as {
          title: string;
          excerpt_html?: string | null;
          content_html: string;
          status: string;
          category_id: string;
          image_url?: string | null;
        };

        setTitle(blog.title || "");
        setExcerpt(blog.excerpt_html || "");
        setContent(blog.content_html || "");
        setStatus(blog.status === "PUBLISHED" ? "PUBLISHED" : "DRAFT");
        setCategoryId(blog.category_id || (categoriesRes[0]?.id ?? ""));
        if (blog.image_url) {
          setFeatureImage({ type: "url", url: blog.image_url });
        }
      } catch (err) {
        setError((err as Error)?.message || "Unable to load post.");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [blogId]);

  const submitPost = async (nextStatus?: "DRAFT" | "PUBLISHED") => {
    setSaving(true);
    setError(null);
    setSuccess(null);
    try {
      const formData = new FormData();
      if (!title.trim() || !categoryId || !excerpt.trim() || !content.trim()) {
        throw new Error("All fields are required.");
      }
      if (featureImage.type === "none") {
        throw new Error("Feature image is required.");
      }
      formData.append("title", title);
      formData.append("content_html", content);
      formData.append("category_id", categoryId);
      formData.append("excerpt_html", excerpt);
      formData.append("status_value", nextStatus ?? status);

      if (featureImage.type === "url" && featureImage.url) {
        const url = featureImage.url.startsWith(API_URL)
          ? featureImage.url.replace(API_URL, "")
          : featureImage.url;
        formData.append("image_url", url);
      }
      if (featureImage.type === "file" && featureImage.file) {
        formData.append("image_file", featureImage.file);
      }

      const headers = getAuthHeader();
      const res = await fetch(`${API_URL}/blogs/${blogId}`, {
        method: "PUT",
        headers: headers ? new Headers(headers as HeadersInit) : undefined,
        body: formData,
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(formatApiError(data));
      }
      setSuccess("Post updated.");
      if (nextStatus) setStatus(nextStatus);
    } catch (err) {
      setError((err as Error)?.message || "Unable to update post.");
    } finally {
      setSaving(false);
    }
  };

  if (!blogId) {
    return <div className="text-sm text-muted-foreground">Loading post...</div>;
  }

  if (loading) {
    return <div className="text-sm text-muted-foreground">Loading post...</div>;
  }

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
              <p className="text-sm text-muted-foreground">Edit blog post</p>
              <h1 className="text-2xl font-semibold text-foreground">{title || "Edit post"}</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => submitPost()}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              disabled={saving}
            >
              <Save className="h-4 w-4" />
              Save changes
            </button>
            <button
              type="button"
              onClick={() => submitPost("PUBLISHED")}
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors disabled:opacity-70"
              disabled={saving}
            >
              Update post
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

export default EditBlogPage;
