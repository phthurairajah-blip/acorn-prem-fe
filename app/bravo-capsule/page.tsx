import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import BravoCapsule from "@/components/page/bravo-capsule";

export const metadata: Metadata = {
  title: "Bravo Capsule pH Monitoring | Dr. Prem Thurairajah - Gastroenterologist Singapore",
  description:
    "Wireless Bravo capsule pH monitoring in Singapore. Catheter-free acid reflux testing for accurate GERD diagnosis by Dr. Prem Thurairajah.",
  keywords: [
    "Bravo capsule",
    "pH monitoring",
    "acid reflux test",
    "GERD diagnosis",
    "wireless pH",
    "heartburn testing",
    "Singapore gastroenterologist",
  ],
  alternates: {
    canonical: "https://drpremgastro.sg/bravo-capsule",
  },
};


const BravoCapsulePage = () => {
  return (
    <>
      <Navigation alwaysWhite/>

      <BravoCapsule/>

      <Footer />
    </>
  );
};

export default BravoCapsulePage;
