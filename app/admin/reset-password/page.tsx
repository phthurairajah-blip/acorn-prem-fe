"use client";

import { Suspense } from "react";
import ResetPasswordForm from "./reset-password-form";

const ResetPasswordPage = () => {
  return (
    <Suspense fallback={<div className="min-h-screen" />}> 
      <ResetPasswordForm />
    </Suspense>
  );
};

export default ResetPasswordPage;
