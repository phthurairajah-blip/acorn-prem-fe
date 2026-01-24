import type { ReactNode } from "react";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return <div className="min-h-screen bg-slate-50 text-foreground">{children}</div>;
};

export default AdminLayout;
