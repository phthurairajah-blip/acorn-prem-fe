import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import PancreaticCyst from "@/components/page/pancreatic-cyst";

export const metadata: Metadata = {
  title: "Pancreatic Cyst | Surveillance & Management | Dr. Prem Thurairajah",
  description:
    "Specialist evaluation and surveillance of pancreatic cysts in Singapore. Dr. Prem Thurairajah provides expert assessment, risk stratification, and management strategies.",
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
