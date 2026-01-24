'use client'

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Calendar, Info, Zap, Clock, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";

const fibroscanProcedure = "/fibroscan-procedure.jpg";

const fibroscanFaqs = [
  {
    question: "Is FibroScan painful?",
    answer: "No, FibroScan is completely painless. You may feel a gentle vibration or tap sensation on your side as measurements are taken, but there is no discomfort.",
  },
  {
    question: "How do I prepare for a FibroScan?",
    answer: "Fast for 2-3 hours before the test and avoid alcohol for 24 hours. No other special preparation is needed. You can take your regular medications as usual.",
  },
  {
    question: "How long does the test take?",
    answer: "The FibroScan examination takes only 10-15 minutes. You can resume all normal activities immediately afterwards with no recovery time needed.",
  },
  {
    question: "Do I need sedation for FibroScan?",
    answer: "No, FibroScan requires no sedation, no needles, and no anaesthesia. It is performed externally on the skin, similar to an ultrasound.",
  },
  {
    question: "How accurate is FibroScan?",
    answer: "FibroScan has excellent accuracy for detecting significant fibrosis and cirrhosis, with over 90% accuracy in many studies. It is widely used as an alternative to liver biopsy for fibrosis assessment.",
  },
  {
    question: "Can FibroScan replace liver biopsy?",
    answer: "In many situations, yes. FibroScan can accurately assess fibrosis without the need for an invasive biopsy. However, liver biopsy may still be needed in some cases for definitive diagnosis of certain conditions.",
  },
];

const indications = [
  "Metabolic dysfunction-associated steatotic liver disease (MASLD/MASH)",
  "Chronic hepatitis B or C",
  "Alcoholic liver disease",
  "Monitoring of known liver fibrosis or cirrhosis",
  "Assessment before or after hepatitis C treatment",
  "Screening in patients with risk factors for liver disease",
  "Alternative to liver biopsy in many situations",
];

const advantages = [
  {
    icon: Zap,
    title: "Non-Invasive",
    description: "No needles, no sedation, no recovery time needed. Simply lie down and the test is performed externally.",
  },
  {
    icon: Clock,
    title: "Quick Results",
    description: "The entire examination takes only 10-15 minutes, with results available immediately.",
  },
  {
    icon: CheckCircle,
    title: "Accurate Assessment",
    description: "Measures both liver stiffness (fibrosis) and fat content (CAP score) in a single session.",
  },
  {
    icon: Info,
    title: "Repeatable",
    description: "Can be repeated regularly to monitor disease progression or response to treatment without risk.",
  },
];

const whatItMeasures = [
  {
    name: "Liver Stiffness (kPa)",
    description: "Measures the degree of fibrosis (scarring) in the liver. Higher values indicate more advanced fibrosis.",
    ranges: [
      { range: "< 7 kPa", meaning: "Normal or minimal fibrosis" },
      { range: "7-10 kPa", meaning: "Moderate fibrosis" },
      { range: "10-14 kPa", meaning: "Significant fibrosis" },
      { range: "> 14 kPa", meaning: "Suggestive of cirrhosis" },
    ],
  },
  {
    name: "CAP Score (dB/m)",
    description: "Controlled Attenuation Parameter measures the amount of fat in the liver.",
    ranges: [
      { range: "< 238 dB/m", meaning: "Normal" },
      { range: "238-260 dB/m", meaning: "Mild steatosis (S1)" },
      { range: "260-290 dB/m", meaning: "Moderate steatosis (S2)" },
      { range: "> 290 dB/m", meaning: "Severe steatosis (S3)" },
    ],
  },
];

