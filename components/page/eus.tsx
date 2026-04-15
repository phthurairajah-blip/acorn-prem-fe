'use client'


import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Calendar, Info, Eye, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
const eusImage = "/eus-pancreas.jpeg";
const eusFnaImage = "/eus-pancreas.jpeg";

const eusFaqs = [
  {
    question: "Is EUS painful?",
    answer: "No, EUS is performed under sedation, similar to a gastroscopy. You will be comfortable and relaxed throughout the procedure and most patients have no memory of it afterwards.",
  },
  {
    question: "Do I need to be admitted overnight?",
    answer: "No, EUS is typically a day procedure. You can go home the same day once the sedation has worn off, usually within 1-2 hours after the procedure.",
  },
  {
    question: "How long does the procedure take?",
    answer: "EUS typically takes 30-60 minutes depending on the complexity and whether biopsies are performed. You should allow 3-4 hours for the entire visit including preparation and recovery.",
  },
  {
    question: "When will I get the biopsy results?",
    answer: "If a biopsy or FNA is performed, results typically take 5-7 working days. Your doctor will arrange a follow-up appointment to discuss the findings with you.",
  },
  {
    question: "Can I drive after the procedure?",
    answer: "No, you cannot drive for 24 hours after receiving sedation. You must arrange for someone to accompany you home after the procedure.",
  },
  {
    question: "Is EUS better than CT scan?",
    answer: "EUS provides higher resolution images of structures close to the GI tract, particularly the pancreas. It also allows tissue sampling in the same session. CT and EUS often complement each other in diagnosis.",
  },
];

const diagnosticIndications = [
  "Staging of oesophageal, gastric, pancreatic, and rectal cancers",
  "Evaluation of pancreatic cysts and masses",
  "Assessment of bile duct abnormalities",
  "Investigation of submucosal GI tumours",
  "Evaluation of chronic pancreatitis",
  "Detection of small gallstones missed by other imaging",
  "Assessment of lymph nodes for staging or biopsy",
];

const therapeuticApplications = [
  {
    name: "EUS-Guided Fine Needle Aspiration (FNA)",
    description: "Sampling of pancreatic masses, lymph nodes, and other lesions for cytological diagnosis.",
  },
  {
    name: "EUS-Guided Fine Needle Biopsy (FNB)",
    description: "Core tissue sampling for histological diagnosis, particularly useful for certain tumour types.",
  },
  {
    name: "EUS-Guided Drainage",
    description: "Drainage of pancreatic pseudocysts and walled-off necrosis through the stomach wall.",
  },
  {
    name: "Coeliac Plexus Block/Neurolysis",
    description: "Pain management for patients with chronic pancreatitis or pancreatic cancer.",
  },
  {
    name: "EUS-Guided Biliary Drainage",
    description: "Alternative drainage route when ERCP is not possible or has failed.",
  },
];

const advantages = [
  "High-resolution imaging of structures close to the GI tract",
  "Ability to visualise and biopsy lesions not accessible by other methods",
  "Real-time guidance for targeted needle placement",
  "No radiation exposure (unlike CT scans)",
  "Can be combined with ERCP for thorough clinical evaluation",
  "Minimally invasive alternative to surgical biopsy",
];

const Eus = () => {
  return (
    <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={eusImage}
              alt="Endoscopic Ultrasound procedure"
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
                Specialized Diagnostic Imaging
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mt-3 mb-6">
                Endoscopic Ultrasound
              </h1>
              <p className="text-xl text-muted-foreground mb-2">
                (EUS)
              </p>
              <p className="text-lg text-muted-foreground leading-loose mb-8">
                Endoscopic Ultrasound combines endoscopy with high-frequency ultrasound to obtain detailed 
                images of the digestive tract and surrounding organs. It provides superior imaging of the 
                pancreas, bile ducts, and deep structures that cannot be adequately visualised by other methods.
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

        {/* What is EUS */}
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
                What is Endoscopic Ultrasound?
              </h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground mb-10 leading-loose">
                <p>
                  EUS uses a special endoscope with an ultrasound probe at its tip. When positioned in 
                  the stomach or duodenum, the ultrasound waves can image structures that are very close 
                  to the GI tract, including the pancreas, bile ducts, gallbladder, liver, and surrounding 
                  lymph nodes.
                </p>
                <p>
                  Because the ultrasound probe is inside the body and close to these organs, EUS provides 
                  high-resolution images of internal structures. This is utilized for the detection of 
                  small lesions and for accurate cancer staging.
                </p>
              </div>

              {/* Diagnostic Indications */}
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/30">
                <div className="flex items-center gap-2 mb-4">
                  <Eye className="h-5 w-5 text-emerald-600" />
                  <h3 className="text-xl font-semibold text-foreground">Diagnostic Indications</h3>
                </div>
                <ul className="space-y-3">
                  {diagnosticIndications.map((item, index) => (
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

        {/* Therapeutic Applications */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
                Therapeutic Applications
              </h2>
              <p className="text-base text-muted-foreground mb-10 leading-relaxed">
                Beyond diagnosis, EUS enables a range of targeted therapeutic procedures 
                guided by real-time ultrasound imaging.
              </p>

              <div className="space-y-4">
                {therapeuticApplications.map((procedure, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="bg-background border border-border rounded-xl p-6"
                  >
                    <h4 className="font-semibold text-foreground text-lg mb-2">{procedure.name}</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">{procedure.description}</p>
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={eusImage}
                  alt="Endoscopic Ultrasound procedure showing ultrasound probe"
                  className="w-full h-64 object-cover"
                  width={1280}
                  height={720}
                />
                <div className="p-4 bg-background">
                  <p className="text-sm text-muted-foreground text-center">EUS imaging of pancreatic structures</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={eusFnaImage}
                  alt="EUS-guided Fine Needle Aspiration of pancreatic mass"
                  className="w-full h-64 object-cover"
                  width={1280}
                  height={720}
                />
                <div className="p-4 bg-background">
                  <p className="text-sm text-muted-foreground text-center">EUS-guided Fine Needle Aspiration (FNA)</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Advantages */}
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
                <Info className="h-7 w-7 text-primary" />
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
                  Advantages of EUS
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="flex items-start gap-3 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800/30"
                  >
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-base text-foreground leading-relaxed">{advantage}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Procedure */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
                What to Expect
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-loose">
                <p>
                  EUS is performed under sedation, similar to a gastroscopy. The procedure typically 
                  takes 30-60 minutes depending on the complexity and whether biopsies are performed.
                </p>
                <ul className="space-y-2 text-base">
                  <li className="leading-relaxed"><strong className="text-foreground">Preparation:</strong> Fasting for at least 6 hours before the procedure</li>
                  <li className="leading-relaxed"><strong className="text-foreground">During:</strong> You will be sedated and comfortable throughout</li>
                  <li className="leading-relaxed"><strong className="text-foreground">After:</strong> Rest in recovery until sedation wears off (1-2 hours)</li>
                  <li className="leading-relaxed"><strong className="text-foreground">Results:</strong> Imaging findings are usually discussed the same day; biopsy results take several days</li>
                </ul>
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
                Common questions about EUS and what to expect.
              </p>

              <Accordion type="single" collapsible className="space-y-4">
                {eusFaqs.map((faq, index) => (
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
                Specialized EUS Services
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                If you have been referred for EUS or have a pancreatic or biliary condition requiring 
                detailed evaluation, schedule a consultation to discuss your needs.
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

export default Eus
