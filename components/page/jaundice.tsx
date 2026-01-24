'use client'

import { motion } from "framer-motion";
import { RelatedConditions } from "@/components/RelatedConditions";
import { ArrowLeft, AlertTriangle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

const jaundiceEye = "/jaundice-eye.jpg";
const ultrasoundAbdomen = "/ultrasound-abdomen.jpg";
const ercpImage = "/ercp-jaundice.jpg";
const ctScanImage = "/ct-scan-jaundice.jpg";
const mrcpImage = "/mrcp-jaundice.jpg";
const bloodTestImage = "/blood-test-jaundice.jpg";
const liverBiliarySystem = "/liver-biliary-system.jpg";
const teaColouredUrineImage = "/tea-coloured-urine.jpeg";
const pruritusImage = "/pruritus-jaundice.jpg";
const fatigueImage = "/fatigue-weakness-jaundice.jpg";
const abdominalPainImage = "/abdominal-pain-jaundice.jpg";
const paleStoolsImage = "/pale-stools-jaundice.jpg";
const liverBiopsyImage = "/liver-biopsy-jaundice.jpg";
const relatedConditions = [
  {
    title: "Liver Cirrhosis",
    description: "Advanced care for chronic liver disease, complications, and transplant assessment.",
    link: "/liver-cirrhosis",
  },
  {
    title: "Liver & Pancreatic Cancer Screening",
    description: "Comprehensive imaging and tumour marker evaluation for early diagnosis.",
    link: "/liver-pancreatic-cancer-screening",
  },
  {
    title: "Fatty Liver Disease",
    description: "Diagnosis and lifestyle-based management of NAFLD and NASH.",
    link: "/fatty-liver-disease",
  },
];

const causes = [
  // Liver-related causes
  "Viral hepatitis (A, B, C, E)",
  "Alcoholic liver disease",
  "Drug-induced liver injury",
  "Autoimmune hepatitis",
  "Liver cirrhosis",
  // Biliary causes
  "Gallstones blocking the bile duct",
  "Strictures of the bile duct",
  "Primary Sclerosing Cholangitis (PSC)",
  "Primary Biliary Cholangitis (PBC)",
  "Pancreatic or bile duct cancer",
];

const symptomImages = [
  {
    image: jaundiceEye,
    title: "Yellowing of the Eyes",
    description: "Yellow discoloration of the whites of the eyes (scleral icterus) is often the first visible sign of jaundice.",
  },
  {
    image: teaColouredUrineImage,
    title: "Tea-Coloured Urine",
    description: "Tea-coloured or dark brown urine occurs when excess bilirubin is excreted through the kidneys.",
  },
  {
    image: paleStoolsImage,
    title: "Pale or Clay-Coloured Stools",
    description: "Light-coloured stools indicate that bilirubin is not reaching the intestines, often due to bile duct blockage.",
  },
  {
    image: pruritusImage,
    title: "Itching (Pruritus)",
    description: "Generalised skin itching is common in jaundice, especially when caused by bile duct obstruction.",
  },
  {
    image: abdominalPainImage,
    title: "Abdominal Pain",
    description: "Pain in the upper right abdomen may indicate gallstones, liver inflammation, or bile duct problems.",
  },
  {
    image: fatigueImage,
    title: "Fatigue and Weakness",
    description: "Persistent tiredness and weakness are common symptoms associated with underlying liver disease.",
  },
];

const diagnosticTests: { name: string; description: string; image?: string | StaticImageData; link?: string }[] = [
  {
    name: "Blood Tests",
    description: "Liver function tests (LFTs), bilirubin levels, complete liver screen for viral hepatitis, autoimmune causes and metabolic liver disease to identify the cause and severity.",
    image: bloodTestImage,
  },
  {
    name: "Ultrasound of the Liver",
    description: "First-line imaging to assess the liver, gallbladder, and bile ducts for stones, tumours, or structural abnormalities.",
    image: ultrasoundAbdomen,
  },
  {
    name: "CT or MRI Scan",
    description: "Detailed imaging to evaluate the liver, pancreas, and biliary system when ultrasound findings are inconclusive.",
    image: ctScanImage,
  },
  {
    name: "MRCP (Magnetic Resonance Cholangiopancreatography)",
    description: "A specialised MRI scan that produces detailed images of the drainage ducts of the liver and pancreas. It's a non-invasive 'road map' that helps identify blockages, stones, or narrowing before deciding on treatment.",
    image: mrcpImage,
  },
  {
    name: "ERCP (Endoscopic Retrograde Cholangiopancreatography)",
    description: "A specialised endoscopic procedure to inspect and treat blockages of the bile duct. Stones can be treated by removing them or placing a small tube (stent) to keep the duct open.",
    image: ercpImage,
    link: "/ercp",
  },
  {
    name: "Liver Biopsy",
    description: "May be needed to determine the cause of liver disease when other tests are inconclusive.",
    image: liverBiopsyImage,
    link: "/liver-biopsy",
  },
];

const Jaundice = () => {
  return (
    <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 lg:py-20 bg-gradient-to-b from-emerald-50 to-background dark:from-emerald-950/30 dark:to-background">
          <div className="container mx-auto px-4">
            <Link
              href="/#conditions"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Conditions
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-emerald-600 dark:text-emerald-400 text-base font-medium tracking-widest uppercase">
                  Liver & Biliary Conditions
                </span>
                <h1 className="text-5xl md:text-6xl font-serif font-semibold text-foreground mt-2 mb-4">
                  Jaundice
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-justify">
                  Jaundice is the yellowing of the skin and eyes caused by elevated bilirubin levels in the blood. 
                  It is not a disease itself but a sign of an underlying condition affecting the liver, bile ducts, 
                  or blood. Prompt evaluation is essential to identify the cause and initiate appropriate treatment.
                </p>
                <Button asChild size="lg" className="gap-2">
                  <Link href="/#contact">
                    <Calendar className="h-5 w-5" />
                    Book a Consultation
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden lg:block"
              >
                <div className="rounded-2xl overflow-hidden shadow-medium">
                  <Image
                    src={jaundiceEye}
                    alt="Yellowing of the eye (scleral icterus), a common sign of jaundice"
                    className="w-full h-auto"
                    width={1280}
                    height={720}
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3 text-center">
                  Yellowing of the eye (scleral icterus)
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-8 bg-amber-50 dark:bg-amber-950/20 border-y border-amber-200 dark:border-amber-800/30">
          <div className="container mx-auto px-4">
            <div className="flex items-start gap-4 max-w-4xl mx-auto">
              <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-lg text-amber-900 dark:text-amber-100 leading-relaxed">
                <p className="font-semibold mb-1">When to Seek Urgent Care</p>
                <p className="text-justify">
                  Jaundice accompanied by fever, severe abdominal pain, confusion, or rapid deterioration requires 
                  immediate medical attention. These may indicate serious conditions such as acute liver failure 
                  or infection of the bile ducts (cholangitis).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Jaundice */}
        <section className="py-14 lg:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                Understanding Jaundice
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                    Bilirubin is a yellow pigment produced when red blood cells break down. Normally, the liver 
                    processes bilirubin and excretes it into the bile, which then passes into the intestines and 
                    is eliminated from the body. Jaundice occurs when this process is disrupted at any stage.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                    The causes of jaundice can be classified based on where the problem occurs in relation to 
                    the liver. Understanding the type of jaundice helps guide the diagnostic approach and treatment.
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden shadow-medium">
                  <Image
                    src={liverBiliarySystem} 
                    alt="Liver and biliary system anatomy showing the liver, gallbladder, and pancreas"
                    className="w-full h-auto"
                    width={1280}
                    height={720}
                  />
                  <p className="text-sm text-muted-foreground p-3 text-center bg-muted/30">
                    The liver and biliary system
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Causes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto mt-16"
            >
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-6">
                Common Causes of Jaundice
              </h3>
              <div className="bg-background border border-border rounded-xl p-6 mb-10">
                <ul className="grid md:grid-cols-2 gap-3">
                  {causes.map((cause, index) => (
                    <li key={index} className="flex items-start gap-3 text-lg text-muted-foreground leading-relaxed">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                      {cause}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Symptoms */}
        <section className="py-14 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6 text-center">
                Signs and Symptoms
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-10 max-w-2xl mx-auto leading-relaxed text-justify">
                Recognising the symptoms of jaundice can help you seek timely medical attention.
              </p>
              
              <div className="space-y-6">
                {symptomImages.map((symptom, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex flex-col md:flex-row rounded-xl overflow-hidden shadow-medium bg-background border border-border"
                  >
                    <Image
                      src={symptom.image} 
                      alt={symptom.title}
                      className="w-full md:w-64 h-48 md:h-auto object-cover shrink-0"
                      width={1280}
                      height={720}
                    />
                    <div className="p-5 flex flex-col justify-center">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{symptom.title}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed text-justify">{symptom.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Diagnostic Tests */}
        <section className="py-14 lg:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                How Jaundice is Evaluated
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed text-justify">
                A thorough evaluation is essential to determine the underlying cause of jaundice. 
                This typically involves a combination of blood tests and imaging studies.
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
                    {test.image && (
                      <Image
                        src={test.image} 
                        alt={test.name}
                        className="w-full h-48 object-cover"
                        width={1280}
                        height={720}
                      />
                    )}
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{test.name}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">{test.description}</p>
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

        {/* CTA Section */}
        <section className="py-14 lg:py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
                Get Expert Evaluation
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-justify">
                If you or a loved one is experiencing jaundice, early evaluation is crucial. 
                As a hepatologist with expertise in both liver disease and ERCP and EUS, 
                I offer comprehensive care to identify the cause and provide appropriate treatment.
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
          <div className="container mx-auto px-4">
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

export default Jaundice
