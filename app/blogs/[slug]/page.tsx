import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BlogDetail } from "@/components/blog/BlogDetail";
import { blogs } from "@/components/blog/data";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const generateStaticParams = () => {
  return blogs.map((blog) => ({ slug: blog.slug }));
};

const resolveSlug = (raw: string | string[]) => {
  const joined = Array.isArray(raw) ? raw.join("/") : raw;
  return decodeURIComponent(joined).toLowerCase();
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const resolvedParams = await params;
  const slug = resolveSlug(resolvedParams.slug);
  const blog = blogs.find((item) => item.slug.toLowerCase() === slug);
  if (!blog) {
    return {
      title: "Blog Not Found | Dr. Prem Thurairajah",
    };
  }
  return {
    title: `${blog.title} | Dr. Prem Thurairajah`,
    description: blog.content.slice(0, 160),
    alternates: {
      canonical: `https://drpremgastro.com/blogs/${blog.slug}`,
    },
  };
};

const BlogDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const resolvedParams = await params;
  const slug = resolveSlug(resolvedParams.slug);
  const blog = blogs.find((item) => item.slug.toLowerCase() === slug);
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
