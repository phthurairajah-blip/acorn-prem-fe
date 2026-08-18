import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Forgot Password",
};

const ForgotPasswordLayout = ({ children }: { children: ReactNode }) => children;

export default ForgotPasswordLayout;
