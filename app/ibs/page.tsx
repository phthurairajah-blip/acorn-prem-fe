import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { Ibs } from "@/components/page/ibs";

export const metadata: Metadata = {
  title: "IBS Treatment | IBS Specialist Singapore | Dr. Prem Thurairajah",
  description:
    "Looking for a certified irritable bowel syndrome specialist in Singapore? Our expert team offers comprehensive diagnosis and treatment for Irritable Bowel Syndrome.",
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
    canonical: "https://drpremgastro.sg/ibs",
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
