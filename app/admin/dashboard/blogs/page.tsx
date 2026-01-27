"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { FileText, MoreVertical, Plus } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { getAdminAuthHeaders } from "@/lib/auth";

export type BlogPost = {
  id: string;
  title: string;
  status: "Published" | "Draft";
  author: string;
  date: string;
  category: string;
  readTime: string;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
const PAGE_SIZE = 12;

const BlogsPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [menuOpenId, setMenuOpenId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [hasNext, setHasNext] = useState(false);

  const selectedPost = useMemo(
    () => posts.find((post) => post.id === deleteId),
    [posts, deleteId]
  );

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

  const loadCategories = async () => {
    const res = await fetch(`${API_URL}/categories`, {
      headers: new Headers({
        ...getAdminAuthHeaders(),
      }),
    });
    if (!res.ok) return [];
    return (await res.json()) as Array<{ id: string; name: string }>;
  };

  const loadBlogs = async (pageIndex: number) => {
    setLoading(true);
    setError(null);
    try {
      const skip = pageIndex * PAGE_SIZE;
      const [categoriesRes, blogsRes] = await Promise.all([
        loadCategories(),
        fetch(`${API_URL}/blogs?skip=${skip}&limit=${PAGE_SIZE}`, {
          headers: {
            ...getAdminAuthHeaders(),
          } as HeadersInit,
        }).then(async (res) => {
          if (!res.ok) throw new Error((await res.json().catch(() => ({})))?.detail);
          return res.json();
        }),
      ]);
      const categoryMap = new Map(categoriesRes.map((c) => [c.id, c.name]));
      const data = blogsRes as Array<{
        id: string;
        title: string;
        status: string;
        category_id: string;
        content_html: string;
        created_at?: string | null;
        published_at?: string | null;
      }>;
      setPosts(
        data.map((blog) => ({
          id: blog.id,
          title: blog.title,
          status: blog.status === "PUBLISHED" ? "Published" : "Draft",
          author: "Dr. Prem Thurairajah",
          category: categoryMap.get(blog.category_id) || "—",
          date: formatDate(blog.published_at || blog.created_at),
          readTime: readTimeFromHtml(blog.content_html || ""),
        }))
      );
      setHasNext(data.length === PAGE_SIZE);
      setPage(pageIndex);
    } catch (err) {
      setError((err as Error)?.message || "Unable to load posts.");
    } finally {
      setLoading(false);
    }
  };

  const deletePost = async (id: string) => {
    try {
      const res = await fetch(`${API_URL}/blogs/${id}`, {
        method: "DELETE",
        headers: {
          ...getAdminAuthHeaders(),
        },
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data?.detail || "Unable to delete post.");
        return;
      }
      loadBlogs(page);
    } catch {
      setError("Unable to delete post.");
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    await deletePost(deleteId);
    setDeleteId(null);
  };

  useEffect(() => {
    loadBlogs(0);
  }, []);

  useEffect(() => {
    if (!menuOpenId) return;
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest("[data-blog-menu]")) return;
      setMenuOpenId(null);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [menuOpenId]);

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Blog posts</p>
            <h2 className="text-xl font-semibold text-foreground">Manage contents</h2>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/admin/dashboard/blogs/new"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
            >
              <Plus className="h-4 w-4" />
              New post
            </Link>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white shadow-soft">
        <div className="border-b border-slate-200 px-6 py-4">
          <div className="grid gap-2 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:grid-cols-[2fr_1fr_1fr_1fr_auto]">
            <span>Title</span>
            <span>Status</span>
            <span>Category</span>
            <span>Author</span>
            <span className="text-right">Actions</span>
          </div>
        </div>
        <div className="divide-y divide-slate-100">
          {loading ? (
            <div className="px-6 py-6 text-sm text-muted-foreground">Loading posts...</div>
          ) : null}
          {error ? <div className="px-6 py-4 text-sm text-red-600">{error}</div> : null}
          {posts.map((post) => (
            <div
              key={post.id}
              className="grid gap-3 px-6 py-4 text-sm text-foreground sm:grid-cols-[2fr_1fr_1fr_1fr_auto] sm:items-center"
            >
              <div>
                <p className="font-medium">{post.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {post.date} • {post.readTime}
                </p>
              </div>
              <span
                className={`inline-flex w-fit items-center rounded-full px-2.5 py-1 text-xs font-medium ${
                  post.status === "Published"
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {post.status}
              </span>
              <span className="text-muted-foreground">{post.category}</span>
              <span className="text-muted-foreground">{post.author}</span>
              <div className="flex items-center justify-end">
                <div className="relative" data-blog-menu>
                  <button
                    type="button"
                    onClick={() =>
                      setMenuOpenId((prev) => (prev === post.id ? null : post.id))
                    }
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50"
                    aria-label="Open actions"
                  >
                    <MoreVertical className="h-4 w-4" />
                  </button>
                  {menuOpenId === post.id ? (
                    <div className="absolute right-0 top-11 z-10 w-36 rounded-xl border border-slate-200 bg-white py-2 text-xs shadow-soft">
                      <Link
                        href={`/admin/dashboard/blogs/${post.id}`}
                        className="block px-4 py-2 text-slate-600 hover:bg-slate-50"
                        onClick={() => setMenuOpenId(null)}
                      >
                        View
                      </Link>
                      <Link
                        href={`/admin/dashboard/blogs/${post.id}/edit`}
                        className="block px-4 py-2 text-slate-600 hover:bg-slate-50"
                        onClick={() => setMenuOpenId(null)}
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        onClick={() => {
                          setMenuOpenId(null);
                          setDeleteId(post.id);
                        }}
                        className="block w-full px-4 py-2 text-left text-red-600 hover:bg-red-50"
                      >
                        Delete
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => loadBlogs(Math.max(0, page - 1))}
          disabled={page === 0 || loading}
          className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-70"
        >
          Prev
        </button>
        <span className="text-sm text-muted-foreground">Page {page + 1}</span>
        <button
          type="button"
          onClick={() => loadBlogs(page + 1)}
          disabled={!hasNext || loading}
          className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-70"
        >
          Next
        </button>
      </div>

      <AlertDialog open={Boolean(deleteId)} onOpenChange={(open) => !open && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this post?</AlertDialogTitle>
            <AlertDialogDescription>
              {selectedPost
                ? `This will permanently remove "${selectedPost.title}".`
                : "This will permanently remove the selected post."}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default BlogsPage;
