import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { BlogsListClient } from "@/app/blogs/page-client";

export const metadata: Metadata = {
  title: "Blogs | Dr. Prem Thurairajah - Gastroenterologist Singapore",
  description:
    "Health insights and patient resources on digestive and liver conditions by Dr. Prem Thurairajah.",
  alternates: {
    canonical: "https://drpremgastro.sg/blogs",
  },
};

const BlogsPage = () => {
  return (
    <>
      <Navigation alwaysWhite />
      <main className="min-h-screen">
        <BlogsListClient />
      </main>
      <Footer />
    </>
  );
};

export default BlogsPage;
