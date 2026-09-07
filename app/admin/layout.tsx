import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    default: "Admin | Acorn Gastroenterology",
    template: "%s | Acorn Admin",
  },
};

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return <div className="min-h-screen bg-slate-50 text-foreground">{children}</div>;
};

export default AdminLayout;
