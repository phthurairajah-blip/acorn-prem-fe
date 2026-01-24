import { FileText, Calendar, Users, Activity } from "lucide-react";

const stats = [
  { label: "New inquiries", value: "12", icon: Calendar },
  { label: "Published blogs", value: "16", icon: FileText },
  { label: "Active patients", value: "86", icon: Users },
  { label: "Weekly visits", value: "214", icon: Activity },
];

const tasks = [
  "Review new appointment requests",
  "Schedule follow-up for pending referrals",
  "Update next week’s clinic slots",
  "Publish latest blog draft",
];

const AdminDashboardPage = () => {
  return (
    <div className="space-y-8">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="mt-2 text-3xl font-semibold text-foreground">{item.value}</p>
                </div>
                <div className="rounded-full bg-emerald-50 p-3 text-emerald-700">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-lg font-semibold text-foreground">Today’s priorities</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {tasks.map((task) => (
              <li key={task} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-lg font-semibold text-foreground">Quick actions</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              "Create new blog",
              "View contact form",
              "Export appointments",
              "Update clinic hours",
            ].map((action) => (
              <button
                key={action}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-medium text-foreground hover:bg-slate-100 transition-colors"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboardPage;
