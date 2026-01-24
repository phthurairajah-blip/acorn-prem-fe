import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { About } from "@/components/About";
import { Conditions } from "@/components/Conditions";
import { Procedures } from "@/components/Procedures";
import { WhyChoose } from "@/components/WhyChoose";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr. Prem Thurairajah | Specialist Medical Care in Singapore",
  description:
    "Dr. Prem Thurairajah provides expert specialist medical care in Singapore with over 25 years of experience. Book your consultation at Mount Elizabeth Orchard.",
  keywords: [
    "specialist doctor Singapore",
    "medical consultation",
    "Mount Elizabeth Orchard",
    "Dr Prem Thurairajah",
  ],
  alternates: {
    canonical: "https://drprem.sg",
  },
  openGraph: {
    title: "Dr. Prem Thurairajah | Specialist Medical Care in Singapore",
    description:
      "Expert specialist medical care with a patient-centred approach. Book your consultation today.",
    type: "website",
  },
};

const Index = () => {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physician",
            name: "Dr. Prem Thurairajah",
            medicalSpecialty: "Specialist",
            address: {
              "@type": "PostalAddress",
              streetAddress: "3 Mount Elizabeth",
              addressLocality: "Singapore",
              postalCode: "228510",
              addressCountry: "SG",
            },
            telephone: "+65-1234-5678",
            email: "contact@drprem.sg",
            openingHours: ["Mo-Fr 09:00-17:00", "Sa 09:00-13:00"],
          }),
        }}
      />
      
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <TrustBadges />
        <About />
        <Conditions />
        <Procedures />
        <WhyChoose />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
