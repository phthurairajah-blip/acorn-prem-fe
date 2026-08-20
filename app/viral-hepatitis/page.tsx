import { Navigation } from "@/components/Navigation";
import type { Metadata } from "next";
import { ViralHepatitis } from "@/components/page/viral-hepatitis";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hepatitis B & C Treatment | Dr. Prem Thurairajah - Hepatologist Singapore",
  description:
    "Expert diagnosis and treatment of Hepatitis B and Hepatitis C in Singapore. Antiviral therapy, FibroScan monitoring, and comprehensive viral hepatitis care by Dr. Prem Thurairajah.",
  keywords: [
    "Hepatitis B",
    "Hepatitis C",
    "viral hepatitis",
    "HBV treatment",
    "HCV cure",
    "antiviral therapy",
    "FibroScan",
    "Singapore hepatologist",
    "liver specialist",
  ],
  alternates: {
    canonical: "https://drpremgastro.sg/viral-hepatitis",
  },
};



const ViralHepatitisPage = () => {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalCondition",
            name: "Viral Hepatitis (Hepatitis B & C)",
            description:
              "Viral infections of the liver caused by Hepatitis B virus (HBV) or Hepatitis C virus (HCV), which can lead to chronic liver disease, cirrhosis, and liver cancer if untreated.",
            associatedAnatomy: {
              "@type": "AnatomicalStructure",
              name: "Liver",
            },
            possibleTreatment: [
              {
                "@type": "MedicalTherapy",
                name: "Antiviral Therapy",
              },
              {
                "@type": "MedicalTherapy",
                name: "Direct-Acting Antivirals (DAAs)",
              },
            ],
          }),
        }}
      />

      <Navigation alwaysWhite/>

      <ViralHepatitis/>

      <Footer />
    </>
  );
};

export default ViralHepatitisPage;
