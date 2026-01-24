import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { Colonoscopy } from "@/components/page/colonoscopy";

export const metadata: Metadata = {
  title: "Colonoscopy | Dr. Prem Thurairajah - Gastroenterologist Singapore",
  description:
    "Expert colonoscopy procedure in Singapore. Bowel cancer screening, polyp removal, and lower GI endoscopy by Dr. Prem Thurairajah for diagnosis and prevention.",
  keywords: [
    "colonoscopy",
    "bowel cancer screening",
    "polyp removal",
    "colorectal cancer",
    "colon examination",
    "Singapore gastroenterologist",
  ],
  alternates: {
    canonical: "https://drpremgastro.com/colonoscopy",
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
