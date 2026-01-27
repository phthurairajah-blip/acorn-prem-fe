"use client";

import { useEffect, useState } from "react";
import { getAdminAuthHeaders } from "@/lib/auth";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

const SettingsPage = () => {
  const [profile, setProfile] = useState<{
    email: string;
    role: string;
    is_active?: boolean;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [passwordForm, setPasswordForm] = useState({
    new_password: "",
    confirm_password: "",
  });
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${API_URL}/users/me`, {
          headers: new Headers({
            ...getAdminAuthHeaders(),
          }),
        });
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          setError(data?.detail || "Unable to load profile.");
          return;
        }
        const data = (await res.json()) as {
          email: string;
          role: string;
          is_active?: boolean;
        };
        setProfile(data);
      } catch {
        setError("Unable to load profile.");
      } finally {
        setLoading(false);
      }
    };
    loadProfile();
  }, []);

  const handlePasswordChange = (field: keyof typeof passwordForm, value: string) => {
    setPasswordForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);
    setSaving(true);
    try {
      const res = await fetch(`${API_URL}/users/me/password`, {
        method: "PUT",
        headers: new Headers({
          ...getAdminAuthHeaders(),
        }),
        body: JSON.stringify(passwordForm),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data?.detail || "Unable to update password.");
        return;
      }
      setSuccess("Password updated successfully.");
      setPasswordForm({ new_password: "", confirm_password: "" });
    } catch {
      setError("Unable to update password.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <div>
          <p className="text-sm text-muted-foreground">Settings</p>
          <h2 className="text-xl font-semibold text-foreground">Admin profile</h2>
        </div>
      </section>

      {loading ? <div className="text-sm text-muted-foreground">Loading...</div> : null}
      {error ? <div className="text-sm text-red-600">{error}</div> : null}

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <h3 className="text-lg font-semibold text-foreground">Login admin info</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="font-medium text-foreground">{profile?.email || "—"}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Role</p>
              <p className="font-medium text-foreground">{profile?.role || "—"}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Active</p>
              <p className="font-medium text-foreground">
                {profile?.is_active === undefined ? "—" : profile.is_active ? "Yes" : "No"}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <h3 className="text-lg font-semibold text-foreground">Update password</h3>
          <form onSubmit={handleUpdatePassword} className="mt-4 space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground">New password</label>
              <div className="mt-2 flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
                <input
                  type={showPassword ? "text" : "password"}
                  value={passwordForm.new_password}
                  onChange={(e) => handlePasswordChange("new_password", e.target.value)}
                  className="w-full bg-transparent text-sm outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="text-xs text-slate-500 hover:text-foreground"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Confirm new password</label>
              <div className="mt-2 flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
                <input
                  type={showPassword ? "text" : "password"}
                  value={passwordForm.confirm_password}
                  onChange={(e) => handlePasswordChange("confirm_password", e.target.value)}
                  className="w-full bg-transparent text-sm outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="text-xs text-slate-500 hover:text-foreground"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            {success ? <p className="text-sm text-emerald-700">{success}</p> : null}
            <button
              type="submit"
              className="w-full rounded-lg bg-emerald-600 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 transition-colors disabled:opacity-70"
              disabled={saving}
            >
              {saving ? "Updating..." : "Update password"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SettingsPage;
