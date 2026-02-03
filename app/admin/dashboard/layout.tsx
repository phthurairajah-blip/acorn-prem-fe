"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Calendar, ChevronDown, FileText, LogOut, PanelLeft, Tag, Settings } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const navItems = [
  { href: "/admin/dashboard/categories", label: "Blog Category", icon: Tag },
  { href: "/admin/dashboard/blogs", label: "Blogs", icon: FileText },
  { href: "/admin/dashboard/booking", label: "Booking", icon: Calendar },
  { href: "/admin/dashboard/settings", label: "Settings", icon: Settings },
];

const AdminDashboardLayout = ({ children }: { children: ReactNode }) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
  const pathname = usePathname();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [logoutOpen, setLogoutOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [adminEmail, setAdminEmail] = useState<string | null>(null);

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    document.cookie = "admin_auth=; Path=/; Max-Age=0; SameSite=Lax";
    router.push("/admin");
  };

  useEffect(() => {
    const isTokenExpired = (token: string) => {
      try {
        const payload = token.split(".")[1];
        if (!payload) return true;
        const decoded = JSON.parse(atob(payload.replace(/-/g, "+").replace(/_/g, "/")));
        if (!decoded?.exp) return true;
        return Date.now() >= decoded.exp * 1000;
      } catch {
        return true;
      }
    };

    const token = localStorage.getItem("admin_token");
    if (token && isTokenExpired(token)) {
      handleLogout();
      return;
    }

    const loadProfile = async () => {
      if (!token) return;
      try {
        const res = await fetch(`${API_URL}/users/me`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) return;
        const data = (await res.json()) as { email?: string };
        if (data?.email) {
          setAdminEmail(data.email);
        }
      } catch {
        // noop
      }
    };
    loadProfile();
  }, [API_URL]);

  return (
    <div className="min-h-screen bg-slate-50 text-foreground">
      <div className="flex">
        <aside
          className={`hidden lg:flex flex-col border-r border-slate-200 bg-white min-h-screen sticky top-0 transition-all duration-200 ${
            collapsed ? "w-20" : "w-64"
          }`}
        >
          <div className="p-6">
            <Link href="/admin/dashboard" className="flex items-center gap-3 justify-center">
              <Image
                src="/logo.png"
                alt="Acorn Gastroenterology"
                width={140}
                height={70}
                className={`h-auto w-28 ${collapsed ? "hidden" : ""}`}
              />
              {collapsed ? (
                <span className="text-sm font-semibold text-foreground">Admin</span>
              ) : null}
            </Link>
          </div>
          <div className="px-4 pb-2">
            <button
              onClick={() => setCollapsed((prev) => !prev)}
              className="w-full flex items-center justify-center rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 hover:text-foreground hover:bg-slate-50 transition-colors"
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              <PanelLeft className="h-4 w-4" />
            </button>
          </div>
          <nav className="px-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-slate-600 hover:text-foreground hover:bg-slate-100"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {collapsed ? null : item.label}
                </Link>
              );
            })}
          </nav>
          {collapsed ? null : (
            <div className="mt-auto p-4">
              <button
                onClick={() => setLogoutOpen(true)}
                className="w-full flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 hover:text-foreground hover:bg-slate-50 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          )}
        </aside>

        <div className="flex-1 min-w-0">
          <header className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white lg:sticky lg:top-0">
            <div>
              <h1 className="text-lg font-semibold text-foreground">Admin Dashboard</h1>
              <p className="text-xs text-muted-foreground">Manage blog posts</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCollapsed((prev) => !prev)}
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 hover:text-foreground hover:bg-slate-50 transition-colors lg:hidden"
                aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              >
                <PanelLeft className="h-4 w-4" />
              </button>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setProfileOpen((prev) => !prev)}
                  className="flex items-center gap-3 rounded-full border border-slate-200 px-3 py-1.5 text-left text-sm hover:bg-slate-50"
                >
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-700">
                    A
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-sm font-medium leading-tight text-foreground">
                      Admin
                    </p>
                    <p className="text-xs leading-tight text-muted-foreground">
                      {adminEmail || "enquiried@drpremgastro.sg"}
                    </p>
                  </div>
                  <ChevronDown className="h-4 w-4 text-slate-500" />
                </button>
                {profileOpen ? (
                  <div className="absolute right-0 top-12 z-10 w-44 rounded-xl border border-slate-200 bg-white py-2 text-xs shadow-soft">
                    <button
                      type="button"
                      onClick={() => {
                        setProfileOpen(false);
                        setLogoutOpen(true);
                      }}
                      className="flex w-full items-center gap-2 px-4 py-2 text-left text-slate-600 hover:bg-slate-50"
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </header>
          <main className="px-6 py-6">{children}</main>
        </div>
      </div>
      <AlertDialog open={logoutOpen} onOpenChange={setLogoutOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Sign out of Admin?</AlertDialogTitle>
            <AlertDialogDescription>
              You will be returned to the admin sign-in screen.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleLogout}>Logout</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AdminDashboardLayout;
