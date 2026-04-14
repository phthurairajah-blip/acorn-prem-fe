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

const colonoscopyImage = "/colonoscopy-procedure-new.jpeg";
const familyHealthImage = "/family-health.jpg";
const drPremConsultationImage = "/dr-prem-consultation.png";

const relatedConditions = [
  {
    title: "GERD & Gastric Cancer Screening",
    description: "Acid reflux treatment and endoscopic surveillance for stomach cancer risk.",
    link: "/gerd-gastric-cancer-screening",
  },
  {
    title: "Liver & Pancreatic Cancer Screening",
    description: "Comprehensive imaging and tumour marker evaluation for early diagnosis.",
    link: "/liver-pancreatic-cancer-screening",
  },
];

const riskFactors = [
  "Age 45+ years",
  "Sedentary lifestyle or obesity",
  "Smoking or heavy alcohol use",
];

const screeningBenefits = [
  { icon: Shield, title: "Early Detection", desc: "Find cancer at treatable stages" },
  { icon: CheckCircle, title: "Prevention", desc: "Remove polyps before they turn cancerous" },
  { icon: Heart, title: "Peace of Mind", desc: "68% reduction in cancer mortality" },
];

const colonoscopySteps = [
  {
    step: 1,
    title: "Consultation",
    desc: "Meet your specialist to discuss your health history, symptoms, and screening needs. You'll receive clear instructions for preparation.",
  },
  {
    step: 2,
    title: "Bowel Preparation",
    desc: "Follow a special diet 1-2 days before and take prescribed laxatives to cleanse the bowel. This ensures clear visibility.",
  },
  {
    step: 3,
    title: "Day of Procedure",
    desc: "The colonoscopy typically takes 20-30 minutes. You'll receive sedation for comfort and won't feel any discomfort during the procedure.",
  },
  {
    step: 4,
    title: "During Colonoscopy",
    desc: "A flexible scope with a camera examines your entire colon. If polyps are found, they can usually be removed immediately.",
  },
  {
    step: 5,
    title: "Recovery",
    desc: "Rest in the recovery area for 30-60 minutes as sedation wears off. You'll need someone to accompany you home.",
  },
  {
    step: 6,
    title: "Results & Follow-up",
    desc: "Your specialist will discuss preliminary findings on the same day. Detailed pathology results (if applicable) within 1-2 weeks.",
  },
];

const faqs = [
  {
    question: "At what age should I start screening for colorectal cancer?",
    answer: "Screening is generally recommended starting at age 45 for individuals with average risk. However, if you have a family history of colorectal cancer or polyps, inflammatory bowel disease, or other risk factors, screening may be recommended earlier, sometimes as young as 40 or even earlier.",
  },
  {
    question: "Is colonoscopy painful?",
    answer: "Colonoscopy is performed under sedation, so most patients experience minimal to no discomfort during the procedure. You may feel some bloating or mild cramping afterwards, but this typically resolves quickly. The sedation ensures you remain comfortable throughout.",
  },
  {
    question: "How long does a colonoscopy take?",
    answer: "The colonoscopy procedure itself typically takes 20-45 minutes. However, you should plan to be at the clinic for about 2-3 hours to allow time for preparation, the procedure, and recovery from sedation.",
  },
  {
    question: "How often should I have a colonoscopy?",
    answer: "For average-risk individuals with normal results, colonoscopy is typically recommended every 10 years. If polyps are found, more frequent surveillance (every 3-5 years) may be advised. Those with higher risk factors may need more frequent screening as determined by their doctor.",
  },
  {
    question: "What is the difference between FIT test and colonoscopy?",
    answer: "The FIT (Faecal Immunochemical Test) is a non-invasive stool test that detects hidden blood, which may indicate polyps or cancer. Colonoscopy is a direct visual examination that can both detect and remove polyps. FIT is a screening tool done annually, while colonoscopy is a primary diagnostic method for diagnosis and prevention.",
  },
  {
    question: "Is colorectal cancer screening covered by insurance or Medisave?",
    answer: "In Singapore, colonoscopy for cancer screening is generally claimable under Medisave. Most private insurance plans also cover screening colonoscopies. We recommend checking with your insurer for specific coverage details. Our clinic can provide itemised bills for your claims.",
  },
  {
    question: "Can I go back to work after a colonoscopy?",
    answer: "Due to the sedation used during the procedure, you should not drive or operate machinery for 24 hours after a colonoscopy. Most patients take the day off and return to normal activities the following day. Plan to have someone accompany you home.",
  },
  {
    question: "What happens if polyps are found during colonoscopy?",
    answer: "If polyps are discovered, they are typically removed during the same procedure using specialised instruments—a process called polypectomy. The removed tissue is sent for laboratory analysis to determine if it is benign, precancerous, or cancerous. Based on the results, your doctor will advise on follow-up care.",
  },
];

