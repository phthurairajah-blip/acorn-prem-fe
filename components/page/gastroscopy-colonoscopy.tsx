'use client'

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Info, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";

const ogdHeroImage = "/ogd-procedure-hero.jpeg";
const ogdBiopsyImage = "/ogd-biopsy-forceps.jpeg";
const stomachViewsImage = "/stomach-endoscopy-views.jpeg";

const safetyFaqs = [
  {
    question: "Is gastroscopy painful?",
    answer: "No, gastroscopy is not painful. You will receive sedation through an IV line which ensures you are comfortable and relaxed throughout the procedure. Most patients have no memory of the procedure afterwards.",
  },
  {
    question: "Do I need to be admitted overnight?",
    answer: "No, gastroscopy is a day procedure. You will be able to go home the same day once the sedation has worn off, usually within 1-2 hours after the procedure. You will need someone to accompany you home.",
  },
  {
    question: "How long does the procedure take?",
    answer: "The gastroscopy itself typically takes 10-15 minutes. However, you should allow 2-3 hours for the entire visit, including preparation, the procedure, and recovery from sedation.",
  },
  {
    question: "When can I eat after gastroscopy?",
    answer: "You can usually eat and drink about 1 hour after the procedure once the sedation has worn off and your swallowing reflex has returned to normal. Start with small sips of water before progressing to food.",
  },
  {
    question: "Can I drive after the procedure?",
    answer: "No, you cannot drive for 24 hours after receiving sedation. You must arrange for someone to accompany you home after the procedure. You should also avoid operating machinery or making important decisions during this time.",
  },
  {
    question: "When can I return to work?",
    answer: "Most patients can return to work the day after their gastroscopy. However, if you have received sedation, you should rest for the remainder of that day and avoid any strenuous activities.",
  },
];

const gastroscopyIndications = [
  "Persistent heartburn or acid reflux not responding to medication",
  "Difficulty swallowing (dysphagia)",
  "Unexplained nausea, vomiting, or abdominal pain",
  "Suspected peptic ulcer disease",
  "Investigation of anaemia or iron deficiency",
  "Surveillance of Barrett's oesophagus",
  "Screening for gastric cancer in high-risk individuals",
];

const preparationSteps = [
  {
    title: "Medication Review",
    description: "Inform your doctor of all medications. Blood thinners may need to be stopped temporarily.",
  },
  {
    title: "Fasting",
    description: "No food or drink for at least 6 hours before the procedure.",
  },
];

const whatToExpect = [
  {
    phase: "Before",
    details: "You will be given sedation through an IV line to ensure comfort. Your vital signs will be monitored throughout.",
  },
  {
    phase: "During",
    details: "A thin, flexible tube with a camera is passed through the mouth to examine the oesophagus, stomach, and duodenum. The procedure takes 10-15 minutes.",
  },
  {
    phase: "After",
    details: "You will rest in the recovery area until the sedation wears off. You may experience mild bloating. Results are usually discussed the same day.",
  },
];

const GastroscopyColonoscopy = () => {
  return (
    <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={ogdHeroImage}
              alt="Gastroscopy procedure being performed on patient"
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
                Diagnostic & Therapeutic Endoscopy
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mt-3 mb-6">
                Gastroscopy (OGD)
              </h1>
              <p className="text-lg text-muted-foreground leading-loose mb-8">
                Gastroscopy, also known as OGD (oesophago-gastro-duodenoscopy) or upper endoscopy, is a minimally invasive 
                procedure that allows direct visualisation of the upper digestive tract. This procedure is 
                essential for diagnosing conditions, performing biopsies, and treating various upper GI disorders.
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


        {/* What is Section */}
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
                Understanding Gastroscopy
              </h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground mb-10 leading-loose">
                <p>
                  <strong className="text-foreground">Gastroscopy (OGD)</strong> involves passing a thin, flexible 
                  endoscope through the mouth to examine the oesophagus (food pipe), stomach, and duodenum 
                  (first part of the small intestine). It allows for direct visualisation, biopsy collection, 
                  and therapeutic interventions such as treating bleeding ulcers or dilating strictures.
                </p>
              </div>

              {/* Indications */}
              <div className="bg-background rounded-xl p-6 border border-border mb-10">
                <h3 className="text-xl font-semibold text-foreground mb-4">Indications for Gastroscopy</h3>
                <ul className="space-y-3">
                  {gastroscopyIndications.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Preparation */}
        <section className="py-16 lg:py-20 bg-amber-50 dark:bg-amber-950/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-6">
                <Info className="h-7 w-7 text-amber-600" />
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
                  Preparation Guidelines
                </h2>
              </div>
              <p className="text-base text-muted-foreground mb-10 leading-relaxed">
                Proper preparation is essential for a safe and successful procedure. You will receive 
                detailed instructions specific to your procedure.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {preparationSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="bg-background border border-amber-200 dark:border-amber-800/30 rounded-xl p-6"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 font-semibold text-sm">
                        {index + 1}
                      </span>
                      <h4 className="font-semibold text-foreground">{step.title}</h4>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={ogdBiopsyImage}
                  alt="Endoscopic biopsy forceps used during gastroscopy"
                  className="w-full h-64 object-cover"
                  width={1280}
                  height={720}
                />
                <div className="p-4 bg-background">
                  <p className="text-sm text-muted-foreground text-center">Biopsy forceps for tissue sampling during gastroscopy</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={stomachViewsImage}
                  alt="Endoscopic views of stomach anatomy showing different regions"
                  className="w-full h-64 object-cover"
                  width={1280}
                  height={720}
                />
                <div className="p-4 bg-background">
                  <p className="text-sm text-muted-foreground text-center">High-definition endoscopic views of stomach anatomy</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
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
                <Clock className="h-7 w-7 text-primary" />
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
                  What to Expect
                </h2>
              </div>

              <div className="space-y-4">
                {whatToExpect.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="bg-background border border-border rounded-xl p-6"
                  >
                    <h4 className="font-semibold text-foreground text-lg mb-2">{item.phase}</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">{item.details}</p>
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
                Common questions about gastroscopy safety and what to expect.
              </p>

              <Accordion type="single" collapsible className="space-y-4">
                {safetyFaqs.map((faq, index) => (
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
                Schedule Your Procedure
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                If you have symptoms requiring investigation or would like to discuss whether gastroscopy is appropriate for you, 
                book a consultation to discuss your needs.
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

        {/* Disclaimer */}
        <section className="py-8 bg-muted/50">
          <div className="container mx-auto px-4">
            <p className="text-xs text-muted-foreground text-center max-w-3xl mx-auto">
              <strong>Disclaimer:</strong> The information provided on this page is for educational purposes only and 
              is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek 
              the advice of your physician or other qualified health provider with any questions you may have regarding 
              a medical procedure.
            </p>
          </div>
        </section>
      </main>
  )
}

export default GastroscopyColonoscopy