import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Edit Blog",
};

const EditBlogLayout = ({ children }: { children: ReactNode }) => children;

export default EditBlogLayout;
