"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, Lock } from "lucide-react";

const ResetPasswordForm = () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkingToken, setCheckingToken] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        router.replace("/admin");
        return;
      }
      try {
        const res = await fetch(
          `${API_URL}/auth/verify-reset-token?token=${encodeURIComponent(token)}`
        );
        if (!res.ok) {
          router.replace("/admin");
          return;
        }
      } catch {
        router.replace("/admin");
        return;
      } finally {
        setCheckingToken(false);
      }
    };
    verifyToken();
  }, [API_URL, router, token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (checkingToken) {
      return;
    }
    if (!token) {
      setError("Reset token is missing. Please use the link from your email.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/auth/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, new_password: password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data?.detail || "Unable to reset password.");
        return;
      }
      setSubmitted(true);
    } catch {
      setError("Unable to reset password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-soft border border-slate-200 p-8">
        <div className="flex items-center justify-center gap-3">
          <Image
            src="/acorn-logo-transparent.png"
            alt="Acorn Gastroenterology"
            width={140}
            height={70}
            className="h-32 w-auto"
          />
        </div>
        <h1 className="mt-6 text-2xl font-serif font-semibold text-foreground">
          Reset password
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Create a new password for your admin account.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground">New password</label>
            <div className="mt-2 flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
              <Lock className="h-4 w-4 text-muted-foreground" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent text-sm outline-none"
                placeholder="Enter new password"
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

          <div>
            <label className="text-sm font-medium text-foreground">Confirm password</label>
            <div className="mt-2 flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
              <Lock className="h-4 w-4 text-muted-foreground" />
              <input
                type={showPassword ? "text" : "password"}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="w-full bg-transparent text-sm outline-none"
                placeholder="Re-enter new password"
                required
              />
            </div>
          </div>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <button
            type="submit"
            className="w-full rounded-lg bg-emerald-600 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 transition-colors disabled:opacity-70"
            disabled={loading || checkingToken}
          >
            {checkingToken ? "Checking token..." : loading ? "Resetting..." : "Reset password"}
          </button>
        </form>

        {submitted ? (
          <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            Password reset successful. You can now sign in.
            <div className="mt-2">
              <Link href="/admin" className="text-emerald-700 hover:text-emerald-800">
                Go to sign in
              </Link>
            </div>
          </div>
        ) : null}

      </div>
    </main>
  );
};

export default ResetPasswordForm;
