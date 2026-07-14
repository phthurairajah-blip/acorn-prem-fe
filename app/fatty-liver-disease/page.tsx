import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { FattyLiverDisease } from "@/components/page/fatty-liver-disease";



export const metadata: Metadata = {
  title:
    "Fatty Liver Treatment Singapore | Dr. Prem Thurairajah",
  description:
    "Consult with the Fatty Liver Specialist in Singapore for comprehensive management and treatment of fatty liver disease (MASLD/MASH) with lifestyle-based solutions.",
  keywords: [
    "fatty liver",
    "MASLD",
    "MASH",
    "metabolic dysfunction-associated steatotic liver disease",
    "metabolic liver disease",
    "FibroScan",
    "Singapore hepatologist",
  ],
  alternates: {
    canonical: "https://drpremgastro.sg/fatty-liver-disease",
  },
};


const FattyLiverDiseasePage = () => {
  return (
    <>
      <Navigation alwaysWhite/>

      <FattyLiverDisease/>

      <Footer />
    </>
  );
};

export default FattyLiverDiseasePage;
