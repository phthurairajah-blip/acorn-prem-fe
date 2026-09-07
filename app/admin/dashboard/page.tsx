import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard",
};

const AdminDashboardPage = () => {
  redirect("/admin/dashboard/blogs");
};

export default AdminDashboardPage;
