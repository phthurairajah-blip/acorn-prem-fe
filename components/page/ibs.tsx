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
  "Recurrent abdominal pain or cramping",
  "Bloating and abdominal distension",
  "Diarrhoea, constipation, or alternating between both",
  "Changes in stool frequency or consistency",
  "Urgency or a feeling of incomplete evacuation",
  "Passage of mucus in the stool",
  "Symptoms that fluctuate and may be triggered by meals or stress",
];

const ibsSubtypes = [
  {
    title: "IBS-D (Diarrhoea-predominant)",
    description: "Characterised by frequent loose stools and urgency. Symptoms may be more noticeable at particular times of day, including the morning.",
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
      "Recent gastrointestinal infection",
      "Antibiotic use",
      "Food intolerances",
      "A previous episode of gastroenteritis",
    ]
  },
];

const alarmSymptoms = [
  {
    title: "Rectal Bleeding",
    description: "Blood in the stool is not explained by IBS and should be medically assessed."
  },
  {
    title: "Unexplained Weight Loss or Anaemia",
    description: "Unintentional weight loss or unexplained anaemia may indicate another condition and needs further evaluation."
  },
  {
    title: "Night-Time or Progressive Symptoms",
    description: "Symptoms that regularly wake you from sleep, become progressively worse, or are accompanied by fever warrant review."
  },
  {
    title: "New or Changing Symptoms",
    description: "New symptoms later in life, a significant change in bowel habit, or a relevant family history may require further investigation."
  },
];

