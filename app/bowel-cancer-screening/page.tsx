import type { Metadata } from "next";
import { BowelCancerScreeningPage } from "@/components/page/bowel-cancer-screening";

export const metadata: Metadata = {
  title: "Bowel Cancer Screening | Dr. Prem Thurairajah - Gastroenterologist Singapore",
  description:
    "Expert bowel cancer screening and colonoscopy services in Singapore. Early detection colonoscopy and surveillance for colorectal cancer prevention by Dr. Prem Thurairajah.",
  keywords: [
    "bowel cancer screening",
    "colonoscopy Singapore",
    "colorectal cancer prevention",
    "polyp removal",
    "gastroenterologist",
  ],
  alternates: {
    canonical: "https://drpremgastro.com/bowel-cancer-screening",
  },
};

const BowelCancerScreening = () => <BowelCancerScreeningPage />;

export default BowelCancerScreening;
