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
  "Heartburn (burning sensation in the chest)",
  "Regurgitation of food or sour liquid",
  "Difficulty swallowing (dysphagia)",
  "Sensation of a lump in the throat",
  "Chronic cough, especially at night",
  "Hoarseness or sore throat",
  "Chest pain (must rule out cardiac causes)",
  "Disrupted sleep due to reflux",
];

const faqs = [
  {
    question:
      "When should I see a GERD specialist instead of treating heartburn on my own?",
    answer:
      "Occasional heartburn after certain meals is common and may improve with lifestyle adjustments or short-term medication. However, you should consider seeing a gastroenterologist if symptoms occur frequently, persist despite treatment, disturb sleep, interfere with daily life, or recur soon after stopping medication. Specialist review is also important if you develop difficulty swallowing, unexplained weight loss, vomiting, anaemia, or chest discomfort.",
  },
  {
    question:
      "How do I know if my symptoms are caused by acid reflux, GERD, or another upper digestive condition?",
    answer:
      "Symptoms such as heartburn, sour regurgitation, chest discomfort, chronic throat irritation, bloating, nausea, or upper abdominal pain can overlap with several upper digestive conditions. These may include GERD, gastritis, peptic ulcer disease, functional dyspepsia, eosinophilic oesophagitis, or motility disorders. A gastroenterologist can help distinguish between these conditions based on your symptoms, examination findings, and appropriate investigations.",
  },
  {
    question:
      "What tests might a gastroenterologist recommend for persistent reflux symptoms in Singapore?",
    answer:
      "Depending on your symptoms and clinical history, investigations may include gastroscopy to assess the oesophagus, stomach, and duodenum; biopsies to look for inflammation or other underlying conditions; testing for Helicobacter pylori; ambulatory pH monitoring to assess acid exposure; and oesophageal manometry to evaluate swallowing and oesophageal muscle function. Not all patients require extensive testing, and investigations are tailored to the individual clinical situation.",
  },
  {
    question:
      "If antacids or PPIs help only partly, what should I do next?",
    answer:
      "Partial response to antacids or proton pump inhibitors (PPIs) does not always mean the symptoms are purely acid-related. Further evaluation may be needed to assess whether symptoms are due to persistent reflux, non-acid reflux, functional heartburn, delayed stomach emptying, or another gastrointestinal condition. Your gastroenterologist may review medication timing and dosing, assess dietary and lifestyle triggers, or recommend further investigations.",
  },
  {
    question:
      "What are the warning signs that reflux may be causing complications such as inflammation, narrowing, or Barrett’s oesophagus?",
    answer:
      "Potential warning signs include difficulty or pain when swallowing, food getting stuck in the chest, persistent vomiting, gastrointestinal bleeding or black stools, iron deficiency anaemia, unexplained weight loss, and long-standing reflux symptoms, particularly in patients with additional risk factors. These symptoms may warrant further evaluation with gastroscopy.",
  },
  {
    question:
      "When is reflux severe enough to need more than lifestyle changes and medication?",
    answer:
      "More advanced treatment may be considered if reflux symptoms remain troublesome despite appropriate lifestyle measures and medical therapy, if there are complications such as severe oesophagitis or Barrett’s oesophagus, or if symptoms significantly affect quality of life. In selected patients, further assessment for endoscopic or surgical anti-reflux procedures may be appropriate.",
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
                  Gerd Specialist in Singapore
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Gastro-oesophageal reflux disease (GERD) is a common condition that affects quality of life 
                  and can lead to complications if untreated. Specialized clinical management focuses on symptom relief 
                  and preventing long-term complications.
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

        {/* Heartburn Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                Understanding Acid Reflux & Heartburn
              </h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground mb-10 leading-loose">
                <p>
                  Heartburn, a common symptom of GERD, occurs when stomach acid frequently flows back into the oesophagus, 
                  leading to irritation and potential complications. As a GERD specialist in Singapore, 
                  Dr. Prem Thurairajah provides comprehensive evaluation and treatment for heartburn and related symptoms.
                </p>
              </div>

              {/* Symptoms */}
              <div className="bg-background rounded-xl p-6 border border-border mb-10">
                <h3 className="text-xl font-semibold text-foreground mb-4">Common Symptoms</h3>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
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
                When to See a GERD Specialist in Singapore
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Gastro-oesophageal reflux disease (GERD) is a common condition that occurs when stomach acid repeatedly flows back into the oesophagus (food pipe), 
                causing irritation and symptoms such as heartburn or regurgitation. While occasional reflux can happen in many people, 
                persistent or worsening symptoms may require specialist evaluation.
              </p>
              <h3 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
                Heartburn, Acid Reflux and GERD Are Not the Same
              </h3>
              <p className="text-muted-foreground mb-6">Many people use the terms “heartburn”, “acid reflux”, and “GERD” interchangeably, but they are slightly different.</p>
              <ul className="space-y-3 mb-6">
  <li className="flex items-start gap-3 text-base text-muted-foreground">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
    <strong>Acid reflux</strong> refers to the backflow of stomach contents
    into the oesophagus.
  </li>
  <li className="flex items-start gap-3 text-base text-muted-foreground">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
    <strong>Heartburn</strong> is the burning sensation in the chest that
    reflux can cause.
  </li>
  <li className="flex items-start gap-3 text-base text-muted-foreground">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
    <strong>GERD</strong> is a more chronic condition where reflux occurs
    frequently and may lead to inflammation or complications over time.
  </li>
</ul>
<p className="text-muted-foreground mb-12">Occasional reflux after a heavy or spicy meal is common. However, symptoms that occur regularly, disturb sleep, or affect daily life may suggest GERD rather than simple indigestion.</p>
            <h3 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
                Signs You Should Book a Specialist Review
              </h3>
              <p className="text-muted-foreground mb-6">You should consider seeing a gastroenterologist if you experience:</p>
            <ul className="space-y-3 mb-6">
  <li className="flex items-start gap-3 text-base text-muted-foreground">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
    Frequent heartburn or reflux symptoms occurring several times a week
  </li>
  <li className="flex items-start gap-3 text-base text-muted-foreground">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
    Symptoms persisting despite lifestyle changes or over-the-counter
    medication
  </li>
  <li className="flex items-start gap-3 text-base text-muted-foreground">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
    Difficulty swallowing or food feeling stuck
  </li>
  <li className="flex items-start gap-3 text-base text-muted-foreground">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
    Persistent nausea, bloating, or upper abdominal discomfort
  </li>
  <li className="flex items-start gap-3 text-base text-muted-foreground">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
    Chronic cough, throat irritation, hoarseness, or worsening asthma
    symptoms linked to reflux
  </li>
  <li className="flex items-start gap-3 text-base text-muted-foreground">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
    Unexplained weight loss, reduced appetite, or anaemia
  </li>
  <li className="flex items-start gap-3 text-base text-muted-foreground">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
    Recurrent vomiting or vomiting blood
  </li>
  <li className="flex items-start gap-3 text-base text-muted-foreground">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
    Black stools or evidence of gastrointestinal bleeding
  </li>
</ul>
<p className="text-muted-foreground mb-12">People above the age of 40–50 with new-onset reflux symptoms, especially in Asian populations where gastric cancer risk remains relevant, may also benefit from further assessment.</p>
             <h3 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
                What a GERD Assessment May Involve
              </h3>
              <p className="text-muted-foreground mb-2">A specialist consultation usually begins with a detailed review of your symptoms, diet, medications, and lifestyle factors.</p>
               <p className="text-muted-foreground mb-6">Depending on your symptoms and risk profile, further investigations may include:</p>
              <ul className="space-y-3 mb-10">
  <li className="flex items-start gap-3 text-base text-muted-foreground">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
    <strong>Gastroscopy (OGD)</strong> to examine the oesophagus, stomach, and upper small intestine
  </li>
  <li className="flex items-start gap-3 text-base text-muted-foreground">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
    Biopsies to assess for inflammation, Barrett’s oesophagus, or other conditions
  </li>
  <li className="flex items-start gap-3 text-base text-muted-foreground">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
    Testing for <em>Helicobacter pylori</em> infection where appropriate
  </li>
  <li className="flex items-start gap-3 text-base text-muted-foreground">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
    Oesophageal pH monitoring to assess acid exposure
  </li>
  <li className="flex items-start gap-3 text-base text-muted-foreground">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
    Oesophageal manometry to evaluate swallowing function and oesophageal muscle activity
  </li>
</ul>
<p className="text-muted-foreground mb-12">Not every patient requires extensive testing. In many cases, assessment is tailored according to symptom severity, duration, and response to treatment.</p>
            <h3 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
                When Reflux May Need More Than Medication
              </h3>
              <p className="text-muted-foreground mb-6">Lifestyle changes and acid-suppressing medication are often effective for mild reflux symptoms. These may include:</p>
            <ul className="space-y-3 mb-6">
  <li className="flex items-start gap-3 text-base text-muted-foreground">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
    Weight management
  </li>
  <li className="flex items-start gap-3 text-base text-muted-foreground">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
    Avoiding late-night meals
  </li>
  <li className="flex items-start gap-3 text-base text-muted-foreground">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
    Reducing alcohol, caffeine, or trigger foods
  </li>
  <li className="flex items-start gap-3 text-base text-muted-foreground">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
    Elevating the head during sleep
  </li>
  <li className="flex items-start gap-3 text-base text-muted-foreground">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
    Smoking cessation
  </li>
</ul>
<p className="text-muted-foreground mb-2">However, some patients continue to have symptoms despite medication, while others may develop complications such as oesophagitis, strictures, or Barrett’s oesophagus.</p>
<p className="text-muted-foreground mb-6">In these situations, a specialist review is important to:</p>
            <ul className="space-y-3 mb-6">
  <li className="flex items-start gap-3 text-base text-muted-foreground">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
    Confirm the diagnosis
  </li>
  <li className="flex items-start gap-3 text-base text-muted-foreground">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
    Exclude other upper gastrointestinal conditions
  </li>
  <li className="flex items-start gap-3 text-base text-muted-foreground">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
    Optimise long-term treatment
  </li>
  <li className="flex items-start gap-3 text-base text-muted-foreground">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
    Assess whether advanced therapies or anti-reflux procedures may be appropriate
  </li>
</ul>
<p className="text-muted-foreground mb-10">Early assessment can help prevent complications and improve long-term symptom control.</p>
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
              <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
                Understanding the risk factors for heartburn can help you make lifestyle changes to reduce your symptoms and prevent complications.
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
              <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
                Untreated acid reflux can lead to serious complications affecting the oesophagus. Early diagnosis and treatment can prevent these conditions.
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
                  Investigations for Heartburn
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
                Accurate diagnosis of heartburn often requires specialised tests to assess the extent of acid reflux and any damage to the oesophagus.
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
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-loose">
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
              className="max-w-3xl mx-auto"
            >
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`faq-${index}`}
                    className="bg-card rounded-xl border border-border px-4"
                  >
                    <AccordionTrigger className="hover:no-underline py-4 text-left">
                      <span className="font-medium text-lg text-foreground">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-base text-muted-foreground">
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
