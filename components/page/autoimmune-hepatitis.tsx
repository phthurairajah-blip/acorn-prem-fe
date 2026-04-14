'use client'

import { motion } from "framer-motion";
import { RelatedConditions } from "@/components/RelatedConditions";
import { ArrowLeft, AlertTriangle, Calendar, Shield, Info, Stethoscope, Pill } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Image from "next/image";

const relatedConditions = [
  {
    title: "Liver Cirrhosis",
    description: "Comprehensive care for chronic liver disease and complications.",
    link: "/liver-cirrhosis",
  },
  {
    title: "Jaundice",
    description: "Clinical evaluation and management of liver-related jaundice.",
    link: "/jaundice",
  },
  {
    title: "Fatty Liver Disease",
    description: "Diagnosis and management of MASLD and MASH.",
    link: "/fatty-liver-disease",
  },
];

const symptoms = [
  "Fatigue and general tiredness",
  "Abdominal discomfort or pain",
  "Joint pain (arthralgia)",
  "Jaundice (yellowing of skin and eyes)",
  "Itchy skin (pruritus)",
  "Nausea and loss of appetite",
  "Dark urine",
  "Spider-like blood vessels on the skin",
];

const riskFactors = [
  "Female gender (more common in women)",
  "Family history of autoimmune diseases",
  "Personal history of other autoimmune conditions",
  "Certain genetic markers (HLA-DR3, HLA-DR4)",
  "Previous viral infections (hepatitis, Epstein-Barr virus)",
  "Certain medications that may trigger immune response",
];

const bloodTestLiver = "/blood-test-liver.jpg";
const liverBiopsyProcedure = "/liver-biopsy-procedure.jpeg";
const ultrasoundAbdomen = "/ultrasound-abdomen.jpg";
const fibroscanProcedure = "/fibroscan-procedure.jpg";

const diagnosticTests = [
  {
    step: "Blood Tests",
    desc: "Liver function tests (elevated ALT, AST), immunoglobulin levels (IgG), and autoantibodies (ANA, SMA, anti-LKM-1) are essential for diagnosis.",
    image: bloodTestLiver,
  },
  {
    step: "Liver Biopsy",
    desc: "A tissue sample from the liver is examined under a microscope to assess the degree of inflammation and fibrosis. This is often needed to confirm the diagnosis.",
    image: liverBiopsyProcedure,
  },
  {
    step: "Imaging Studies",
    desc: "Ultrasound, CT scan, or MRI may be used to evaluate liver structure and rule out other causes of liver disease.",
    image: ultrasoundAbdomen,
  },
  {
    step: "Fibroscan",
    desc: "A non-invasive test to measure liver stiffness and assess the degree of fibrosis or scarring.",
    image: fibroscanProcedure,
  },
];

const treatmentOptions = [
  {
    step: "Immunosuppressive Therapy",
    desc: "First-line treatment typically includes corticosteroids (prednisolone) often combined with azathioprine to suppress the immune response and reduce liver inflammation.",
  },
  {
    step: "Maintenance Therapy",
    desc: "Once remission is achieved, lower doses of medication continued long-term to help reduce the risk of relapse. Many patients require treatment for years or lifelong.",
  },
  {
    step: "Alternative Medications",
    desc: "For patients who don't respond to standard therapy, alternatives such as mycophenolate mofetil, tacrolimus, or budesonide may be considered.",
  },
  {
    step: "Liver Transplantation",
    desc: "In cases of acute liver failure or end-stage cirrhosis that doesn't respond to medical treatment, liver transplantation may be necessary.",
  },
];

