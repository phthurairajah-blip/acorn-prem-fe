import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import GastroscopyColonoscopy from "@/components/page/gastroscopy-colonoscopy";

export const metadata: Metadata = {
  title: "Gastroscopy Singapore | Dr. Prem Thurairajah",
  description:
    "Expert gastroscopy (OGD) in Singapore. Upper GI endoscopy by Dr. Prem Thurairajah for diagnosis & treatment of oesophageal and stomach conditions. Book now.",
  keywords: [
    "gastroscopy",
    "OGD",
    "upper endoscopy",
    "oesophagoscopy",
    "stomach endoscopy",
    "Singapore gastroenterologist",
  ],
  alternates: {
    canonical: "https://drpremgastro.sg/gastroscopy-colonoscopy",
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
