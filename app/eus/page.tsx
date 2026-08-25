import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import Eus from "@/components/page/eus";

export const metadata: Metadata = {
  title: "Endoscopic Ultrasound (EUS) | Dr. Prem Thurairajah - Gastroenterologist Singapore",
  description:
    "Expert Endoscopic Ultrasound (EUS) procedures in Singapore. Advanced imaging and biopsy of pancreatic, biliary, and GI conditions by Dr. Prem Thurairajah.",
  keywords: [
    "EUS",
    "endoscopic ultrasound",
    "pancreatic cancer staging",
    "EUS-FNA",
    "pancreatic cyst",
    "Singapore gastroenterologist",
  ],
  alternates: {
    canonical: "https://drpremgastro.sg/eus",
  },
};

const EUSPage = () => {
  return (
    <>
      <Navigation alwaysWhite/>

      <Eus/>

      <Footer />
    </>
  );
};

export default EUSPage;
