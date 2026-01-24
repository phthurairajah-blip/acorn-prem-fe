"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { LayoutDashboard, FileText, Users, LogOut, PanelLeft } from "lucide-react";
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
  { href: "/admin/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/dashboard/blogs", label: "Blogs", icon: FileText },
  { href: "/admin/dashboard/patients", label: "Patients", icon: Users },
];

const AdminDashboardLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [logoutOpen, setLogoutOpen] = useState(false);

  const handleLogout = () => {
    document.cookie = "admin_auth=; Path=/; Max-Age=0; SameSite=Lax";
    router.push("/admin");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-foreground">
      <div className="flex">
        <aside
          className={`hidden lg:flex flex-col border-r border-slate-200 bg-white min-h-screen sticky top-0 transition-all duration-200 ${
            collapsed ? "w-20" : "w-64"
          }`}
        >
          <div className="p-6">
            <Link href="/admin/dashboard" className="flex items-center gap-3">
              <Image
                src="/acorn-logo-transparent.png"
                alt="Acorn Gastroenterology"
                width={140}
                height={70}
                className={`h-8 w-auto ${collapsed ? "hidden" : ""}`}
              />
              {collapsed ? (
                <span className="text-sm font-semibold text-foreground">Admin</span>
              ) : null}
            </Link>
          </div>
          <div className="px-4 pb-2">
            <button
              onClick={() => setCollapsed((prev) => !prev)}
              className="w-full flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 hover:text-foreground hover:bg-slate-50 transition-colors"
            >
              <PanelLeft className="h-4 w-4" />
              {collapsed ? "Expand" : "Collapse"}
            </button>
          </div>
          <nav className="px-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
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
          <div className="mt-auto p-4">
            <button
              onClick={() => setLogoutOpen(true)}
              className="w-full flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 hover:text-foreground hover:bg-slate-50 transition-colors"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </aside>

        <div className="flex-1 min-w-0">
          <header className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white lg:sticky lg:top-0">
            <div>
              <h1 className="text-lg font-semibold text-foreground">Admin Dashboard</h1>
              <p className="text-xs text-muted-foreground">Manage content and clinic operations</p>
            </div>
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setCollapsed((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 hover:text-foreground hover:bg-slate-50 transition-colors"
              >
                <PanelLeft className="h-4 w-4" />
                {collapsed ? "Expand" : "Collapse"}
              </button>
              <button
                onClick={() => setLogoutOpen(true)}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 hover:text-foreground hover:bg-slate-50 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
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
