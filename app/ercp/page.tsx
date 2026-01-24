import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { Ercp } from "@/components/page/ercp";

export const metadata: Metadata = {
  title: "ERCP Procedure | Dr. Prem Thurairajah - Gastroenterologist Singapore",
  description:
    "Expert ERCP (Endoscopic Retrograde Cholangiopancreatography) in Singapore. Advanced treatment for bile duct stones, strictures, and pancreatic conditions by Dr. Prem Thurairajah.",
  keywords: [
    "ERCP",
    "bile duct stones",
    "gallstone removal",
    "bile duct stent",
    "jaundice treatment",
    "pancreatic duct",
    "Singapore gastroenterologist",
  ],
  alternates: {
    canonical: "https://drpremgastro.com/ercp",
  },
};



const ERCPPage = () => {
  return (
    <>
      <Navigation alwaysWhite/>

      <Ercp/>

      <Footer />
    </>
  );
};

export default ERCPPage;
