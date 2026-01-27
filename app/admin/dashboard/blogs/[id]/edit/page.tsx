"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Save } from "lucide-react";
import FeatureImagePicker, {
  type FeatureImageValue,
} from "@/app/admin/dashboard/blogs/_components/FeatureImagePicker";
import RichTextEditor from "@/app/admin/dashboard/blogs/_components/RichTextEditor";

const EditBlogPage = () => {
  const [title, setTitle] = useState("Managing GERD: Daily Habits That Reduce Flare-Ups");
  const [category, setCategory] = useState("Digestive Health");
  const [excerpt, setExcerpt] = useState(
    "Daily habits that reduce reflux flare-ups and support calmer digestion."
  );
  const [content, setContent] = useState(
    "<p>GERD symptoms can be managed with small, consistent changes to daily routines.</p><p>Start with a focus on meal timing, hydration, and gentle movement after eating to reduce reflux episodes.</p><h2>1. Build a calm routine</h2><p>Encourage patients to avoid late-night meals and to finish dinner at least three hours before bedtime.</p><h2>2. Choose trigger-smart meals</h2><p>Swap common trigger foods with lower-acid alternatives and keep portions smaller throughout the day.</p><h2>3. Keep movement gentle</h2><p>Light walks after meals can support digestion and reduce the likelihood of reflux.</p>"
  );
  const [featureImage, setFeatureImage] = useState<FeatureImageValue>({
    type: "url",
    url: "https://images.example.com/cover-gerd.png",
  });

  const savePost = async () => {
    return {
      title,
      category,
      excerpt,
      content,
      featureImage,
    };
  };

  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/admin/dashboard/blogs"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <div>
              <p className="text-sm text-muted-foreground">Edit blog post</p>
              <h1 className="text-2xl font-semibold text-foreground">{title}</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={savePost}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <Save className="h-4 w-4" />
              Save changes
            </button>
            <button
              type="button"
              onClick={savePost}
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
            >
              Update post
            </button>
          </div>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <section className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <label className="text-sm font-medium text-foreground">Title</label>
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="mt-3 w-full rounded-xl border border-slate-200 px-4 py-3 text-base font-medium text-foreground focus:border-emerald-500 focus:outline-none"
            />
          </div>

          <RichTextEditor
            initialValue={content}
            onChange={setContent}
            placeholder="Write the body of the blog post here. Use short paragraphs, headings, and bullet lists."
          />
        </section>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-sm font-semibold text-foreground">Post settings</h2>
            <div className="mt-4 space-y-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                >
                  <option>Digestive Health</option>
                  <option>Procedures</option>
                  <option>Nutrition</option>
                  <option>Patient Education</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Publish date
                </label>
                <div className="mt-2 flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600">
                  <Calendar className="h-4 w-4" />
                  <span>Jan 18, 2026</span>
                </div>
              </div>
              <FeatureImagePicker value={featureImage} onChange={setFeatureImage} />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-sm font-semibold text-foreground">Excerpt</h2>
            <textarea
              rows={4}
              value={excerpt}
              onChange={(event) => setExcerpt(event.target.value)}
              className="mt-3 w-full resize-none rounded-xl border border-slate-200 px-3 py-2 text-sm text-foreground"
            />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default EditBlogPage;
