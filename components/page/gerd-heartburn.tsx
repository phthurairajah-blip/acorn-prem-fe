'use client'

import { motion } from "framer-motion";
import { RelatedConditions } from "@/components/RelatedConditions";
import { ArrowLeft, AlertTriangle, CheckCircle, Calendar, Search, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Image from "next/image";

const heartburnImage = "/heartburn.jpeg";
const obesityImage = "/obesity.jpeg";
const hiatusHerniaImage = "/hiatus-hernia.jpg";
const ogdEndoscopyImage = "/endoscope-procedure.jpg";
const bravoCapsuleImage = "/bravo-ph-capsule.jpg";
const oesophagitisImage = "/oesophagitis.jpeg";
const esophagealStrictureImage = "/esophageal-stricture.jpeg";
const barrettsEsophagusImage = "/barretts-esophagus.jpeg";
const esophagealCancerImage = "/esophageal-cancer.jpeg";

const relatedConditions = [
  {
    title: "Bravo Capsule pH Monitoring",
    description: "Wireless pH monitoring for accurate diagnosis of acid reflux and heartburn.",
    link: "/bravo-capsule",
  },
  {
    title: "Gastroscopy (OGD)",
    description: "Upper GI endoscopy to examine the oesophagus, stomach, and duodenum.",
    link: "/gastroscopy-colonoscopy",
  },
  {
    title: "Epigastric Pain",
    description: "Comprehensive diagnosis and treatment of upper abdominal pain, gastritis and peptic ulcer disease.",
    link: "/epigastric-pain",
  },
];

const heartburnSymptoms = [
  "Heartburn (a burning sensation behind the breastbone)",
  "Regurgitation of food or sour-tasting fluid",
  "Sensation of a lump in the throat",
  "Chronic cough, particularly at night",
  "Hoarseness or throat irritation",
  "Reflux that disturbs sleep",
];

const faqs = [
  {
    question:
      "When should I see a GERD specialist instead of treating heartburn on my own?",
    answer:
      "Occasional heartburn can often be managed with lifestyle measures or short-term medication. See a gastroenterologist if symptoms are frequent, persistent, disturb sleep, recur after treatment, or are accompanied by warning symptoms such as difficulty swallowing, bleeding or unexplained weight loss.",
  },
  {
    question:
      "How do I know if my symptoms are caused by acid reflux or another digestive condition?",
    answer:
      "Reflux symptoms can overlap with other upper digestive conditions. If symptoms are persistent, unusual or do not respond as expected to treatment, further assessment can help establish the cause.",
  },
  {
    question:
      "What tests might I need for persistent reflux symptoms?",
    answer:
      "Not everyone needs testing. Depending on your symptoms, investigations may include gastroscopy, oesophageal pH monitoring or oesophageal manometry.",
  },
  {
    question:
      "What if antacids or PPIs only partly relieve my symptoms?",
    answer:
      "Persistent symptoms despite treatment may not be entirely acid-related. Your medication can be reviewed and, when appropriate, further testing can determine whether reflux or another condition is responsible.",
  },
  {
    question:
      "What are the warning signs of complications from reflux?",
    answer:
      "Difficulty or pain when swallowing, food sticking, gastrointestinal bleeding, black stools, persistent vomiting, anaemia or unexplained weight loss should prompt medical assessment.",
  },
  {
    question:
      "When might reflux need treatment beyond medication?",
    answer:
      "Further treatment may be considered when symptoms remain troublesome despite appropriate medical therapy, complications develop, or testing confirms reflux that may benefit from an endoscopic or surgical anti-reflux procedure.",
  },
];

const heartburnRiskFactors = [
  {
    title: "Obesity",
    description: "Excess weight increases abdominal pressure, pushing stomach contents into the oesophagus.",
    image: obesityImage,
    alt: "Obesity's impact on Gerd",
  },
  {
    title: "Hiatal Hernia",
    description: "Part of the stomach pushes through the diaphragm, weakening the lower oesophageal sphincter.",
    image: hiatusHerniaImage,
    alt: "Hiatal Hernia relation with acid reflux",
  },
  {
    title: "Smoking",
    description: "Tobacco relaxes the lower oesophageal sphincter and reduces saliva production.",
    image: "https://images.unsplash.com/photo-1555441293-6c6fb1eb9773?w=400&h=300&fit=crop",
    alt: "Cigarette smoking's effect on acid reflux",
  },
  {
    title: "Large or Late Meals",
    description: "Eating large portions or late at night increases pressure on the stomach and reflux risk.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
    alt: "Impact of large meals on acid reflux",
  },
  {
    title: "Trigger Foods",
    description: "Fatty, fried, spicy foods, citrus, tomatoes, and chocolate can trigger symptoms.",
    image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=300&fit=crop",
    alt: "Foods that trigger acid reflux symptoms",
  },
  {
    title: "Alcohol & Caffeine",
    description: "Both relax the lower oesophageal sphincter and increase acid production.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop",
    alt: "Effects of alcohol and caffeine on acid reflux",
  },
];
export const GerdHeartBurn = () => {
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
                <span className="text-emerald-600 dark:text-emerald-400 text-base font-medium tracking-widest uppercase">
                  Upper GI Conditions
                </span>
                <h1 className="text-5xl md:text-6xl font-serif font-semibold text-foreground mt-3 mb-6">
                  Acid Reflux &amp; Heartburn Specialist in Singapore
                </h1>
                <div className="max-w-xl space-y-4 text-xl text-muted-foreground leading-relaxed mb-8">
                  <p>
                    Acid reflux and heartburn are common digestive symptoms caused by stomach contents flowing back into the oesophagus. When these symptoms occur frequently or cause complications, the condition is known as <strong className="font-semibold text-foreground">gastro-oesophageal reflux disease (GERD)</strong>.
                  </p>
                  <p>
                    GERD can affect quality of life and, if left untreated, may lead to inflammation or other complications. Effective treatment focuses on controlling symptoms, identifying contributing factors and preventing long-term problems.
                  </p>
                </div>
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
                  src={heartburnImage}
                  alt="Woman experiencing heartburn symptoms with burning sensation in chest"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                  width={1280}
                  height={720}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Is GERD Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="max-w-none">
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                  What Is GERD?
                </h2>

                <div className="space-y-4 text-base text-muted-foreground leading-relaxed mb-10">
                  <p>
                    <strong className="font-semibold text-foreground">Gastro-oesophageal reflux disease (GERD)</strong> occurs when stomach contents repeatedly flow back into the oesophagus. <strong className="font-semibold text-foreground">Acid reflux</strong> describes this backward flow, while <strong className="font-semibold text-foreground">heartburn</strong> is the burning sensation in the chest that many people experience as a result.
                  </p>
                  <p>
                    Occasional acid reflux is common. GERD refers to reflux that is frequent, troublesome, or causes inflammation or other complications. Symptoms can vary considerably and are not always limited to heartburn.
                  </p>
                </div>
              </div>

              <div className="bg-muted/30 rounded-2xl p-6 md:p-8 border border-border/80 shadow-sm">
                <h3 className="text-xl font-semibold text-foreground mb-5">Common Symptoms</h3>
                <div className="grid md:grid-cols-2 gap-x-10 gap-y-3">
                  {heartburnSymptoms.map((symptom, index) => (
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

        {/* When to Seek Review */}
        <section className="py-16 lg:py-20 bg-muted/20">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                When Should You See a Doctor for Acid Reflux or Heartburn?
              </h2>

              <div className="space-y-4 text-base text-muted-foreground leading-relaxed mb-9">
                <p>
                  Occasional reflux after a large or heavy meal is common and does not necessarily mean you have GERD. Medical assessment may be appropriate when symptoms become frequent, persistent, worsening or begin to interfere with everyday life.
                </p>
                <p>
                  Consider seeing a gastroenterologist if heartburn or regurgitation occurs regularly, symptoms persist despite lifestyle changes or over-the-counter treatment, reflux frequently disturbs your sleep, or persistent cough, throat irritation or hoarseness may be related to reflux.
                </p>
              </div>

              <div className="rounded-2xl border border-amber-200/80 dark:border-amber-800/40 bg-amber-50/60 dark:bg-amber-950/10 p-6 md:p-8 mb-7">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0" />
                  <h3 className="text-xl font-semibold text-foreground">
                    Symptoms that need prompt medical assessment
                  </h3>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  Seek prompt medical assessment if you develop difficulty or pain when swallowing, food feeling stuck, unexplained weight loss or loss of appetite, persistent or recurrent vomiting, vomiting blood, black stools or unexplained anaemia.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  New, severe or unexplained chest pain should not automatically be assumed to be acid reflux, particularly when accompanied by breathlessness, sweating, dizziness or pain radiating to the arm or jaw. Urgent medical assessment may be required.
                </p>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed">
                Your doctor may recommend further investigation depending on your age, symptoms, family history and other risk factors, particularly when symptoms are new or accompanied by warning signs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Diagnosis Overview */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                How Is GERD Diagnosed?
              </h2>

              <div className="space-y-4 text-base text-muted-foreground leading-relaxed mb-8">
                <p>
                  Diagnosis usually begins with a careful review of your symptoms, how often they occur, possible triggers, medications and lifestyle factors. In many people, the history and response to treatment provide much of the information needed.
                </p>
                <p>
                  Further investigations may be recommended when symptoms are persistent, the diagnosis is uncertain, treatment has not been effective, or warning symptoms are present.
                </p>
              </div>

              <div className="rounded-2xl border border-border/80 bg-background shadow-sm p-6 md:p-8 mb-7">
                <ul className="space-y-4">
                  <li className="text-base text-muted-foreground leading-relaxed">
                    <strong className="font-semibold text-foreground">Gastroscopy (OGD)</strong> — examines the oesophagus and stomach for inflammation, narrowing, ulcers or other abnormalities.
                  </li>
                  <li className="text-base text-muted-foreground leading-relaxed">
                    <strong className="font-semibold text-foreground">Biopsies</strong> — small tissue samples may be taken during gastroscopy when needed, for example to assess inflammation or Barrett&apos;s oesophagus.
                  </li>
                  <li className="text-base text-muted-foreground leading-relaxed">
                    <strong className="font-semibold text-foreground">Oesophageal pH monitoring</strong> — measures reflux and acid exposure over a period of time when the diagnosis remains uncertain.
                  </li>
                  <li className="text-base text-muted-foreground leading-relaxed">
                    <strong className="font-semibold text-foreground">Oesophageal manometry</strong> — measures oesophageal muscle function and can be useful when swallowing problems are present or before certain anti-reflux procedures.
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-emerald-500 pl-5 py-1">
                <p className="text-base text-muted-foreground leading-relaxed">
                  <strong className="font-semibold text-foreground">Not everyone with reflux needs a gastroscopy or specialised testing.</strong> Investigations are selected according to your symptoms, age, risk factors and response to treatment.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Risk Factors Section */}
        <section className="py-16 lg:py-20 bg-amber-50/50 dark:bg-amber-950/10">
          <div className="container mx-auto px-2 sm:px-4">
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
                  Risk Factors
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-none">
                Understanding your risk factors can help reduce reflux symptoms and prevent complications.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {heartburnRiskFactors.map((factor, index) => (
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
                        src={factor.image}
                        alt={factor.alt}
                        width={1280}
                        height={720}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{factor.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{factor.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Complications Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-2 sm:px-4">
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
                  Potential Complications
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-none">
                Persistent acid reflux can damage the oesophagus and, over time, lead to complications.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Oesophagitis",
                    description: "Inflammation of the oesophagus causing pain, bleeding, and ulceration from repeated acid exposure.",
                    image: oesophagitisImage,
                    alt: "Oesophagitis as a complication of acid reflux"
                  },
                  {
                    title: "Oesophageal Stricture",
                    description: "Narrowing of the oesophagus due to scar tissue formation, causing difficulty swallowing.",
                    image: esophagealStrictureImage,
                    alt: "Oesophageal Stricture linked to Gerd",
                  },
                  {
                    title: "Barrett's Oesophagus",
                    description: "Pre-cancerous changes in the oesophageal lining requiring regular surveillance endoscopy.",
                    image: barrettsEsophagusImage,
                    alt: "Barrett's Oesophagus as Gerd complication",
                  },
                  {
                    title: "Oesophageal Cancer",
                    description: "Long-standing Barrett's oesophagus increases the risk of developing adenocarcinoma.",
                    image: esophagealCancerImage,
                    alt: "Link between Gerd and Oesophageal Cancer",
                  }
                ].map((complication, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-background rounded-xl overflow-hidden border border-red-200 dark:border-red-800/30 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-square overflow-hidden">
                      <Image
                        src={complication.image}
                        alt={complication.alt}
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{complication.title}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">{complication.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Investigations Section */}
        <section className="py-16 lg:py-20 bg-blue-50/50 dark:bg-blue-950/10">
          <div className="container mx-auto px-2 sm:px-4">
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
                  Investigations for Acid Reflux & GERD
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-none">
                Further tests may be needed to confirm reflux and assess the oesophagus.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* OGD Card */}
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
                      alt="Upper GI endoscopy (OGD) procedure diagram showing endoscope examining the oesophagus and stomach"
                      width={1280}
                      height={720}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      OGD (Oesophago-Gastro-Duodenoscopy)
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Also known as gastroscopy, this procedure uses a thin, flexible camera (endoscope) to directly visualise the oesophagus, stomach, and duodenum.
                    </p>
                    <ul className="space-y-2 mb-4">
                      {[
                        "Detects oesophagitis (inflammation) and erosions",
                        "Identifies Barrett's oesophagus (pre-cancerous changes)",
                        "Allows biopsies for further analysis",
                        "Rules out other conditions like ulcers or cancer",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <CheckCircle className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href="/gastroscopy" 
                      className="inline-flex items-center text-sm text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
                    >
                      Learn more about this procedure →
                    </Link>
                  </div>
                </motion.div>

                {/* Bravo Capsule Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-background rounded-xl overflow-hidden border border-blue-200 dark:border-blue-800/30 shadow-sm"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={bravoCapsuleImage}
                      alt="Bravo pH capsule monitoring system for measuring acid reflux in the oesophagus"
                      width={1280}
                      height={720}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Bravo Capsule pH Monitoring
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      A wireless, catheter-free pH monitoring system that measures acid exposure in the oesophagus over 48-96 hours for accurate heartburn diagnosis.
                    </p>
                    <ul className="space-y-2 mb-4">
                      {[
                        "Small capsule attached to the oesophageal wall",
                        "Transmits pH data wirelessly to a recorder",
                        "More comfortable than traditional catheter-based tests",
                        "Primary clinical modality for quantifying acid reflux episodes",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <CheckCircle className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href="/bravo-capsule" 
                      className="inline-flex items-center text-sm text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
                    >
                      Learn more about this procedure →
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Heartburn Treatment */}
        <section className="py-16 lg:py-20 bg-emerald-50 dark:bg-emerald-950/20">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                Heartburn Treatment
              </h2>
              <div className="prose dark:prose-invert max-w-none text-base text-muted-foreground leading-relaxed">
                <p>
                  Treatment for heartburn is tailored to the severity of symptoms and presence of complications:
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-background rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/30">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Lifestyle Modifications</h3>
                  <ul className="space-y-3">
                    {[
                      "Maintain a healthy weight",
                      "Avoid trigger foods and late meals",
                      "Elevate the head of your bed",
                      "Stop smoking",
                      "Limit alcohol and caffeine",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-base text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-background rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/30">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Medical Treatment</h3>
                  <ul className="space-y-3">
                    {[
                      "Antacids for occasional symptoms",
                      "H2 blockers (e.g., famotidine)",
                      "Proton pump inhibitors (PPIs)",
                      "Prokinetic agents when needed",
                      "Endoscopic or surgical options for severe cases",
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

        {/* FAQ Section */}
        <section className="py-14 lg:py-20">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <HelpCircle className="h-6 w-6 text-emerald-500" />
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
                  Frequently Asked Questions
                </h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-3xl mx-auto pb-8"
            >
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`faq-${index}`}
                    className="bg-card rounded-xl border border-border px-4 last:border-b last:border-border"
                  >
                    <AccordionTrigger className="hover:no-underline py-4 text-left font-sans">
                      <span className="font-sans font-semibold text-lg text-foreground">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-base text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-primary/5">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
                Get Relief from Heartburn
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Experiencing persistent reflux symptoms? Consult Dr. Prem Thurairajah, 
                a leading GERD specialist in Singapore, for a comprehensive evaluation and personalised treatment options.
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
