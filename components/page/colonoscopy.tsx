'use client'

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Info, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";

const colonoscopyImage = "/colonoscopy-procedure-new.jpeg";
const polypectomyImage = "/polypectomy.jpg";
const aiColonoscopyImage = "/ai-colonoscopy-detection.jpeg";

const colonoscopyFaqs = [
  {
    question: "Is colonoscopy painful?",
    answer: "No, colonoscopy is not painful. You will receive sedation through an IV line which ensures you are comfortable and relaxed throughout the procedure.",
  },
  {
    question: "Do I need to be admitted overnight?",
    answer: "No, colonoscopy is a day procedure. You will be able to go home the same day once the sedation has worn off, usually within 1-2 hours after the procedure. You will need someone to accompany you home.",
  },
  {
    question: "How long does the procedure take?",
    answer: "The colonoscopy itself typically takes 20-45 minutes, depending on the findings. However, you should allow 3-4 hours for the entire visit, including preparation, the procedure, and recovery from sedation.",
  },
  {
    question: "Why is bowel preparation so important?",
    answer: "Good bowel preparation is essential for a successful colonoscopy. A clean colon allows the doctor to see the lining clearly and detect any abnormalities. Poor preparation may result in missed lesions or the need to repeat the procedure.",
  },
  {
    question: "Can I drive after the procedure?",
    answer: "No, you cannot drive for 24 hours after receiving sedation. You must arrange for someone to accompany you home after the procedure. You should also avoid operating machinery or making important decisions during this time.",
  },
  {
    question: "When can I return to work?",
    answer: "Most patients can return to work the day after their colonoscopy. However, if you have received sedation, you should rest for the remainder of that day and avoid any strenuous activities.",
  },
];

const colonoscopyIndications = [
  "Colorectal cancer screening (recommended from age 45, or earlier with family history)",
  "Investigation of blood in stools or rectal bleeding",
  "Persistent change in bowel habits",
  "Unexplained abdominal pain or weight loss",
  "Surveillance of inflammatory bowel disease",
  "Follow-up after polyp removal",
  "Investigation of iron deficiency anaemia",
];

const preparationSteps = [
  {
    title: "Diet Modification",
    description: "Low-residue diet 2-3 days before, then clear fluids only the day before the procedure.",
  },
  {
    title: "Bowel Preparation",
    description: "You will be prescribed a bowel preparation solution to cleanse the colon. Follow instructions carefully for optimal diagnostic results.",
  },
  {
    title: "Medication Review",
    description: "Inform your doctor of all medications. Blood thinners may need to be stopped temporarily.",
  },
  {
    title: "Fasting",
    description: "No food or drink for at least 12 hours before the procedure.",
  },
];

const whatToExpect = [
  {
    phase: "Before",
    details: "You will be given sedation through an IV line to ensure comfort. Your vital signs will be monitored throughout.",
  },
  {
    phase: "During",
    details: "A flexible tube with a camera is inserted through the rectum to examine the entire colon. Any polyps found can be removed during the procedure. It typically takes 20-45 minutes.",
  },
  {
    phase: "After",
    details: "You will rest in the recovery area until the sedation wears off. You may experience mild bloating or gas. Results are usually discussed the same day.",
  },
];
export const Colonoscopy = () => {
  return (
    
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={colonoscopyImage}
              alt="Colonoscopy procedure"
              className="w-full h-full object-cover"
              width={1280}
              height={720}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
          </div>

          <div className="container mx-auto px-2 sm:px-4 relative z-10">
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
                Colonoscopy
              </h1>
              <p className="text-lg text-muted-foreground leading-loose mb-8">
                Colonoscopy is the primary clinical modality for examining the large intestine and is essential for 
                colorectal cancer screening. This minimally invasive procedure allows for direct visualisation, 
                biopsy collection, and removal of precancerous polyps.
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
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
                Understanding Colonoscopy
              </h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground mb-10 leading-loose">
                <p>
                  <strong className="text-foreground">Colonoscopy</strong> uses a flexible instrument 
                  inserted through the rectum to examine the entire large intestine (colon) and the end of 
                  the small intestine (terminal ileum). It is the established diagnostic tool for colorectal cancer screening 
                  and allows for the detection and removal of precancerous polyps, potentially preventing 
                  cancer from developing.
                </p>
                <p>
                  The procedure is performed under sedation for comfort and typically takes 20-45 minutes. 
                  High-definition cameras provide clear visualization of the bowel lining, allowing 
                  detection of even small abnormalities.
                </p>
              </div>

              {/* Indications */}
              <div className="bg-background rounded-xl p-6 border border-border mb-10">
                <h3 className="text-xl font-semibold text-foreground mb-4">Indications for Colonoscopy</h3>
                <ul className="space-y-3">
                  {colonoscopyIndications.map((item, index) => (
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
          <div className="container mx-auto px-2 sm:px-4">
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
                Proper bowel preparation is essential for a successful colonoscopy. A clean bowel allows 
                for optimal visualisation and accurate diagnosis. You will receive detailed instructions 
                specific to your procedure.
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
          <div className="container mx-auto px-2 sm:px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={polypectomyImage}
                  alt="Polypectomy procedure during colonoscopy"
                  className="w-full h-64 object-cover"
                  width={1280}
                  height={720}
                />
                <div className="p-4 bg-background">
                  <p className="text-sm text-muted-foreground text-center">Polypectomy: Removal of a polyp during colonoscopy</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={aiColonoscopyImage}
                  alt="AI-assisted detection during colonoscopy showing polyp identification"
                  className="w-full h-64 object-cover"
                  width={1280}
                  height={720}
                />
                <div className="p-4 bg-background">
                  <p className="text-sm text-muted-foreground text-center">AI-assisted polyp detection during colonoscopy</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
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
          <div className="container mx-auto px-2 sm:px-4">
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
                Common questions about colonoscopy and what to expect.
              </p>

              <Accordion type="single" collapsible className="space-y-4">
                {colonoscopyFaqs.map((faq, index) => (
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
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
                Schedule Your Colonoscopy
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Whether you need a screening colonoscopy or have symptoms requiring investigation, 
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
          <div className="container mx-auto px-2 sm:px-4">
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
