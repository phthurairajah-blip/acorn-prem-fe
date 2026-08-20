import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { InflammatoryBowelDisease } from "@/components/page/inflammatory-bowel-disease";


export const metadata: Metadata = {
  title: "Inflammatory Bowel Disease (IBD) | Crohn&apos;s & Colitis | Dr. Prem Thurairajah",
  description:
    "Expert diagnosis and management of Inflammatory Bowel Disease (IBD) including Crohn's disease and ulcerative colitis in Singapore. Dr. Prem Thurairajah offers comprehensive care with biologic therapies and colonoscopic surveillance.",
  keywords: [
    "inflammatory bowel disease",
    "IBD",
    "Crohn's disease",
    "ulcerative colitis",
    "biologic therapy",
    "colonoscopy",
    "Singapore gastroenterologist",
    "IBD specialist",
  ],
  alternates: {
    canonical: "https://drpremgastro.sg/inflammatory-bowel-disease",
  },
};



const InflammatoryBowelDiseasePage = () => {
  return (
    <>
      <Navigation alwaysWhite/>

      <InflammatoryBowelDisease/>

      <Footer />
    </>
  );
};

export default InflammatoryBowelDiseasePage;
