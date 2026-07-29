"use client";

/* eslint-disable @next/next/no-html-link-for-pages */
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RelatedConditions } from "@/components/RelatedConditions";
import { ArrowLeft, CheckCircle, AlertTriangle, Calendar, Shield, Heart, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Image from "next/image";

const gastricSymptoms = [
  "Persistent indigestion or upper abdominal discomfort",
  "Acid reflux or heartburn",
  "Difficulty swallowing",
  "Nausea or vomiting",
  "Unexplained anaemia",
  "Loss of appetite or unexplained weight loss",
  "Suspected stomach ulcers or inflammation",
];

const gastroscopyBenefit = [
  "Persistent reflux or indigestion symptoms",
  "Long-standing acid reflux disease",
  "Difficulty swallowing",
  "Recurrent upper abdominal pain",
  "Unexplained iron deficiency anaemia",
  "A family history of stomach or oesophageal cancer",
  "Persistent nausea or vomiting",
  "Unexplained weight loss",
  "Black stools or signs of gastrointestinal bleeding",
];

const preparationSteps = [
  "Avoid eating for at least 6 hours before the procedure",
  "Avoid drinking liquids for several hours beforehand",
  "Inform the doctor about any medications, allergies, or medical conditions",
  "Discuss blood-thinning medications in advance if applicable",
];

const procedureSteps = [
  "Sedation is commonly given to improve comfort",
  "The throat may be numbed with a local anaesthetic spray",
  "A thin flexible endoscope is passed through the mouth into the upper digestive tract",
  "The doctor examines the lining for inflammation, ulcers, polyps, or other abnormalities",
];

const recoverySteps = [
  "Patients are monitored during recovery from sedation",
  "Mild bloating or throat discomfort may occur temporarily",
  "Most patients can return home the same day",
  "Driving should be avoided for the remainder of the day if sedation was given",
];

const biopsisDiagnose = [
  "Inflammation or gastritis",
  "Infection with Helicobacter pylori",
  "Coeliac disease",
  "Barrett's oesophagus",
  "Polyps or abnormal tissue changes",
];

const followUpReasons = [
  "Surveillance of Barrett's oesophagus",
  "Follow-up of stomach ulcers",
  "Monitoring of gastric polyps",
  "Evaluation of persistent or worsening symptoms",
  "Surveillance in selected high-risk individuals",
];

const faqs = [
  {
    question: "Is gastroscopy safe?",
    answer: "<p class='text-base text-muted-foreground leading-relaxed mb-4'>Gastroscopy is considered a safe and commonly performed procedure. Serious complications are uncommon but may include bleeding, infection, sedation-related complications, or perforation.</p>",
  },
  {
    question: "Will I be asleep during the procedure?",
    answer: "<p class='text-base text-muted-foreground leading-relaxed mb-4'>Many patients choose sedation, which helps them feel relaxed and comfortable during the procedure.</p>",
  },
  {
    question: "Can gastroscopy detect cancer?",
    answer: "<p class='text-base text-muted-foreground leading-relaxed mb-4'>Gastroscopy can help detect inflammation, ulcers, precancerous changes, and early cancers of the upper digestive tract. Early detection often improves treatment outcomes.</p>",
  },
  {
    question: "When should I see a GERD specialist instead of treating heartburn on my own?",
    answer: "<p class='text-base text-muted-foreground leading-relaxed mb-4'>Occasional heartburn after certain meals is common and may improve with lifestyle adjustments or short-term medication. However, you should consider seeing a gastroenterologist if symptoms occur frequently, persist despite treatment, disturb sleep, interfere with daily life, or recur soon after stopping medication.</p><p class='text-base text-muted-foreground leading-relaxed mb-4'>Specialist review is also important if you develop difficulty swallowing, unexplained weight loss, vomiting, anaemia, or chest discomfort.</p>",
  },
  {
    question: "How do I know if my symptoms are caused by acid reflux, GERD, or another upper digestive condition?",
    answer: "<p class='text-base text-muted-foreground leading-relaxed mb-4'>Symptoms such as heartburn, sour regurgitation, chest discomfort, chronic throat irritation, bloating, nausea, or upper abdominal pain can overlap with several upper digestive conditions.</p><p class='text-base text-muted-foreground leading-relaxed mb-4'>These may include GERD, gastritis, peptic ulcer disease, functional dyspepsia, eosinophilic oesophagitis, or motility disorders. A gastroenterologist can help distinguish between these conditions based on your symptoms, examination findings, and appropriate investigations.</p>",
  },
  {
    question: "What tests might a gastroenterologist recommend for persistent reflux symptoms in Singapore?",
    answer: "<p class='text-base text-muted-foreground leading-relaxed mb-4'>Depending on your symptoms and clinical history, investigations may include:</p><ul class='space-y-2 mt-4 mb-4 list-disc ml-6'><li>Gastroscopy to assess the oesophagus, stomach, and duodenum.</li><li>Biopsies to look for inflammation or other underlying conditions.</li><li>Testing for <strong>Helicobacter pylori</strong>.</li><li>Ambulatory pH monitoring to assess acid exposure.</li><li>Oesophageal manometry to evaluate swallowing and oesophageal muscle function.</li></ul><p class='text-base text-muted-foreground leading-relaxed mb-4'>Not all patients require extensive testing, and investigations are tailored to the individual clinical situation.</p>",
  },
  {
    question: "If antacids or PPIs help only partly, what should I do next?",
    answer: "<p class='text-base text-muted-foreground leading-relaxed mb-4'>Partial response to antacids or proton pump inhibitors (PPIs) does not always mean the symptoms are purely acid-related. Further evaluation may be needed to assess whether symptoms are due to persistent reflux, non-acid reflux, functional heartburn, delayed stomach emptying, or another gastrointestinal condition.</p><p class='text-base text-muted-foreground leading-relaxed mb-4'>Your gastroenterologist may review medication timing and dosing, assess dietary and lifestyle triggers, or recommend further investigations.</p>",
  },
  {
    question: "What are the warning signs that reflux may be causing complications such as inflammation, narrowing, or Barrett’s oesophagus?",
    answer: "<p class='text-base text-muted-foreground leading-relaxed mb-4'>Potential warning signs include:</p><ul class='space-y-2 mt-4 mb-4 list-disc ml-6'><li>Difficulty or pain when swallowing.</li><li>Food getting stuck in the chest.</li><li>Persistent vomiting.</li><li>Gastrointestinal bleeding or black stools.</li><li>Iron deficiency anaemia.</li><li>Unexplained weight loss.</li><li>Long-standing reflux symptoms, particularly in patients with additional risk factors.</li></ul><p class='text-base text-muted-foreground leading-relaxed mb-4'>These symptoms may warrant further evaluation with gastroscopy.</p>",
  },
  {
    question: "When is reflux severe enough to need more than lifestyle changes and medication?",
    answer: "<p class='text-base text-muted-foreground leading-relaxed mb-4'>More advanced treatment may be considered if reflux symptoms remain troublesome despite appropriate lifestyle measures and medical therapy, if there are complications such as severe oesophagitis or Barrett’s oesophagus, or if symptoms significantly affect quality of life.</p><p class='text-base text-muted-foreground leading-relaxed mb-4'>In selected patients, further assessment for endoscopic or surgical anti-reflux procedures may be appropriate.</p>",
  },
];

const colonoscopyImage = "/gerd-gastric-featured.jpg";
const familyHealthImage = "/endoscope-procedure.jpg";
const drPremConsultationImage = "/dr-prem-consultation.png";

export const GerdGastricScreeningPage = () => {
  return (
    <>
    <Navigation alwaysWhite />

      <main className="pt-20">
        {/* Hero Section with Image */}
        <section className="py-12 lg:py-20 bg-gradient-to-b from-emerald-50 to-background dark:from-emerald-950/30 dark:to-background">
          <div className="container mx-auto px-2 sm:px-4">
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
                  Screen early. Prevent cancer.
                </span>
                <h1 className="text-5xl md:text-6xl font-serif font-semibold text-foreground mt-6 mb-10">
                  Gastroscopy Screening in Singapore
                </h1>
                <Button asChild size="lg" className="gap-2">
                  <a href="/#contact">
                    <Calendar className="h-5 w-5" />
                    Book a Screening
                  </a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <Image
                  src={colonoscopyImage}
                  alt="Colonoscopy screening procedure in Singapore"
                  width={1280}
                  height={720}
                  className="rounded-2xl shadow-lg w-full object-cover aspect-video"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-14 lg:py-20">
                  <div className="container mx-auto max-w-8xl px-4 sm:px-8">
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-10 text-center"
                    >
                      What Is Gastroscopy Screening?
                    </motion.h2>

                     <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="max-w-3xl mx-auto"
                    >
                        <p className="text-lg text-muted-foreground mb-6">
                            A gastroscopy, also known as an upper endoscopy, is a procedure used to examine the lining of the oesophagus, stomach, and first part of the small intestine (duodenum). During the procedure, a thin flexible tube with a camera is gently passed through the mouth to allow direct visual assessment of the upper digestive tract.
                        </p>
                        <p className="text-lg text-muted-foreground mb-6">
                            Gastroscopy is commonly performed to investigate symptoms such as:
                        </p>
                        <ul className="space-y-3">
                    {gastricSymptoms.map((symptom, index) => (
                      <li key={index} className="flex items-center gap-3 text-lg text-foreground">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0"></span>
                        {symptom}
                      </li>
                    ))}
                  </ul>
                  <p className="text-lg text-muted-foreground">
                            In some patients, gastroscopy may also be used as a screening or surveillance tool to detect conditions such as ulcers, Barrett’s oesophagus, polyps, or early cancers of the upper digestive tract.
                        </p>
                        </motion.div>
                  </div>
                </section>

                        <section className="py-14 lg:py-20 bg-muted/30">
                          <div className="container mx-auto px-2 sm:px-4">
                            <div className="grid lg:grid-cols-2 gap-10 items-center">
                              <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                              >
                                <Image
                                  src={familyHealthImage}
                                  alt="Healthy family representing preventive healthcare"
                                  width={1000}
                                  height={1000}
                                  className="rounded-2xl shadow-lg w-full object-cover aspect-square"
                                />
                              </motion.div>
                
                              <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                              >
                                <div className="flex items-center gap-3 mb-4">
                                  <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
                                    Who Should Consider Gastroscopy Screening in Singapore?
                                  </h2>
                                </div>
                                
                                {/* Average Risk */}
                                <div className="mb-6">
                                  <p className="text-lg text-muted-foreground mb-3">
                                    You may benefit from a gastroscopy if you have:
                                </p>
                                  <ul className="space-y-3">
                                    {gastroscopyBenefit.map((factor, index) => (
                                      <li key={index} className="flex items-center gap-3 text-lg text-foreground">
                                        <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                                        {factor}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                
                                <p className="text-lg text-muted-foreground mb-6">
                                 In Singapore, gastroscopy is commonly recommended for individuals with persistent upper gastrointestinal symptoms, particularly when symptoms do not improve with medication or lifestyle measures.
                                </p>
                                <div className="p-5 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800">
                  <p className="text-lg text-muted-foreground mb-6">
                                 Long-standing Gastroesophageal Reflux Disease may increase the risk of complications such as oesophagitis or Barrett’s oesophagus, a condition where the lining of the lower oesophagus changes due to chronic acid exposure.
                                </p>
                                <p className="text-lg text-muted-foreground mb-6">
                                 A gastroscopy may be recommended if you:
                                </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-3 text-lg text-foreground">
                      <span className="h-2 w-2 rounded-full bg-amber-500 shrink-0" />
                      Have reflux symptoms for many years
                    </li>
                    <li className="flex items-center gap-3 text-lg text-foreground">
                      <span className="h-2 w-2 rounded-full bg-amber-500 shrink-0" />
                     Require long-term acid suppression medication
                    </li>
                    <li className="flex items-center gap-3 text-lg text-foreground">
                      <span className="h-2 w-2 rounded-full bg-amber-500 shrink-0" />
                      Develop worsening symptoms despite treatment
                    </li>
                    <li className="flex items-center gap-3 text-lg text-foreground">
                      <span className="h-2 w-2 rounded-full bg-amber-500 shrink-0" />
                      Experience difficulty swallowing
                    </li>
                    <li className="flex items-center gap-3 text-lg text-foreground">
                      <span className="h-2 w-2 rounded-full bg-amber-500 shrink-0" />
                      Have associated weight loss, anaemia, or bleeding symptoms
                    </li>
                  </ul>
                  <p className="text-base font-medium text-amber-800 dark:text-amber-300">
                    Your doctor will assess your symptoms, age, risk factors, and overall clinical history before recommending screening.
                  </p>
                </div>
                              </motion.div>
                            </div>
                          </div>
                        </section>

                <section className="py-14 lg:py-20">
                  <div className="container mx-auto px-2 sm:px-4">
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-10 text-center"
                    >
                      How to Prepare for Your Gastroscopy
                    </motion.h2>

                     <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="max-w-3xl mx-auto"
                    >
                        <p className="text-lg text-muted-foreground mb-6">
                           Preparation for gastroscopy is usually straightforward.
                        </p>
                        <p className="text-lg text-muted-foreground mb-6">
                            Patients are generally advised to:
                        </p>
                        <ul className="space-y-3">
                    {preparationSteps.map((prep, index) => (
                      <li key={index} className="flex items-center gap-3 text-lg text-foreground">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0"></span>
                        {prep}
                      </li>
                    ))}
                  </ul>
                  <p className="text-lg text-muted-foreground">
                            Specific preparation instructions may vary depending on your medical condition and whether sedation is planned.
                       </p>
                        </motion.div>
                  </div>
                </section>

                <section className="py-14 lg:py-20">
                  <div className="container mx-auto px-2 sm:px-4">
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-10 text-center"
                    >
                      What to Expect During and After Gastroscopy
                    </motion.h2>

                     <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="max-w-3xl mx-auto"
                    >
                        <p className="text-lg text-muted-foreground mb-6">
                          Gastroscopy is usually performed as a day procedure and typically takes about 10 to 20 minutes.
                        </p>
                        <p className="text-lg text-muted-foreground mb-6">
                            <strong>During the procedure:</strong>
                        </p>
                        <ul className="space-y-3 mb-10">
                    {procedureSteps.map((procedure, index) => (
                      <li key={index} className="flex items-center gap-3 text-lg text-foreground">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0"></span>
                        {procedure}
                      </li>
                    ))}
                  </ul>
                  <p className="text-lg text-muted-foreground mb-6">
                            <strong>After the procedure:</strong>
                        </p>
                        <ul className="space-y-3 mb-6">
                    {recoverySteps.map((recover, index) => (
                      <li key={index} className="flex items-center gap-3 text-lg text-foreground">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0"></span>
                        {recover}
                      </li>
                    ))}
                  </ul>
                  <p className="text-lg text-muted-foreground mb-6">
                            Your doctor will usually discuss preliminary findings after the procedure, although biopsy results may take several days.
                        </p>
                        <h3 className="text-xl font-semibold text-foreground mb-2">Can biopsies or H. pylori testing be done during the same procedure?</h3>
                        <p className="text-lg text-muted-foreground mb-6">
                            Yes. Small tissue samples (biopsies) can be safely taken during gastroscopy if required. These biopsies are painless and may help diagnose:
                        </p>
                        <ul className="space-y-3 mb-6">
                    {biopsisDiagnose.map((bio, index) => (
                      <li key={index} className="flex items-center gap-3 text-lg text-foreground">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0"></span>
                        {bio}
                      </li>
                    ))}
                  </ul>
                  <p className="text-lg text-muted-foreground">
                            Testing for H. pylori can often be performed using biopsy samples taken during the procedure.
                </p>
                        </motion.div>
                  </div>
                </section>

                 <section className="py-14 lg:py-20">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
                  When Is Repeat Gastroscopy Needed?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Repeat gastroscopy may be recommended in certain situations, including:
                </p>
<ul className="space-y-3 mb-6">
                    {followUpReasons.map((follow, index) => (
                      <li key={index} className="flex items-center gap-3 text-lg text-foreground">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0"></span>
                        {follow}
                      </li>
                    ))}
                  </ul>
                <p className="text-lg text-muted-foreground mb-6">
                  The timing of repeat procedures depends on the underlying condition and biopsy findings.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src={drPremConsultationImage}
                  alt="Dr. Prem Thurairajah consulting with a patient about colonoscopy results"
                  width={1200}
                  height={900}
                  className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
                />
              </motion.div>
            </div>
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
                      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Get answers to common questions about colorectal cancer screening.
                      </p>
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
                              <div dangerouslySetInnerHTML={{ __html: faq.answer }}></div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </motion.div>
                  </div>
                </section>
    </main>
    </>
  );
};