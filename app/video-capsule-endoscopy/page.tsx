import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import VideoCapsuleEndoscopy from "@/components/page/video-capsule-endoscopy";

export const metadata: Metadata = {
  title: "Video Capsule Endoscopy | Dr. Prem Thurairajah - Gastroenterologist Singapore",
  description:
    "Video capsule endoscopy in Singapore. Non-invasive small bowel imaging for diagnosis of obscure bleeding, Crohn's disease and small intestinal conditions by Dr. Prem Thurairajah.",
  keywords: [
    "capsule endoscopy",
    "video capsule",
    "small bowel imaging",
    "obscure GI bleeding",
    "Crohn's disease",
    "Singapore gastroenterologist",
  ],
  alternates: {
    canonical: "https://drpremgastro.sg/video-capsule-endoscopy",
  },
};


const VideoCapsuleEndoscopyPage = () => {
  return (
    <>
      <Navigation alwaysWhite/>

      <VideoCapsuleEndoscopy/>

      <Footer />
    </>
  );
};

export default VideoCapsuleEndoscopyPage;
