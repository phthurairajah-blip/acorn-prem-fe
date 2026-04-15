'use client'

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, AlertTriangle, Calendar, Info, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";


const cArmTheater = "/c-arm-theater.jpeg";
const ercpStoneRemoval = "/ercp-stone-removal.jpeg";
const ercpBileDuctStenting = "/ercp-bile-duct-stenting.jpeg";

const ercpFaqs = [
  {
    question: "Is ERCP painful?",
    answer: "No, ERCP is performed under deep sedation or general anaesthesia, so you will not feel any pain during the procedure. You may experience some mild discomfort afterwards, such as bloating or a sore throat.",
  },
  {
    question: "Do I need to be admitted overnight?",
    answer: "In most cases, ERCP is a day procedure and you can go home the same day. However, depending on the complexity of the procedure or if complications occur, overnight observation may be recommended.",
  },
  {
    question: "How long does the procedure take?",
    answer: "ERCP typically takes 30-60 minutes, depending on the complexity of the case and the therapeutic interventions required. You should allow 3-4 hours for the entire visit including preparation and recovery.",
  },
  {
    question: "When can I eat after ERCP?",
    answer: "You can usually resume eating 2-4 hours after the procedure once the sedation has worn off and you have no abdominal pain or nausea. Start with clear fluids and light foods.",
  },
  {
    question: "Can I drive after the procedure?",
    answer: "No, you cannot drive for 24 hours after receiving sedation or anaesthesia. You must arrange for someone to accompany you home after the procedure.",
  },
  {
    question: "What are the warning signs after ERCP?",
    answer: "Seek immediate medical attention if you experience severe abdominal pain, fever, chills, persistent vomiting, or blood in your stool. These may indicate complications such as pancreatitis or bleeding.",
  },
];

const indications = [
  "Gallstones in the bile duct (choledocholithiasis)",
  "Obstructive jaundice requiring investigation or treatment",
  "Bile duct strictures (narrowing)",
  "Pancreatic duct stones or strictures",
  "Suspected bile duct or pancreatic cancer",
  "Bile leaks after surgery",
  "Sphincter of Oddi dysfunction",
  "Chronic pancreatitis complications",
];

const therapeuticProcedures = [
  {
    name: "Stone Removal",
    description: "Extraction of gallstones from the bile duct using baskets or balloons after sphincterotomy.",
  },
  {
    name: "Stent Placement",
    description: "Insertion of plastic or metal stents to relieve bile duct or pancreatic duct obstruction.",
  },
  {
    name: "Sphincterotomy",
    description: "Cutting the sphincter muscle to widen the bile duct opening, allowing stone passage or drainage.",
  },
  {
    name: "Stricture Dilation",
    description: "Widening of narrowed bile ducts using balloon catheters.",
  },
  {
    name: "Tissue Sampling",
    description: "Brushings or biopsies of the bile duct for diagnosis of suspected malignancy.",
  },
];

const preparationItems = [
  "Fasting for at least 6-8 hours before the procedure",
  "Blood tests to check clotting function and liver enzymes",
  "Review of medications, particularly blood thinners which may need to be stopped",
  "Antibiotics may be given before the procedure in certain cases",
  "Arrange for someone to accompany you home after the procedure",
];

