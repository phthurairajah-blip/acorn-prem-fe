'use client'

import { motion } from "framer-motion";
import { RelatedConditions } from "@/components/RelatedConditions";
import { ArrowLeft, AlertTriangle, CheckCircle, Calendar, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const epigastricPainImage = "/epigastric-pain-hero.jpeg";
const hPyloriImage = "/h-pylori-stomach.jpeg";
const pepticUlcerImage = "/peptic-ulcer.jpeg";
const ogdEndoscopyImage = "/endoscope-procedure.jpg";
const gastritisImage = "/gastritis.jpeg";
const hPyloriTestImage = "/h-pylori-ubt-test.jpeg";

const relatedConditions = [
  {
    title: "GERD (Heartburn)",
    description: "Expert management of acid reflux and heartburn symptoms.",
    link: "/gerd-heartburn",
  },
  {
    title: "Gastroscopy & Colonoscopy",
    description: "Comprehensive endoscopic examination of the digestive tract.",
    link: "/gastroscopy-colonoscopy",
  },
  {
    title: "Bowel Cancer Screening",
    description: "Early detection colonoscopy and surveillance for colorectal cancer prevention.",
    link: "/bowel-cancer-screening",
  },
];

const epigastricPainSymptoms = [
  "Burning or gnawing pain in the upper abdomen",
  "Pain that may improve or worsen with eating",
  "Bloating and feeling of fullness",
  "Nausea or vomiting",
  "Loss of appetite",
  "Belching or burping",
  "Heartburn or acid reflux",
  "Indigestion after meals",
];

const causesWithImages = [
  {
    title: "H. pylori Infection",
    description: "Bacterial infection affecting 30% of Singapore's population, causing chronic gastritis and ulcers.",
    image: hPyloriImage
  },
  {
    title: "Gastritis",
    description: "Inflammation of the stomach lining from infection, medications, alcohol, or autoimmune conditions.",
    image: gastritisImage
  },
  {
    title: "Peptic Ulcer Disease",
    description: "Open sores in the stomach or duodenum causing burning pain, often related to H. pylori or NSAIDs.",
    image: pepticUlcerImage
  },
];

const alarmSymptoms = [
  {
    title: "Weight Loss",
    description: "Unintentional weight loss may indicate serious underlying disease requiring urgent investigation."
  },
  {
    title: "Difficulty Swallowing",
    description: "Progressive dysphagia can suggest oesophageal narrowing or malignancy."
  },
  {
    title: "GI Bleeding",
    description: "Vomiting blood or black tarry stools indicate bleeding that requires immediate attention."
  },
  {
    title: "Anaemia",
    description: "Unexplained iron deficiency anaemia may result from chronic blood loss in the GI tract."
  },
];

export const EpigastricPain = () => {
  return (
    <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-amber-50 to-background dark:from-amber-950/30 dark:to-background">
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
                <span className="text-amber-600 dark:text-amber-400 text-base font-medium tracking-widest uppercase">
                  Upper GI Conditions
                </span>
                <h1 className="text-5xl md:text-6xl font-serif font-semibold text-foreground mt-3 mb-6">
                  Epigastric Pain
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Epigastric pain—discomfort in the upper abdomen—is one of the most common reasons for 
                  gastroenterology consultations. Understanding the underlying cause is essential for 
                  effective treatment and preventing complications.
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
                  src={epigastricPainImage}
                  alt="Anatomical illustration showing epigastric pain in the upper abdomen"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                  width={1280}
                  height={720}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Understanding Epigastric Pain Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                Understanding Epigastric Pain
              </h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground mb-10 leading-loose">
                <p>
                  Epigastric pain refers to discomfort in the upper central abdomen, just below the breastbone. 
                  It can arise from various conditions affecting the stomach, duodenum, oesophagus, or surrounding 
                  organs. Common causes include H. pylori infection, gastritis, and peptic ulcer disease.
                </p>
              </div>

              {/* Symptoms */}
              <div className="bg-background rounded-xl p-6 border border-border mb-10">
                <h3 className="text-xl font-semibold text-foreground mb-4">Common Symptoms</h3>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                  {epigastricPainSymptoms.map((symptom, index) => (
                    <div key={index} className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                      {symptom}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Common Causes Section */}
        <section className="py-16 lg:py-20 bg-amber-50/50 dark:bg-amber-950/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-8">
                <AlertTriangle className="h-8 w-8 text-amber-600" />
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
                  Common Causes
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
                The most common causes of epigastric pain are H. pylori infection, gastritis, and peptic ulcer disease. 
                Identifying the underlying cause is crucial for effective treatment.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {causesWithImages.map((cause, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-background rounded-xl overflow-hidden border border-amber-200 dark:border-amber-800/30 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={cause.image}
                        alt={cause.title}
                        className="w-full h-full object-cover"
                        width={1280}
                        height={720}
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{cause.title}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">{cause.description}</p>
                    </div>
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
                  Alarm Symptoms
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
                Certain symptoms require urgent evaluation. If you experience any of these, seek medical attention promptly.
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

        {/* Investigations Section */}
        <section className="py-16 lg:py-20 bg-blue-50/50 dark:bg-blue-950/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-8">
                <Search className="h-8 w-8 text-blue-600" />
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
                  Investigations
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
                Accurate diagnosis requires appropriate testing to identify the cause and guide treatment.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Gastroscopy Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-background rounded-xl overflow-hidden border border-blue-200 dark:border-blue-800/30 shadow-sm"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={ogdEndoscopyImage}
                      alt="Gastroscopy procedure for diagnosing epigastric pain"
                      className="w-full h-full object-cover"
                      width={1280}
                      height={720}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Gastroscopy (OGD)
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The gold standard for evaluating epigastric pain. A flexible camera examines the oesophagus, stomach, and duodenum directly.
                    </p>
                    <ul className="space-y-2 mb-4">
                      {[
                        "Detects gastritis, ulcers, and inflammation",
                        "Identifies H. pylori infection via biopsy",
                        "Rules out malignancy and other pathology",
                        "Allows therapeutic interventions if needed",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <CheckCircle className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/gastroscopy"
                      className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Learn more about this procedure →
                    </Link>
                  </div>
                </motion.div>

                {/* H. pylori Testing Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-background rounded-xl overflow-hidden border border-blue-200 dark:border-blue-800/30 shadow-sm"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={hPyloriTestImage}
                      alt="Urea breath test for H. pylori detection"
                      className="w-full h-full object-cover"
                      width={1280}
                      height={720}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      H. pylori Testing
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Testing for H. pylori is essential in evaluating epigastric pain. Multiple testing options are available.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Urea breath test (non-invasive, highly accurate)",
                        "Stool antigen test (convenient and reliable)",
                        "Rapid urease test during gastroscopy",
                        "Histology from gastric biopsies",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <CheckCircle className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
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
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                Treatment
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-loose">
                <p>
                  Treatment depends on the underlying cause. Most conditions causing epigastric pain respond well to medical therapy:
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-background rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/30">
                  <h3 className="text-lg font-semibold text-foreground mb-4">H. pylori Eradication</h3>
                  <ul className="space-y-3">
                    {[
                      "14-day course of antibiotics + PPI",
                      "Typically 2-3 antibiotics used",
                      "85-90% success rate with first-line therapy",
                      "Confirmation of eradication after treatment",
                      "Reduces ulcer recurrence significantly",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-base text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-background rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/30">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Acid Suppression & Lifestyle</h3>
                  <ul className="space-y-3">
                    {[
                      "Proton pump inhibitors (PPIs)",
                      "H2 receptor blockers",
                      "Avoid NSAIDs and aspirin if possible",
                      "Reduce alcohol and smoking",
                      "Smaller, more frequent meals",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-base text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
                Get Relief from Stomach Pain
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                If you&apos;re experiencing persistent epigastric pain, schedule a consultation 
                for proper evaluation and personalised treatment options.
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
