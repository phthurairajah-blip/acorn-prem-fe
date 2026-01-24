import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BlogList } from "@/components/blog/BlogList";
import { blogs } from "@/components/blog/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Dr. Prem Thurairajah - Gastroenterologist Singapore",
  description:
    "Health insights and patient resources on digestive and liver conditions by Dr. Prem Thurairajah.",
  alternates: {
    canonical: "https://drpremgastro.com/blogs",
  },
};

const BlogsPage = () => {
  return (
    <>
      <Navigation alwaysWhite />
      <main className="min-h-screen">
        <BlogList blogs={blogs} />
      </main>
      <Footer />
    </>
  );
};

export default BlogsPage;
