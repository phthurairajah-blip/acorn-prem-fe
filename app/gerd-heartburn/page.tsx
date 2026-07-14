import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import {GerdHeartBurn} from '@/components/page/gerd-heartburn';

export const metadata: Metadata = {
  title: "Gerd Specialist Singapore | Heartburn Treatment | Dr. Prem Thurairajah",
  description:
    "Looking for a GERD specialist in Singapore? Dr. Prem Thurairajah provides effective treatment for GERD and related conditions. Schedule your consultation today!",
  keywords: [
    "heartburn",
    "acid reflux",
    "GERD",
    "gastroesophageal reflux",
    "treatment Singapore",
    "gastroenterologist",
  ],
  alternates: {
    canonical: "https://drpremgastro.sg/gerd-heartburn",
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
