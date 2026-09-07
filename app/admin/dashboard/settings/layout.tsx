import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Settings",
};

const SettingsLayout = ({ children }: { children: ReactNode }) => children;

export default SettingsLayout;
