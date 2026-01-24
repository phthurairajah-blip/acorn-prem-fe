'use client'

import { motion } from "framer-motion";
import { RelatedConditions } from "@/components/RelatedConditions";
import { ArrowLeft, AlertTriangle, CheckCircle, Calendar, Search, Info, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
const pancreasHeroImage = "/pancreas-hero.jpeg";
const eusImage = "/eus-pancreas.jpeg";
const mriScanImage = "/mri-liver-scan.jpg";

const relatedConditions = [
  {
    title: "EUS (Endoscopic Ultrasound)",
    description: "Advanced imaging for detailed pancreatic assessment.",
    link: "/eus",
  },
  {
    title: "Jaundice",
    description: "Expert evaluation of bile duct and pancreatic causes.",
    link: "/jaundice",
  },
  {
    title: "ERCP",
    description: "Therapeutic endoscopy for pancreatic and bile duct conditions.",
    link: "/ercp",
  },
];

const cystTypes = [
  {
    title: "Intraductal Papillary Mucinous Neoplasm (IPMN)",
    description: "The most common type, arising from the pancreatic duct. Can be main-duct, branch-duct, or mixed type with varying malignant potential.",
    risk: "Moderate to High"
  },
  {
    title: "Mucinous Cystic Neoplasm (MCN)",
    description: "Occurs predominantly in women, typically in the body or tail of the pancreas. Has malignant potential and often requires surgical resection.",
    risk: "Moderate to High"
  },
  {
    title: "Serous Cystadenoma",
    description: "Benign tumours with very low malignant potential. Often discovered incidentally and can be monitored safely.",
    risk: "Very Low"
  },
  {
    title: "Pseudocyst",
    description: "Non-neoplastic fluid collections that develop after pancreatitis. May resolve spontaneously or require drainage.",
    risk: "None (Non-neoplastic)"
  },
];

const worrisomeFeatures = [
  "Cyst size ≥3 cm",
  "Thickened or enhancing cyst wall",
  "Main pancreatic duct 5-9 mm",
  "Non-enhancing mural nodule",
  "Abrupt change in duct calibre with distal atrophy",
  "Lymphadenopathy",
  "Elevated CA 19-9 levels",
  "Rapid cyst growth (>5 mm in 2 years)",
];

const highRiskStigmata = [
  "Obstructive jaundice with cystic lesion in pancreatic head",
  "Enhancing solid component within cyst",
  "Main pancreatic duct ≥10 mm",
];

const PancreaticCyst = () => {
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
                  Pancreatic Conditions
                </span>
                <h1 className="text-5xl md:text-6xl font-serif font-semibold text-foreground mt-3 mb-6">
                  Pancreatic Cyst
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Pancreatic cysts are increasingly detected with modern imaging. While most are benign, 
                  some carry malignant potential. Expert evaluation and appropriate surveillance are 
                  essential for safe, evidence-based management.
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
                  src={pancreasHeroImage}
                  alt="Anatomical illustration of the pancreas"
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
                  Understanding Pancreatic Cysts
                </h2>
              </div>
              
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground mb-10 leading-loose">
                <p>
                  Pancreatic cysts are fluid-filled sacs within the pancreas. They are found in approximately 
                  2-3% of abdominal imaging studies and become more common with age. The key challenge is 
                  distinguishing benign cysts from those with malignant potential, as some can progress to 
                  pancreatic cancer if left untreated.
                </p>
                <p>
                  Accurate characterisation requires a combination of imaging, cyst fluid analysis, and 
                  clinical assessment. Dr. Prem provides comprehensive evaluation using the latest 
                  international guidelines to determine appropriate surveillance intervals or need for intervention.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Types of Pancreatic Cysts */}
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
                Types of Pancreatic Cysts
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {cystTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-background rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/30 shadow-sm"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-foreground">{type.title}</h3>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        type.risk === "Very Low" 
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : type.risk === "None (Non-neoplastic)"
                          ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                          : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                      }`}>
                        Risk: {type.risk}
                      </span>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed">{type.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Risk Assessment Section */}
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
                <AlertTriangle className="h-8 w-8 text-amber-600" />
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
                  Risk Assessment
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
                International guidelines identify specific features that increase concern for malignancy. 
                These guide the intensity of surveillance and need for further evaluation.
              </p>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Worrisome Features */}
                <div className="bg-amber-50 dark:bg-amber-950/20 rounded-xl p-6 border border-amber-200 dark:border-amber-800/30">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Worrisome Features</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Presence of these features warrants closer surveillance or further evaluation with EUS.
                  </p>
                  <ul className="space-y-3">
                    {worrisomeFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-base text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* High-Risk Stigmata */}
                <div className="bg-red-50 dark:bg-red-950/20 rounded-xl p-6 border border-red-200 dark:border-red-800/30">
                  <h3 className="text-xl font-semibold text-foreground mb-4">High-Risk Stigmata</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    These features indicate a high likelihood of malignancy and typically require surgical evaluation.
                  </p>
                  <ul className="space-y-3">
                    {highRiskStigmata.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-base text-muted-foreground">
                        <AlertTriangle className="h-4 w-4 text-red-500 shrink-0 mt-1" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Investigations Section */}
        <section className="py-16 lg:py-20 bg-emerald-50/50 dark:bg-emerald-950/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-8">
                <Search className="h-8 w-8 text-emerald-600" />
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
                  Investigations
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
                Comprehensive evaluation combines imaging and, when indicated, cyst fluid analysis.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* EUS Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-background rounded-xl overflow-hidden border border-emerald-200 dark:border-emerald-800/30 shadow-sm"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={eusImage}
                      alt="Endoscopic Ultrasound for pancreatic cyst evaluation"
                      className="w-full h-full object-cover"
                      width={1280}
                      height={720}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      EUS with FNA
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Endoscopic ultrasound provides the highest resolution imaging of pancreatic cysts and allows cyst fluid sampling.
                    </p>
                    <ul className="space-y-2 mb-4">
                      {[
                        "Detailed cyst characterisation",
                        "Detection of mural nodules",
                        "Cyst fluid analysis (CEA, amylase, cytology)",
                        "Molecular markers for malignancy risk",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href="/eus" 
                      className="inline-flex items-center text-sm text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
                    >
                      Learn more about this procedure →
                    </Link>
                  </div>
                </motion.div>

                {/* MRI/MRCP Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-background rounded-xl overflow-hidden border border-emerald-200 dark:border-emerald-800/30 shadow-sm"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={mriScanImage}
                      alt="MRI scan for pancreatic cyst surveillance"
                      className="w-full h-full object-cover"
                      width={1280}
                      height={720}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      MRI/MRCP Surveillance
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      MRI with MRCP is the preferred imaging modality for surveillance, avoiding radiation exposure.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "No radiation exposure (safe for repeated imaging)",
                        "Excellent soft tissue characterisation",
                        "Visualises pancreatic duct communication",
                        "Tracks cyst size changes over time",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
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

        {/* Management Section */}
        <section className="py-16 lg:py-20 bg-emerald-50 dark:bg-emerald-950/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-6">
                <Stethoscope className="h-8 w-8 text-emerald-600" />
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
                  Management Approach
                </h2>
              </div>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-loose mb-8">
                <p>
                  Management is individualised based on cyst type, size, features, and patient factors. 
                  Options range from surveillance to surgical resection.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-background rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/30">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Surveillance</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Regular MRI/MRCP imaging at intervals determined by cyst characteristics. Most low-risk 
                    cysts can be safely monitored without intervention.
                  </p>
                </div>
                <div className="bg-background rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/30">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Enhanced Surveillance</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    More frequent imaging and EUS evaluation for cysts with worrisome features. Allows 
                    early detection of concerning changes.
                  </p>
                </div>
                <div className="bg-background rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/30">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Surgical Referral</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    For high-risk cysts, surgical resection offers the best chance of cure. Coordinated 
                    referral to experienced pancreatic surgeons when indicated.
                  </p>
                </div>
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
                Expert Pancreatic Cyst Management
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Dr. Prem provides comprehensive evaluation and ongoing surveillance of pancreatic cysts, 
                using the latest international guidelines to ensure safe, evidence-based care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/#contact">
                    <Calendar className="h-5 w-5" />
                    Book a Consultation
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/eus">
                    Learn About EUS
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

export default PancreaticCyst