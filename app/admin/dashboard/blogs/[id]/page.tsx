"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Edit3, User } from "lucide-react";
import { useParams } from "next/navigation";
import { getAdminAuthHeaders } from "@/lib/auth";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

const BlogDetailPage = () => {
  const params = useParams<{ id: string }>();
  const blogId = params?.id;
  const [post, setPost] = useState<{
    id: string;
    title: string;
    status: string;
    author: string;
    date: string;
    category: string;
    readTime: string;
    content_html: string;
    image_url?: string | null;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const formatDate = (value?: string | null) => {
    if (!value) return "—";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "—";
    return date.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
  };

  const readTimeFromHtml = (html: string) => {
    const text = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
    if (!text) return "1 min";
    const words = text.split(" ").length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    return `${minutes} min`;
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
              ...getAdminAuthHeaders(),
            }),
          }).then(async (res) => (res.ok ? res.json() : [])),
          fetch(`${API_URL}/blogs/${blogId}`, {
            headers: new Headers({
              ...getAdminAuthHeaders(),
            }),
          }).then(async (res) => {
            if (!res.ok) throw new Error((await res.json().catch(() => ({})))?.detail);
            return res.json();
          }),
        ]);

        const categoryMap = new Map(
          (categoriesRes as Array<{ id: string; name: string }>).map((c) => [c.id, c.name])
        );

        const blog = blogRes as {
          id: string;
          title: string;
          status: string;
          content_html: string;
          category_id: string;
          image_url?: string | null;
          created_at?: string | null;
          published_at?: string | null;
        };

        const date = blog.published_at || blog.created_at;
        setPost({
          id: blog.id,
          title: blog.title,
          status: blog.status === "PUBLISHED" ? "Published" : "Draft",
          author: "Dr. Prem Thurairajah",
          date: formatDate(date),
          category: categoryMap.get(blog.category_id) || "—",
          readTime: readTimeFromHtml(blog.content_html || ""),
          content_html: blog.content_html || "",
          image_url: blog.image_url || null,
        });
      } catch (err) {
        setError((err as Error)?.message || "Unable to load post.");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [blogId]);

  if (!blogId) {
    return <div className="text-sm text-muted-foreground">Loading post...</div>;
  }

  if (loading) {
    return <div className="text-sm text-muted-foreground">Loading post...</div>;
  }

  if (error || !post) {
    return (
      <div className="space-y-3">
        <p className="text-sm text-red-600">{error || "Post not found."}</p>
        <Link href="/admin/dashboard/blogs" className="text-sm text-emerald-700">
          Back to posts
        </Link>
      </div>
    );
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
              <p className="text-sm text-muted-foreground">Blog post</p>
              <h1 className="text-2xl font-semibold text-foreground">{post.title}</h1>
            </div>
          </div>
          <Link
            href={`/admin/dashboard/blogs/${post.id}/edit`}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <Edit3 className="h-4 w-4" />
            Edit post
          </Link>
        </div>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            {post.status}
          </span>
          <span className="inline-flex items-center gap-2">
            <User className="h-4 w-4" />
            {post.author}
          </span>
          <span className="inline-flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            {post.date}
          </span>
          <span>{post.readTime} read</span>
          <span>{post.category}</span>
        </div>
      </section>

      {post.image_url ? (
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <img
            src={
              post.image_url.startsWith("http")
                ? post.image_url
                : `${API_URL}${post.image_url}`
            }
            alt={post.title}
            className="w-full rounded-xl object-cover"
          />
        </section>
      ) : null}

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <div
          className="prose prose-slate max-w-none text-sm leading-7"
          dangerouslySetInnerHTML={{ __html: post.content_html }}
        />
      </section>
    </div>
  );
};

export default BlogDetailPage;
