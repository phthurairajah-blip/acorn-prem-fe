'use client'

import { motion } from "framer-motion";
import { RelatedConditions } from "@/components/RelatedConditions";
import { ArrowLeft, AlertTriangle, CheckCircle, Calendar, Info, Stethoscope, Activity, Pill } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const ibdHeroImage = "/ibd-icon.jpeg";
const colonoscopyImage = "/colonoscopy-procedure-new.jpeg";

const relatedConditions = [
  {
    title: "Colonoscopy",
    description: "Essential diagnostic and surveillance tool for IBD management.",
    link: "/colonoscopy",
  },
  {
    title: "Bowel Cancer Screening",
    description: "IBD patients have increased colorectal cancer risk requiring surveillance.",
    link: "/bowel-cancer-screening",
  },
  {
    title: "Irritable Bowel Syndrome",
    description: "Differentiating IBS from IBD is crucial for appropriate treatment.",
    link: "/irritable-bowel-syndrome",
  },
];

const ibdSymptoms = [
  "Persistent diarrhoea (often bloody in ulcerative colitis)",
  "Abdominal pain and cramping",
  "Urgency and frequent bowel movements",
  "Fatigue and weakness",
  "Unintentional weight loss",
  "Fever during flares",
  "Reduced appetite",
  "Anaemia",
];

const crohnsFeatures = [
  {
    title: "Location",
    description: "Can affect any part of the GI tract from mouth to anus, commonly the terminal ileum.",
  },
  {
    title: "Pattern",
    description: "Patchy 'skip lesions' with normal bowel between affected areas.",
  },
  {
    title: "Depth",
    description: "Transmural inflammation affecting all layers of the bowel wall.",
  },
  {
    title: "Complications",
    description: "Strictures, fistulae, and abscesses are common.",
  },
];

const ucFeatures = [
  {
    title: "Location",
    description: "Limited to the colon and rectum only.",
  },
  {
    title: "Pattern",
    description: "Continuous inflammation starting from the rectum and extending proximally.",
  },
  {
    title: "Depth",
    description: "Mucosal inflammation affecting the inner lining only.",
  },
  {
    title: "Symptoms",
    description: "Bloody diarrhoea and mucus are hallmark features.",
  },
];

const diagnosticTests = [
  {
    title: "Colonoscopy with Biopsies",
    description: "Gold standard for diagnosis, allowing direct visualisation and tissue sampling.",
  },
  {
    title: "Blood Tests",
    description: "FBC, inflammatory markers (CRP, ESR), liver function, and nutritional markers.",
  },
  {
    title: "Faecal Calprotectin",
    description: "Non-invasive stool test to measure intestinal inflammation.",
  },
  {
    title: "CT/MRI Enterography",
    description: "Imaging to assess small bowel involvement and complications.",
  },
  {
    title: "Capsule Endoscopy",
    description: "Small bowel visualisation when Crohn's disease is suspected.",
  },
];

const treatmentOptions = [
  {
    category: "Induction Therapy",
    items: [
      "Corticosteroids for acute flares",
      "5-ASA medications for mild-moderate UC",
      "Exclusive enteral nutrition (Crohn's)",
    ],
  },
  {
    category: "Maintenance Therapy",
    items: [
      "Immunomodulators (azathioprine, methotrexate)",
      "Biologic therapies (anti-TNF, anti-integrin, anti-IL agents)",
      "JAK inhibitors",
      "5-ASA for ulcerative colitis maintenance",
    ],
  },
  {
    category: "Surgical Options",
    items: [
      "Colectomy for refractory ulcerative colitis",
      "Resection for Crohn's strictures or fistulae",
      "Drainage of abscesses",
    ],
  },
];