export const AutoimmuneHepatitis = () => {
  return (
    <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 lg:py-20 bg-gradient-to-b from-emerald-50 to-background dark:from-emerald-950/30 dark:to-background">
          <div className="container mx-auto px-2 sm:px-4">
            <Link
              href="/#conditions"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Conditions
            </Link>

            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-emerald-600 dark:text-emerald-400 text-base font-medium tracking-widest uppercase">
                  Liver Condition
                </span>
                <h1 className="text-5xl md:text-6xl font-serif font-semibold text-foreground mt-2 mb-4">
                  Autoimmune Hepatitis
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  Autoimmune hepatitis is a chronic condition where the body&apos;s immune system attacks liver cells, 
                  causing inflammation. Early diagnosis and proper treatment aims to reduce the risk of progression to cirrhosis.
                </p>
                <Button asChild size="lg" className="gap-2">
                  <Link href="/#contact">
                    <Calendar className="h-5 w-5" />
                    Book a Consultation
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-800/30"
              >
                <Info className="h-8 w-8 text-emerald-500 mb-4" />
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Key Facts
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    Can occur at any age but often diagnosed in young women
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    Often associated with other autoimmune conditions
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    Responds well to immunosuppressive treatment in most cases
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    Requires long-term monitoring and treatment
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Symptoms Section */}
        <section className="py-14 lg:py-20">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Stethoscope className="h-6 w-6 text-emerald-500" />
                  <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
                    Signs & Symptoms
                  </h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Symptoms can range from mild to severe. Some patients are asymptomatic and diagnosed incidentally through blood tests.
                </p>
                <ul className="space-y-3">
                  {symptoms.map((symptom, index) => (
                    <li key={index} className="flex items-center gap-3 text-foreground">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                      {symptom}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-amber-600" />
                  <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
                    Risk Factors
                  </h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  While the exact cause is unknown, certain factors increase the risk of developing autoimmune hepatitis.
                </p>
                <ul className="space-y-3">
                  {riskFactors.map((factor, index) => (
                    <li key={index} className="flex items-center gap-3 text-foreground">
                      <span className="h-2 w-2 rounded-full bg-amber-500 shrink-0" />
                      {factor}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Diagnosis Section */}
        <section className="py-14 lg:py-20">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                Diagnosis
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed text-justify">
                Diagnosis involves a combination of blood tests, imaging, and often liver biopsy to confirm the condition and assess severity.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
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
                      alt={test.step}
                      className="w-full h-48 object-cover"
                      width={1280}
                      height={720}
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{test.step}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">{test.desc}</p>
                      {test.step === "Liver Biopsy" && (
                        <Link
                          href="/liver-biopsy"
                          className="inline-flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline mt-2"
                        >
                          Learn more about this procedure →
                        </Link>
                      )}
                      {test.step === "Fibroscan" && (
                        <Link
                          href="/fibroscan"
                          className="inline-flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline mt-2"
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

        {/* Treatment Section */}
        <section className="py-14 lg:py-20">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Pill className="h-6 w-6 text-emerald-500" />
                  <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
                    Treatment Options
                  </h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  The goal of treatment is to suppress the immune system&apos;s attack on the liver, reduce inflammation, and prevent progression to cirrhosis.
                </p>

                <Accordion type="single" collapsible className="w-full space-y-3">
                  {treatmentOptions.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`treatment-${index}`}
                      className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border-none px-4"
                    >
                      <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-emerald-500 text-white font-semibold shrink-0">
                            {index + 1}
                          </div>
                          <span className="font-semibold text-foreground text-left">{item.step}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pl-14 pb-4 text-muted-foreground">
                        {item.desc}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-800/30"
              >
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Treatment Goals
                </h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-emerald-500 mt-1 shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Aim to Achieve Remission</span>
                      <p className="text-sm mt-1">Seek to normalise liver enzymes and reduce inflammation</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-emerald-500 mt-1 shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Prevent Fibrosis</span>
                      <p className="text-sm mt-1">Stop progression to liver scarring and cirrhosis</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-emerald-500 mt-1 shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Maintain Quality of Life</span>
                      <p className="text-sm mt-1">Minimise medication side effects while controlling disease</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-emerald-500 mt-1 shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">Long-term Monitoring</span>
                      <p className="text-sm mt-1">Regular blood tests to monitor response and adjust treatment</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-14 lg:py-20 bg-emerald-600 dark:bg-emerald-800">
          <div className="container mx-auto px-2 sm:px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-4">
                Concerned About Your Liver Health?
              </h2>
              <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                If you&apos;re experiencing symptoms or have been diagnosed with autoimmune hepatitis, 
                Dr. Prem Thurairajah can provide specialised clinical evaluation and personalised treatment.
              </p>
              <Button asChild size="lg" variant="secondary" className="gap-2 text-white">
                <Link href="/#contact">
                  <Calendar className="h-5 w-5" />
                  Schedule a Consultation
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Related Conditions */}
        <RelatedConditions conditions={relatedConditions} />

        {/* Disclaimer */}
        <section className="py-8 bg-muted/50">
          <div className="container mx-auto px-2 sm:px-4">
            <p className="text-sm text-muted-foreground text-center max-w-3xl mx-auto">
              The information provided is for educational purposes only and should not replace professional medical advice. 
              Please consult Dr. Prem Thurairajah for personalised diagnosis and treatment options.
            </p>
          </div>
        </section>
      </main>
  )
}
