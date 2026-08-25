import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import Fibroscan from "@/components/page/fibroscan";


export const metadata: Metadata = {
  title: "FibroScan | Dr. Prem Thurairajah - Gastroenterologist Singapore",
  description:
    "Non-invasive FibroScan liver assessment in Singapore. Quick, painless measurement of liver stiffness and fat content by Dr. Prem Thurairajah for fatty liver and fibrosis evaluation.",
  keywords: [
    "FibroScan",
    "liver stiffness",
    "fatty liver",
    "liver fibrosis",
    "MASLD",
    "transient elastography",
    "CAP score",
    "Singapore hepatologist",
  ],
  alternates: {
    canonical: "https://drpremgastro.sg/fibroscan",
  },
};


const FibroscanPage = () => {
  return (
    <>
      <Navigation alwaysWhite/>

      <Fibroscan/>

      <Footer />
    </>
  );
};

export default FibroscanPage;