const complications = [
  {
    title: "Strictures",
    description: "Narrowing of the bowel causing obstruction symptoms.",
  },
  {
    title: "Fistulae",
    description: "Abnormal connections between bowel and other organs or skin.",
  },
  {
    title: "Colorectal Cancer",
    description: "Increased risk with long-standing extensive colitis.",
  },
  {
    title: "Malnutrition",
    description: "Due to malabsorption, reduced intake, or medication side effects.",
  },
  {
    title: "Extraintestinal Manifestations",
    description: "Joint, skin, eye, and liver complications.",
  },
];

export const InflammatoryBowelDisease = () => {
  return (
    <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-emerald-50 to-background dark:from-emerald-950/30 dark:to-background">
          <div className="container mx-auto px-2 sm:px-4">
            <Link
              href="/#conditions"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight mb-6">
                  Inflammatory Bowel Disease
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                  Expert diagnosis and comprehensive management of Crohn&apos;s disease and ulcerative colitis with modern biologic therapies and personalised care.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <Link href="/book-appointment">
                      <Calendar className="mr-2 h-5 w-5" />
                      Book Consultation
                    </Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <Image
                  src={ibdHeroImage}
                  alt="Inflammatory bowel disease illustration showing intestinal inflammation"
                  className="rounded-2xl shadow-xl w-full"
                  width={1280}
                  height={720}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* What is IBD */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-6">
                <Info className="h-8 w-8 text-emerald-500" />
                <h2 className="text-3xl md:text-4xl font-serif font-semibold">
                  What is Inflammatory Bowel Disease?
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Inflammatory Bowel Disease (IBD) refers to chronic conditions characterised by inflammation of the gastrointestinal tract. The two main types are <strong>Crohn&apos;s disease</strong> and <strong>ulcerative colitis</strong>.
                </p>
                <p>
                  Unlike Irritable Bowel Syndrome (IBS), IBD involves actual structural damage to the bowel wall and can lead to serious complications if not properly managed. Early diagnosis and appropriate treatment are essential to achieve remission and prevent long-term damage.
                </p>
                <p>
                  IBD is a lifelong condition that typically follows a relapsing-remitting course. With modern treatments including biologic therapies, most patients can achieve good disease control and maintain quality of life.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Symptoms */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
                Common Symptoms of IBD
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Symptoms vary depending on disease location, severity, and whether it&apos;s Crohn&apos;s or UC.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {ibdSymptoms.map((symptom, index) => (
                <motion.div
                  key={symptom}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border"
                >
                  <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{symptom}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Crohn's vs UC */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
                Crohn&apos;s Disease vs Ulcerative Colitis
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Understanding the differences helps guide treatment decisions.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Crohn's Disease */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-emerald-50 dark:bg-emerald-950/30 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-800"
              >
                <h3 className="text-2xl font-serif font-semibold mb-6 text-emerald-700 dark:text-emerald-300">
                  Crohn&apos;s Disease
                </h3>
                <div className="space-y-4">
                  {crohnsFeatures.map((feature) => (
                    <div key={feature.title} className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-semibold text-foreground">{feature.title}:</span>{" "}
                        <span className="text-muted-foreground">{feature.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Ulcerative Colitis */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-sky-50 dark:bg-sky-950/30 rounded-2xl p-8 border border-sky-200 dark:border-sky-800"
              >
                <h3 className="text-2xl font-serif font-semibold mb-6 text-sky-700 dark:text-sky-300">
                  Ulcerative Colitis
                </h3>
                <div className="space-y-4">
                  {ucFeatures.map((feature) => (
                    <div key={feature.title} className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-sky-500 flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-semibold text-foreground">{feature.title}:</span>{" "}
                        <span className="text-muted-foreground">{feature.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Diagnosis */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Stethoscope className="h-8 w-8 text-emerald-500" />
                  <h2 className="text-3xl md:text-4xl font-serif font-semibold">
                    How is IBD Diagnosed?
                  </h2>
                </div>
                <p className="text-muted-foreground text-lg mb-8">
                  Diagnosis requires a combination of clinical assessment, laboratory tests, endoscopy, and imaging to confirm IBD and differentiate between Crohn&apos;s disease and ulcerative colitis.
                </p>
                <div className="space-y-4">
                  {diagnosticTests.map((test, index) => (
                    <motion.div
                      key={test.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 bg-background rounded-lg border border-border"
                    >
                      <h4 className="font-semibold text-foreground mb-1">{test.title}</h4>
                      <p className="text-sm text-muted-foreground">{test.description}</p>
                      {test.title === "Colonoscopy with Biopsies" && (
                        <Link
                          href="/colonoscopy"
                          className="inline-flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline mt-2"
                        >
                          Learn more about this procedure →
                        </Link>
                      )}
                      {test.title === "Capsule Endoscopy" && (
                        <Link
                          href="/video-capsule-endoscopy"
                          className="inline-flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline mt-2"
                        >
                          Learn more about this procedure →
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Image
                  src={colonoscopyImage}
                  alt="Colonoscopy procedure for IBD diagnosis"
                  className="rounded-2xl shadow-lg w-full"
                  width={1280}
                  height={720}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Options */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Pill className="h-8 w-8 text-emerald-500" />
                <h2 className="text-3xl md:text-4xl font-serif font-semibold">
                  Treatment Options
                </h2>
              </div>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Modern IBD treatment aims to induce and maintain remission, heal the bowel lining, and prevent complications.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {treatmentOptions.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-muted/50 rounded-2xl p-6 border border-border"
                >
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Complications */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Activity className="h-8 w-8 text-amber-500" />
                <h2 className="text-3xl md:text-4xl font-serif font-semibold">
                  Potential Complications
                </h2>
              </div>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Early diagnosis and effective treatment can prevent many of these complications.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {complications.map((complication, index) => (
                <motion.div
                  key={complication.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-5 bg-background rounded-xl border border-border"
                >
                  <h4 className="font-semibold text-foreground mb-2">{complication.title}</h4>
                  <p className="text-sm text-muted-foreground">{complication.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Dr. Prem */}
        <section className="py-16 lg:py-20 bg-emerald-50 dark:bg-emerald-950/30">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                Comprehensive IBD Care
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Dr. Prem Thurairajah provides expert IBD management with a focus on achieving disease remission, optimising quality of life, and preventing long-term complications through individualised treatment plans.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-background p-6 rounded-xl border border-border">
                  <CheckCircle className="h-8 w-8 text-emerald-500 mb-3" />
                  <h4 className="font-semibold mb-2">Expert Colonoscopy</h4>
                  <p className="text-sm text-muted-foreground">
                    High-quality diagnostic and surveillance colonoscopy with chromoendoscopy for dysplasia detection.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-xl border border-border">
                  <CheckCircle className="h-8 w-8 text-emerald-500 mb-3" />
                  <h4 className="font-semibold mb-2">Biologic Therapies</h4>
                  <p className="text-sm text-muted-foreground">
                    Access to the latest biologic and small molecule therapies for moderate-severe IBD.
                  </p>
                </div>
                <div className="bg-background p-6 rounded-xl border border-border">
                  <CheckCircle className="h-8 w-8 text-emerald-500 mb-3" />
                  <h4 className="font-semibold mb-2">Multidisciplinary Care</h4>
                  <p className="text-sm text-muted-foreground">
                    Coordination with surgeons, dietitians, and other specialists for comprehensive care.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Conditions */}
        <RelatedConditions conditions={relatedConditions} />

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-2 sm:px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
                Expert IBD Care in Singapore
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                If you&apos;re experiencing symptoms of inflammatory bowel disease or need specialist management for Crohn&apos;s disease or ulcerative colitis, schedule a consultation today.
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link href="/book-appointment">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Your Appointment
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 bg-muted/50">
          <div className="container mx-auto px-2 sm:px-4">
            <p className="text-sm text-muted-foreground text-center max-w-3xl mx-auto">
              <strong>Disclaimer:</strong> The information provided on this page is for educational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </p>
          </div>
        </section>
      </main>
  )
}
