"use client";

import Link from "next/link";
import type { BlogPost } from "@/components/blog/types";

const truncateTitle = (title: string, maxLength = 70) => {
  if (title.length <= maxLength) return title;
  return `${title.slice(0, maxLength - 1)}…`;
};

const stripHtml = (html: string) => html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

const truncateChars = (text: string, maxChars = 200) => {
  if (text.length <= maxChars) return text;
  return `${text.slice(0, maxChars).trimEnd()}....`;
};

export const BlogCard = ({ blog }: { blog: BlogPost }) => {
  return (
    <article className="group rounded-2xl border border-border/40 bg-card overflow-hidden shadow-soft transition-all hover:-translate-y-1 hover:shadow-medium">
      <Link href={`/blogs/${blog.slug}`} className="block">
        <div
          className="relative h-52 w-full bg-muted"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(3, 7, 18, 0.08), rgba(3, 7, 18, 0.35)), url(${blog.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-foreground shadow-sm">
            {blog.category}
          </div>
        </div>
      </Link>
      <div className="p-5">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{blog.postedAt}</span>
          <span>{blog.minutesToRead} mins read</span>
        </div>
        <div className="mt-1 text-xs text-muted-foreground">Posted by {blog.author}</div>
        <h3 className="mt-3 text-xl font-serif font-semibold text-foreground">
          <Link href={`/blogs/${blog.slug}`} className="hover:text-primary transition-colors">
            {truncateTitle(blog.title)}
          </Link>
        </h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          {truncateChars(stripHtml(blog.excerptHtml || blog.contentHtml))}
        </p>
        <div className="mt-4">
          <Link
            href={`/blogs/${blog.slug}`}
            className="text-sm font-medium text-primary hover:text-accent transition-colors"
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  );
};
