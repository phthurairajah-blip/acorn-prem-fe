import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import ChronicPancreatitis from "@/components/page/chronic-pancreatitis";

export const metadata: Metadata = {
  title: "Chronic Pancreatitis | Diagnosis & Treatment | Dr. Prem Thurairajah",
  description:
    "Expert diagnosis and management of chronic pancreatitis in Singapore. Dr. Prem Thurairajah offers comprehensive care including pain management, enzyme replacement, and advanced endoscopic therapies.",
  keywords: [
    "chronic pancreatitis",
    "pancreatic pain",
    "pancreatic insufficiency",
    "ERCP",
    "Singapore gastroenterologist",
    "pancreatitis treatment",
    "pancreatic enzyme replacement",
  ],
  alternates: {
    canonical: "https://drpremgastro.sg/chronic-pancreatitis",
  },
};


const ChronicPancreatitisPage = () => {
  return (
    <>
      <Navigation alwaysWhite/>

      <ChronicPancreatitis/>

      <Footer />
    </>
  );
};

export default ChronicPancreatitisPage;
