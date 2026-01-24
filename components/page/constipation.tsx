'use client';

import { motion } from "framer-motion";
import { RelatedConditions } from "@/components/RelatedConditions";
import { ArrowLeft, AlertTriangle, CheckCircle, Calendar, Info, Stethoscope, Apple, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";


const colonoscopyImage = "/colonoscopy-procedure-new.jpeg";
const mediterraneanDietImage = "/mediterranean-diet.jpeg";
const constipationHeroImage = "/constipation-hero.jpeg";

const relatedConditions = [
  {
    title: "Irritable Bowel Syndrome",
    description: "Expert management of IBS symptoms including constipation-predominant IBS.",
    link: "/irritable-bowel-syndrome",
  },
  {
    title: "Colonoscopy",
    description: "Comprehensive examination when structural causes are suspected.",
    link: "/colonoscopy",
  },
  {
    title: "Bowel Cancer Screening",
    description: "Early detection colonoscopy for colorectal cancer prevention.",
    link: "/bowel-cancer-screening",
  },
];

const symptoms = [
  "Fewer than three bowel movements per week",
  "Hard, lumpy, or dry stools",
  "Straining during bowel movements",
  "Feeling of incomplete evacuation",
  "Sensation of blockage in the rectum",
  "Needing manual manoeuvres to pass stool",
  "Abdominal bloating or discomfort",
  "Decreased appetite",
];

const causes = [
  {
    category: "Lifestyle Factors",
    items: [
      "Low dietary fibre intake",
      "Inadequate fluid consumption",
      "Sedentary lifestyle",
      "Ignoring urge to defecate",
      "Changes in routine or travel",
    ]
  },
  {
    category: "Medications",
    items: [
      "Opioid pain medications",
      "Calcium channel blockers",
      "Iron supplements",
      "Antidepressants",
      "Antacids containing aluminium",
    ]
  },
  {
    category: "Medical Conditions",
    items: [
      "Irritable bowel syndrome (IBS-C)",
      "Hypothyroidism",
      "Diabetes mellitus",
      "Parkinson's disease",
      "Pelvic floor dysfunction",
    ]
  },
];

const alarmSymptoms = [
  {
    title: "Rectal Bleeding",
    description: "Blood in stool or on toilet paper requires prompt evaluation."
  },
  {
    title: "Unexplained Weight Loss",
    description: "Unintentional weight loss may indicate underlying disease."
  },
  {
    title: "New Onset After Age 45",
    description: "New constipation in older adults warrants investigation."
  },
  {
    title: "Severe Abdominal Pain",
    description: "Significant pain or distension needs urgent assessment."
  },
];

export const Constipation = () => {
  return (
    <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-emerald-50 to-background dark:from-emerald-950/30 dark:to-background">
          <div className="container mx-auto px-4">
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
                <span className="text-emerald-600 dark:text-emerald-400 text-base font-medium tracking-widest uppercase">
                  Bowel Conditions
                </span>
                <h1 className="text-5xl md:text-6xl font-serif font-semibold text-foreground mt-3 mb-6">
                  Constipation
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Chronic constipation affects up to 20% of adults and significantly impacts quality of life. 
                  Understanding the underlying cause is key to effective, lasting treatment.
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
                  src={constipationHeroImage}
                  alt="Constipation awareness and treatment"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                  width={1280}
                  height={720}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Understanding Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-6">
                <Info className="h-8 w-8 text-emerald-600" />
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
                  Understanding Constipation
                </h2>
              </div>
              
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground mb-10 leading-loose">
                <p>
                  Constipation is defined as infrequent bowel movements (typically fewer than three per week) 
                  or difficulty passing stool. It can be acute (short-term) or chronic (lasting more than 
                  three months). While often related to diet and lifestyle, persistent constipation may 
                  indicate an underlying condition requiring evaluation.
                </p>
              </div>

              {/* Symptoms */}
              <div className="bg-background rounded-xl p-6 border border-border mb-10">
                <h3 className="text-xl font-semibold text-foreground mb-4">Common Symptoms</h3>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                  {symptoms.map((symptom, index) => (
                    <div key={index} className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                      {symptom}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Causes Section */}
        <section className="py-16 lg:py-20 bg-emerald-50/50 dark:bg-emerald-950/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-10">
                Common Causes
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {causes.map((causeGroup, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-background rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/30 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-4">{causeGroup.category}</h3>
                    <ul className="space-y-2">
                      {causeGroup.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-base text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Alarm Symptoms Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-8">
                <AlertTriangle className="h-8 w-8 text-red-600" />
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
                  When to Seek Help
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
                While constipation is usually benign, certain symptoms require prompt medical evaluation 
                to exclude serious underlying conditions.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {alarmSymptoms.map((symptom, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-red-50 dark:bg-red-900/20 rounded-xl p-5 border border-red-200 dark:border-red-800/30"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-2">{symptom.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{symptom.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Investigation Section */}
        <section className="py-16 lg:py-20 bg-emerald-50/50 dark:bg-emerald-950/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-8">
                Investigations
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
                Evaluation may include tests to exclude structural causes and assess bowel function.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-background rounded-xl overflow-hidden border border-emerald-200 dark:border-emerald-800/30 shadow-sm"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={colonoscopyImage}
                      alt="Colonoscopy procedure for constipation evaluation"
                      className="w-full h-full object-cover"
                      width={1280}
                      height={720}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Colonoscopy
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Recommended to exclude structural causes, particularly in patients with alarm symptoms or new-onset constipation over age 45.
                    </p>
                    <ul className="space-y-2 mb-4">
                      {[
                        "Rules out colorectal cancer or polyps",
                        "Identifies strictures or narrowing",
                        "Detects inflammatory conditions",
                        "Essential for age-appropriate screening",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/colonoscopy"
                      className="inline-flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      Learn more about this procedure →
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-background rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/30 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Additional Tests
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Blood Tests</h4>
                      <p className="text-sm text-muted-foreground">Thyroid function, glucose, calcium, and full blood count to identify metabolic causes.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Transit Study</h4>
                      <p className="text-sm text-muted-foreground">Measures how quickly stool moves through the colon to identify slow transit constipation.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Anorectal Manometry</h4>
                      <p className="text-sm text-muted-foreground">Assesses pelvic floor function and coordination for suspected defecatory disorders.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Defecography</h4>
                      <p className="text-sm text-muted-foreground">Imaging study to evaluate pelvic floor anatomy and function during evacuation.</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Treatment Section */}
        <section className="py-16 lg:py-20 bg-emerald-50 dark:bg-emerald-950/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-6">
                <Stethoscope className="h-8 w-8 text-emerald-600" />
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
                  Treatment Approach
                </h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 mt-10">
                {/* Lifestyle Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-background rounded-xl overflow-hidden border border-emerald-200 dark:border-emerald-800/30 shadow-sm"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={mediterraneanDietImage}
                      alt="High-fibre diet for constipation management"
                      className="w-full h-full object-cover"
                      width={1280}
                      height={720}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Apple className="h-5 w-5 text-emerald-600" />
                      <h3 className="text-xl font-semibold text-foreground">Lifestyle Modifications</h3>
                    </div>
                    <ul className="space-y-2">
                      {[
                        "Increase dietary fibre (25-30g daily)",
                        "Adequate fluid intake (1.5-2L daily)",
                        "Regular physical activity",
                        "Establish regular toileting routine",
                        "Respond promptly to urge to defecate",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Medications Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-background rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/30 shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Activity className="h-5 w-5 text-emerald-600" />
                    <h3 className="text-xl font-semibold text-foreground">Medical Treatments</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Fibre Supplements</h4>
                      <p className="text-sm text-muted-foreground">Psyllium, methylcellulose, or other bulk-forming agents to increase stool volume.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Osmotic Laxatives</h4>
                      <p className="text-sm text-muted-foreground">Polyethylene glycol (PEG), lactulose - draw water into the bowel to soften stool.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Stimulant Laxatives</h4>
                      <p className="text-sm text-muted-foreground">Bisacodyl, senna - for short-term use when other measures are insufficient.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Prescription Medications</h4>
                      <p className="text-sm text-muted-foreground">Prucalopride, linaclotide - for refractory cases when standard treatments fail.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Biofeedback Therapy</h4>
                      <p className="text-sm text-muted-foreground">Pelvic floor retraining for patients with defecatory disorders.</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
                Don&apos;t Suffer in Silence
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Chronic constipation can significantly impact your quality of life. Dr. Prem provides 
                comprehensive evaluation and personalised treatment plans to help you find lasting relief.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/#contact">
                    <Calendar className="h-5 w-5" />
                    Book a Consultation
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/colonoscopy">
                    Learn About Colonoscopy
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Conditions */}
        <RelatedConditions conditions={relatedConditions} />
      </main>
  )
}
