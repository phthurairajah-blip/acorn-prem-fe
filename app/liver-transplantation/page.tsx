import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import LiverTransplant from "@/components/page/liver-transplantation";

export const metadata: Metadata = {
  title:
    "Liver Transplantation Assessment | Dr. Prem Thurairajah - Transplant Hepatologist Singapore",
  description:
    "Expert liver transplant assessment and care in Singapore. Dr. Prem Thurairajah, trained at leading UK transplant centres, provides comprehensive pre and post-transplant hepatology services.",
  keywords: [
    "liver transplant",
    "liver transplantation",
    "transplant hepatology",
    "liver failure",
    "cirrhosis",
    "HCC",
    "MELD score",
    "Singapore hepatologist",
    "transplant assessment",
  ],
  alternates: {
    canonical: "https://drpremgastro.com/liver-transplantation",
  },
};



const LiverTransplantPage = () => {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            name: "Liver Transplantation",
            description:
              "Surgical replacement of a diseased liver with a healthy donor liver for patients with end-stage liver disease or liver cancer.",
            procedureType: "Surgical",
            bodyLocation: "Liver",
            preparation: "Comprehensive medical evaluation and listing on transplant waiting list",
            followup: "Lifelong immunosuppression and monitoring",
          }),
        }}
      />

      <Navigation  alwaysWhite/>

      <LiverTransplant/>

      <Footer />
    </>
  );
};

export default LiverTransplantPage;
