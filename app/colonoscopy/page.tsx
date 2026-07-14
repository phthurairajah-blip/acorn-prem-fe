import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { Colonoscopy } from "@/components/page/colonoscopy";

export const metadata: Metadata = {
  title: "Colonoscopy Specialist Singapore | Dr. Prem Thurairajah",
  description:
    "Trusted colonoscopy specialist in Singapore for screening, bowel symptoms and polyp removal. Find out how colonoscopy works and when to book.",
  keywords: [
    "colonoscopy",
    "bowel cancer screening",
    "polyp removal",
    "colorectal cancer",
    "colon examination",
    "Singapore gastroenterologist",
  ],
  alternates: {
    canonical: "https://drpremgastro.sg/colonoscopy",
  },
};

const ColonoscopyPage = () => {
  return (
    <>
      <Navigation alwaysWhite/>

      <Colonoscopy/>

      <Footer />
    </>
  );
};

export default ColonoscopyPage;
