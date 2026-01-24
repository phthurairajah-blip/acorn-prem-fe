import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { LiverCirrhosis } from "@/components/page/liver-cirrhosis";


export const metadata: Metadata = {
  title: "Liver Cirrhosis | Dr. Prem Thurairajah - Gastroenterologist Singapore",
  description:
    "Expert management of liver cirrhosis in Singapore. Advanced care for chronic liver disease, complications, and liver transplant assessment by Dr. Prem Thurairajah.",
  keywords: [
    "liver cirrhosis",
    "chronic liver disease",
    "portal hypertension",
    "ascites",
    "varices",
    "liver transplant",
    "hepatologist Singapore",
  ],
  alternates: {
    canonical: "https://drpremgastro.com/liver-cirrhosis",
  },
};

const LiverCirrhosisPage = () => {
  return <>
      <Navigation alwaysWhite/>

      <LiverCirrhosis/>

      <Footer />
    </>;
};
export default LiverCirrhosisPage;
