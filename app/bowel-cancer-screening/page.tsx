import type { Metadata } from "next";
import { BowelCancerScreeningPage } from "@/components/page/bowel-cancer-screening";

export const metadata: Metadata = {
  title: "Colonoscopy Screening in Singapore | Colorectal Cancer Screening",
  description:
    "Colonoscopy screening procedures in Singapore, their benefits, what to expect during the process, early detection colonoscopy, and surveillance by Dr. Prem Thurairajah.",
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
