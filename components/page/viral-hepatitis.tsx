'use client'

import { motion } from "framer-motion";
import { RelatedConditions } from "@/components/RelatedConditions";
import { ArrowLeft, AlertTriangle, CheckCircle, Calendar, ShieldCheck, Syringe, Pill, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const viralHepatitisHeroImage = "/viral-hepatitis-icon.jpeg";
const bloodTestImage = "/blood-test-liver.jpg";
const fibroscanImage = "/fibroscan-procedure.jpg";
const liverBiopsyImage = "/liver-biopsy-procedure.jpeg";
const ultrasoundImage = "/ultrasound-abdomen.jpg";

const relatedConditions = [
  {
    title: "Liver Cirrhosis",
    description: "Advanced care for chronic liver disease, complications, and transplant assessment.",
    link: "/liver-cirrhosis",
  },
  {
    title: "Liver & Pancreatic Cancer Screening",
    description: "Comprehensive imaging and tumour marker evaluation for early diagnosis.",
    link: "/liver-pancreatic-cancer-screening",
  },
  {
    title: "Fatty Liver Disease",
    description: "Expert management of metabolic liver disease and lifestyle interventions.",
    link: "/fatty-liver-disease",
  },
];

const hepatitisBRiskFactors = [
  "Born in a region with high Hepatitis B prevalence (Asia, Africa, Pacific Islands)",
  "Mother with Hepatitis B during childbirth",
  "Household contact with an infected person",
  "Healthcare workers with blood exposure",
  "History of intravenous drug use",
  "Multiple sexual partners or men who have sex with men",
  "Haemodialysis patients",
  "HIV-positive individuals",
];

const hepatitisCRiskFactors = [
  "History of intravenous drug use (even once)",
  "Blood transfusion before 1992",
  "Haemodialysis patients",
  "Healthcare workers with needlestick injuries",
  "Tattoos or piercings with non-sterile equipment",
  "Born to a mother with Hepatitis C",
  "HIV-positive individuals",
  "Incarceration history",
];

const hepatitisBSymptoms = [
  {
    symptom: "Fatigue and Weakness",
    description: "Persistent tiredness that doesn't improve with rest, often the most common symptom.",
  },
  {
    symptom: "Jaundice",
    description: "Yellowing of the skin and eyes due to elevated bilirubin from liver inflammation.",
  },
  {
    symptom: "Abdominal Pain",
    description: "Discomfort in the right upper abdomen where the liver is located.",
  },
  {
    symptom: "Dark Urine",
    description: "Tea-coloured urine due to bilirubin excretion through the kidneys.",
  },
  {
    symptom: "Loss of Appetite",
    description: "Reduced desire to eat, sometimes accompanied by nausea.",
  },
  {
    symptom: "Joint Pain",
    description: "Aching joints, particularly in acute Hepatitis B infection.",
  },
];

const treatmentPhases = [
  {
    phase: "Screening & Detection",
    description: "Blood tests to detect Hepatitis B surface antigen (HBsAg) and Hepatitis C antibodies. Early detection is crucial for preventing liver damage.",
    icon: Activity,
  },
  {
    phase: "Disease Assessment",
    description: "FibroScan, liver function tests, and viral load measurement to determine disease activity and liver fibrosis stage.",
    icon: ShieldCheck,
  },
  {
    phase: "Treatment Decision",
    description: "Based on viral activity, liver damage, and patient factors, your doctor will recommend monitoring or antiviral therapy.",
    icon: Pill,
  },
  {
    phase: "Monitoring & Follow-up",
    description: "Regular blood tests and FibroScan to monitor treatment response, viral suppression, and liver health.",
    icon: CheckCircle,
  },
];

export const ViralHepatitis = () => {
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
                  Viral Liver Disease
                </span>
                <h1 className="text-5xl md:text-6xl font-serif font-semibold text-foreground mt-3 mb-6">
                  Hepatitis B & C
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-justify">
                  Hepatitis B and C are viral infections that affect the liver and can lead to serious complications 
                  including cirrhosis and liver cancer if left untreated. With modern treatments, Hepatitis C can 
                  now be cured in over 95% of cases, while Hepatitis B can be effectively controlled with antiviral 
                  therapy. Early detection and treatment are key to preventing liver damage.
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
                    src={viralHepatitisHeroImage}
                    alt="Viral Hepatitis - Medical illustration showing hepatitis viruses affecting the liver"
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-white">4%</p>
                <p className="text-emerald-100 text-sm">of Singapore residents have Hep B</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-white">95%+</p>
                <p className="text-emerald-100 text-sm">Hepatitis C cure rate</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-white">8-12</p>
                <p className="text-emerald-100 text-sm">weeks to cure Hep C</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-white">70%</p>
                <p className="text-emerald-100 text-sm">have no symptoms initially</p>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Viral Hepatitis */}
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
                Understanding Hepatitis B & C
              </h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground mb-10 leading-loose">
                <p>
                  Viral hepatitis refers to inflammation of the liver caused by viral infection. Hepatitis B virus (HBV) 
                  and Hepatitis C virus (HCV) are the two most common causes of chronic viral hepatitis worldwide.
                </p>
                <p>
                  <strong>Hepatitis B</strong> is transmitted through blood and body fluids, most commonly from mother 
                  to child at birth in endemic regions like Singapore. It can become chronic and requires long-term 
                  monitoring and sometimes lifelong treatment.
                </p>
                <p>
                  <strong>Hepatitis C</strong> is primarily transmitted through blood-to-blood contact. Unlike Hepatitis B, 
                  it can now be completely cured with a short course of direct-acting antiviral (DAA) medications, 
                  representing one of the greatest advances in modern medicine.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hepatitis B Section */}
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
                <Syringe className="h-7 w-7 text-primary" />
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
                  Hepatitis B
                </h2>
              </div>
              
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground mb-10 leading-loose">
                <p>
                  Hepatitis B is a vaccine-preventable infection. In Singapore, approximately 4% of the population 
                  carries the Hepatitis B virus. Most chronic carriers acquired the infection at birth before 
                  universal vaccination was introduced in 1987. While there is no cure for Hepatitis B, it can be 
                  effectively managed with antiviral medications to prevent liver damage.
                </p>
              </div>

              {/* Risk Factors */}
              <div className="bg-amber-50 dark:bg-amber-900/10 rounded-2xl p-8 border border-amber-200 dark:border-amber-800/30 mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="h-6 w-6 text-amber-600" />
                  <h3 className="text-xl font-serif font-semibold text-foreground">Hepatitis B Risk Factors</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {hepatitisBRiskFactors.map((factor, index) => (
                    <div key={index} className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                      {factor}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hepatitis B Treatment */}
              <div className="bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-800/30">
                <div className="flex items-center gap-3 mb-6">
                  <Pill className="h-6 w-6 text-emerald-600" />
                  <h3 className="text-xl font-serif font-semibold text-foreground">Hepatitis B Treatment</h3>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-loose">
                  <p className="mb-4">
                    Not all Hepatitis B carriers require treatment. The decision to treat is based on:
                  </p>
                  <ul className="space-y-2">
                    <li>Viral load (HBV DNA level)</li>
                    <li>Liver enzyme levels (ALT)</li>
                    <li>Degree of liver fibrosis (assessed by FibroScan)</li>
                    <li>Presence of cirrhosis or family history of liver cancer</li>
                  </ul>
                  <p className="mt-4">
                    When treatment is indicated, oral antiviral medications such as <strong>tenofovir</strong> or 
                    <strong> entecavir</strong> are highly effective at suppressing the virus and preventing 
                    liver damage. Most patients require long-term or lifelong treatment.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hepatitis C Section */}
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
                <ShieldCheck className="h-7 w-7 text-primary" />
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
                  Hepatitis C
                </h2>
              </div>
              
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground mb-10 leading-loose">
                <p>
                  Hepatitis C can now be <strong>completely cured</strong> with a short course of direct-acting 
                  antiviral (DAA) medications. This is one of the greatest advances in modern medicine – a chronic 
                  viral infection that previously led to cirrhosis and liver cancer can now be eliminated in 
                  8-12 weeks of oral treatment with cure rates exceeding 95%.
                </p>
              </div>

              {/* Risk Factors */}
              <div className="bg-amber-50 dark:bg-amber-900/10 rounded-2xl p-8 border border-amber-200 dark:border-amber-800/30 mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="h-6 w-6 text-amber-600" />
                  <h3 className="text-xl font-serif font-semibold text-foreground">Hepatitis C Risk Factors</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {hepatitisCRiskFactors.map((factor, index) => (
                    <div key={index} className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                      {factor}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hepatitis C Cure */}
              <div className="bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-800/30">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                  <h3 className="text-xl font-serif font-semibold text-foreground">Hepatitis C Is Curable</h3>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-loose">
                  <p className="mb-4">
                    Modern DAA medications cure Hepatitis C by directly targeting the virus&apos;s ability to replicate:
                  </p>
                  <ul className="space-y-2">
                    <li><strong>Treatment duration:</strong> 8-12 weeks of oral tablets</li>
                    <li><strong>Cure rate:</strong> Over 95% achieve sustained virological response (SVR)</li>
                    <li><strong>Side effects:</strong> Generally mild and well-tolerated</li>
                    <li><strong>One-time treatment:</strong> Once cured, you cannot be reinfected with the same strain</li>
                  </ul>
                  <p className="mt-4">
                    Dr. Prem has extensive experience in treating Hepatitis C and was instrumental in developing 
                    community-based Hepatitis C treatment programs in Singapore. His work in this area was 
                    recognised with the Singapore Medical Association&apos;s Best Publication Award.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Signs and Symptoms */}
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
                Signs & Symptoms
              </h2>
              <p className="text-base text-muted-foreground mb-10 leading-relaxed">
                Many people with chronic Hepatitis B or C have no symptoms for years or even decades, 
                which is why screening is so important. When symptoms do occur, they may include:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {hepatitisBSymptoms.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="bg-background rounded-xl p-6 border border-border/50 shadow-sm"
                  >
                    <h4 className="font-semibold text-foreground text-lg mb-2">{item.symptom}</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Diagnosis */}
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
                Diagnosis and Assessment
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-loose">
                <p className="mb-10">
                  A comprehensive assessment determines your viral hepatitis status, disease activity, 
                  and any liver damage that may have occurred.
                </p>
              </div>

              {/* Diagnosis Methods with Images */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="rounded-2xl overflow-hidden bg-background shadow-lg border border-border/50">
                  <Image
                    src={bloodTestImage}
                    alt="Blood test for hepatitis screening"
                    className="w-full h-40 object-cover"
                    width={1280}
                    height={720}
                  />
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20">
                    <h4 className="font-semibold text-foreground mb-1 text-lg">Blood Tests</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">Hepatitis serology, viral load, liver function, and genotype testing</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden bg-background shadow-lg border border-border/50">
                  <Image
                    src={fibroscanImage}
                    alt="FibroScan procedure for liver assessment"
                    className="w-full h-40 object-cover"
                    width={1280}
                    height={720}
                  />
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20">
                    <h4 className="font-semibold text-foreground mb-1 text-lg">FibroScan</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">Non-invasive measurement of liver stiffness to assess fibrosis</p>
                    <Link 
                      href="/fibroscan" 
                      className="inline-flex items-center text-sm text-emerald-600 dark:text-emerald-400 hover:underline mt-2 font-medium"
                    >
                      Learn more about this procedure →
                    </Link>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden bg-background shadow-lg border border-border/50">
                  <Image
                    src={ultrasoundImage}
                    alt="Ultrasound examination of the liver"
                    className="w-full h-40 object-cover"
                    width={1280}
                    height={720}
                  />
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20">
                    <h4 className="font-semibold text-foreground mb-1 text-lg">Ultrasound</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">Detects liver abnormalities and screens for liver cancer</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden bg-background shadow-lg border border-border/50">
                  <Image
                    src={liverBiopsyImage}
                    alt="Liver biopsy procedure"
                    className="w-full h-40 object-cover"
                    width={1280}
                    height={720}
                  />
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20">
                    <h4 className="font-semibold text-foreground mb-1 text-lg">Liver Biopsy</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">Occasionally needed to assess inflammation and fibrosis grade</p>
                    <Link 
                      href="/liver-biopsy" 
                      className="inline-flex items-center text-sm text-emerald-600 dark:text-emerald-400 hover:underline mt-2 font-medium"
                    >
                      Learn more about this procedure →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Treatment Journey */}
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
                Your Treatment Journey
              </h2>
              <p className="text-base text-muted-foreground mb-10 leading-relaxed">
                From initial screening to successful treatment, we guide you through every step of your care.
              </p>

              <div className="space-y-6">
                {treatmentPhases.map((phase, index) => (
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
                        <h4 className="font-semibold text-foreground text-lg">{phase.phase}</h4>
                      </div>
                      <p className="text-base text-muted-foreground leading-relaxed">{phase.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Prevention */}
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
                Prevention & Vaccination
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-800/30">
                  <div className="flex items-center gap-3 mb-6">
                    <Syringe className="h-6 w-6 text-emerald-600" />
                    <h3 className="text-xl font-serif font-semibold text-foreground">Hepatitis B Vaccination</h3>
                  </div>
                  <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-loose">
                    <p className="mb-4">
                      Hepatitis B is <strong>vaccine-preventable</strong>. The vaccine is safe, effective, and provides 
                      long-lasting protection.
                    </p>
                    <ul className="space-y-2">
                      <li>Part of Singapore&apos;s national immunisation schedule since 1987</li>
                      <li>3-dose series provides over 95% protection</li>
                      <li>Recommended for all unvaccinated adults at risk</li>
                      <li>Check your immunity with a blood test</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/10 rounded-2xl p-8 border border-amber-200 dark:border-amber-800/30">
                  <div className="flex items-center gap-3 mb-6">
                    <AlertTriangle className="h-6 w-6 text-amber-600" />
                    <h3 className="text-xl font-serif font-semibold text-foreground">No Hepatitis C Vaccine</h3>
                  </div>
                  <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-loose">
                    <p className="mb-4">
                      There is currently <strong>no vaccine</strong> for Hepatitis C. Prevention relies on avoiding 
                      blood-to-blood contact.
                    </p>
                    <ul className="space-y-2">
                      <li>Never share needles or injecting equipment</li>
                      <li>Ensure sterile equipment for tattoos and piercings</li>
                      <li>Healthcare workers should follow safety protocols</li>
                      <li>Get tested if you have any risk factors</li>
                    </ul>
                  </div>
                </div>
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
                Expert Viral Hepatitis Care
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Dr. Prem Thurairajah has extensive experience in treating both Hepatitis B and C, having 
                completed specialist training at leading liver transplant centres in the UK and pioneered 
                community-based Hepatitis C treatment programs in Singapore.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/#contact">
                    <Calendar className="h-5 w-5" />
                    Book a Consultation
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/fibroscan">
                    Learn About FibroScan
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
              and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek 
              the advice of your physician or other qualified health provider with any questions you may have regarding 
              a medical condition.
            </p>
          </div>
        </section>

        {/* Related Conditions */}
        <RelatedConditions conditions={relatedConditions} />
      </main>
  )
}
