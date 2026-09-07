import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Blog Details",
};

const BlogDetailsLayout = ({ children }: { children: ReactNode }) => children;

export default BlogDetailsLayout;
