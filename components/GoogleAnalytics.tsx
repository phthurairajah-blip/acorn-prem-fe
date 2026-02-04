"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

type GoogleAnalyticsProps = {
  measurementId: string;
};

const GoogleAnalytics = ({ measurementId }: GoogleAnalyticsProps) => {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  useEffect(() => {
    if (isAdminRoute) return;
    if (typeof window === "undefined") return;
    const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag;
    if (!gtag) return;
    gtag("config", measurementId, { page_path: pathname });
  }, [isAdminRoute, measurementId, pathname]);

  if (isAdminRoute) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
