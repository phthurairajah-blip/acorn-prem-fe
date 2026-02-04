import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BlogDetail } from "@/components/blog/BlogDetail";
import type { BlogPost } from "@/components/blog/types";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const formatDate = (value?: string | null) => {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
};

const readTimeFromHtml = (html: string) => {
  const text = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  if (!text) return 1;
  const words = text.split(" ").length;
  return Math.max(1, Math.ceil(words / 200));
};

const extractId = (slug: string) => {
  const parts = slug.split("--");
  return parts[parts.length - 1] || "";
};

const getBlog = async (slug: string): Promise<BlogPost | null> => {
  const id = extractId(slug);
  const res = await fetch(`${API_URL}/public/blogs/${id}`, { cache: "no-store" });
  if (!res.ok) return null;
  const blog = await res.json();

  const categoriesRes = await fetch(`${API_URL}/public/categories`, { cache: "no-store" });
  const categories = categoriesRes.ok ? await categoriesRes.json() : [];
  const categoryMap = new Map(
    (categories as Array<{ id: string; name: string }>).map((c) => [c.id, c.name])
  );

  const image = blog.image_url
    ? blog.image_url.startsWith("http")
      ? blog.image_url
      : `${API_URL}${blog.image_url}`
    : "";

  return {
    id: blog.id,
    slug: `${slugify(blog.title)}--${blog.id}`,
    title: blog.title,
    category: categoryMap.get(blog.category_id) || "—",
    author: blog.posted_by || "Dr. Prem Thurairajah",
    postedAt: formatDate(blog.published_at || blog.created_at),
    minutesToRead: readTimeFromHtml(blog.content_html || ""),
    image,
    contentHtml: blog.content_html || "",
  } satisfies BlogPost;
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const resolvedParams = await params;
  const blog = await getBlog(resolvedParams.slug);
  if (!blog) {
    return { title: "Blog Not Found | Dr. Prem Thurairajah" };
  }
  return {
    title: `${blog.title} | Dr. Prem Thurairajah`,
    description: blog.contentHtml.replace(/<[^>]*>/g, " ").slice(0, 160),
    alternates: {
      canonical: `https://drpremgastro.com/blogs/${blog.slug}`,
    },
  };
};

const BlogDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const resolvedParams = await params;
  const blog = await getBlog(resolvedParams.slug);
  if (!blog) notFound();

  return (
    <>
      <Navigation alwaysWhite />
      <main className="min-h-screen">
        <BlogDetail blog={blog} />
      </main>
      <Footer />
    </>
  );
};

export default BlogDetailPage;
