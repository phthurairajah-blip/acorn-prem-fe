import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { Ibs } from "@/components/page/ibs";

export const metadata: Metadata = {
  title: "Irritable Bowel Syndrome (IBS) | Expert Care | Dr. Prem Thurairajah",
  description:
    "Expert diagnosis and personalised management of Irritable Bowel Syndrome (IBS) in Singapore. Dr. Prem Thurairajah provides comprehensive care including dietary guidance and symptom control.",
  keywords: [
    "IBS",
    "irritable bowel syndrome",
    "IBS treatment",
    "IBS-D",
    "IBS-C",
    "FODMAP diet",
    "Singapore gastroenterologist",
  ],
  alternates: {
    canonical: "https://drpremgastro.com/irritable-bowel-syndrome",
  },
};


const IBSPage = () => {
  return (
    <>
      <Navigation alwaysWhite/>

       <Ibs/>

      <Footer />
    </>
  );
};

export default IBSPage;