export const BowelCancerScreeningPage = () => {
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
                <h1 className="text-5xl md:text-6xl font-serif font-semibold text-foreground mt-2 mb-4">
                  Bowel (Colorectal) Cancer Screening
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  Many bowel cancers start as small growths (polyps) that can be removed before they turn into cancer. Screening helps detect early disease—often before symptoms appear.
                </p>
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
                  alt="Colonoscopy procedure"
                  width={1280}
                  height={720}
                  className="rounded-2xl shadow-lg w-full object-cover aspect-video"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits - Visual Cards */}
        <section className="py-14 lg:py-20">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-10 text-center"
            >
              Why Get Screened?
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {screeningBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center p-6 bg-card rounded-xl border border-border"
                >
                  <benefit.icon className="h-10 w-10 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-base text-muted-foreground">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Risk Factors with Image */}
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
                  <AlertTriangle className="h-6 w-6 text-amber-600" />
                  <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
                    Are You at Risk?
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Screening is recommended at age 45, or earlier if you have risk factors.
                </p>
                
                {/* Average Risk */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Average Risk Factors</h3>
                  <ul className="space-y-3">
                    {riskFactors.map((factor, index) => (
                      <li key={index} className="flex items-center gap-3 text-lg text-foreground">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                        {factor}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* High Risk */}
                <div className="p-5 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800">
                  <h3 className="text-xl font-semibold text-amber-700 dark:text-amber-400 mb-2">
                    High Risk – Consider Earlier Screening
                  </h3>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-3 text-lg text-foreground">
                      <span className="h-2 w-2 rounded-full bg-amber-500 shrink-0" />
                      Family history of colorectal cancer (parent, sibling, or child)
                    </li>
                    <li className="flex items-center gap-3 text-lg text-foreground">
                      <span className="h-2 w-2 rounded-full bg-amber-500 shrink-0" />
                      Personal history of polyps or inflammatory bowel disease
                    </li>
                    <li className="flex items-center gap-3 text-lg text-foreground">
                      <span className="h-2 w-2 rounded-full bg-amber-500 shrink-0" />
                      Hereditary syndromes (Lynch syndrome, FAP)
                    </li>
                  </ul>
                  <p className="text-base font-medium text-amber-800 dark:text-amber-300">
                    <strong>Recommendation:</strong> Screen from age 40 or 10 years before earliest family diagnosis
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What to Expect - Accordion with Image */}
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
                  What to Expect from a Colonoscopy
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Understanding the process helps you feel prepared and confident. Here&apos;s what happens at each step.
                </p>
                <Accordion type="single" collapsible className="w-full space-y-3">
                  {colonoscopySteps.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`step-${index}`}
                      className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border-none px-4"
                    >
                      <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-emerald-500 text-white font-semibold shrink-0">
                            {item.step}
                          </div>
                          <span className="font-semibold text-lg text-foreground text-left">{item.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pl-14 pb-4 text-base text-muted-foreground">
                        {item.desc}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <p className="text-muted-foreground mt-6 italic text-base">
                  Most patients report the procedure was easier than expected
                </p>
                <Link
                  href="/colonoscopy"
                  className="inline-flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline mt-4"
                >
                  Learn more about Colonoscopy →
                </Link>
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
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-14 lg:py-20 bg-primary/5">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
                Take the First Step
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Don&apos;t wait for symptoms. Schedule your screening today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="/#contact">Book Appointment</a>
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
            <p className="text-sm text-muted-foreground text-center max-w-3xl mx-auto">
              <strong>Disclaimer:</strong> This information is for educational purposes only and is not a substitute for professional medical advice.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};
