import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import GastroscopyColonoscopy from "@/components/page/gastroscopy-colonoscopy";

export const metadata: Metadata = {
  title: "Gastroscopy (OGD) | Dr. Prem Thurairajah - Gastroenterologist Singapore",
  description:
    "Expert gastroscopy (OGD) procedure in Singapore. Upper GI endoscopy by Dr. Prem Thurairajah for diagnosis, screening, and treatment of oesophageal and stomach conditions.",
  keywords: [
    "gastroscopy",
    "OGD",
    "upper endoscopy",
    "oesophagoscopy",
    "stomach endoscopy",
    "Singapore gastroenterologist",
  ],
  alternates: {
    canonical: "https://drpremgastro.com/gastroscopy-colonoscopy",
  },
};

const GastroscopyColonoscopyPage = () => {
  return (
    <>
      <Navigation alwaysWhite/>

      <GastroscopyColonoscopy/>

      <Footer />
    </>
  );
};

export default GastroscopyColonoscopyPage;
