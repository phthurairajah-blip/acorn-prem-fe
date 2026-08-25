import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import LiverPancreaticCancer from "@/components/page/liver-pancreatic-cancer-screening";

export const metadata: Metadata = {
  title:
    "Liver & Pancreatic Cancer Screening | Dr. Prem Thurairajah - Gastroenterologist Singapore",
  description:
    "Comprehensive liver and pancreatic cancer screening in Singapore. Evidence-based screening guidelines, risk factors, and early detection methods by Dr. Prem Thurairajah.",
  keywords: [
    "liver cancer screening",
    "pancreatic cancer screening",
    "hepatocellular carcinoma",
    "AFP test",
    "EUS",
    "Singapore gastroenterologist",
  ],
  alternates: {
    canonical: "https://drpremgastro.sg/liver-pancreatic-cancer-screening",
  },
};


const LiverPancreaticCancerPage = () => {
  return (
    <>
      <Navigation alwaysWhite/>

      <LiverPancreaticCancer/>

      <Footer />
    </>
  );
};

export default LiverPancreaticCancerPage;
