import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "New Blog Category",
};

const NewCategoryLayout = ({ children }: { children: ReactNode }) => children;

export default NewCategoryLayout;
