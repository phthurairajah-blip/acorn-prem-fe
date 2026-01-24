import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { FattyLiverDisease } from "@/components/page/fatty-liver-disease";



export const metadata: Metadata = {
  title:
    "Fatty Liver Disease (MASLD/MASH) | Dr. Prem Thurairajah - Gastroenterologist Singapore",
  description:
    "Expert diagnosis and management of fatty liver disease (MASLD/MASH) in Singapore. Lifestyle-based treatment and comprehensive care by Dr. Prem Thurairajah.",
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
    canonical: "https://drpremgastro.com/fatty-liver-disease",
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
