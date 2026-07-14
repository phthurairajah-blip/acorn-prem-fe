'use client'

import { motion } from "framer-motion";
import { RelatedConditions } from "@/components/RelatedConditions";
import { ArrowLeft, AlertTriangle, CheckCircle, Calendar, Info, Stethoscope, Apple, Brain, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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

const ibsComparisons = [
  {
    id: 1,
    feature: "What is it?",
    ibs: "A functional bowel disorder affecting how the digestive system works",
    ibd: "A chronic inflammatory condition of the digestive tract",
  },
  {
    id: 2,
    feature: "Examples",
    ibs: "IBS with diarrhoea, constipation, or mixed bowel habits",
    ibd: "Crohn's disease and ulcerative colitis",
  },
  {
    id: 3,
    feature: "Common symptoms",
    ibs: "Bloating, abdominal pain, diarrhoea, constipation, excess gas",
    ibd: "Abdominal pain, diarrhoea, urgency, rectal bleeding, weight loss",
  },
  {
    id: 4,
    feature: "Blood in stool",
    ibs: "Uncommon",
    ibd: "Common",
  },
  {
    id: 5,
    feature: "Weight loss",
    ibs: "Usually absent",
    ibd: "More common",
  },
  {
    id: 6,
    feature: "Fever",
    ibs: "No",
    ibd: "Can occur during active inflammation",
  },
  {
    id: 7,
    feature: "Inflammation in the bowel",
    ibs: "No visible inflammation",
    ibd: "Yes",
  },
  {
    id: 8,
    feature: "Damage to the intestine",
    ibs: "No",
    ibd: "Can occur over time",
  },
  {
    id: 9,
    feature: "Symptoms during sleep",
    ibs: "Uncommon",
    ibd: "May occur",
  },
  {
    id: 10,
    feature: "Cause",
    ibs: "Related to gut sensitivity, bowel movement changes, stress, and diet",
    ibd: "Immune-related inflammation of the digestive tract",
  },
  {
    id: 11,
    feature: "Is it serious?",
    ibs: "Not dangerous, but can affect quality of life",
    ibd: "Can lead to complications if untreated",
  },
  {
    id: 12,
    feature: "Tests commonly performed",
    ibs: "Usually diagnosed based on symptoms and simple tests",
    ibd: "May require blood tests, stool tests, colonoscopy, and imaging",
  },
  {
    id: 13,
    feature: "Treatment",
    ibs: "Diet, lifestyle changes, stress management, symptom control",
    ibd: "Anti-inflammatory medication, immune therapy, and sometimes surgery",
  },
  {
    id: 14,
    feature: "Cancer risk",
    ibs: "Does not increase bowel cancer risk",
    ibd: "Long-standing disease may increase bowel cancer risk",
  },
  {
    id: 15,
    feature: "When to seek specialist review",
    ibs: "Persistent or troublesome symptoms",
    ibd: "Any ongoing diarrhoea, bleeding, weight loss, or worsening symptoms",
  },
];

const lifestyleTips = [
  "Regular exercise",
  "Adequate sleep",
  "Relaxation techniques or mindfulness",
  "Stress management strategies",
  "Avoiding excessive late nights and irregular routines",
];

const medications = [
  "Antispasmodics for cramping",
  "Anti-diarrhoeal medication for diarrhoea",
  "Gentle laxatives for constipation",
  "Probiotics in selected patients",
];

const specialistReviewSigns = [
  "Symptoms are persistent or worsening",
  "You develop blood in the stool",
  "There is unexplained weight loss",
  "Symptoms wake you from sleep",
  "You develop fever or severe pain",
  "Symptoms begin later in life or change significantly",
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

const faqs = [
  {
    question: "What Is the Difference Between an IBS Specialist and a General Doctor?",
    answer: "<p>A general doctor can often diagnose and manage mild cases of Irritable Bowel Syndrome. However, an IBS specialist - usually a gastroenterologist - has additional expertise in digestive disorders and can help evaluate more persistent, complex, or troublesome symptoms.</p><p>A gastroenterologist may:</p><ul><li>Assess whether symptoms are truly due to IBS</li><li>Exclude other digestive conditions that may mimic IBS</li><li>Arrange specialised investigations when necessary</li><li>Provide tailored dietary and treatment strategies</li><li>Manage more severe or treatment-resistant symptoms</li></ul><p>Specialist review is particularly important if there are &ldquo;red flag&rdquo; symptoms such as weight loss, rectal bleeding, anaemia, or symptoms that worsen over time.</p>",
  },
  {
    question: "How Does an Irritable Bowel Syndrome Specialist Diagnose IBS?",
    answer: "<p>IBS is usually diagnosed based on a combination of symptoms, medical history, and exclusion of other conditions where appropriate.</p><p>Your doctor may ask about:</p><ul><li>Abdominal pain or bloating</li><li>Diarrhoea or constipation</li><li>Frequency and pattern of bowel motions</li><li>Food triggers</li><li>Stress and lifestyle factors</li><li>Family history of digestive diseases</li></ul><p>In many cases, simple blood or stool tests may be performed to exclude conditions such as:</p><ul><li>Inflammatory Bowel Disease</li><li>Celiac Disease</li><li>Infection or inflammation</li></ul><p>Some patients may require further investigations such as colonoscopy, particularly if symptoms are atypical or associated with warning signs.</p>",
  },
  {
    question: "What Are the Different Types of IBS Treatment Available?",
    answer: "<p>Treatment for IBS is highly individualised and depends on the type and severity of symptoms.</p><p>Treatment options may include:</p><p><strong>Dietary adjustments</strong></p><p><strong>Dietary adjustments</strong></p><ul><li>Regular meals</li><li>Increasing soluble fibre</li><li>Reducing trigger foods</li><li>Low FODMAP diet in selected patients</li></ul><p><strong>Lifestyle measures</strong></p><ul><li>Stress reduction</li><li>Regular exercise</li><li>Improving sleep quality</li><li>Maintaining hydration</li></ul><p><strong>Medications</strong></p><p>Depending on symptoms, treatment may include:</p><ul><li>Antispasmodics for cramping</li><li>Medication for diarrhoea</li><li>Laxatives for constipation</li><li>Probiotics in selected patients</li></ul><p>Some patients with more severe symptoms may benefit from additional therapies targeting the gut&ndash;brain interaction.</p>",
  },
  {
    question: "How Long Does It Take to See Improvement With IBS Treatment?",
    answer: "<p>Improvement varies between individuals. Some people notice improvement within a few weeks after dietary or lifestyle changes, while others may require a longer period of adjustment and treatment optimisation.</p><p>IBS is often a long-term condition with periods of flare-ups and remission. The goal of treatment is usually to improve symptom control, quality of life, and reduce the frequency and severity of flare-ups.</p><p>Close follow-up may sometimes be needed to fine-tune treatment strategies.</p>",
  },
  {
    question: "What Should I Expect During My First Consultation?",
    answer: "<p>During your first consultation, your doctor will usually take a detailed history of your symptoms and overall digestive health.</p><p>This may include discussion about:</p><ul><li>Your bowel habits</li><li>Abdominal pain or bloating</li><li>Diet and food triggers</li><li>Stress and lifestyle factors</li><li>Previous medical conditions</li><li>Family history of digestive diseases</li></ul><p>A physical examination may also be performed. Depending on your symptoms, blood tests, stool tests, or imaging may be recommended.</p><p>The consultation is also an opportunity to discuss your concerns, ask questions, and develop a personalised management plan.</p>",
  },
  {
    question: "Can an IBS Specialist Help With Stress-Related IBS Flare-Ups?",
    answer: "<p>Yes. Stress and emotional health can play an important role in IBS symptoms because of the close connection between the brain and the digestive system, often referred to as the &ldquo;gut&ndash;brain axis.&rdquo;</p><p>An IBS specialist can help identify possible stress-related triggers and recommend strategies to better manage flare-ups. This may include:</p><ul><li>Lifestyle and sleep optimisation</li><li>Dietary adjustments</li><li>Stress management techniques</li><li>Exercise recommendations</li><li>Referral to other healthcare professionals when appropriate</li></ul><p>Managing stress does not mean symptoms are &ldquo;all in the mind.&rdquo; IBS is a genuine medical condition, and stress can influence how sensitive and active the digestive tract becomes.</p>",
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
                  Irritable Bowel Syndrome Treatment Singapore
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  In Singapore, approximately <a href="https://www.nuhs.edu.sg/patient-care/find-a-condition/irritable-bowel-syndrome-ibs">10% of the population is diagnosed with IBS</a>, making it a significant health concern locally.
                  With accurate diagnosis and personalized treatment plans, most patients experience significant symptom relief under the care of an irritable bowel syndrome specialist doctor.
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
                  Understanding Irritable Bowel Syndrome (IBS)
                </h2>
              </div>
              
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground mb-10 leading-loose">
                <p>
                  Irritable Bowel Syndrome is a functional gastrointestinal disorder characterised by 
                  recurrent abdominal pain associated with changes in bowel habits. Unlike inflammatory 
                  bowel disease, IBS does not cause visible damage to the bowel or increase cancer risk.
                </p>
                <p>
                  Irritable Bowel Syndrome (IBS) arises from intricate interactions between the gut and brain 
                  (the 'gut-brain axis'), encompassing altered gut motility, visceral hypersensitivity, gut microbiome changes, 
                  and psychological factors, necessitating comprehensive IBS treatment approaches. 
                  Understanding these mechanisms guides effective treatment.
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
              <p className="text-base text-muted-foreground leading-relaxed mb-4 mt-8">Many digestive symptoms such as abdominal discomfort, bloating, diarrhoea, constipation, and changes in bowel habits are commonly attributed to&nbsp;Irritable Bowel Syndrome. However, some of these symptoms can also occur in&nbsp;Inflammatory Bowel Disease, a group of conditions that cause ongoing inflammation within the digestive tract.</p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">Although IBS and IBD may share certain symptoms, they are fundamentally different conditions. IBS is considered a functional bowel disorder, meaning the bowel appears normal but does not function normally. In contrast, IBD involves actual inflammation and damage to the lining of the digestive tract and may lead to more serious complications if left untreated.</p>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">Understanding the differences between IBS and IBD is important, as the investigations, treatment approaches, and long-term implications can vary significantly.</p>
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
            <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="max-w-6xl mx-auto"
                >
                <p className="text-muted-foreground leading-relaxed mb-4 mt-8">
                  Many digestive symptoms such as abdominal discomfort, bloating, diarrhoea, constipation, and changes in bowel habits are commonly attributed to Irritable Bowel Syndrome. However, some of these symptoms can also occur in Inflammatory Bowel Disease, a group of conditions that cause ongoing inflammation within the digestive tract.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Although IBS and IBD may share certain symptoms, they are fundamentally different conditions. IBS is considered a functional bowel disorder, meaning the bowel appears normal but does not function normally. In contrast, IBD involves actual inflammation and damage to the lining of the digestive tract and may lead to more serious complications if left untreated.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Understanding the differences between IBS and IBD is important, as the investigations, treatment approaches, and long-term implications can vary significantly.
                </p>
                <table className="comparison-table border bg-background">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Irritable Bowel Syndrome</th>
                    <th>Inflammatory Bowel Disease</th>
                  </tr>
                </thead>
                <tbody>
                  {ibsComparisons.map((compare) => (
                    <tr key={compare.id}>
                      <td>{compare.feature}</td>
                      <td>{compare.ibs}</td>
                      <td>{compare.ibd}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                  IBS Treatment Approach
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
                Effective IBS management in Singapore is highly individualized, integrating dietary changes, lifestyle modifications, 
                and targeted medications tailored to predominant symptoms, under the guidance of an experienced IBS specialist doctor.
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
              className="max-w-6xl mx-auto text-left"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
                Management of Your IBS
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Living with IBS doesn&apos;t have to mean constant discomfort. It is crucial to consult 
                an IBS specialist for accurate diagnosis and tailored treatment plans to effectively manage 
                your symptoms.
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-4">Managing IBS Flare-Ups</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Living with Irritable Bowel Syndrome can be frustrating, particularly during periods when symptoms 
                suddenly worsen or &ldquo;flare.&rdquo; Common symptoms during a flare-up may include abdominal discomfort, 
                bloating, diarrhoea, constipation, excess gas, or an urgent need to open the bowels.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Although IBS does not cause permanent damage to the digestive tract, flare-ups can significantly affect daily 
                life and quality of life. Fortunately, many people are able to improve their symptoms with a combination of 
                dietary adjustments, lifestyle measures, and targeted treatment.
              </p>
              <h4 className="text-xl font-semibold text-foreground mb-4">Common triggers for IBS flare-ups</h4>
              <p className="text-base text-muted-foreground leading-relaxed">
                IBS symptoms can vary from person to person, but common triggers include:
              </p>
              <ul className="space-y-2 mt-4 mb-8">
                {lifestyleTips.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />  
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <h4 className="text-xl font-semibold text-foreground mb-4">Medications</h4>
              <p className="text-base text-muted-foreground leading-relaxed">
                Depending on symptoms, medications may help:
              </p>
              <ul className="space-y-2 mt-4 mb-4">
                {medications.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />  
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Treatment is usually tailored to the individual&rsquo;s symptoms and pattern of IBS.
              </p>
              <h4 className="text-xl font-semibold text-foreground mb-4">When to seek medical review</h4>
              <p className="text-base text-muted-foreground leading-relaxed">
                You should seek medical attention if:
              </p>
              <ul className="space-y-2 mt-4 mb-4">
                {specialistReviewSigns.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />  
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                A gastroenterologist can help confirm the diagnosis, exclude other digestive conditions, and provide a personalised treatment plan to help improve symptom control and quality of life.
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
      </main>
  )
}
