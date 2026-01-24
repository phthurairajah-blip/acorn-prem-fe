'use client'

import { motion } from "framer-motion";
import { RelatedConditions } from "@/components/RelatedConditions";
import { ArrowLeft, AlertTriangle, Calendar, Shield, Stethoscope, Info, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const ercpStoneRemoval = "/ercp-stone-removal.jpeg";
const bloodTestImage = "/blood-test-jaundice.jpg";
const ultrasoundAbdomen = "/ultrasound-abdomen.jpg";
const mrcpImage = "/mrcp-jaundice.jpg";
const eusImage = "/eus-pancreas.jpeg";
const ercpImage = "/ercp-jaundice.jpg";
const ercpBileStenting = "/ercp-bile-duct-stenting.jpeg";

const relatedConditions = [
  {
    title: "ERCP",
    description: "Minimally invasive procedure for bile duct stone removal.",
    link: "/ercp",
  },
  {
    title: "Jaundice",
    description: "Expert evaluation of biliary causes of jaundice.",
    link: "/jaundice",
  },
  {
    title: "Pancreatic Cyst",
    description: "Diagnosis and management of pancreatic lesions.",
    link: "/pancreatic-cyst",
  },
];

const symptoms = [
  "Sudden, severe pain in the upper right abdomen",
  "Pain radiating to the back or right shoulder",
  "Jaundice (yellowing of skin and eyes)",
  "Dark urine (tea-coloured)",
  "Pale, clay-coloured stools",
  "Fever and chills (if infection present)",
  "Nausea and vomiting",
  "Itchy skin",
];

const riskFactors = [
  "History of gallstones",
  "Previous gallbladder removal (stones can form in bile duct)",
  "Female gender",
  "Age over 40 years",
  "Obesity",
  "Rapid weight loss",
  "Pregnancy",
  "Certain blood disorders (sickle cell disease)",
];

const complications = [
  {
    title: "Cholangitis",
    desc: "Infection of the bile duct causing fever, jaundice, and abdominal pain. This is a medical emergency requiring urgent treatment.",
  },
  {
    title: "Pancreatitis",
    desc: "Inflammation of the pancreas when a stone blocks the common channel of the bile and pancreatic ducts.",
  },
  {
    title: "Biliary Obstruction",
    desc: "Complete blockage of bile flow leading to worsening jaundice and liver dysfunction.",
  },
  {
    title: "Secondary Biliary Cirrhosis",
    desc: "Long-term obstruction can lead to liver damage and scarring over time.",
  },
];

const diagnosticTests: { name: string; description: string; image: string; link?: string }[] = [
  {
    name: "Blood Tests",
    description: "Liver function tests show elevated bilirubin, alkaline phosphatase (ALP), and gamma-GT (GGT). White blood cell count may be elevated if infection is present.",
    image: bloodTestImage,
  },
  {
    name: "Ultrasound",
    description: "First-line imaging to detect dilated bile ducts and gallstones. However, stones in the bile duct may not always be visible on ultrasound.",
    image: ultrasoundAbdomen,
  },
  {
    name: "MRCP",
    description: "A specialised MRI scan that provides detailed pictures of the bile ducts and can detect stones with high accuracy. Non-invasive 'road map' before treatment.",
    image: mrcpImage,
  },
  {
    name: "Endoscopic Ultrasound (EUS)",
    description: "Highly sensitive test that can detect small stones missed by other imaging. Can be combined with ERCP for same-session treatment.",
    image: eusImage,
    link: "/eus",
  },
];

const treatmentOptions: { name: string; description: string; image: string; link?: string }[] = [
  {
    name: "ERCP Stone Removal",
    description: "The gold standard treatment. A flexible endoscope is passed through the mouth to the bile duct opening. Stones are removed using a balloon or basket after sphincterotomy.",
    image: ercpImage,
    link: "/ercp",
  },
  {
    name: "Biliary Stenting",
    description: "If stones cannot be completely removed in one session, a plastic stent is placed to maintain bile drainage and prevent complications until definitive treatment.",
    image: ercpBileStenting,
    link: "/ercp",
  },
];

const BileDuctStones = () => {
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

            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-emerald-600 dark:text-emerald-400 text-base font-medium tracking-widest uppercase">
                  Biliary Condition
                </span>
                <h1 className="text-5xl md:text-6xl font-serif font-semibold text-foreground mt-2 mb-4">
                  Bile Duct Stones
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  Bile duct stones (choledocholithiasis) occur when gallstones migrate into the common bile duct, 
                  causing obstruction and potentially serious complications. Prompt diagnosis and treatment are essential.
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
                className="relative"
              >
                <Image
                  src={ercpStoneRemoval}
                  alt="ERCP procedure for bile duct stone removal"
                  className="rounded-2xl shadow-lg w-full object-cover aspect-video"
                  width={1280}
                  height={720}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Facts */}
        <section className="py-14 lg:py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-10 text-center"
            >
              Understanding Bile Duct Stones
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0, duration: 0.5 }}
                className="text-center p-6 bg-card rounded-xl border border-border"
              >
                <Shield className="h-10 w-10 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Common Cause</h3>
                <p className="text-base text-muted-foreground">
                  10-15% of people with gallstones also have bile duct stones
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-center p-6 bg-card rounded-xl border border-border"
              >
                <Activity className="h-10 w-10 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Treatment Success</h3>
                <p className="text-base text-muted-foreground">
                  ERCP successfully removes stones in over 90% of cases
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-center p-6 bg-card rounded-xl border border-border"
              >
                <Info className="h-10 w-10 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Minimally Invasive</h3>
                <p className="text-base text-muted-foreground">
                  Most stones can be removed endoscopically without surgery
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Symptoms and Risk Factors */}
        <section className="py-14 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
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
                  Symptoms typically occur when a stone causes obstruction of bile flow.
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
                  Factors that increase the likelihood of developing bile duct stones.
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

        {/* Complications */}
        <section className="py-14 lg:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-red-500" />
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
                  Potential Complications
                </h2>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Untreated bile duct stones can lead to serious, potentially life-threatening complications.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {complications.map((complication, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="p-6 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-200 dark:border-red-800/30"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">{complication.title}</h3>
                  <p className="text-muted-foreground">{complication.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Diagnosis Section */}
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
                Diagnosis
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                A combination of blood tests and imaging studies are used to diagnose bile duct stones.
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
                      alt={test.name}
                      className="w-full h-48 object-cover"
                      width={1280}
                      height={720}
                    />
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

        {/* Treatment Section */}
        <section className="py-14 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                Treatment Options
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                ERCP is the primary treatment for bile duct stones, offering effective stone removal without open surgery.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {treatmentOptions.map((treatment, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="rounded-xl overflow-hidden shadow-medium bg-background border border-border"
                  >
                    <Image
                      src={treatment.image} 
                      alt={treatment.name}
                      className="w-full h-48 object-cover"
                      width={1280}
                      height={720}
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{treatment.name}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">{treatment.description}</p>
                      {treatment.link && (
                        <Link 
                          href={treatment.link} 
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
        <section className="py-14 lg:py-20 bg-emerald-600 dark:bg-emerald-800">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-4">
                Experiencing Biliary Symptoms?
              </h2>
              <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                Don&apos;t delay treatment for bile duct stones. Dr. Prem Thurairajah is an experienced 
                ERCP specialist who can provide expert evaluation and treatment.
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
          <div className="container mx-auto px-4">
            <p className="text-sm text-muted-foreground text-center max-w-3xl mx-auto">
              The information provided is for educational purposes only and should not replace professional medical advice. 
              Please consult Dr. Prem Thurairajah for personalised diagnosis and treatment options.
            </p>
          </div>
        </section>
      </main>
  )
}

export default BileDuctStones