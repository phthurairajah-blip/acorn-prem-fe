'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { RelatedConditions } from "@/components/RelatedConditions";
import { ArrowLeft, CheckCircle, Calendar, AlertTriangle, Clock, Zap, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const bravoCapsuleImage = "/bravo-ph-capsule.jpg";
const bravoFaqs = [
  {
    question: "Is the Bravo capsule procedure painful?",
    answer: "The capsule is placed during a brief gastroscopy under sedation, so you will not feel pain during placement. Some patients experience mild chest discomfort or a sensation of something in the throat for 1-2 days, which usually resolves quickly.",
  },
  {
    question: "Do I need to be admitted overnight?",
    answer: "No, the Bravo capsule placement is a day procedure. After the gastroscopy sedation wears off (1-2 hours), you can go home and continue your normal activities during the monitoring period.",
  },
  {
    question: "Can I eat normally during the monitoring period?",
    answer: "Yes, you should eat and drink normally during the monitoring period. This helps provide the most accurate picture of your typical acid reflux patterns in your daily life.",
  },
  {
    question: "What happens to the capsule after the test?",
    answer: "The capsule naturally detaches from the oesophagus within 7-10 days and passes harmlessly through your digestive system. You may not even notice when this happens.",
  },
  {
    question: "Can I have an MRI with the Bravo capsule in place?",
    answer: "No, you should not have an MRI scan for 30 days after capsule placement. Inform any healthcare providers that you have recently had a Bravo capsule placed.",
  },
  {
    question: "How accurate is Bravo pH monitoring?",
    answer: "Bravo pH monitoring is considered the gold standard for objectively measuring acid reflux. The extended monitoring period (48-96 hours) provides more comprehensive data than traditional 24-hour catheter studies.",
  },
];

const relatedProcedures = [
  {
    title: "Heartburn",
    description: "Expert treatment of acid reflux, heartburn, and related oesophageal conditions.",
    link: "/gerd-heartburn",
  },
  {
    title: "Gastroscopy (OGD)",
    description: "Upper GI endoscopy for diagnosis and treatment of oesophageal and stomach conditions.",
    link: "/gastroscopy-colonoscopy",
  },
  {
    title: "Video Capsule Endoscopy",
    description: "Swallowable camera capsule for non-invasive imaging of the small intestine.",
    link: "/video-capsule-endoscopy",
  },
];

const indications = [
  "Persistent heartburn despite medication",
  "Atypical reflux symptoms (chronic cough, hoarseness, chest pain)",
  "Evaluation before anti-reflux surgery",
  "Assessment of treatment response",
  "Differentiating reflux from functional heartburn",
  "Patients with normal endoscopy but ongoing symptoms",
];

const advantages = [
  {
    icon: Zap,
    title: "Wireless & Catheter-Free",
    description: "No uncomfortable nasal catheter. The tiny capsule transmits data wirelessly to a small recorder worn on your belt.",
  },
  {
    icon: Clock,
    title: "Extended Monitoring",
    description: "Records pH data for 48-96 hours, providing more comprehensive data than traditional 24-hour catheter studies.",
  },
  {
    icon: CheckCircle,
    title: "Normal Daily Activities",
    description: "Eat, drink, work, and sleep normally during the monitoring period without a tube in your nose.",
  },
  {
    icon: CheckCircle,
    title: "Gold Standard Accuracy",
    description: "Provides precise measurement of acid exposure time, number of reflux episodes, and symptom correlation.",
  },
];

const preparationSteps = [
  {
    title: "Stop PPIs",
    description: "Stop proton pump inhibitors (e.g., omeprazole, pantoprazole) 7 days before the test, unless otherwise instructed.",
  },
  {
    title: "Stop H2 Blockers",
    description: "Stop H2 blockers (e.g., famotidine, ranitidine) 2-3 days before the test.",
  },
  {
    title: "Stop Antacids",
    description: "Stop antacids 24 hours before the procedure.",
  },
  {
    title: "Fasting",
    description: "Fast for at least 6 hours before the procedure (usually done in the morning).",
  },
  {
    title: "Inform Your Doctor",
    description: "Tell your doctor about all medications, allergies, and any difficulty swallowing.",
  },
];

const procedureSteps = [
  {
    step: 1,
    title: "Gastroscopy",
    description: "A brief gastroscopy (OGD) is performed under sedation to visualise the oesophagus and stomach.",
  },
  {
    step: 2,
    title: "Capsule Placement",
    description: "The Bravo capsule (about the size of a gel capsule) is attached to the oesophageal wall using a small suction device.",
  },
  {
    step: 3,
    title: "Receiver Setup",
    description: "You are given a small receiver to wear on your belt or keep nearby. The capsule transmits pH data wirelessly.",
  },
  {
    step: 4,
    title: "Symptom Diary",
    description: "You record meals, sleep times, and any symptoms by pressing buttons on the receiver.",
  },
  {
    step: 5,
    title: "Return Receiver",
    description: "After 48-96 hours, you return the receiver. The capsule naturally detaches and passes in your stool.",
  },
];

const whatItMeasures = [
  {
    title: "Acid Exposure Time",
    description: "Percentage of time oesophageal pH is below 4 (acidic). Normal is less than 4-6% of total time.",
  },
  {
    title: "Number of Reflux Episodes",
    description: "Total count of acid reflux events and how long each episode lasts.",
  },
  {
    title: "DeMeester Score",
    description: "A composite score combining multiple pH parameters. A score above 14.7 indicates abnormal acid reflux.",
  },
  {
    title: "Symptom Correlation",
    description: "Links your recorded symptoms to actual reflux events, helping determine if symptoms are truly reflux-related.",
  },
];

const sideEffects = [
  {
    title: "Chest Discomfort",
    description: "Mild chest discomfort or sensation of something in the throat is common and usually settles within 1-2 days.",
    severity: "common",
  },
  {
    title: "Difficulty Swallowing",
    description: "Some patients experience mild difficulty swallowing initially. This typically resolves quickly.",
    severity: "common",
  },
  {
    title: "Premature Detachment",
    description: "The capsule may detach earlier than expected in some cases, potentially shortening the monitoring period.",
    severity: "uncommon",
  },
  {
    title: "Capsule Retention",
    description: "Very rarely, the capsule may not detach on its own and require endoscopic removal.",
    severity: "rare",
  },
];

const BravoCapsule = () => {
  return (
    <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={bravoCapsuleImage}
              alt="Bravo pH capsule monitoring system"
              className="w-full h-full object-cover"
              width={1280}
              height={720}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <Link
              href="/#procedures"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Procedures
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="text-emerald-600 dark:text-emerald-400 text-sm font-medium tracking-widest uppercase">
                Diagnostic Procedure
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mt-3 mb-6">
                Bravo Capsule
              </h1>
              <p className="text-xl text-muted-foreground mb-2">
                Wireless pH Monitoring
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The Bravo capsule is a revolutionary wireless system for measuring acid reflux in the 
                oesophagus. Unlike traditional catheter-based pH tests, this tiny capsule attaches 
                temporarily to your oesophagus and transmits pH data wirelessly, allowing you to 
                go about your normal activities during the test.
              </p>
              <Button asChild size="lg" className="gap-2">
                <Link href="/#contact">
                  <Calendar className="h-5 w-5" />
                  Book a Consultation
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Why Bravo Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
                When is Bravo pH Monitoring Needed?
              </h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground mb-10 leading-loose">
                <p>
                  Bravo pH monitoring is the gold standard for objectively measuring acid reflux. It helps 
                  confirm or exclude gastro-oesophageal reflux disease (GERD) when the diagnosis is uncertain, 
                  and provides crucial information for treatment planning.
                </p>
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/30">
                <h3 className="text-xl font-semibold text-foreground mb-4">Indications</h3>
                <ul className="space-y-3">
                  {indications.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed">
                      <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-10 text-center">
                Advantages of Bravo Capsule
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="bg-background border border-border rounded-xl p-6"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                        <advantage.icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <h4 className="font-semibold text-foreground text-lg">{advantage.title}</h4>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed">{advantage.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Preparation Section */}
        <section className="py-16 lg:py-20 bg-blue-50/50 dark:bg-blue-950/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-8">
                <Clock className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
                  Preparing for Your Test
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {preparationSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="bg-background border border-blue-200 dark:border-blue-800/30 rounded-xl p-6"
                  >
                    <h4 className="font-semibold text-foreground text-lg mb-2">{step.title}</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Procedure Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
                What Happens During the Procedure?
              </h2>
              <p className="text-base text-muted-foreground mb-10 leading-relaxed">
                The Bravo capsule is placed during a brief gastroscopy procedure under sedation. 
                The entire placement takes only a few minutes.
              </p>

              <div className="space-y-6">
                {procedureSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{step.step}</span>
                    </div>
                    <div className="flex-1 bg-background border border-border rounded-xl p-5">
                      <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                      <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* What It Measures Section */}
        <section className="py-16 lg:py-20 bg-emerald-50 dark:bg-emerald-950/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
                Understanding Your Results
              </h2>
              <p className="text-base text-muted-foreground mb-10 leading-relaxed">
                The Bravo system provides detailed analysis of your acid reflux patterns over the monitoring period.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {whatItMeasures.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="bg-background border border-emerald-200 dark:border-emerald-800/30 rounded-xl p-6"
                  >
                    <h4 className="font-semibold text-foreground text-lg mb-2">{item.title}</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Side Effects Section */}
        <section className="py-16 lg:py-20 bg-amber-50/50 dark:bg-amber-950/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-8">
                <AlertTriangle className="h-8 w-8 text-amber-600" />
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
                  Possible Side Effects
                </h2>
              </div>

              <div className="space-y-4">
                {sideEffects.map((effect, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className={`bg-background rounded-xl p-5 border ${
                      effect.severity === "common" 
                        ? "border-amber-200 dark:border-amber-800/30" 
                        : effect.severity === "uncommon"
                        ? "border-orange-200 dark:border-orange-800/30"
                        : "border-red-200 dark:border-red-800/30"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        effect.severity === "common" 
                          ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" 
                          : effect.severity === "uncommon"
                          ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                          : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                      }`}>
                        {effect.severity === "common" ? "Common" : effect.severity === "uncommon" ? "Uncommon" : "Rare"}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{effect.title}</h4>
                        <p className="text-base text-muted-foreground leading-relaxed">{effect.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="h-7 w-7 text-primary" />
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
                  Frequently Asked Questions
                </h2>
              </div>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                Common questions about Bravo capsule pH monitoring.
              </p>

              <Accordion type="single" collapsible className="space-y-4">
                {bravoFaqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="bg-background border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-5">
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
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
                Get Accurate Reflux Diagnosis
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                If you have persistent heartburn symptoms or need objective confirmation of acid reflux, 
                schedule a consultation to discuss Bravo pH monitoring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/#contact">Book Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="tel:+6565179231">Call Now</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <RelatedConditions conditions={relatedProcedures} />

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

export default BravoCapsule