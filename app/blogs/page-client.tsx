/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useMemo, useState } from "react";
import { BlogList } from "@/components/blog/BlogList";
import type { BlogPost } from "@/components/blog/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
const PAGE_SIZE = 12;

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const readTimeFromHtml = (html: string) => {
  const text = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  if (!text) return 1;
  const words = text.split(" ").length;
  return Math.max(1, Math.ceil(words / 200));
};

const formatDate = (value?: string | null) => {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
};

const SkeletonCard = () => (
  <article className="rounded-2xl border border-border/40 bg-card overflow-hidden shadow-soft">
    <div className="h-52 w-full bg-slate-100 animate-pulse" />
    <div className="p-5 space-y-3">
      <div className="flex items-center justify-between">
        <div className="h-3 w-20 rounded bg-slate-100 animate-pulse" />
        <div className="h-3 w-16 rounded bg-slate-100 animate-pulse" />
      </div>
      <div className="h-3 w-28 rounded bg-slate-100 animate-pulse" />
      <div className="h-5 w-3/4 rounded bg-slate-100 animate-pulse" />
      <div className="h-4 w-full rounded bg-slate-100 animate-pulse" />
      <div className="h-4 w-5/6 rounded bg-slate-100 animate-pulse" />
      <div className="h-4 w-24 rounded bg-slate-100 animate-pulse" />
    </div>
  </article>
);

export const BlogsListClient = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<Array<{ id: string; name: string }>>([]);

  const categoryMap = useMemo(
    () => new Map(categories.map((c) => [c.id, c.name])),
    [categories]
  );

  const fetchCategories = async () => {
    const res = await fetch(`${API_URL}/public/categories`, { cache: "no-store" });
    if (!res.ok) return [];
    return (await res.json()) as Array<{ id: string; name: string }>;
  };

  const fetchBlogs = async (pageIndex: number) => {
    const skip = pageIndex * PAGE_SIZE;
    const res = await fetch(`${API_URL}/public/blogs?skip=${skip}&limit=${PAGE_SIZE}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Unable to load blogs.");
    return res.json();
  };

  const mapBlogs = (data: Array<any>, map: Map<string, string> = categoryMap) =>
    data.map((blog) => {
      const slug = `${slugify(blog.title)}--${blog.id}`;
      const image = blog.image_url
        ? blog.image_url.startsWith("http")
          ? blog.image_url
          : `${API_URL}${blog.image_url}`
        : "";

      return {
        id: blog.id,
        slug,
        title: blog.title,
        category: map.get(blog.category_id) || "—",
        author: blog.posted_by || "Dr. Prem Thurairajah",
        postedAt: formatDate(blog.published_at || blog.created_at),
        minutesToRead: readTimeFromHtml(blog.content_html || ""),
        image,
        contentHtml: blog.content_html || "",
      } satisfies BlogPost;
    });

  useEffect(() => {
    const loadInitial = async () => {
      setLoading(true);
      setError(null);
      try {
        const categoriesRes = await fetchCategories();
        const nextCategoryMap = new Map(categoriesRes.map((c) => [c.id, c.name]));
        setCategories(categoriesRes);
        const data = (await fetchBlogs(0)) as Array<any>;
        setBlogs(mapBlogs(data, nextCategoryMap));
        setHasMore(data.length === PAGE_SIZE);
        setPage(0);
      } catch (err) {
        setError((err as Error)?.message || "Unable to load blogs.");
      } finally {
        setLoading(false);
      }
    };
    loadInitial();
  }, []);

  const handleLoadMore = async () => {
    setLoadingMore(true);
    setError(null);
    try {
      const nextPage = page + 1;
      const data = (await fetchBlogs(nextPage)) as Array<any>;
      setBlogs((prev) => [...prev, ...mapBlogs(data)]);
      setHasMore(data.length === PAGE_SIZE);
      setPage(nextPage);
    } catch (err) {
      setError((err as Error)?.message || "Unable to load blogs.");
    } finally {
      setLoadingMore(false);
    }
  };

  if (loading) {
    return (
      <section className="py-16 lg:py-20 my-10">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="flex flex-col items-start gap-3 mb-10">
            <span className="text-sm font-medium tracking-widest uppercase text-accent">Insights</span>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
              Clinical Insights & Patient Resources
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl">
              Short, practical guides on digestive and liver health—written for patients and families.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={`blog-skeleton-${index}`} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-2 sm:px-4 py-16 text-sm text-red-600">{error}</div>
    );
  }

  return (
    <>
      <BlogList blogs={blogs} />
      <div className="container mx-auto px-2 sm:px-4 pb-16">
        {hasMore ? (
          <button
            type="button"
            onClick={handleLoadMore}
            className="mx-auto mt-6 block rounded-lg border border-slate-200 px-6 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-70"
            disabled={loadingMore}
          >
            {loadingMore ? "Loading..." : "Load more"}
          </button>
        ) : (
          <p className="mt-6 text-center text-sm text-muted-foreground">No more posts.</p>
        )}
      </div>
    </>
  );
};
