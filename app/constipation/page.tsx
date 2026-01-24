import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { Constipation } from "@/components/page/constipation";


export const metadata: Metadata = {
  title: "Constipation | Diagnosis & Treatment | Dr. Prem Thurairajah",
  description:
    "Expert diagnosis and treatment of chronic constipation in Singapore. Dr. Prem Thurairajah provides comprehensive assessment and personalised management strategies.",
  keywords: [
    "constipation",
    "chronic constipation",
    "bowel problems",
    "Singapore gastroenterologist",
    "IBS-C",
    "pelvic floor dysfunction",
  ],
  alternates: {
    canonical: "https://drpremgastro.com/constipation",
  },
};

const ConstipationPage = () => {
  return (
    <>
      <Navigation alwaysWhite/>

      <Constipation/>

      <Footer />
    </>
  );
};

export default ConstipationPage;
