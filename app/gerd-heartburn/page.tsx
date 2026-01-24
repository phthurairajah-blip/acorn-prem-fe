import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import {GerdHeartBurn} from '@/components/page/gerd-heartburn';

export const metadata: Metadata = {
  title: "Acid Reflux & Heartburn Treatment | Dr. Prem Thurairajah - Gastroenterologist Singapore",
  description:
    "Expert treatment of heartburn and acid reflux in Singapore. Reflux management, lifestyle modifications, and advanced treatment options by Dr. Prem Thurairajah.",
  keywords: [
    "heartburn",
    "acid reflux",
    "GERD",
    "gastroesophageal reflux",
    "treatment Singapore",
    "gastroenterologist",
  ],
  alternates: {
    canonical: "https://drpremgastro.com/gerd-heartburn",
  },
};


const GerdHeartburnPage = () => {
  return (
    <>
      <Navigation alwaysWhite/>

      <GerdHeartBurn/>

      <Footer />
    </>
  );
};

export default GerdHeartburnPage;
