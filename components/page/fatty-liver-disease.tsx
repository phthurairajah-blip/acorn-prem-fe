'use client'

import { motion } from "framer-motion";
import { RelatedConditions } from "@/components/RelatedConditions";
import { ArrowLeft, AlertTriangle, CheckCircle, Calendar, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const fattyLiverHeroImage = "/fatty-liver-hero.jpeg";
const liverDiseaseProgression = "/fatty-liver-stages.jpeg";
const exerciseImage = "/exercise-lifestyle.jpeg";
const fattyLiverHistology = "/fatty-liver-histology.jpeg";
const ultrasoundImage = "/ultrasound-abdomen.jpg";
const fibroscanImage = "/fibroscan-procedure.jpg";
const mriLiverImage = "/mri-liver-scan.jpg";
const bloodTestImage = "/blood-test-liver.jpg";
const mediterraneanDietImage = "/mediterranean-diet.jpeg";

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
    title: "Jaundice",
    description: "Expert evaluation and management of liver and biliary causes of jaundice.",
    link: "/jaundice",
  },
];

const riskFactors = [
  "Obesity (BMI ≥ 25 kg/m²)",
  "Type 2 diabetes mellitus",
  "Metabolic syndrome",
  "High cholesterol and triglycerides",
  "Polycystic ovary syndrome (PCOS)",
  "Sleep apnoea",
  "Hypothyroidism",
  "Sedentary lifestyle",
];

const stagesOfDisease = [
  {
    stage: "Simple Steatosis (NAFL)",
    description: "Fat accumulation in the liver without significant inflammation. Generally considered benign with low risk of progression.",
    severity: "low",
  },
  {
    stage: "Steatohepatitis (MASH)",
    description: "Fat accumulation with inflammation and liver cell damage. Can progress to fibrosis and cirrhosis if untreated.",
    severity: "medium",
  },
  {
    stage: "Fibrosis",
    description: "Scar tissue begins to form around the liver and blood vessels. Still potentially reversible with treatment.",
    severity: "medium",
  },
  {
    stage: "Cirrhosis",
    description: "Extensive scarring with loss of normal liver function. Increases risk of liver failure and liver cancer.",
    severity: "high",
  },
];

const lifestyleRecommendations = [
  {
    category: "Diet",
    items: [
      "Adopt a Mediterranean-style diet rich in fruits, vegetables, whole grains, and healthy fats",
      "Reduce intake of refined carbohydrates and added sugars",
      "Limit saturated fats and avoid trans fats",
      "Avoid fructose-sweetened beverages and processed foods",
    ],
  },
  {
    category: "Exercise",
    items: [
      "Aim for at least 150 minutes of moderate-intensity aerobic exercise per week",
      "Include resistance training 2-3 times per week",
      "Reduce sedentary time and increase daily movement",
      "Even modest weight loss (5-10%) can significantly improve liver health",
    ],
  },
  {
    category: "Other Lifestyle Changes",
    items: [
      "Avoid alcohol completely or limit to minimal amounts",
      "Get adequate sleep (7-8 hours per night)",
      "Manage stress through relaxation techniques",
      "Stop smoking if applicable",
    ],
  },
];

