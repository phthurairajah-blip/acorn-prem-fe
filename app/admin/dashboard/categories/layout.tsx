import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Blog Categories",
};

const CategoriesLayout = ({ children }: { children: ReactNode }) => children;

export default CategoriesLayout;
