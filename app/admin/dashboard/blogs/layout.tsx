import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Blogs",
};

const BlogsLayout = ({ children }: { children: ReactNode }) => children;

export default BlogsLayout;
