'use client'

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Calendar, AlertTriangle, Clock, Shield, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";

const liverBiopsyImage = "/liver-biopsy-procedure.jpeg";

const liverBiopsyFaqs = [
  {
    question: "Is liver biopsy painful?",
    answer: "Local anaesthetic is used to numb the area, so you should not feel sharp pain during the procedure. You may feel pressure or a brief pushing sensation. Mild pain at the biopsy site is common afterwards and usually resolves within 24 hours.",
  },
  {
    question: "Do I need to be admitted overnight?",
    answer: "Liver biopsy is usually a day procedure. You will be monitored for 4-6 hours after the biopsy before going home. Overnight admission may be recommended if there are any concerns.",
  },
  {
    question: "How long does the procedure take?",
    answer: "The biopsy itself takes only a few minutes. However, you should allow 5-6 hours for the entire visit including preparation, the procedure, and post-procedure monitoring.",
  },
  {
    question: "When can I return to normal activities?",
    answer: "Rest at home for 24 hours after the procedure. Avoid heavy lifting or strenuous activity for 1 week. Most patients can return to work and light activities the day after the biopsy.",
  },
  {
    question: "How soon will I get the results?",
    answer: "Biopsy results are typically available within 1-2 weeks. Your doctor will arrange a follow-up appointment to discuss the findings and next steps in your care.",
  },
  {
    question: "What are the warning signs after liver biopsy?",
    answer: "Seek immediate medical attention if you experience severe abdominal pain, fever, dizziness, shortness of breath, or signs of bleeding such as blood in your stool or increasing bruising.",
  },
];

const indications = [
  "Unexplained abnormal liver function tests",
  "Suspected metabolic or autoimmune liver disease",
  "Assessing severity of known liver disease (e.g., hepatitis B or C)",
  "Evaluating liver masses or tumours",
  "Monitoring liver transplant recipients for rejection",
  "Diagnosing conditions not identified by other tests",
  "Grading and staging of liver fibrosis when FibroScan is inconclusive",
];

const preparationSteps = [
  {
    title: "Blood Tests",
    description: "Blood clotting tests (PT/INR) and platelet count will be checked to prioritize patient safety during the biopsy.",
  },
  {
    title: "Medication Review",
    description: "Stop blood thinners (aspirin, warfarin, clopidogrel) as advised by your doctor, usually 5-7 days before.",
  },
  {
    title: "Fasting",
    description: "Fast for at least 6 hours before the procedure.",
  },
  {
    title: "Arrange Transport",
    description: "You will need someone to take you home after the procedure as you cannot drive for 24 hours.",
  },
  {
    title: "Imaging",
    description: "An ultrasound may be performed beforehand to identify a suitable biopsy site.",
  },
];

const procedureSteps = [
  {
    step: 1,
    title: "Positioning",
    description: "You will lie on your back with your right hand behind your head, exposing the right side of your abdomen.",
  },
  {
    step: 2,
    title: "Ultrasound Guidance",
    description: "Ultrasound is used to locate the liver and identify a safe path for the biopsy needle.",
  },
  {
    step: 3,
    title: "Local Anaesthetic",
    description: "The skin and deeper tissues are numbed with local anaesthetic. You may feel a brief sting.",
  },
  {
    step: 4,
    title: "Biopsy",
    description: "A thin needle is inserted through the skin into the liver. You may be asked to hold your breath briefly. A small tissue sample is taken in seconds.",
  },
  {
    step: 5,
    title: "Recovery",
    description: "Pressure is applied to the site and you will rest lying on your right side for 2-4 hours to minimise bleeding risk.",
  },
];

const risks = [
  {
    title: "Pain",
    description: "Mild pain at the biopsy site or referred pain to the right shoulder is common and usually settles within 24 hours.",
    severity: "common",
  },
  {
    title: "Bleeding",
    description: "Minor bleeding occurs in about 1% of cases. Significant bleeding requiring transfusion or intervention is rare (<0.5%).",
    severity: "uncommon",
  },
  {
    title: "Infection",
    description: "Infection at the biopsy site is very rare when proper sterile technique is used.",
    severity: "rare",
  },
  {
    title: "Puncture of Other Organs",
    description: "Accidental puncture of the gallbladder, kidney, or lung is rare, especially with ultrasound guidance.",
    severity: "rare",
  },
  {
    title: "Bile Leak",
    description: "Bile leakage from punctured bile ducts is a rare complication that may require further treatment.",
    severity: "rare",
  },
];

