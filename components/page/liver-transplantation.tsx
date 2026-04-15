'use client';

import { motion } from "framer-motion";
import { RelatedConditions } from "@/components/RelatedConditions";
import { ArrowLeft, AlertTriangle, CheckCircle, Calendar, Heart, Users, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
const liverTransplantHeroImage = "/liver-transplant-new.jpeg";
const bloodTestImage = "/blood-test-liver.jpg";
const cardiacWorkupImage = "/cardiac-workup.jpeg";
const mriLiverImage = "/mri-liver-scan.jpg";
const ogdProcedureImage = "/ogd-procedure-hero.jpeg";

const relatedConditions = [
  {
    title: "Liver Cirrhosis",
    description: "Advanced care for chronic liver disease and cirrhosis complications.",
    link: "/liver-cirrhosis",
  },
  {
    title: "Viral Hepatitis (Hep B & C)",
    description: "Expert treatment of Hepatitis B and C to prevent liver failure.",
    link: "/viral-hepatitis",
  },
  {
    title: "Liver & Pancreatic Cancer Screening",
    description: "Early detection of liver cancer in high-risk patients.",
    link: "/liver-pancreatic-cancer-screening",
  },
];

const transplantIndications = [
  {
    condition: "Decompensated Cirrhosis",
    description: "Cirrhosis with complications such as ascites, hepatic encephalopathy, or variceal bleeding that cannot be controlled with medical therapy.",
  },
  {
    condition: "Acute Liver Failure",
    description: "Sudden onset of liver failure in a previously healthy liver, often from drug toxicity or viral hepatitis.",
  },
  {
    condition: "Hepatocellular Carcinoma (HCC)",
    description: "Liver cancer within specific criteria (Milan criteria) where transplant is a primary clinical modality for suitable candidates.",
  },
  {
    condition: "Chronic Hepatitis B or C",
    description: "End-stage liver disease from viral hepatitis with cirrhosis and liver failure.",
  },
  {
    condition: "Alcoholic Liver Disease",
    description: "Severe liver damage from alcohol with demonstrated abstinence and rehabilitation.",
  },
  {
    condition: "Metabolic Liver Diseases",
    description: "Conditions like Wilson's disease, haemochromatosis, or alpha-1 antitrypsin deficiency causing liver failure.",
  },
];

const evaluationProcess = [
  {
    step: "Initial Assessment",
    description: "Comprehensive review of your liver disease, overall health, and suitability for transplant surgery.",
    icon: CheckCircle,
  },
  {
    step: "Medical Workup",
    description: "Extensive blood tests, imaging studies, cardiac and pulmonary evaluation to ensure fitness for surgery.",
    icon: Heart,
  },
  {
    step: "Multidisciplinary Review",
    description: "Evaluation by hepatologists, surgeons, anaesthetists, psychologists, and social workers.",
    icon: Users,
  },
  {
    step: "Listing Decision",
    description: "If approved, you are placed on the national transplant waiting list based on disease severity (MELD score).",
    icon: Clock,
  },
];

const postTransplantCare = [
  "Lifelong immunosuppressive medications to prevent rejection",
  "Regular blood tests to monitor liver function and drug levels",
  "Surveillance for infections and other complications",
  "Screening for recurrence of original disease (e.g., Hepatitis B, HCC)",
  "Cardiovascular risk management and healthy lifestyle",
  "Regular follow-up with your transplant hepatologist",
];

const LiverTransplantPage = () => {
  return (

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-emerald-50 to-background dark:from-emerald-950/30 dark:to-background">
          <div className="container mx-auto px-4">
            <Link
              href="/#conditions"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Conditions
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-emerald-600 dark:text-emerald-400 text-base font-medium tracking-widest uppercase">
                  Transplant Hepatology
                </span>
                <h1 className="text-5xl md:text-6xl font-serif font-semibold text-foreground mt-3 mb-6">
                  Liver Transplantation
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-justify">
                  Liver transplantation is a life-saving treatment for patients with end-stage liver disease 
                  or liver cancer. Dr. Prem Thurairajah is a transplant hepatologist with over 25 years of 
                  international clinical experience, including specialist training at recognized liver 
                  transplant centres in the UK (Queen Elizabeth Hospital Birmingham and St. James&apos;s University 
                  Hospital Leeds) and the USA (University of Kentucky).
                </p>
                <Button asChild size="lg" className="gap-2">
                  <Link href="/#contact">
                    <Calendar className="h-5 w-5" />
                    Book a Consultation
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={liverTransplantHeroImage}
                    alt="Liver Transplantation - Medical illustration of liver transplant surgery"
                    className="w-full h-auto object-cover"
                    width={1280}
                    height={720}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Statistics Banner */}
        <section className="py-8 bg-emerald-600 dark:bg-emerald-700">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto text-center">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-white">90%+</p>
                <p className="text-emerald-100 text-sm">1-year survival rate</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-white">75%</p>
                <p className="text-emerald-100 text-sm">5-year survival rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Liver Transplant */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                When Is a Liver Transplant Needed?
              </h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground mb-10 leading-loose">
                <p>
                  A liver transplant may be considered when the liver has failed to the point where it can no longer 
                  perform its vital functions, and no other treatment can restore its function. The decision to 
                  proceed with transplant evaluation is made carefully, weighing the risks of surgery against the 
                  expected benefits.
                </p>
                <p>
                  As a former Senior Transplant Hepatologist at the National University Centre for Organ Transplantation (NUCOT) 
                  and National University Health System (NUHS), Dr. Prem brings extensive experience in managing complex 
                  liver transplant patients. He now provides transplant hepatology services at Mount Elizabeth Hospital, 
                  offering comprehensive pre-transplant assessment, post-transplant care, and long-term follow-up. 
                  Both deceased donor and living donor transplants are available, with living donor transplants 
                  offering shorter waiting times for suitable candidates.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Indications for Transplant */}
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
                <AlertTriangle className="h-7 w-7 text-primary" />
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
                  Indications for Liver Transplant
                </h2>
              </div>
              <p className="text-base text-muted-foreground mb-10 leading-relaxed">
                Liver transplantation is considered for various conditions that cause irreversible liver damage:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {transplantIndications.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="bg-background rounded-xl p-6 border border-border/50 shadow-sm"
                  >
                    <h4 className="font-semibold text-foreground text-lg mb-2">{item.condition}</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Transplant Evaluation Process */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                The Transplant Evaluation Process
              </h2>
              <p className="text-base text-muted-foreground mb-10 leading-relaxed">
                Before being listed for a liver transplant, patients undergo a comprehensive evaluation 
                to ensure they are suitable candidates for this major surgery.
              </p>

              <div className="space-y-6">
                {evaluationProcess.map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex gap-6 bg-background rounded-xl p-6 border border-border/50 shadow-sm"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                        <phase.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2 py-1 text-xs font-medium rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                          Step {index + 1}
                        </span>
                        <h4 className="font-semibold text-foreground text-lg">{phase.step}</h4>
                      </div>
                      <p className="text-base text-muted-foreground leading-relaxed">{phase.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Types of Liver Transplant */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                Types of Liver Transplant
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-background rounded-2xl p-8 border border-border/50 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <Heart className="h-6 w-6 text-emerald-600" />
                    <h3 className="text-xl font-serif font-semibold text-foreground">Deceased Donor Transplant</h3>
                  </div>
                  <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-loose">
                    <p className="mb-4">
                      A whole liver from a brain-dead donor is transplanted to the recipient.
                    </p>
                    <ul className="space-y-2">
                      <li>Waiting times depend on blood type and disease severity</li>
                      <li>Allocated based on MELD score (sickest patients prioritised)</li>
                      <li>Requires being available at short notice when a liver becomes available</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-background rounded-2xl p-8 border border-border/50 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <Users className="h-6 w-6 text-emerald-600" />
                    <h3 className="text-xl font-serif font-semibold text-foreground">Living Donor Transplant</h3>
                  </div>
                  <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-loose">
                    <p className="mb-4">
                      A portion of a healthy donor&apos;s liver is transplanted. Both livers regenerate to full size.
                    </p>
                    <ul className="space-y-2">
                      <li>Shorter waiting time compared to deceased donor</li>
                      <li>Elective surgery allows better planning and preparation</li>
                      <li>Donor must be healthy and undergo rigorous evaluation</li>
                      <li>Typically a family member or close friend donates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pre-Transplant Assessment */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                Pre-Transplant Investigations
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-loose">
                <p className="mb-10">
                  A comprehensive workup is essential to assess your liver disease and overall fitness for transplant surgery.
                </p>
              </div>

              {/* Investigation Methods with Images */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="rounded-2xl overflow-hidden bg-background shadow-lg border border-border/50">
                  <Image
                    src={bloodTestImage}
                    alt="Blood tests for transplant assessment"
                    className="w-full h-40 object-cover"
                    width={1280}
                    height={720}
                  />
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20">
                    <h4 className="font-semibold text-foreground mb-1 text-lg">Blood Tests</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">MELD score, blood type, viral serology, tumour markers</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden bg-background shadow-lg border border-border/50">
                  <Image
                    src={mriLiverImage}
                    alt="MRI scan for liver assessment"
                    className="w-full h-40 object-cover"
                    width={1280}
                    height={720}
                  />
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20">
                    <h4 className="font-semibold text-foreground mb-1 text-lg">CT/MRI Imaging</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">Detailed liver anatomy, tumour staging, blood vessel mapping</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden bg-background shadow-lg border border-border/50">
                  <Image
                    src={cardiacWorkupImage}
                    alt="Cardiac workup echocardiogram for transplant assessment"
                    className="w-full h-40 object-cover"
                    width={1280}
                    height={720}
                  />
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20">
                    <h4 className="font-semibold text-foreground mb-1 text-lg">Cardiac Workup</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">ECG, echocardiogram, stress testing to ensure heart fitness</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden bg-background shadow-lg border border-border/50">
                  <Image
                    src={ogdProcedureImage}
                    alt="OGD endoscopy for variceal assessment"
                    className="w-full h-40 object-cover"
                    width={1280}
                    height={720}
                  />
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20">
                    <h4 className="font-semibold text-foreground mb-1 text-lg">Endoscopy</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">Assessment and treatment of oesophageal varices</p>
                    <Link
                      href="/gastroscopy"
                      className="inline-flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline mt-2"
                    >
                      Learn more about this procedure →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Post-Transplant Care */}
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
                <ShieldCheck className="h-7 w-7 text-primary" />
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
                  Life After Transplant
                </h2>
              </div>
              
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground mb-10 leading-loose">
                <p>
                  After a successful liver transplant, most patients can return to daily activities following a successful recovery period. 
                  However, lifelong follow-up care is essential to monitor for rejection, infection, and recurrence 
                  of the original disease.
                </p>
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-800/30">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                  <h3 className="text-xl font-serif font-semibold text-foreground">Post-Transplant Care Includes</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {postTransplantCare.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Dr. Prem's Experience */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                Specialized Transplant Hepatology Care
              </h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-loose">
                <p>
                  Dr. Prem Thurairajah is a transplant hepatologist with over 25 years of international clinical 
                  experience, including training at internationally renowned liver transplant centres:
                </p>
                <ul className="space-y-2 mt-4">
                  <li><strong>National University Centre for Organ Transplantation (NUCOT), Singapore</strong> – Senior Transplant Hepatologist</li>
                  <li><strong>National University Health System (NUHS), Singapore</strong> – Senior Consultant in Hepatology</li>
                  <li><strong>University of Kentucky, USA</strong> – Assistant Professor of Medicine in the Liver Transplant Unit</li>
                  <li><strong>St. James&apos;s University Hospital, Leeds, UK</strong> – Consultant Transplant Hepatologist</li>
                  <li><strong>Queen Elizabeth Hospital, Birmingham, UK</strong> – Fellowship in Transplant Hepatology at an established liver transplant programme in Europe</li>
                </ul>
                <p className="mt-4">
                  His specialized training allows him to manage the complete spectrum of transplant hepatology, 
                  from initial assessment and listing decisions through to long-term post-transplant care.
                </p>
              </div>
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
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
                Considering Liver Transplant?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                If you or a loved one has been told you may need a liver transplant, or if you have advanced 
                liver disease and want to understand your options, Dr. Prem can provide clinical guidance 
                and coordinate your care with Singapore&apos;s transplant centres.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/#contact">
                    <Calendar className="h-5 w-5" />
                    Book a Consultation
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/liver-cirrhosis">
                    Learn About Cirrhosis
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 bg-muted/50">
          <div className="container mx-auto px-4">
            <p className="text-sm text-muted-foreground text-center max-w-3xl mx-auto">
              <strong>Medical Disclaimer:</strong> The information provided on this page is for educational purposes only 
              and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Liver transplant 
              decisions are complex and should be made in consultation with a qualified hepatologist and transplant team.
            </p>
          </div>
        </section>

        {/* Related Conditions */}
        <RelatedConditions conditions={relatedConditions} />
      </main>

  );
};

export default LiverTransplantPage;
