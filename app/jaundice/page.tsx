import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Jaundice from "@/components/page/jaundice";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jaundice | Dr. Prem Thurairajah - Gastroenterologist Singapore",
  description:
    "Expert evaluation and management of jaundice in Singapore. Comprehensive diagnosis and treatment of liver and biliary causes of jaundice by Dr. Prem Thurairajah.",
  keywords: [
    "jaundice",
    "yellowing skin",
    "liver disease",
    "bile duct",
    "bilirubin",
    "hepatitis",
    "gallstones",
    "Singapore gastroenterologist",
  ],
  alternates: {
    canonical: "https://drpremgastro.com/jaundice",
  },
};



const JaundicePage = () => {
  return (
    <>
      <Navigation alwaysWhite/>

      <Jaundice/>

      <Footer />
    </>
  );
};

export default JaundicePage;
