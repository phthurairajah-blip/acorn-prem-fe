"use client";

import { usePathname } from "next/navigation";
import { WhatsAppButton } from "@/components/WhatsappButton";

export default function WhatsappButtonGate() {
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return <WhatsAppButton />;
}
