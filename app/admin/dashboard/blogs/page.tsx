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

export type BlogPost = {
  id: string;
  title: string;
  status: "Published" | "Draft" | "Scheduled";
  author: string;
  date: string;
  category: string;
  readTime: string;
};

const initialPosts: BlogPost[] = [
  {
    id: "gerd-daily-habits",
    title: "Managing GERD: Daily Habits That Reduce Flare-Ups",
    status: "Published",
    author: "Dr. Patel",
    date: "Jan 18, 2026",
    category: "Digestive Health",
    readTime: "6 min",
  },
  {
    id: "colonoscopy-expectations",
    title: "What to Expect During a Colonoscopy",
    status: "Draft",
    author: "Dr. Nguyen",
    date: "Jan 22, 2026",
    category: "Procedures",
    readTime: "5 min",
  },
  {
    id: "ibs-vs-ibd",
    title: "IBS vs. IBD: Key Differences Explained",
    status: "Published",
    author: "Dr. Vasquez",
    date: "Jan 12, 2026",
    category: "Patient Education",
    readTime: "7 min",
  },
  {
    id: "gut-healthy-foods",
    title: "Gut-Healthy Foods for Busy Schedules",
    status: "Scheduled",
    author: "Dr. Patel",
    date: "Jan 28, 2026",
    category: "Nutrition",
    readTime: "4 min",
  },
];

const BlogsPage = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [menuOpenId, setMenuOpenId] = useState<string | null>(null);

  const selectedPost = useMemo(
    () => posts.find((post) => post.id === deleteId),
    [posts, deleteId]
  );

  const deletePost = async (id: string) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    await deletePost(deleteId);
    setDeleteId(null);
  };

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
            <h2 className="text-xl font-semibold text-foreground">Manage published content</h2>
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
              <FileText className="h-4 w-4" />
              All posts
            </button>
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
                    : post.status === "Scheduled"
                    ? "bg-amber-50 text-amber-700"
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