const afterCareItems = [
  "Rest at home for 24 hours after the procedure",
  "Avoid heavy lifting or strenuous activity for 1 week",
  "Take prescribed pain relief as needed (usually paracetamol)",
  "Avoid blood thinners until advised by your doctor",
  "Report any severe pain, fever, dizziness, or signs of bleeding immediately",
  "Follow-up appointment to discuss biopsy results (usually within 1-2 weeks)",
];

export const LiverBiopsy = () => {
  return (
    <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={liverBiopsyImage}
              alt="Ultrasound-guided liver biopsy procedure"
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
                Diagnostic Procedure
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mt-3 mb-6">
                Liver Biopsy
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                A liver biopsy is a procedure to obtain a small sample of liver tissue for microscopic 
                examination. It remains an established clinical method for diagnosing and staging many liver diseases 
                and provides information that cannot be obtained from blood tests or imaging alone.
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

        {/* Why Liver Biopsy Section */}
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
                Why is Liver Biopsy Performed?
              </h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground mb-10 leading-loose">
                <p>
                  While non-invasive tests like FibroScan and blood markers have reduced the need for liver 
                  biopsy, it remains a clinically indicated procedure in certain situations where definitive tissue diagnosis is 
                  required. A liver biopsy can provide detailed information on the type, cause, and severity of liver disease.
                </p>
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/30">
                <h3 className="text-xl font-semibold text-foreground mb-4">Indications for Liver Biopsy</h3>
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

        {/* Preparation Section */}
        <section className="py-16 lg:py-20 bg-blue-50/50 dark:bg-blue-950/10">
          <div className="container mx-auto px-2 sm:px-4">
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
                  Preparing for Your Biopsy
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

        {/* The Procedure Section */}
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
                What Happens During the Procedure?
              </h2>
              <p className="text-base text-muted-foreground mb-10 leading-relaxed">
                A liver biopsy is typically performed as a day procedure under local anaesthesia. 
                The entire process takes about 15-30 minutes, though you will need to rest for 
                several hours afterwards for monitoring.
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

        {/* Risks Section */}
        <section className="py-16 lg:py-20 bg-amber-50/50 dark:bg-amber-950/10">
          <div className="container mx-auto px-2 sm:px-4">
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
                  Risks and Complications
                </h2>
              </div>
              <p className="text-base text-muted-foreground mb-10 leading-relaxed">
                Liver biopsy is generally safe, especially when performed by an experienced specialist 
                with ultrasound guidance. However, like any invasive procedure, there are potential risks.
              </p>

              <div className="space-y-4">
                {risks.map((risk, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className={`bg-background rounded-xl p-5 border ${
                      risk.severity === "common" 
                        ? "border-amber-200 dark:border-amber-800/30" 
                        : risk.severity === "uncommon"
                        ? "border-orange-200 dark:border-orange-800/30"
                        : "border-red-200 dark:border-red-800/30"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        risk.severity === "common" 
                          ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" 
                          : risk.severity === "uncommon"
                          ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                          : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                      }`}>
                        {risk.severity === "common" ? "Common" : risk.severity === "uncommon" ? "Uncommon" : "Rare"}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{risk.title}</h4>
                        <p className="text-base text-muted-foreground leading-relaxed">{risk.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* After Care Section */}
        <section className="py-16 lg:py-20 bg-emerald-50 dark:bg-emerald-950/20">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-8">
                <Shield className="h-8 w-8 text-emerald-600" />
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
                  After Your Biopsy
                </h2>
              </div>

              <div className="bg-background rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/30">
                <ul className="space-y-4">
                  {afterCareItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed">
                      <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800/30">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-red-600 dark:text-red-400">Seek immediate medical attention</strong> if you 
                  experience severe abdominal pain, fever, dizziness, shortness of breath, or signs of bleeding 
                  after your biopsy.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Specialist Expertise Section */}
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
                Specialized Hepatology Care
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-loose">
                <p>
                  Dr. Prem Thurairajah is a Senior Consultant in Gastroenterology and Hepatology with 
                  extensive experience in liver biopsy and liver disease management. His training at 
                  major UK liver transplant centres and PhD in hepatitis C is the basis for specialized care
                  for patients requiring liver biopsy.
                </p>
                <p>
                  All biopsies are performed with ultrasound guidance to maximise safety and accuracy, 
                  and tissue samples are reviewed by experienced liver pathologists to support a reliable diagnosis.
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
                Common questions about liver biopsy and what to expect.
              </p>

              <Accordion type="single" collapsible className="space-y-4">
                {liverBiopsyFaqs.map((faq, index) => (
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
                Need a Liver Biopsy?
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                If you have been advised to undergo a liver biopsy or have questions about your liver health, 
                schedule a consultation to discuss your options.
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
              a medical condition.
            </p>
          </div>
        </section>
      </main>
  )
}
