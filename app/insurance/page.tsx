import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import Insurance from "@/components/page/insurance";

export const metadata: Metadata = {
  title: "Insurance & Payment Options | Dr. Prem Thurairajah - Gastroenterologist Singapore",
  description:
    "Information about accepted insurance providers and payment options at Dr. Prem Thurairajah's gastroenterology practice in Singapore. We accept all major Integrated Shield Plans.",
  keywords: [
    "insurance",
    "Integrated Shield Plan",
    "MediSave",
    "payment options",
    "gastroenterologist Singapore",
    "medical insurance",
  ],
  alternates: {
    canonical: "https://drpremgastro.sg/insurance",
  },
};


const InsurancePage = () => {
  return (
    <>
      <Navigation alwaysWhite/>

      <Insurance/>

      <Footer />
    </>
  );
};

export default InsurancePage;
