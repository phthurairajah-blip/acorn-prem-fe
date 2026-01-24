import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { EpigastricPain } from "@/components/page/epigastric-pain";

export const metadata: Metadata = {
  title: "Epigastric Pain | H. pylori, Gastritis & Peptic Ulcer | Dr. Prem Thurairajah",
  description:
    "Expert diagnosis and treatment of epigastric pain, H. pylori infection, gastritis and peptic ulcer disease in Singapore by Dr. Prem Thurairajah, Gastroenterologist.",
  keywords: [
    "epigastric pain",
    "stomach pain",
    "H pylori",
    "gastritis",
    "peptic ulcer",
    "Singapore gastroenterologist",
    "dyspepsia",
  ],
  alternates: {
    canonical: "https://drpremgastro.com/epigastric-pain",
  },
};



const EpigastricPainPage = () => {
  return (
    <>
      <Navigation alwaysWhite/>

      <EpigastricPain/>

      <Footer />
    </>
  );
};

export default EpigastricPainPage;
