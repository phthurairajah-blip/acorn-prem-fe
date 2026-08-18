import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "New Blog",
};

const NewBlogLayout = ({ children }: { children: ReactNode }) => children;

export default NewBlogLayout;