export const FattyLiverDisease = () => {
  return (
    <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-emerald-50 to-background dark:from-emerald-950/30 dark:to-background">
          <div className="container mx-auto px-2 sm:px-4">
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
                  Metabolic Liver Disease
                </span>
                <h1 className="text-5xl md:text-6xl font-serif font-semibold text-foreground mt-3 mb-6">
                  Fatty Liver Disease
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-justify">
                  Metabolic dysfunction-associated steatotic liver disease (MASLD) has become the most common liver condition worldwide, 
                  affecting approximately 1 in 3 adults in Singapore. While often asymptomatic in early stages, 
                  it can progress to serious liver damage. The good news is that with early detection and lifestyle 
                  changes, fatty liver disease can often be reversed.
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
                    src={fattyLiverHeroImage}
                    alt="Fatty Liver Disease - 3D medical illustration showing a liver with fat accumulation"
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
          <div className="container mx-auto px-2 sm:px-4">
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-white">1 in 3</p>
                <p className="text-emerald-100 text-sm">Adults in Singapore affected</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-white">80%</p>
                <p className="text-emerald-100 text-sm">Have no symptoms initially</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-white">5-10%</p>
                <p className="text-emerald-100 text-sm">Weight loss can reverse MASLD</p>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding NAFLD */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                Understanding Fatty Liver Disease
              </h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground mb-10 leading-loose">
                <p>
                  Fatty liver disease occurs when excess fat accumulates in liver cells. In metabolic dysfunction-associated 
                  steatotic liver disease (MASLD), this happens in people with metabolic risk factors. It is closely 
                  linked to metabolic conditions such as obesity, diabetes, and high cholesterol.
                </p>
                <p>
                  The condition exists on a spectrum, ranging from simple fat accumulation (steatosis) to 
                  metabolic dysfunction-associated steatohepatitis (MASH), which involves inflammation and can lead to liver 
                  scarring (fibrosis) and eventually cirrhosis.
                </p>
              </div>

              {/* Risk Factors */}
              <div className="bg-amber-50 dark:bg-amber-900/10 rounded-2xl p-8 border border-amber-200 dark:border-amber-800/30 mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="h-6 w-6 text-amber-600" />
                  <h3 className="text-xl font-serif font-semibold text-foreground">Risk Factors</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {riskFactors.map((factor, index) => (
                    <div key={index} className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                      {factor}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Disease Progression */}
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
                <TrendingUp className="h-7 w-7 text-primary" />
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
                  Stages of Disease
                </h2>
              </div>
              <p className="text-base text-muted-foreground mb-10 leading-relaxed">
                Fatty liver disease can progress through several stages. Understanding where you are in this 
                spectrum helps guide treatment intensity.
              </p>

              {/* Stages Illustration */}
              <div className="mb-10 rounded-2xl overflow-hidden bg-background shadow-lg border border-border/50">
                <Image
                  src={liverDiseaseProgression}
                  alt="Stages of liver damage progression from normal liver to cirrhosis"
                  className="w-full h-auto object-contain"
                  width={1280}
                  height={720}
                />
              </div>

              <div className="space-y-4">
                {stagesOfDisease.map((stage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className={`bg-background border rounded-xl p-6 ${
                      stage.severity === "high" 
                        ? "border-red-300 dark:border-red-800/50" 
                        : stage.severity === "medium"
                        ? "border-amber-300 dark:border-amber-800/50"
                        : "border-emerald-300 dark:border-emerald-800/50"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded ${
                        stage.severity === "high"
                          ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                          : stage.severity === "medium"
                          ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                          : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                      }`}>
                        Stage {index + 1}
                      </span>
                      <h4 className="font-semibold text-foreground text-lg">{stage.stage}</h4>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed">{stage.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Diagnosis */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-2 sm:px-4">
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
                  Fatty liver disease is often discovered incidentally on blood tests or imaging. A comprehensive 
                  assessment is important to determine the stage of disease and guide management.
                </p>
              </div>

              {/* Diagnosis Methods with Images */}
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
                <div className="rounded-2xl overflow-hidden bg-background shadow-lg border border-border/50">
                  <Image
                    src={bloodTestImage}
                    alt="Blood test tubes for liver function testing"
                    className="w-full h-40 object-cover"
                    width={1280}
                    height={720}
                  />
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20">
                    <h4 className="font-semibold text-foreground mb-1 text-lg">Blood Tests</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">Liver enzymes, metabolic panel, fibrosis scores (FIB-4, NFS)</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden bg-background shadow-lg border border-border/50">
                  <Image
                    src={ultrasoundImage}
                    alt="Abdominal ultrasound examination for detecting fatty liver changes"
                    className="w-full h-40 object-cover"
                    width={1280}
                    height={720}
                  />
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20">
                    <h4 className="font-semibold text-foreground mb-1 text-lg">Ultrasound</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">Detects fatty changes and rules out other conditions</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden bg-background shadow-lg border border-border/50">
                  <Image
                    src={fibroscanImage}
                    alt="FibroScan procedure measuring liver stiffness and fat content"
                    className="w-full h-40 object-cover"
                    width={1280}
                    height={720}
                  />
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20">
                    <h4 className="font-semibold text-foreground mb-1 text-lg">FibroScan</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">Measures liver stiffness and fat content (CAP score)</p>
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
                    src={mriLiverImage}
                    alt="MRI scan showing liver fat quantification"
                    className="w-full h-40 object-cover"
                    width={1280}
                    height={720}
                  />
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20">
                    <h4 className="font-semibold text-foreground mb-1 text-lg">MRI-PDFF</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">Most accurate non-invasive method to quantify liver fat</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden bg-background shadow-lg border border-border/50">
                  <Image
                    src={fattyLiverHistology}
                    alt="Histological slide showing fatty liver tissue with lipid droplets"
                    className="w-full h-40 object-cover"
                    width={1280}
                    height={720}
                  />
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20">
                    <h4 className="font-semibold text-foreground mb-1 text-lg">Liver Biopsy</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">Distinguishes MASH from simple steatosis</p>
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

        {/* Lifestyle Management */}
        <section className="py-16 lg:py-20 bg-emerald-50 dark:bg-emerald-950/20">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                Lifestyle-Based Treatment
              </h2>
              <p className="text-base text-muted-foreground mb-10 leading-relaxed">
                Lifestyle modification is the cornerstone of fatty liver disease treatment. Weight loss of 
                5-10% of body weight has been shown to significantly improve liver fat, inflammation, and even fibrosis.
              </p>

              {/* Lifestyle Treatment Images */}
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="rounded-2xl overflow-hidden bg-background shadow-lg border border-border/50">
                  <Image
                    src={mediterraneanDietImage}
                    alt="Mediterranean diet with fresh salmon, vegetables, olive oil, legumes, and healthy ingredients for liver health"
                    className="w-full h-64 object-cover"
                    width={1280}
                    height={720}
                  />
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20">
                    <h4 className="font-semibold text-foreground text-lg">Mediterranean Diet</h4>
                    <p className="text-base text-muted-foreground">Rich in healthy fats, lean proteins, and antioxidants</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden bg-background shadow-lg border border-border/50">
                  <Image
                    src={exerciseImage}
                    alt="Group exercise class on stationary bikes for cardiovascular fitness and weight management"
                    className="w-full h-64 object-cover"
                    width={1280}
                    height={720}
                  />
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20">
                    <h4 className="font-semibold text-foreground text-lg">Regular Exercise</h4>
                    <p className="text-base text-muted-foreground">150+ minutes of moderate activity weekly</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                {lifestyleRecommendations.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="bg-background rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/30"
                  >
                    <h3 className="text-xl font-semibold text-foreground mb-4">{category.category}</h3>
                    <ul className="space-y-3">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-base text-muted-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Medical Treatment */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                Medical Treatment
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-loose">
                <p>
                  In addition to lifestyle changes, medical treatment may be recommended for patients with 
                  more advanced disease:
                </p>
                <ul className="space-y-3 text-base">
                  <li className="leading-relaxed"><strong className="text-foreground">GLP-1 agonists:</strong> Medications such as semaglutide have shown significant benefits in MASH</li>
                  <li className="leading-relaxed"><strong className="text-foreground">Pioglitazone:</strong> May have benefits in diabetic patients with MASH</li>
                  <li className="leading-relaxed"><strong className="text-foreground">Management of metabolic conditions:</strong> Optimal control of diabetes, hypertension, and dyslipidaemia</li>
                  <li className="leading-relaxed"><strong className="text-foreground">New therapies:</strong> Several promising medications are in clinical trials and becoming available</li>
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
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
                Take Control of Your Liver Health
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                If you have risk factors or have been told you have fatty liver, schedule a comprehensive 
                assessment to understand your liver health and develop a personalised treatment plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/#contact">Book Consultation</Link>
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
