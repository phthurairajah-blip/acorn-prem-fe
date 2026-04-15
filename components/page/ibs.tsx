'use client'

import { motion } from "framer-motion";
import { RelatedConditions } from "@/components/RelatedConditions";
import { ArrowLeft, AlertTriangle, CheckCircle, Calendar, Info, Stethoscope, Apple, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const colonoscopyImage = "/colonoscopy-procedure-new.jpeg";
const mediterraneanDietImage = "/mediterranean-diet.jpeg";
const abdominalPainImage = "/abdominal-pain-jaundice.jpg";

const relatedConditions = [
  {
    title: "Constipation",
    description: "Clinical assessment and treatment of chronic constipation.",
    link: "/constipation",
  },
  {
    title: "GERD (Heartburn)",
    description: "Specialized management of acid reflux and upper GI symptoms.",
    link: "/gerd-heartburn",
  },
  {
    title: "Colonoscopy",
    description: "Diagnostic examination to exclude other bowel conditions.",
    link: "/colonoscopy",
  },
];

const ibsSymptoms = [
  "Abdominal pain or cramping related to bowel movements",
  "Bloating and abdominal distension",
  "Diarrhoea, constipation, or alternating between both",
  "Urgency or incomplete evacuation",
  "Passage of mucus in stool",
  "Symptoms often worse after eating",
  "Symptom relief after passing stool or gas",
  "Symptoms may worsen with stress",
];

const ibsSubtypes = [
  {
    title: "IBS-D (Diarrhoea-predominant)",
    description: "Characterised by frequent loose stools, urgency, and often morning diarrhoea. May be associated with anxiety.",
    color: "amber"
  },
  {
    title: "IBS-C (Constipation-predominant)",
    description: "Infrequent, hard stools with straining. Often associated with bloating and abdominal discomfort.",
    color: "teal"
  },
  {
    title: "IBS-M (Mixed)",
    description: "Alternating between diarrhoea and constipation. Symptoms may vary day to day or week to week.",
    color: "purple"
  },
  {
    title: "IBS-U (Unclassified)",
    description: "Meets IBS criteria but stool patterns don't fit clearly into other subtypes.",
    color: "blue"
  },
];


const triggers = [
  {
    category: "Dietary",
    items: [
      "FODMAPs (fermentable carbohydrates)",
      "Fatty or fried foods",
      "Caffeine and alcohol",
      "Artificial sweeteners",
      "Large meals",
    ]
  },
  {
    category: "Lifestyle",
    items: [
      "Psychological stress",
      "Anxiety and depression",
      "Poor sleep",
      "Lack of exercise",
      "Irregular eating patterns",
    ]
  },
  {
    category: "Other",
    items: [
      "Hormonal changes (menstruation)",
      "Post-infectious (gastroenteritis)",
      "Antibiotic use",
      "Food intolerances",
      "Small intestinal bacterial overgrowth",
    ]
  },
];

const alarmSymptoms = [
  {
    title: "Rectal Bleeding",
    description: "Blood in stool is not a feature of IBS and requires investigation."
  },
  {
    title: "Unexplained Weight Loss",
    description: "Significant unintentional weight loss needs further evaluation."
  },
  {
    title: "Onset After Age 45",
    description: "New symptoms in older adults warrant colonoscopy."
  },
  {
    title: "Nocturnal Symptoms",
    description: "Symptoms waking you from sleep suggest organic disease."
  },
];

export const Ibs = () => {
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
                  Functional GI Disorders
                </span>
                <h1 className="text-5xl md:text-6xl font-serif font-semibold text-foreground mt-3 mb-6">
                  Irritable Bowel Syndrome
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  IBS is a common gastrointestinal condition, affecting 10-15% of the population. 
                  With proper diagnosis and personalised management, most patients achieve symptom improvement through individualized management.
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
                  src={abdominalPainImage}
                  alt="Abdominal discomfort associated with IBS"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                  width={1280}
                  height={720}
                />
              </motion.div>
            </div>
          </div>
        </section>
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-2 sm:px-4">
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
                  Understanding IBS
                </h2>
              </div>
              
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground mb-10 leading-loose">
                <p>
                  Irritable Bowel Syndrome is a functional gastrointestinal disorder characterised by 
                  recurrent abdominal pain associated with changes in bowel habits. Unlike inflammatory 
                  bowel disease, IBS does not cause visible damage to the bowel or increase cancer risk.
                </p>
                <p>
                  IBS results from complex interactions between the gut and brain (the &quot;gut-brain axis&quot;), 
                  involving altered gut motility, visceral hypersensitivity, changes in gut microbiome, 
                  and psychological factors. Understanding these mechanisms guides effective treatment.
                </p>
              </div>

              {/* Symptoms */}
              <div className="bg-background rounded-xl p-6 border border-border mb-10">
                <h3 className="text-xl font-semibold text-foreground mb-4">Common Symptoms</h3>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                  {ibsSymptoms.map((symptom, index) => (
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

        {/* IBS Subtypes Section */}
        <section className="py-16 lg:py-20 bg-emerald-50/50 dark:bg-emerald-950/10">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-10">
                IBS Subtypes
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {ibsSubtypes.map((type, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-background rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/30 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-2">{type.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{type.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Triggers Section */}
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
                <Brain className="h-8 w-8 text-emerald-600" />
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
                  Common Triggers
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
                Identifying and managing triggers is key to controlling IBS symptoms. 
                Triggers vary between individuals.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {triggers.map((triggerGroup, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-background rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/30 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-4">{triggerGroup.category}</h3>
                    <ul className="space-y-2">
                      {triggerGroup.items.map((item, idx) => (
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
        <section className="py-16 lg:py-20 bg-red-50/50 dark:bg-red-950/10">
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
                  Alarm Symptoms
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
                These symptoms are NOT typical of IBS and require investigation to exclude other conditions.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {alarmSymptoms.map((symptom, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-background rounded-xl p-5 border border-red-200 dark:border-red-800/30"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-2">{symptom.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{symptom.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Diagnosis Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-8">
                Diagnosis
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
                IBS is diagnosed based on symptom criteria (Rome IV) after excluding other conditions. 
                Testing may be needed to rule out alternative diagnoses.
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
                      alt="Colonoscopy for IBS evaluation"
                      className="w-full h-full object-cover"
                      width={1280}
                      height={720}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      When Colonoscopy is Needed
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Colonoscopy may be recommended to exclude inflammatory bowel disease, microscopic colitis, or colorectal cancer.
                    </p>
                    <ul className="space-y-2 mb-4">
                      {[
                        "Presence of alarm symptoms",
                        "Age over 50 without prior screening",
                        "Family history of colorectal cancer or IBD",
                        "Symptoms not responding to treatment",
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
                    Other Tests
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Blood Tests</h4>
                      <p className="text-sm text-muted-foreground">Full blood count, inflammatory markers, coeliac serology, thyroid function.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Stool Tests</h4>
                      <p className="text-sm text-muted-foreground">Calprotectin (to exclude IBD), stool cultures, ova and parasites.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Breath Tests</h4>
                      <p className="text-sm text-muted-foreground">Hydrogen breath tests for lactose intolerance or SIBO (small intestinal bacterial overgrowth).</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Food Intolerance Testing</h4>
                      <p className="text-sm text-muted-foreground">Structured elimination diets may identify specific triggers.</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Treatment Section */}
        <section className="py-16 lg:py-20 bg-emerald-50 dark:bg-emerald-950/20">
          <div className="container mx-auto px-2 sm:px-4">
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
              <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
                IBS management is highly individualised, combining dietary changes, lifestyle modifications, 
                and targeted medications based on predominant symptoms.
              </p>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Diet Card */}
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
                      alt="Healthy diet for IBS management"
                      className="w-full h-full object-cover"
                      width={1280}
                      height={720}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Apple className="h-5 w-5 text-emerald-600" />
                      <h3 className="text-xl font-semibold text-foreground">Dietary Management</h3>
                    </div>
                    <ul className="space-y-2">
                      {[
                        "Low FODMAP diet (guided by dietitian)",
                        "Identify and avoid personal triggers",
                        "Regular meal patterns",
                        "Adequate fibre intake (adjusted to tolerance)",
                        "Limit caffeine and alcohol",
                        "Probiotics (strain-specific)",
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
                  <h3 className="text-xl font-semibold text-foreground mb-4">Medications</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-1">For Pain/Spasm</h4>
                      <p className="text-sm text-muted-foreground">Antispasmodics (mebeverine, hyoscine), peppermint oil capsules.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">For IBS-D</h4>
                      <p className="text-sm text-muted-foreground">Loperamide, bile acid binders, rifaximin (for bloating/SIBO).</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">For IBS-C</h4>
                      <p className="text-sm text-muted-foreground">Osmotic laxatives, linaclotide, prucalopride.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Neuromodulators</h4>
                      <p className="text-sm text-muted-foreground">Low-dose tricyclic antidepressants or SSRIs for pain modulation and gut-brain axis.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Psychological Therapies</h4>
                      <p className="text-sm text-muted-foreground">CBT, gut-directed hypnotherapy, mindfulness - evidence-based for IBS.</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
                Management of Your IBS
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Living with IBS doesn&apos;t have to mean constant discomfort. Dr. Prem provides 
                clinical evaluation and personalised treatment plans for the management of symptoms and improve your quality of life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/#contact">
                    <Calendar className="h-5 w-5" />
                    Book a Consultation
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/gerd-heartburn">
                    Learn About GERD
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
