import type { Metadata } from "next";
import { Suspense } from "react";
import AdminLoginClient from "./page-client";

export const metadata: Metadata = {
  title: "Admin Login",
};

const AdminLoginPage = () => {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <AdminLoginClient />
    </Suspense>
  );
};

export default AdminLoginPage;
