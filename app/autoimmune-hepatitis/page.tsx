import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { AutoimmuneHepatitis } from "@/components/page/autoimmune-hepatitis";



export const metadata: Metadata = {
  title: "Autoimmune Hepatitis | Dr. Prem Thurairajah - Gastroenterologist Singapore",
  description:
    "Expert diagnosis and treatment of autoimmune hepatitis in Singapore. Comprehensive care for this chronic liver condition by Dr. Prem Thurairajah.",
  keywords: [
    "autoimmune hepatitis",
    "AIH",
    "liver disease",
    "immunosuppressive therapy",
    "Singapore gastroenterologist",
    "hepatologist",
  ],
  alternates: {
    canonical: "https://drpremgastro.com/autoimmune-hepatitis",
  },
};



const AutoimmuneHepatitisPage = () => {
  return (
    <>
      <Navigation alwaysWhite/>

      <AutoimmuneHepatitis/>

      <Footer />
    </>
  );
};

export default AutoimmuneHepatitisPage;