const Fibroscan = () => {
  return (
    <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={fibroscanProcedure}
              alt="FibroScan liver assessment"
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
                Non-Invasive Liver Assessment
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mt-3 mb-6">
                FibroScan
              </h1>
              <p className="text-xl text-muted-foreground mb-2">
                Transient Elastography
              </p>
              <p className="text-lg text-muted-foreground leading-loose mb-8">
                FibroScan is a revolutionary non-invasive technology that assesses liver health in just minutes. 
                Using painless ultrasound-based technology, it measures both liver stiffness (indicating fibrosis) 
                and liver fat content, providing valuable information without the need for a liver biopsy.
              </p>
              <Button asChild size="lg" className="gap-2">
                <Link href="/#contact">
                  <Calendar className="h-5 w-5" />
                  Book a FibroScan
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
        {/* What is FibroScan */}
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
                What is FibroScan?
              </h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground mb-10 leading-loose">
                <p>
                  FibroScan uses a technology called transient elastography to measure liver stiffness. 
                  A probe placed on the skin sends a painless vibration wave through the liver and measures 
                  how fast the wave travels. Stiffer livers (indicating more fibrosis or scarring) transmit 
                  the wave faster.
                </p>
                <p>
                  The same device also measures the Controlled Attenuation Parameter (CAP), which quantifies 
                  the amount of fat in the liver. Together, these measurements provide a comprehensive 
                  assessment of liver health that previously required an invasive biopsy.
                </p>
              </div>

              {/* Indications */}
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/30">
                <h3 className="text-xl font-semibold text-foreground mb-4">Who Should Have a FibroScan?</h3>
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

        {/* Advantages */}
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
                Advantages of FibroScan
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

        {/* What It Measures */}
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
                Understanding Your Results
              </h2>
              <p className="text-base text-muted-foreground mb-10 leading-relaxed">
                FibroScan provides two key measurements that together give a comprehensive picture of your liver health.
              </p>

              <div className="space-y-8">
                {whatItMeasures.map((measure, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="bg-background border border-border rounded-xl p-6"
                  >
                    <h3 className="text-xl font-semibold text-foreground mb-3">{measure.name}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed mb-4">{measure.description}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {measure.ranges.map((range, idx) => (
                        <div
                          key={idx}
                          className={`p-3 rounded-lg ${
                            idx === 0 ? "bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/30" :
                            idx === measure.ranges.length - 1 ? "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30" :
                            "bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/30"
                          }`}
                        >
                          <p className="font-medium text-foreground text-sm">{range.range}</p>
                          <p className="text-sm text-muted-foreground">{range.meaning}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800/30">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Note:</strong> These ranges are general guidelines. Your results 
                  should always be interpreted by your doctor in the context of your specific condition and other 
                  clinical findings.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Procedure */}
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
                What to Expect
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-loose">
                <p>
                  The FibroScan procedure is simple and comfortable:
                </p>
                <ul className="space-y-3 text-base">
                  <li className="leading-relaxed"><strong className="text-foreground">Preparation:</strong> Fast for at least 2-3 hours before the test. Avoid alcohol for 24 hours.</li>
                  <li className="leading-relaxed"><strong className="text-foreground">Position:</strong> Lie on your back with your right arm raised behind your head.</li>
                  <li className="leading-relaxed"><strong className="text-foreground">Procedure:</strong> A probe is placed on your right side between the ribs. You may feel a gentle tap as measurements are taken.</li>
                  <li className="leading-relaxed"><strong className="text-foreground">Duration:</strong> The examination takes only 10-15 minutes.</li>
                  <li className="leading-relaxed"><strong className="text-foreground">After:</strong> No recovery time needed. You can resume normal activities immediately.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Limitations */}
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
                Limitations
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-loose">
                <p>
                  While FibroScan is an excellent tool, there are some limitations to be aware of:
                </p>
                <ul className="space-y-2 text-base">
                  <li className="leading-relaxed">Results may be less reliable in patients with significant obesity, narrow rib spaces, or ascites (fluid in the abdomen)</li>
                  <li className="leading-relaxed">Acute inflammation, congestion, or recent food intake can temporarily elevate readings</li>
                  <li className="leading-relaxed">Cannot identify the specific cause of liver disease (requires blood tests and clinical assessment)</li>
                  <li className="leading-relaxed">In some cases, liver biopsy may still be needed for definitive diagnosis</li>
                </ul>
                <p>
                  Your doctor will advise if FibroScan is appropriate for your situation and how to interpret 
                  the results in the context of your overall health.
                </p>
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
                Common questions about FibroScan and what to expect.
              </p>

              <Accordion type="single" collapsible className="space-y-4">
                {fibroscanFaqs.map((faq, index) => (
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
                Check Your Liver Health
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                If you have risk factors for liver disease or want to assess your liver health, 
                schedule a FibroScan to get quick, painless answers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/#contact">Book FibroScan</Link>
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

export default Fibroscan