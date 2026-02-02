import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Home, Search, AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <>
      <Navigation alwaysWhite />
      <main className="min-h-screen pt-20">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-background to-background" />
          <div className="relative container mx-auto px-2 sm:px-4 py-20 lg:py-28">
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 text-sm text-amber-700 shadow-sm">
                <AlertTriangle className="h-4 w-4" />
                Page not found
              </div>
              <h1 className="mt-6 text-4xl md:text-5xl font-serif font-semibold text-foreground">
                We couldn’t find that page
              </h1>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                The page you’re looking for may have been moved, renamed, or is temporarily unavailable.
                If you need help finding a specific service or condition, you can return to the home page
                or browse our main sections below.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-soft hover:bg-primary/90 transition-colors"
                >
                  <Home className="h-4 w-4" />
                  Go to Home
                </Link>
                <Link
                  href="/blogs"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  <Search className="h-4 w-4" />
                  Browse Blogs
                </Link>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
