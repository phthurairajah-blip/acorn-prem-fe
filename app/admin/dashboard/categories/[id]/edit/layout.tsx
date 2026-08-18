import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Edit Blog Category",
};

const EditCategoryLayout = ({ children }: { children: ReactNode }) => children;

export default EditCategoryLayout;
