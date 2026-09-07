import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import PancreaticCyst from "@/components/page/pancreatic-cyst";

export const metadata: Metadata = {
  title: "Pancreatic Cysts Specialist Singapore | Dr. Prem Thurairajah",
  description:
    "Expert pancreatic cysts specialist in Singapore. Comprehensive evaluation and management by Dr. Prem Thurairajah.",
  keywords: [
    "pancreatic cyst",
    "IPMN",
    "mucinous cyst",
    "pancreatic surveillance",
    "Singapore gastroenterologist",
    "EUS",
    "pancreatic cancer prevention",
  ],
  alternates: {
    canonical: "https://drpremgastro.sg/pancreatic-cyst",
  },
};



const PancreaticCystPage = () => {
  return (
    <>
      <Navigation alwaysWhite/>

      <PancreaticCyst/>

      <Footer />
    </>
  );
};

export default PancreaticCystPage;
