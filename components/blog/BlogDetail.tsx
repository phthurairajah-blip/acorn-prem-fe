"use client";

import Link from "next/link";
import type { BlogPost } from "@/components/blog/types";

export const BlogDetail = ({ blog }: { blog: BlogPost }) => {
  return (
    <article className="pt-20">
      <div
        className="relative h-[360px] w-full"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(3, 7, 18, 0.25), rgba(3, 7, 18, 0.65)), url(${blog.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 h-full flex items-end pb-10">
          <div className="text-white max-w-3xl">
            <Link
              href="/blogs"
              className="inline-flex items-center text-sm text-white/80 hover:text-white transition-colors"
            >
              ← Back to Blogs
            </Link>
            <h1 className="mt-4 text-4xl md:text-5xl font-serif font-semibold">
              {blog.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-sm text-white/80">
              <div className="flex flex-wrap items-center gap-2">
                <span>{blog.postedAt}</span>
                <span aria-hidden="true">•</span>
                <span>{blog.minutesToRead} mins read</span>
                <span aria-hidden="true">•</span>
                <span>By {blog.author}</span>
              </div>
              <div className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                {blog.category}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-base text-muted-foreground leading-relaxed">
            <p className="whitespace-pre-line">{blog.content}</p>
          </div>
        </div>
      </section>
    </article>
  );
};
