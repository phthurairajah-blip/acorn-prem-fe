import Link from "next/link";
import { ArrowLeft, Calendar, Edit3, User } from "lucide-react";

type BlogPost = {
  id: string;
  title: string;
  status: "Published" | "Draft" | "Scheduled";
  author: string;
  date: string;
  category: string;
  readTime: string;
  content: string[];
};

const posts: BlogPost[] = [
  {
    id: "gerd-daily-habits",
    title: "Managing GERD: Daily Habits That Reduce Flare-Ups",
    status: "Published",
    author: "Dr. Patel",
    date: "Jan 18, 2026",
    category: "Digestive Health",
    readTime: "6 min",
    content: [
      "GERD symptoms can be managed with small, consistent changes to daily routines. Start with a focus on meal timing, hydration, and gentle movement after eating to reduce reflux episodes.",
      "Build a calm routine: Encourage patients to avoid late-night meals and to finish dinner at least three hours before bedtime.",
      "Choose trigger-smart meals: Swap common trigger foods with lower-acid alternatives and keep portions smaller throughout the day.",
      "Keep movement gentle: Light walks after meals can support digestion and reduce the likelihood of reflux.",
    ],
  },
  {
    id: "colonoscopy-expectations",
    title: "What to Expect During a Colonoscopy",
    status: "Draft",
    author: "Dr. Nguyen",
    date: "Jan 22, 2026",
    category: "Procedures",
    readTime: "5 min",
    content: [
      "This draft walks patients through preparation, the procedure, and recovery in a reassuring, step-by-step format.",
    ],
  },
];

const BlogDetailPage = ({ params }: { params: { id: string } }) => {
  const post = posts.find((item) => item.id === params.id) ?? posts[0];

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
              <p className="text-sm text-muted-foreground">Blog post</p>
              <h1 className="text-2xl font-semibold text-foreground">
                {post.title}
              </h1>
            </div>
          </div>
          <Link
            href={`/admin/dashboard/blogs/${post.id}/edit`}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <Edit3 className="h-4 w-4" />
            Edit post
          </Link>
        </div>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            {post.status}
          </span>
          <span className="inline-flex items-center gap-2">
            <User className="h-4 w-4" />
            {post.author}
          </span>
          <span className="inline-flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            {post.date}
          </span>
          <span>{post.readTime} read</span>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <div className="space-y-5 text-sm leading-7 text-slate-700">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;