export const Ercp = () => {
  return (
    <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={cArmTheater}
              alt="State-of-the-art C-Arm fluoroscopy suite for advanced ERCP procedures"
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
                Specialized Therapeutic Endoscopy
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mt-3 mb-6">
                ERCP
              </h1>
              <p className="text-xl text-muted-foreground mb-2">
                Endoscopic Retrograde Cholangiopancreatography
              </p>
              <p className="text-lg text-muted-foreground leading-loose mb-8">
                ERCP is a specialised endoscopic procedure that combines endoscopy and X-ray imaging to 
                diagnose and treat conditions affecting the bile ducts, gallbladder, and pancreas. It allows 
                for therapeutic interventions that can often avoid the need for surgery.
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

        {/* What is ERCP */}
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
                What is ERCP?
              </h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground mb-10 leading-loose">
                <p>
                  During ERCP, a special side-viewing endoscope (duodenoscope) is passed through the mouth 
                  into the duodenum (first part of the small intestine). A small catheter is then inserted 
                  into the opening of the bile duct (papilla), and contrast dye is injected to visualise 
                  the bile ducts and pancreatic duct on X-ray.
                </p>
                <p>
                  This allows the doctor to identify any abnormalities such as stones, strictures, or tumours, 
                  and perform therapeutic procedures in the same session. ERCP is considered a complex 
                  endoscopic procedure requiring specialised training and expertise.
                </p>
              </div>

              {/* Indications */}
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/30">
                <h3 className="text-xl font-semibold text-foreground mb-4">When is ERCP Indicated?</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {indications.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed">
                      <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Therapeutic Procedures */}
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
                Therapeutic Procedures
              </h2>
              <p className="text-base text-muted-foreground mb-10 leading-relaxed">
                ERCP is not just a diagnostic tool—it allows for a range of therapeutic interventions 
                that can treat conditions without open surgery.
              </p>

              <div className="space-y-4">
                {therapeuticProcedures.map((procedure, index) => (
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

        {/* Procedure Images */}
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
                  src={ercpStoneRemoval}
                  alt="Removal of stone from the bile duct during ERCP"
                  className="w-full h-64 object-cover"
                  width={1280}
                  height={720}
                />
                <div className="p-4 bg-background">
                  <p className="text-sm text-muted-foreground text-center">Removal of stone from the bile duct</p>
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
                  src={ercpBileDuctStenting}
                  alt="Stenting of the bile duct during ERCP"
                  className="w-full h-64 object-cover"
                  width={1280}
                  height={720}
                />
                <div className="p-4 bg-background">
                  <p className="text-sm text-muted-foreground text-center">Stenting of the bile duct</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Preparation */}
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
                  Preparation
                </h2>
              </div>
              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                Proper preparation ensures the procedure is safe and effective. You will receive 
                specific instructions before your appointment.
              </p>

              <div className="bg-background rounded-xl p-6 border border-border">
                <ul className="space-y-4">
                  {preparationItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-base text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Safety & Risks */}
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
                <AlertTriangle className="h-7 w-7 text-amber-600" />
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
                  Risks and Complications
                </h2>
              </div>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-loose">
                <p>
                  ERCP is a more complex procedure than standard endoscopy and carries higher risks. 
                  However, when performed by experienced specialists, it remains safe for most patients:
                </p>
                <ul className="space-y-2 text-base">
                  <li className="leading-relaxed"><strong className="text-foreground">Pancreatitis:</strong> The most common complication (3-5%), usually mild and self-limiting</li>
                  <li className="leading-relaxed"><strong className="text-foreground">Bleeding:</strong> May occur after sphincterotomy, usually minor</li>
                  <li className="leading-relaxed"><strong className="text-foreground">Infection (Cholangitis):</strong> Risk reduced with antibiotics and adequate drainage</li>
                  <li className="leading-relaxed"><strong className="text-foreground">Perforation:</strong> Rare (less than 1%)</li>
                  <li className="leading-relaxed"><strong className="text-foreground">Sedation-related:</strong> Standard risks associated with deep sedation or anaesthesia</li>
                </ul>
                <p>
                  The benefits of ERCP often significantly outweigh the risks, particularly when treating 
                  conditions like bile duct stones or obstructive jaundice. All risks will be discussed 
                  during your consultation.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Expertise */}
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
                Specialist Expertise
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-loose">
                <p>
                  ERCP requires advanced training beyond standard gastroenterology fellowship. 
                  Dr. Thurairajah completed sub-specialist training in advanced hepatobiliary endoscopy, 
                  including ERCP and EUS, at University College London (UCL), a recognized centre 
                  for therapeutic endoscopy in the UK.
                </p>
                <p>
                  With extensive experience in complex ERCP procedures, including difficult stone extraction, 
                  stricture management, and biliary stenting, patients can be confident of receiving specialized care.
                </p>
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
                Common questions about ERCP and what to expect.
              </p>

              <Accordion type="single" collapsible className="space-y-4">
                {ercpFaqs.map((faq, index) => (
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
                Specialized ERCP Services
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                If you have been referred for ERCP or have a bile duct or pancreatic condition requiring 
                evaluation, schedule a consultation to discuss your treatment options.
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
