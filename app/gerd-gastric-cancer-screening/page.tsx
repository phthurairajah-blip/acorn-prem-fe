import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import {GerdGastricScreeningPage} from '@/components/page/gerd-gastric-cancer-screening';

export const metadata: Metadata = {
  title: "Gastroscopy Screening Singapore | Dr. Prem Thurairajah",
  description:
    "Considering gastroscopy screening in Singapore? Find out who should get checked, how the test works, and what it can detect.",
  keywords: [
    "gastroscopy screening singapore",
  ],
  alternates: {
    canonical: "https://drpremgastro.sg/gerd-gastric-cancer-screening",
  },
};


const GerdGastricPage = () => {
  return (
    <>
      <Navigation alwaysWhite/>

      <GerdGastricScreeningPage/>

      <Footer />
    </>
  );
};

export default GerdGastricPage;