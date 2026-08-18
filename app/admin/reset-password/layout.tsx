import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Reset Password",
};

const ResetPasswordLayout = ({ children }: { children: ReactNode }) => children;

export default ResetPasswordLayout;
