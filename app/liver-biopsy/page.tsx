import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { LiverBiopsy } from "@/components/page/liver-biopsy";



export const metadata: Metadata = {
  title: "Liver Biopsy | Dr. Prem Thurairajah - Gastroenterologist Singapore",
  description:
    "Expert liver biopsy procedures in Singapore. Ultrasound-guided liver tissue sampling for accurate diagnosis of liver diseases by Dr. Prem Thurairajah.",
  keywords: [
    "liver biopsy",
    "liver disease diagnosis",
    "hepatology",
    "liver tissue sampling",
    "ultrasound guided biopsy",
    "Singapore gastroenterologist",
  ],
  alternates: {
    canonical: "https://drpremgastro.com/liver-biopsy",
  },
};




const LiverBiopsyPage = () => {
  return (
    <>
      <Navigation alwaysWhite/>

      <LiverBiopsy/>

      <Footer />
    </>
  );
};

export default LiverBiopsyPage;
