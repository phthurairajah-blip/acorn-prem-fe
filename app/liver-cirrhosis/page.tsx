import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { LiverCirrhosis } from "@/components/page/liver-cirrhosis";


export const metadata: Metadata = {
  title: "Liver Cirrhosis Treatment Singapore | Dr Prem Thurairajah",
  description:
    "Discover effective liver cirrhosis treatments offered by Dr Prem Thurairajah. Advanced care for chronic liver disease, complications, and liver transplant assessment.",
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
    canonical: "https://drpremgastro.sg/liver-cirrhosis",
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
