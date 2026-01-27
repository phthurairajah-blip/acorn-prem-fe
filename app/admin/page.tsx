import { Suspense } from "react";
import AdminLoginClient from "./page-client";

const AdminLoginPage = () => {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <AdminLoginClient />
    </Suspense>
  );
};

export default AdminLoginPage;
