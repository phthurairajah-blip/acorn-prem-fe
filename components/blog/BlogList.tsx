"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { BlogPost } from "@/components/blog/types";
import { BlogCard } from "@/components/blog/BlogCard";

const PAGE_SIZE = 6;

export const BlogList = ({ blogs }: { blogs: BlogPost[] }) => {
  const [page, setPage] = useState(1);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const visibleBlogs = useMemo(
    () => blogs.slice(0, page * PAGE_SIZE),
    [blogs, page],
  );

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting) return;
        setPage((prev) => {
          if (prev * PAGE_SIZE >= blogs.length) return prev;
          return prev + 1;
        });
      },
      { rootMargin: "200px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [blogs.length]);

  return (
    <section className="py-16 lg:py-20 my-10">
      <div className="container mx-auto px-4">
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
          {visibleBlogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
        <div ref={sentinelRef} className="h-1" />
      </div>
    </section>
  );
};
