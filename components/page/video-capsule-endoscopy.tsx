'use client'

import { motion } from "framer-motion";
import { RelatedConditions } from "@/components/RelatedConditions";
import { ArrowLeft, CheckCircle, Calendar, AlertTriangle, Clock, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const capsuleEndoscopyHero = "/capsule-endoscopy-hero.jpeg";
const swallowingCapsule = "/swallowing-capsule.jpeg";
const videoCapsuleEndoscopy = "/video-capsule-endoscopy.jpeg";

const relatedProcedures = [
  {
    title: "Bravo Capsule",
    description: "Wireless pH monitoring to diagnose acid reflux and guide treatment for heartburn.",
    link: "/bravo-capsule",
  },
  {
    title: "Gastroscopy & Colonoscopy",
    description: "Comprehensive endoscopic examination of the upper and lower digestive tract.",
    link: "/gastroscopy-colonoscopy",
  },
  {
    title: "Bowel Cancer Screening",
    description: "Early detection colonoscopy and surveillance for colorectal cancer prevention.",
    link: "/bowel-cancer-screening",
  },
];

const indications = [
  "Obscure gastrointestinal bleeding (after normal gastroscopy and colonoscopy)",
  "Suspected small bowel tumours or polyps",
  "Investigation of unexplained iron deficiency anaemia",
  "Suspected or known Crohn's disease affecting the small bowel",
  "Surveillance in polyposis syndromes (e.g., Peutz-Jeghers syndrome)",
  "Suspected small bowel damage from NSAIDs or other medications",
  "Evaluation of coeliac disease complications",
];

const advantages = [
  {
    icon: Eye,
    title: "Complete Small Bowel Visualisation",
    description: "The only non-invasive method to directly visualise the entire small intestine, an area unreachable by standard endoscopy.",
  },
  {
    icon: CheckCircle,
    title: "Non-Invasive & Painless",
    description: "Simply swallow a pill-sized camera. No sedation, no discomfort, no recovery time needed.",
  },
  {
    icon: Clock,
    title: "High-Quality Imaging",
    description: "Takes thousands of high-resolution images as it travels through your digestive tract over 8-12 hours.",
  },
  {
    icon: CheckCircle,
    title: "Normal Daily Activities",
    description: "Continue your usual activities while the capsule records. Return the recorder after the test is complete.",
  },
];

const preparationSteps = [
  {
    title: "Clear Liquid Diet",
    description: "Start a clear liquid diet the day before the procedure (water, clear broth, tea without milk).",
  },
  {
    title: "Bowel Preparation",
    description: "You may be asked to take a mild laxative solution the evening before to improve visualisation.",
  },
  {
    title: "Fasting",
    description: "Fast overnight (at least 10-12 hours) before swallowing the capsule.",
  },
  {
    title: "Medication Review",
    description: "Discuss all medications with your doctor. Some may need to be temporarily stopped.",
  },
  {
    title: "Wear Comfortable Clothing",
    description: "You will wear a sensor belt or vest for the duration of the test. Loose clothing is recommended.",
  },
];

const procedureSteps = [
  {
    step: 1,
    title: "Sensor Setup",
    description: "Small sensor patches are placed on your abdomen, connected to a data recorder worn on a belt.",
  },
  {
    step: 2,
    title: "Swallow the Capsule",
    description: "The vitamin-sized capsule is swallowed with water. It begins taking pictures immediately.",
  },
  {
    step: 3,
    title: "Resume Activities",
    description: "After 2 hours, you can drink clear fluids. After 4 hours, you can eat a light meal.",
  },
  {
    step: 4,
    title: "Recording Period",
    description: "The capsule travels through your digestive system over 8-12 hours, capturing thousands of images.",
  },
  {
    step: 5,
    title: "Return Equipment",
    description: "Return the recorder and belt to the clinic. The capsule passes naturally in your stool and is disposable.",
  },
];

const whatItDetects = [
  {
    title: "Bleeding Sources",
    description: "Angiodysplasias, ulcers, erosions, and other causes of occult or obscure GI bleeding.",
  },
  {
    title: "Tumours & Polyps",
    description: "Small bowel tumours, adenomas, and other growths that may not be visible on CT or MRI.",
  },
  {
    title: "Inflammatory Conditions",
    description: "Crohn's disease ulcers, strictures, and inflammation affecting the small intestine.",
  },
  {
    title: "Vascular Abnormalities",
    description: "Arteriovenous malformations and other vascular lesions causing bleeding.",
  },
];

const limitations = [
  {
    title: "No Tissue Sampling",
    description: "Unlike standard endoscopy, the capsule cannot take biopsies or perform therapeutic interventions.",
    severity: "limitation",
  },
  {
    title: "Capsule Retention",
    description: "In patients with strictures, the capsule may become lodged and require endoscopic or surgical removal (risk ~1-2%).",
    severity: "risk",
  },
  {
    title: "Incomplete Examination",
    description: "The capsule may not reach the colon before the battery runs out in some patients with slow gut transit.",
    severity: "limitation",
  },
  {
    title: "Image Quality",
    description: "Poor bowel preparation or rapid transit can affect image quality and diagnostic accuracy.",
    severity: "limitation",
  },
];

const contraindications = [
  "Known or suspected bowel obstruction or strictures",
  "Swallowing disorders or inability to swallow the capsule",
  "Pacemakers or implantable defibrillators (relative contraindication)",
  "Pregnancy",
  "Previous abdominal surgery with suspected adhesions (relative)",
];

const VideoCapsuleEndoscopy = () => {
  return (
    <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 min-h-[70vh] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={capsuleEndoscopyHero}
              alt="Video capsule endoscopy inside the intestine"
              className="w-full h-full object-cover"
              width={1280}
              height={720}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40 dark:from-background/95 dark:via-background/85 dark:to-background/50" />
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
              className="max-w-2xl"
            >
              <span className="text-emerald-600 dark:text-emerald-400 text-sm font-medium tracking-widest uppercase">
                Diagnostic Procedure
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mt-3 mb-6">
                Video Capsule Endoscopy
              </h1>
              <p className="text-xl text-muted-foreground mb-2">
                Small Bowel Camera
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Video capsule endoscopy is a breakthrough technology that allows complete visualisation 
                of the small intestine - an area that cannot be reached by standard gastroscopy or 
                colonoscopy. By swallowing a tiny camera in a capsule, we can diagnose conditions 
                that would otherwise require complex procedures or remain undetected.
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


        {/* Why Capsule Endoscopy Section */}
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
                When is Capsule Endoscopy Needed?
              </h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground mb-10 leading-loose">
                <p>
                  The small intestine is approximately 6 metres long and lies between the stomach and colon. 
                  Standard endoscopes can only reach the first part (duodenum) and last part (terminal ileum). 
                  Video capsule endoscopy fills this diagnostic gap by visualising the entire small bowel.
                </p>
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/30">
                <h3 className="text-xl font-semibold text-foreground mb-4">Common Indications</h3>
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
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-10 text-center">
                Advantages of Video Capsule Endoscopy
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
                The procedure is simple and non-invasive. You swallow the capsule in the clinic 
                and continue your normal activities while it records images throughout the day.
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

        {/* Capsule Endoscopy Image Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Image
                    src={swallowingCapsule}
                    alt="Patient swallowing video capsule endoscopy device"
                    className="w-full h-64 md:h-80 rounded-2xl shadow-xl object-cover"
                    width={1280}
                    height={720}
                  />
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Swallowing the vitamin-sized capsule camera
                  </p>
                </div>
                <div>
                  <Image
                    src={videoCapsuleEndoscopy}
                    alt="Video capsule endoscopy device with data recorder"
                    className="w-full h-64 md:h-80 rounded-2xl shadow-xl object-contain bg-muted/50"
                    width={1280}
                    height={720}
                  />
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    The capsule camera and recording equipment
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What It Detects Section */}
        <section className="py-16 lg:py-20 bg-emerald-50 dark:bg-emerald-950/20">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
                What Can It Detect?
              </h2>
              <p className="text-base text-muted-foreground mb-10 leading-relaxed">
                Video capsule endoscopy can identify a wide range of small bowel abnormalities.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {whatItDetects.map((item, index) => (
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

        {/* Limitations Section */}
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
                  Limitations & Risks
                </h2>
              </div>

              <div className="space-y-4 mb-10">
                {limitations.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className={`bg-background rounded-xl p-5 border ${
                      item.severity === "limitation" 
                        ? "border-amber-200 dark:border-amber-800/30" 
                        : "border-red-200 dark:border-red-800/30"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.severity === "limitation" 
                          ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" 
                          : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                      }`}>
                        {item.severity === "limitation" ? "Limitation" : "Risk"}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Contraindications */}
              <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800/30">
                <h3 className="text-xl font-semibold text-foreground mb-4">Contraindications</h3>
                <ul className="space-y-3">
                  {contraindications.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed">
                      <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
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
                Investigate Your Small Bowel
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                If you have unexplained GI bleeding, iron deficiency anaemia, or suspected small bowel 
                disease, schedule a consultation to discuss video capsule endoscopy.
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

export default VideoCapsuleEndoscopy