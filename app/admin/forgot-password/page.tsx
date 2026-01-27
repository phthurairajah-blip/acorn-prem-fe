"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

const ForgotPasswordPage = () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data?.detail || "Unable to send reset link.");
        return;
      }
      setSent(true);
    } catch {
      setError("Unable to send reset link.");
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
          Forgot password
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Enter your admin email and we’ll send reset instructions.
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
                placeholder="Enter email address"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-emerald-600 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 transition-colors disabled:opacity-70"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send reset link"}
          </button>
        </form>

        {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}

        {sent ? (
          <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            If an account exists for {email}, a reset link has been sent.
          </div>
        ) : null}

        <div className="mt-6 text-sm">
          <Link href="/admin" className="text-emerald-700 hover:text-emerald-800">
            Back to sign in
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ForgotPasswordPage;
