'use client'

import { motion } from "framer-motion";
import { RelatedConditions } from "@/components/RelatedConditions";
import { ArrowLeft, AlertTriangle, CheckCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const cirrhosisImage = "/cirrhosis-comparison.jpeg";
const portalHypertensionImage = "/portal-hypertension.jpeg";
const ascitesImage = "/ascites.jpeg";
const liverCancerImage = "/liver-cancer-hcc.jpg";
const hepaticEncephalopathyImage = "/hepatic-encephalopathy.jpeg";
const sbpPeritonitisImage = "/sbp-peritonitis.jpeg";
const hrsDialysisImage = "/hrs-dialysis.jpeg";
const bloodTestImage = "/blood-test-jaundice.jpg";
const fibroscanImage = "/fibroscan-procedure.jpg";
const ultrasoundImage = "/ultrasound-abdomen.jpg";
const ctScanImage = "/ct-scan-jaundice.jpg";
const endoscopeImage = "/endoscope-procedure.jpg";
const liverBiopsyImage = "/liver-biopsy-jaundice.jpg";

const relatedConditions = [{
  title: "Fatty Liver Disease",
  description: "Diagnosis and lifestyle-based management of MASLD and MASH.",
  link: "/fatty-liver-disease"
}, {
  title: "Jaundice",
  description: "Expert evaluation and management of liver and biliary causes of jaundice.",
  link: "/jaundice"
}, {
  title: "Liver & Pancreatic Cancer Screening",
  description: "Comprehensive imaging and tumour marker evaluation for early diagnosis.",
  link: "/liver-pancreatic-cancer-screening"
}];
const causes = ["Chronic hepatitis B infection", "Chronic hepatitis C infection", "Alcoholic liver disease", "Wilson's disease (copper accumulation)", "Autoimmune hepatitis", "Primary biliary cholangitis (PBC)", "Primary sclerosing cholangitis (PSC)", "Haemochromatosis (iron overload)", "Metabolic dysfunction-associated steatotic liver disease (MASLD/MASH)"];
const complications = [{
  name: "Portal Hypertension",
  description: "Increased pressure in the portal vein leading to enlarged veins (varices) in the oesophagus and stomach that can bleed.",
  image: portalHypertensionImage
}, {
  name: "Ascites",
  description: "Accumulation of fluid in the abdomen causing swelling and discomfort.",
  image: ascitesImage
}, {
  name: "Hepatic Encephalopathy",
  description: "Confusion, altered consciousness, and cognitive changes due to toxin buildup when the liver cannot filter properly.",
  image: hepaticEncephalopathyImage
}, {
  name: "Spontaneous Bacterial Peritonitis",
  description: "Infection of the ascitic fluid requiring prompt antibiotic treatment.",
  image: sbpPeritonitisImage
}, {
  name: "Hepatorenal Syndrome",
  description: "Kidney failure that can occur in advanced cirrhosis.",
  image: hrsDialysisImage
}, {
  name: "Liver Cancer (HCC)",
  description: "Cirrhosis significantly increases the risk of developing hepatocellular carcinoma.",
  image: liverCancerImage
}];
const managementStrategies = ["Regular surveillance for liver cancer with ultrasound and AFP every 6 months", "Endoscopic screening and treatment of oesophageal varices", "Diuretic therapy and dietary sodium restriction for ascites", "Lactulose and rifaximin for hepatic encephalopathy prevention", "Vaccination against hepatitis A and B if not immune", "Nutritional support and avoidance of alcohol", "Liver transplant evaluation for suitable candidates"];

const diagnosticTests: { name: string; description: string; image: string; link?: string }[] = [
  {
    name: "Blood Tests",
    description: "Liver function tests, platelet count, albumin, and clotting factors help assess liver function and disease severity.",
    image: bloodTestImage,
  },
  {
    name: "FibroScan",
    description: "A non-invasive test that measures liver stiffness to assess the degree of fibrosis without the need for biopsy.",
    image: fibroscanImage,
    link: "/fibroscan",
  },
  {
    name: "Ultrasound",
    description: "Evaluates liver size, texture, and detects signs of portal hypertension such as splenomegaly and ascites.",
    image: ultrasoundImage,
  },
  {
    name: "CT or MRI Scan",
    description: "Provides detailed imaging for comprehensive assessment of liver architecture and detection of complications.",
    image: ctScanImage,
  },
  {
    name: "Gastroscopy",
    description: "Screens for oesophageal and gastric varices that require monitoring or preventive treatment.",
    image: endoscopeImage,
    link: "/gastroscopy",
  },
  {
    name: "Liver Biopsy",
    description: "May be needed in certain cases to confirm the diagnosis, identify the cause, or assess disease activity.",
    image: liverBiopsyImage,
    link: "/liver-biopsy",
  },
];

export const LiverCirrhosis = () => {
  return (
    <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-emerald-50 to-background dark:from-emerald-950/30 dark:to-background">
          <div className="container mx-auto px-2 sm:px-4">
            <Link href="/#conditions" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to Conditions
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }}>
                <span className="text-emerald-600 dark:text-emerald-400 text-base font-medium tracking-widest uppercase">
                  Chronic Liver Disease
                </span>
                <h1 className="text-5xl md:text-6xl font-serif font-semibold text-foreground mt-3 mb-6">
                  Liver Cirrhosis
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-justify">
                  Cirrhosis represents the end stage of chronic liver disease, where normal liver tissue is replaced 
                  by scar tissue (fibrosis). While cirrhosis cannot be reversed, early detection and proper management 
                  can slow progression, prevent complications, and significantly improve quality of life.
                </p>
                <Button asChild size="lg" className="gap-2">
                  <Link href="/#contact">
                    <Calendar className="h-5 w-5" />
                    Book a Consultation
                  </Link>
                </Button>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: 20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} className="relative">
                <Image 
                  src={cirrhosisImage} 
                  alt="Comparison of healthy liver versus liver with cirrhosis showing scarring and damage" 
                  className="rounded-2xl shadow-xl w-full" 
                  width={1280}
                  height={720}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Understanding Cirrhosis */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                Understanding Liver Cirrhosis
              </h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground mb-10 leading-loose">
                <p className="text-justify">
                  The liver is a remarkable organ with the ability to regenerate. However, when it is subjected 
                  to ongoing injury over many years, the repeated cycles of damage and repair eventually lead to 
                  the formation of scar tissue. As scarring progresses, the liver becomes increasingly stiff and 
                  loses its ability to function normally.
                </p>
                <p className="text-justify">
                  Cirrhosis is classified as either &quot;compensated&quot; (when the liver still functions adequately) or 
                  &quot;decompensated&quot; (when complications develop).
                </p>
              </div>

              {/* Causes */}
              <div className="bg-muted/30 rounded-2xl p-8 border border-border mb-10">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                  Common Causes of Cirrhosis
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {causes.map((cause, index) => <div key={index} className="flex items-start gap-3 text-lg text-muted-foreground leading-relaxed">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                      {cause}
                    </div>)}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Complications */}
        <section className="py-16 lg:py-20 bg-red-50 dark:bg-red-950/10">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <AlertTriangle className="h-7 w-7 text-red-600" />
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
                  Complications of Cirrhosis
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed text-center max-w-2xl mx-auto text-justify">
                As cirrhosis progresses, various complications can develop. Understanding these helps patients 
                recognise warning signs and seek timely care.
              </p>

              <div className="space-y-6">
                {complications.map((complication, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex flex-col md:flex-row rounded-xl overflow-hidden shadow-medium bg-background border border-red-200 dark:border-red-800/30"
                  >
                    <Image
                      src={complication.image} 
                      alt={complication.name}
                      className="w-full md:w-64 h-48 md:h-auto object-cover shrink-0"
                      width={1280}
                      height={720}
                    />
                    <div className="p-5 flex flex-col justify-center">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{complication.name}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed text-justify">{complication.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Diagnosis */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                Diagnosis and Assessment
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed text-justify">
                Diagnosing cirrhosis and assessing its severity involves multiple approaches to determine the extent of liver damage and guide treatment decisions.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {diagnosticTests.map((test, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="rounded-xl overflow-hidden shadow-medium bg-background border border-border"
                  >
                    <Image
                      src={test.image} 
                      alt={test.name}
                      className="w-full h-48 object-cover"
                      width={1280}
                      height={720}
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{test.name}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed text-justify">{test.description}</p>
                      {test.link && (
                        <Link 
                          href={test.link} 
                          className="inline-flex items-center text-sm text-emerald-600 dark:text-emerald-400 hover:underline mt-3 font-medium"
                        >
                          Learn more about this procedure →
                        </Link>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Management */}
        <section className="py-16 lg:py-20 bg-emerald-50 dark:bg-emerald-950/20">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                Management Strategies
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed text-justify">
                Effective management of cirrhosis requires a comprehensive, multidisciplinary approach focused 
                on treating the underlying cause, preventing complications, and maintaining quality of life.
              </p>

              <div className="space-y-4">
                {managementStrategies.map((strategy, index) => <motion.div key={index} initial={{
                opacity: 0,
                x: -10
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.1,
                duration: 0.4
              }} className="flex items-start gap-4 p-4 bg-background rounded-lg border border-emerald-200 dark:border-emerald-800/30">
                    <CheckCircle className="h-6 w-6 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-lg text-foreground leading-relaxed text-justify">{strategy}</p>
                  </motion.div>)}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Liver Transplant */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                Liver Transplantation
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-justify">
                For patients with decompensated cirrhosis or those who develop decompensation, liver transplantation 
                is a definitive therapeutic option for patients with end-stage cirrhosis. With my training and experience in liver transplant medicine 
                from Queen Elizabeth Hospital Birmingham and the University of Kentucky, I provide:
              </p>
              <div className="space-y-4 mb-8">
                {["Comprehensive assessment of transplant candidacy", "Optimisation of health while awaiting transplantation", "Coordination with transplant centres", "Long-term follow-up care"].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-lg text-foreground leading-relaxed text-justify">{item}</p>
                  </div>
                ))}
              </div>
              <Button asChild variant="outline" size="lg" className="gap-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/30">
                <Link href="/liver-transplantation">
                  Learn More About Liver Transplantation
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-primary/5">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
               Specialized Cirrhosis Management
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-justify">
                Living with cirrhosis requires expert care and regular monitoring. Schedule a consultation 
                to develop a personalised management plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/#contact">Book Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="tel:+6591234567">Call Now</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <RelatedConditions conditions={relatedConditions} />

        {/* Disclaimer */}
        <section className="py-8 bg-muted/50">
          <div className="container mx-auto px-2 sm:px-4">
            <p className="text-xs text-muted-foreground text-center max-w-3xl mx-auto">
              <strong>Disclaimer:</strong> The information provided on this page is for educational purposes only and 
              is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek 
              the advice of your physician or other qualified health provider with any questions you may have regarding 
              a medical condition.
            </p>
          </div>
        </section>
      </main>
  )
}
