"use client";

import { useEffect, useMemo, useState } from "react";
import { MoreVertical, Plus } from "lucide-react";
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
import CategoryModal from "@/components/blog/CategoryModal";
import { getAdminAuthHeaders } from "@/lib/auth";

type Category = {
  id: string;
  name: string;
  posts: number;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

const CategoriesPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"create" | "edit">("create");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [menuOpenId, setMenuOpenId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const selectedCategory = useMemo(
    () => categories.find((category) => category.id === deleteId),
    [categories, deleteId]
  );

  const loadCategories = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}/categories`, {
        headers: new Headers({
          ...getAdminAuthHeaders(),
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data?.detail || "Unable to load categories.");
        return;
      }
      const data = (await res.json()) as Array<{
        id: string;
        name: string;
        posts_count?: number;
        posts?: number;
      }>;
      setCategories(
        data.map((item) => ({
          id: item.id,
          name: item.name,
          posts: item.posts ?? item.posts_count ?? 0,
        }))
      );
    } catch {
      setError("Unable to load categories.");
    } finally {
      setLoading(false);
    }
  };

  const deleteCategory = async (id: string) => {
    try {
      const res = await fetch(`${API_URL}/categories/${id}`, {
        method: "DELETE",
        headers: new Headers({
          ...getAdminAuthHeaders(),
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data?.detail || "Unable to delete category.");
        return;
      }
      setCategories((prev) => prev.filter((category) => category.id !== id));
    } catch {
      setError("Unable to delete category.");
    }
  };

  const createCategory = async (name: string) => {
    const next = name.trim();
    if (!next) return;
    try {
      const res = await fetch(`${API_URL}/categories`, {
        method: "POST",
        headers: new Headers({
          ...getAdminAuthHeaders(),
        }),
        body: JSON.stringify({ name: next }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data?.detail || "Unable to create category.");
        return;
      }
      const data = (await res.json()) as {
        id: string;
        name: string;
        posts_count?: number;
        posts?: number;
      };
      setCategories((prev) => [
        {
          id: data.id,
          name: data.name,
          posts: data.posts ?? data.posts_count ?? 0,
        },
        ...prev,
      ]);
    } catch {
      setError("Unable to create category.");
    }
  };

  const updateCategory = async (id: string, name: string) => {
    const next = name.trim();
    if (!next) return;
    try {
      const res = await fetch(`${API_URL}/categories/${id}`, {
        method: "PUT",
        headers: new Headers({
          ...getAdminAuthHeaders(),
        }),
        body: JSON.stringify({ name: next }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data?.detail || "Unable to update category.");
        return;
      }
      const data = (await res.json()) as { id: string; name: string };
      setCategories((prev) =>
        prev.map((category) =>
          category.id === id ? { ...category, name: data.name } : category
        )
      );
    } catch {
      setError("Unable to update category.");
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    await deleteCategory(deleteId);
    setDeleteId(null);
  };

  useEffect(() => {
    if (!menuOpenId) return;
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest("[data-category-menu]")) return;
      setMenuOpenId(null);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [menuOpenId]);

  const openCreate = () => {
    setModalMode("create");
    setEditingId(null);
    setModalOpen(true);
  };

  const openEdit = (id: string) => {
    setModalMode("edit");
    setEditingId(id);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = async (name: string) => {
    setError(null);
    if (modalMode === "create") {
      await createCategory(name);
    } else if (editingId) {
      await updateCategory(editingId, name);
    }
    closeModal();
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Blog categories</p>
            <h2 className="text-xl font-semibold text-foreground">Manage categories</h2>
          </div>
          <button
            type="button"
            onClick={openCreate}
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
          >
            <Plus className="h-4 w-4" />
            New category
          </button>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white shadow-soft">
        <div className="border-b border-slate-200 px-6 py-4">
          <div className="grid gap-2 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:grid-cols-[2fr_1fr_auto]">
            <span>Category name</span>
            <span>Posts</span>
            <span className="text-right">Actions</span>
          </div>
        </div>
        <div className="divide-y divide-slate-100">
          {loading ? (
            <div className="px-6 py-6 text-sm text-muted-foreground">Loading categories...</div>
          ) : null}
          {error ? (
            <div className="px-6 py-4 text-sm text-red-600">{error}</div>
          ) : null}
          {categories.map((category) => (
            <div
              key={category.id}
              className="grid gap-3 px-6 py-4 text-sm text-foreground sm:grid-cols-[2fr_1fr_auto] sm:items-center"
            >
              <span className="font-medium">{category.name}</span>
              <span className="text-muted-foreground">{category.posts}</span>
              <div className="flex items-center justify-end">
                <div className="relative" data-category-menu>
                  <button
                    type="button"
                    onClick={() =>
                      setMenuOpenId((prev) => (prev === category.id ? null : category.id))
                    }
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50"
                    aria-label="Open actions"
                  >
                    <MoreVertical className="h-4 w-4" />
                  </button>
                  {menuOpenId === category.id ? (
                    <div className="absolute right-0 top-11 z-10 w-36 rounded-xl border border-slate-200 bg-white py-2 text-xs shadow-soft">
                      <button
                        type="button"
                        onClick={() => {
                          setMenuOpenId(null);
                          openEdit(category.id);
                        }}
                        className="block w-full px-4 py-2 text-left text-slate-600 hover:bg-slate-50"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setMenuOpenId(null);
                          setDeleteId(category.id);
                        }}
                        className="block w-full px-4 py-2 text-left text-red-600 hover:bg-red-50"
                      >
                        Delete
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AlertDialog open={Boolean(deleteId)} onOpenChange={(open) => !open && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this category?</AlertDialogTitle>
            <AlertDialogDescription>
              {selectedCategory
                ? `This will permanently remove "${selectedCategory.name}".`
                : "This will permanently remove the selected category."}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <CategoryModal
        open={modalOpen}
        mode={modalMode}
        initialName={
          modalMode === "edit"
            ? categories.find((category) => category.id === editingId)?.name
            : ""
        }
        onClose={closeModal}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default CategoriesPage;