const faqs = [
  {
    question: "What Is the Difference Between an IBS Specialist and a General Doctor?",
    answer: "<p class='text-base text-muted-foreground leading-relaxed'>A general doctor can often diagnose and manage mild cases of Irritable Bowel Syndrome. However, an IBS specialist - usually a gastroenterologist - has additional expertise in digestive disorders and can help evaluate more persistent, complex, or troublesome symptoms.</p><p class='text-base text-muted-foreground leading-relaxed'>A gastroenterologist may:</p><ul class='space-y-2 mt-4 mb-4 list-disc ml-6'><li>Assess whether symptoms are truly due to IBS</li><li>Exclude other digestive conditions that may mimic IBS</li><li>Arrange specialised investigations when necessary</li><li>Provide tailored dietary and treatment strategies</li><li>Manage more severe or treatment-resistant symptoms</li></ul><p class='text-base text-muted-foreground leading-relaxed'>Specialist review is particularly important if there are &ldquo;red flag&rdquo; symptoms such as weight loss, rectal bleeding, anaemia, or symptoms that worsen over time.</p>",
  },
  {
    question: "How Does an Irritable Bowel Syndrome Specialist Diagnose IBS?",
    answer: "<p class='text-base text-muted-foreground leading-relaxed'>IBS is usually diagnosed based on a combination of symptoms, medical history, and exclusion of other conditions where appropriate.</p><p class='text-base text-muted-foreground leading-relaxed'>Your doctor may ask about:</p><ul class='space-y-2 mt-4 mb-4 list-disc ml-6'><li>Abdominal pain or bloating</li><li>Diarrhoea or constipation</li><li>Frequency and pattern of bowel motions</li><li>Food triggers</li><li>Stress and lifestyle factors</li><li>Family history of digestive diseases</li></ul><p class='text-base text-muted-foreground leading-relaxed'>In many cases, simple blood or stool tests may be performed to exclude conditions such as:</p><ul class='space-y-2 mt-4 mb-4 list-disc ml-6'><li>Inflammatory Bowel Disease</li><li>Celiac Disease</li><li>Infection or inflammation</li></ul><p class='text-base text-muted-foreground leading-relaxed'>Some patients may require further investigations such as colonoscopy, particularly if symptoms are atypical or associated with warning signs.</p>",
  },
  {
    question: "What Are the Different Types of IBS Treatment Available?",
    answer: "<p class='text-base text-muted-foreground leading-relaxed'>Treatment for IBS is highly individualised and depends on the type and severity of symptoms.</p><p class='text-base text-muted-foreground leading-relaxed'>Treatment options may include:</p><p class='text-base text-muted-foreground leading-relaxed'><strong>Dietary adjustments</strong></p><ul class='space-y-2 mt-4 mb-4 list-disc ml-6'><li>Regular meals</li><li>Increasing soluble fibre</li><li>Reducing trigger foods</li><li>Low FODMAP diet in selected patients</li></ul><p class='text-base text-muted-foreground leading-relaxed'><strong>Lifestyle measures</strong></p><ul class='space-y-2 mt-4 mb-4 list-disc ml-6'><li>Stress reduction</li><li>Regular exercise</li><li>Improving sleep quality</li><li>Maintaining hydration</li></ul><p class='text-base text-muted-foreground leading-relaxed'><strong>Medications</strong></p><p class='text-base text-muted-foreground leading-relaxed'>Depending on symptoms, treatment may include:</p><ul class='space-y-2 mt-4 mb-4 list-disc ml-6'><li>Antispasmodics for cramping</li><li>Medication for diarrhoea</li><li>Laxatives for constipation</li><li>Probiotics in selected patients</li></ul><p class='text-base text-muted-foreground leading-relaxed'>Some patients with more severe symptoms may benefit from additional therapies targeting the gut&ndash;brain interaction.</p>",
  },
  {
    question: "How Long Does It Take to See Improvement With IBS Treatment?",
    answer: "<p class='text-base text-muted-foreground leading-relaxed'>Improvement varies between individuals. Some people notice improvement within a few weeks after dietary or lifestyle changes, while others may require a longer period of adjustment and treatment optimisation.</p><p class='text-base text-muted-foreground leading-relaxed'>IBS is often a long-term condition with periods of flare-ups and remission. The goal of treatment is usually to improve symptom control, quality of life, and reduce the frequency and severity of flare-ups.</p><p class='text-base text-muted-foreground leading-relaxed'>Close follow-up may sometimes be needed to fine-tune treatment strategies.</p>",
  },
  {
    question: "What Should I Expect During My First Consultation?",
    answer: "<p class='text-base text-muted-foreground leading-relaxed'>During your first consultation, your doctor will usually take a detailed history of your symptoms and overall digestive health.</p><p class='text-base text-muted-foreground leading-relaxed'>This may include discussion about:</p><ul class='space-y-2 mt-4 mb-4 list-disc ml-6'><li>Your bowel habits</li><li>Abdominal pain or bloating</li><li>Diet and food triggers</li><li>Stress and lifestyle factors</li><li>Previous medical conditions</li><li>Family history of digestive diseases</li></ul><p class='text-base text-muted-foreground leading-relaxed'>A physical examination may also be performed. Depending on your symptoms, blood tests, stool tests, or imaging may be recommended.</p><p class='text-base text-muted-foreground leading-relaxed'>The consultation is also an opportunity to discuss your concerns, ask questions, and develop a personalised management plan.</p>",
  },
  {
    question: "Can an IBS Specialist Help With Stress-Related IBS Flare-Ups?",
    answer: "<p class='text-base text-muted-foreground leading-relaxed'>Yes. Stress and emotional health can play an important role in IBS symptoms because of the close connection between the brain and the digestive system, often referred to as the &ldquo;gut&ndash;brain axis.&rdquo;</p><p class='text-base text-muted-foreground leading-relaxed'>An IBS specialist can help identify possible stress-related triggers and recommend strategies to better manage flare-ups. This may include:</p><ul class='space-y-2 mt-4 mb-4 list-disc ml-6'><li>Lifestyle and sleep optimisation</li><li>Dietary adjustments</li><li>Stress management techniques</li><li>Exercise recommendations</li><li>Referral to other healthcare professionals when appropriate</li></ul><p class='text-base text-muted-foreground leading-relaxed'>Managing stress does not mean symptoms are &ldquo;all in the mind.&rdquo; IBS is a genuine medical condition, and stress can influence how sensitive and active the digestive tract becomes.</p>",
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
                  Irritable bowel syndrome (IBS) is a common disorder of gut–brain interaction that can cause abdominal pain, bloating and changes in bowel habit, including diarrhoea, constipation or both.
                  A careful assessment helps confirm the diagnosis, identify warning features and tailor treatment to your predominant symptoms and triggers.
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
                  Irritable bowel syndrome (IBS) is a disorder of gut–brain interaction characterised by recurrent abdominal pain associated with bowel movements and changes in stool frequency or form. The bowel usually appears structurally normal, but its movement and sensitivity can be altered.
                </p>
                <p>
                  Symptoms can be influenced by several factors, including gut sensitivity, bowel motility, diet, stress, sleep and, in some people, a previous episode of gastroenteritis. IBS does not cause bowel inflammation and does not itself increase colorectal cancer risk.
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

        {/* When Should You See a Doctor? Section */}
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
                  When Should You See a Doctor?
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
                IBS itself does not usually cause bleeding, unexplained weight loss, anaemia, fever or steadily progressive symptoms. These features should prompt medical assessment.
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
                        <li key={idx} className="flex items-start gap-3 text-base">
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
                      <p className="text-base text-muted-foreground leading-relaxed">Full blood count, inflammatory markers, coeliac serology, thyroid function.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Stool Tests</h4>
                      <p className="text-base text-muted-foreground leading-relaxed">Calprotectin (to exclude IBD), stool cultures, ova and parasites.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Breath Tests</h4>
                      <p className="text-base text-muted-foreground leading-relaxed">Hydrogen breath tests for lactose intolerance or SIBO (small intestinal bacterial overgrowth).</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Food Intolerance Testing</h4>
                      <p className="text-base text-muted-foreground leading-relaxed">Structured elimination diets may identify specific triggers.</p>
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
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/60 dark:bg-emerald-950/10 dark:border-emerald-800/40 p-6 md:p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-3xl font-serif font-semibold text-emerald-700 dark:text-emerald-400">IBS</h3>
                      <p className="text-base text-muted-foreground mt-1">Irritable Bowel Syndrome</p>
                    </div>
                    <div className="space-y-5">
                      {ibsComparisons.map((compare) => (
                        <div key={`ibs-${compare.id}`} className="min-h-[118px] border-t border-emerald-200/70 dark:border-emerald-800/30 pt-4 first:border-t-0 first:pt-0">
                          <p className="font-semibold text-base text-foreground mb-1">{compare.feature}</p>
                          <p className="text-base text-muted-foreground leading-relaxed">{compare.ibs}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-amber-200/80 bg-amber-50/60 dark:bg-amber-950/10 dark:border-amber-800/40 p-6 md:p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-3xl font-serif font-semibold text-amber-700 dark:text-amber-400">IBD</h3>
                      <p className="text-base text-muted-foreground mt-1">Inflammatory Bowel Disease</p>
                    </div>
                    <div className="space-y-5">
                      {ibsComparisons.map((compare) => (
                        <div key={`ibd-${compare.id}`} className="min-h-[118px] border-t border-amber-200/70 dark:border-amber-800/30 pt-4 first:border-t-0 first:pt-0">
                          <p className="font-semibold text-base text-foreground mb-1">{compare.feature}</p>
                          <p className="text-base text-muted-foreground leading-relaxed">{compare.ibd}</p>
                        </div>
                      ))}
                    </div>
                  </div>
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
                IBS management works best when treatment is tailored to your predominant symptoms, bowel pattern and individual triggers. The aim is to reduce flare-ups, improve day-to-day comfort and help you maintain a more predictable routine.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-4">Managing IBS Flare-Ups</h3>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                Flare-ups can cause abdominal pain, bloating, diarrhoea, constipation, urgency or a feeling of incomplete evacuation. Symptoms often vary over time, so management may need to change depending on whether diarrhoea, constipation, pain or bloating is most troublesome.
              </p>

              <h4 className="text-xl font-semibold text-foreground mb-4">Common Triggers for IBS Flare-Ups</h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-10">
                {[
                  "Irregular meals",
                  "Poor sleep",
                  "Stress or emotional strain",
                  "Certain foods or large meals",
                  "Reduced physical activity",
                  "Recent gastrointestinal infection",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-background rounded-xl border border-emerald-200 dark:border-emerald-800/30 p-4 shadow-sm flex items-start gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-base text-muted-foreground leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <h4 className="text-xl font-semibold text-foreground mb-5">How IBS Is Managed</h4>
              <div className="grid md:grid-cols-2 gap-5 mb-10">
                {[
                  {
                    title: "Diet and eating pattern",
                    text: "Regular meals, adequate hydration and identifying personal food triggers can be helpful. A low-FODMAP diet may be useful in selected patients, ideally with dietetic guidance.",
                  },
                  {
                    title: "Bowel-pattern treatment",
                    text: "Treatment can be directed at the predominant bowel pattern, for example constipation, diarrhoea or mixed symptoms.",
                  },
                  {
                    title: "Pain and bloating",
                    text: "Antispasmodics, peppermint oil or other symptom-directed treatments may help selected patients.",
                  },
                  {
                    title: "Gut–brain therapies",
                    text: "Stress management, cognitive behavioural therapy and gut-directed hypnotherapy can be useful when symptoms are strongly influenced by the gut–brain interaction.",
                  },
                  {
                    title: "Lifestyle",
                    text: "Regular exercise, adequate sleep and a consistent daily routine can help reduce symptom variability.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`bg-background rounded-xl border border-border p-5 ${idx === 4 ? "md:col-span-2 md:w-[calc(50%-0.625rem)] md:justify-self-center" : ""}`}
                  >
                    <h5 className="text-lg font-semibold text-foreground mb-2">{item.title}</h5>
                    <p className="text-base text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              <h4 className="text-xl font-semibold text-foreground mb-4">When to Seek Further Medical Review</h4>
              <p className="text-base text-muted-foreground leading-relaxed mb-5">
                Seek medical assessment if any of the following warning signs are present:
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {[
                  "Symptoms that are persistent or worsening",
                  "Rectal bleeding",
                  "Unexplained weight loss or anaemia",
                  "Fever or significant night-time symptoms",
                  "A marked change in your usual bowel pattern",
                ].map((warning, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50/70 dark:border-red-900/40 dark:bg-red-950/10 p-4"
                  >
                    <AlertTriangle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-base text-foreground leading-relaxed">{warning}</span>
                  </div>
                ))}
              </div>

              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                A gastroenterologist can help confirm the diagnosis, exclude other digestive conditions and tailor treatment to your individual symptom pattern.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/#contact">
                    <Calendar className="h-5 w-5" />
                    Book a Consultation
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Conditions */}
        <RelatedConditions conditions={relatedConditions} />

        {/* FAQ Section */}
        <section className="pt-14 pb-20 lg:pt-20 lg:pb-28">
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
              className="max-w-3xl mx-auto pb-6"
            >
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`faq-${index}`}
                    className="bg-card rounded-xl border border-border px-4 last:border-b last:border-border"
                  >
                    <AccordionTrigger className="hover:no-underline py-4 text-left">
                      <span className="font-medium text-lg text-foreground">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-base text-muted-foreground">
                      <div dangerouslySetInnerHTML={{ __html: faq.answer }}></div>
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
