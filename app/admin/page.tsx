"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

const STATIC_EMAIL = "admin@acorn.com";
const STATIC_PASSWORD = "Acorn@123";

const AdminLoginPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("from") || "/admin/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (email.trim() !== STATIC_EMAIL || password !== STATIC_PASSWORD) {
      setError("Invalid email or password.");
      return;
    }

    document.cookie = "admin_auth=1; Path=/; Max-Age=86400; SameSite=Lax";
    router.push(redirectTo);
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-soft overflow-hidden border border-slate-200 p-8 md:p-10">
        <div className="flex justify-center">
          <Image
            src="/acorn-logo-transparent.png"
            alt="Acorn Gastroenterology"
            width={180}
            height={90}
            className="h-12 w-auto"
          />
        </div>
          <h1 className="text-2xl font-serif font-semibold text-foreground">Sign in</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Enter your admin email and password to access the dashboard.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground">Email</label>
              <div className="mt-2 flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-sm outline-none"
                  placeholder="admin@acorn.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground">Password</label>
              <div className="mt-2 flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
                <Lock className="h-4 w-4 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent text-sm outline-none"
                  placeholder="Enter password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="text-muted-foreground hover:text-foreground"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {error ? <p className="text-sm text-red-600">{error}</p> : null}

            <button
              type="submit"
              className="w-full rounded-lg bg-emerald-600 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
            >
              Sign in
            </button>
          </form>

          <div className="mt-6 flex items-center justify-between text-sm">
            <Link href="/admin/forgot-password" className="text-emerald-700 hover:text-emerald-800">
              Forgot password?
            </Link>
            <Link href="/admin/reset-password" className="text-muted-foreground hover:text-foreground">
              Reset password
            </Link>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            Demo login: {STATIC_EMAIL} / {STATIC_PASSWORD}
          </p>
      </div>
    </main>
  );
};

export default AdminLoginPage;
