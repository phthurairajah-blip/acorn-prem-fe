'use client'

import { motion } from "framer-motion";
import { RelatedConditions } from "@/components/RelatedConditions";
import { ArrowLeft, AlertTriangle, CheckCircle, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const chronicPancreatitisImage = "/chronic-pancreatitis-hero.jpeg";
const eusImage = "/eus-pancreas.jpeg";
const alcoholCaffeineImage = "/alcohol-caffeine.jpeg";
const abdominalPainImage = "/abdominal-pain-jaundice.jpg";
const familyHealthImage = "/family-health.jpg";
const smokingImage = "/smoking.jpeg";
const ctScanImage = "/ct-scan-jaundice.jpg";
const mrcpImage = "/mrcp-jaundice.jpg";
const bloodTestImage = "/blood-test-liver.jpg";
const mediterraneanDietImage = "/mediterranean-diet.jpeg";
const smokingCessationImage = "/smoking-cessation.jpeg";
const alcoholCessationImage = "/alcohol-cessation.jpeg";
const ercpStoneRemovalImage = "/ercp-stone-removal.jpeg";
const enzymeMedicationImage = "/enzyme-medication.jpeg";

const relatedConditions = [
  {
    title: "Pancreatic Cyst",
    description: "Expert surveillance and management of pancreatic cysts.",
    link: "/pancreatic-cyst",
  },
  {
    title: "ERCP",
    description: "Therapeutic endoscopy for pancreatic duct conditions.",
    link: "/ercp",
  },
  {
    title: "EUS (Endoscopic Ultrasound)",
    description: "Advanced imaging for detailed pancreatic assessment.",
    link: "/eus",
  },
];

const causes = [
  {
    title: "Alcohol Consumption",
    description: "Long-term heavy alcohol use is the leading cause, accounting for 40-70% of cases. It causes progressive damage to pancreatic tissue.",
    image: alcoholCaffeineImage,
  },
  {
    title: "Smoking",
    description: "An independent risk factor that accelerates disease progression and increases risk of pancreatic calcifications.",
    image: smokingImage,
  },
  {
    title: "Recurrent Acute Pancreatitis",
    description: "Repeated episodes of acute pancreatitis can lead to chronic inflammation and permanent damage.",
    image: abdominalPainImage,
  },
  {
    title: "Genetic Factors",
    description: "Hereditary pancreatitis and genetic mutations (PRSS1, SPINK1, CFTR) can cause chronic pancreatitis.",
    image: familyHealthImage,
  },
];

const symptoms = [
  "Persistent upper abdominal pain radiating to the back",
  "Pain that worsens after eating or drinking alcohol",
  "Unintentional weight loss",
  "Oily, foul-smelling stools (steatorrhoea)",
  "Nausea and vomiting",
  "Diabetes mellitus (new onset or worsening)",
  "Bloating and indigestion",
  "Malnutrition and vitamin deficiencies",
];

const complications = [
  {
    title: "Pancreatic Insufficiency",
    description: "Reduced production of digestive enzymes leading to malabsorption of nutrients, particularly fats and fat-soluble vitamins.",
  },
  {
    title: "Diabetes Mellitus",
    description: "Damage to insulin-producing cells results in diabetes, which may require insulin therapy.",
  },
  {
    title: "Pseudocyst Formation",
    description: "Fluid collections that can cause pain, obstruction, or become infected, sometimes requiring drainage.",
  },
  {
    title: "Bile Duct Obstruction",
    description: "Inflammation and fibrosis can compress the common bile duct, causing jaundice.",
  },
  {
    title: "Pancreatic Cancer Risk",
    description: "Long-standing chronic pancreatitis increases the risk of developing pancreatic cancer.",
  },
  {
    title: "Splenic Vein Thrombosis",
    description: "Can lead to gastric varices and potential bleeding complications.",
  },
];

const diagnosticMethods: { name: string; description: string; image: string; link?: string }[] = [
  {
    name: "CT Scan",
    description: "Shows calcifications, duct dilation, atrophy, and structural changes characteristic of chronic pancreatitis.",
    image: ctScanImage,
  },
  {
    name: "MRCP",
    description: "Non-invasive MRI providing detailed visualisation of pancreatic duct anatomy and strictures.",
    image: mrcpImage,
  },
  {
    name: "Endoscopic Ultrasound (EUS)",
    description: "Most sensitive test for early changes, detecting parenchymal features and guiding tissue sampling.",
    image: eusImage,
    link: "/eus",
  },
  {
    name: "Blood & Functional Tests",
    description: "Faecal elastase for exocrine function, HbA1c for diabetes, and nutritional markers including fat-soluble vitamins.",
    image: bloodTestImage,
  },
];

const treatmentOptions: { title: string; description: string; image: string; link?: string }[] = [
  {
    title: "Alcohol Abstinence",
    description: "Complete abstinence from alcohol is essential to prevent further damage and slow disease progression.",
    image: alcoholCessationImage,
  },
  {
    title: "Smoking Cessation",
    description: "Quitting smoking is crucial as it accelerates pancreatic damage and increases complications.",
    image: smokingCessationImage,
  },
  {
    title: "Medications & Enzyme Replacement",
    description: "Pancreatic enzyme supplements (Creon®) taken with meals to aid digestion. Pain management with analgesics and antioxidants.",
    image: enzymeMedicationImage,
  },
  {
    title: "Nutritional Support",
    description: "Low-fat diet, small frequent meals, and supplementation of fat-soluble vitamins (A, D, E, K).",
    image: mediterraneanDietImage,
  },
  {
    title: "ERCP Therapy",
    description: "Endoscopic treatment for strictures, stone removal, and stent placement in the pancreatic duct.",
    image: ercpStoneRemovalImage,
    link: "/ercp",
  },
  {
    title: "EUS with Coeliac Plexus Block",
    description: "EUS-guided injection to block pain signals from the pancreas, providing relief for chronic pain refractory to medications.",
    image: eusImage,
    link: "/eus",
  },
];

const ChronicPancreatitis = () => {
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
                  Pancreatic Conditions
                </span>
                <h1 className="text-5xl md:text-6xl font-serif font-semibold text-foreground mt-3 mb-6">
                  Chronic Pancreatitis
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Chronic pancreatitis is a progressive inflammatory condition causing permanent damage to the pancreas. 
                  Early diagnosis and comprehensive management can help control symptoms and prevent complications.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <a href="https://wa.me/6580533322" target="_blank" rel="noopener noreferrer">
                      Book a Consultation
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/ercp">Learn About ERCP</Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={chronicPancreatitisImage}
                    alt="Chronic pancreatitis medical illustration"
                    className="w-full h-full object-cover"
                    width={1280}
                    height={720}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What is Chronic Pancreatitis */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-8 text-center">
                Understanding Chronic Pancreatitis
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Chronic pancreatitis is characterised by ongoing inflammation that leads to irreversible structural 
                  changes in the pancreas, including fibrosis, calcifications, and loss of both exocrine 
                  (digestive enzyme production) and endocrine (insulin production) function.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Unlike acute pancreatitis, which may resolve completely, chronic pancreatitis causes permanent 
                  damage that progressively worsens over time. The condition significantly impacts quality of life, 
                  primarily through chronic pain and nutritional complications.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  With proper management, including lifestyle modifications, pain control, enzyme replacement, 
                  and when needed, endoscopic or surgical intervention, many patients can achieve significant 
                  improvement in their symptoms and quality of life.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Causes Section */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
                Causes & Risk Factors
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Understanding the underlying cause is essential for tailored treatment and prevention of progression.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {causes.map((cause, index) => (
                <motion.div
                  key={cause.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-background rounded-xl overflow-hidden shadow-sm border border-border"
                >
                  <Image
                    src={cause.image}
                    alt={cause.title}
                    className="w-full h-48 object-cover"
                    width={1280}
                    height={720}
                  />
                  <div className="p-5">
                    <h3 className="font-semibold text-lg text-foreground mb-2">{cause.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{cause.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8 max-w-4xl mx-auto bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Other Causes</h4>
                  <p className="text-muted-foreground">
                    Other causes include autoimmune pancreatitis, tropical pancreatitis, metabolic disorders 
                    (hypercalcaemia, hypertriglyceridaemia), anatomical abnormalities (pancreas divisum), 
                    and idiopathic cases where no cause can be identified.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Symptoms Section */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                  Signs & Symptoms
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Symptoms vary depending on the stage and severity of the disease. Pain is often the 
                  predominant symptom in early stages, while malabsorption becomes more prominent as 
                  the disease progresses.
                </p>
                <div className="grid gap-3">
                  {symptoms.map((symptom, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-foreground">{symptom}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={eusImage}
                    alt="EUS procedure for pancreatic assessment"
                    className="w-full h-full object-cover"
                    width={1280}
                    height={720}
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3 text-center">
                  EUS provides detailed imaging of the pancreas for accurate diagnosis
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Complications Section */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
                Potential Complications
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Early diagnosis and proper management can help prevent or delay these complications.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {complications.map((complication, index) => (
                <motion.div
                  key={complication.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-background rounded-xl p-6 shadow-sm border border-border"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                    <h3 className="font-semibold text-lg text-foreground">{complication.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{complication.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Diagnosis Section */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                Diagnostic Approach
              </h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                A combination of clinical assessment, imaging, and functional tests is used to diagnose 
                chronic pancreatitis and assess disease severity.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {diagnosticMethods.map((test, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="rounded-xl overflow-hidden shadow-medium bg-background border border-border"
                  >
                    <Image
                      src={test.image} 
                      alt={test.name}
                      className="w-full h-48 object-cover"
                      width={1280}
                      height={720}
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{test.name}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">{test.description}</p>
                      {test.link && (
                        <Link 
                          href={test.link} 
                          className="inline-flex items-center text-sm text-emerald-600 dark:text-emerald-400 hover:underline mt-3 font-medium"
                        >
                          Learn more about this procedure →
                        </Link>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Treatment Section */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                Treatment Options
              </h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                A multidisciplinary approach combining medical, endoscopic, and surgical therapies 
                tailored to individual patient needs.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {treatmentOptions.map((treatment, index) => (
                  <motion.div
                    key={treatment.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="rounded-xl overflow-hidden shadow-medium bg-background border border-border"
                  >
                    <Image 
                      src={treatment.image} 
                      alt={treatment.title}
                      className="w-full h-48 object-cover"
                      width={1280}
                      height={720}
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{treatment.title}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">{treatment.description}</p>
                      {treatment.link && (
                        <Link 
                          href={treatment.link} 
                          className="inline-flex items-center text-sm text-emerald-600 dark:text-emerald-400 hover:underline mt-3 font-medium"
                        >
                          Learn more about this procedure →
                        </Link>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Expert Care Section */}
        <section className="py-16 lg:py-20 bg-emerald-600 dark:bg-emerald-800">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Stethoscope className="h-12 w-12 text-white/90 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-6">
                Expert Pancreatic Care
              </h2>
              <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                Dr. Prem Thurairajah has extensive experience in managing chronic pancreatitis, 
                with advanced training in therapeutic ERCP and EUS from leading centres in the UK. 
                He provides comprehensive care from diagnosis through long-term management.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="secondary" className="text-white">
                  <a href="https://wa.me/6580533322" target="_blank" rel="noopener noreferrer">
                    Schedule Consultation
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  <Link href="/ercp">Learn About ERCP</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Conditions */}
        <RelatedConditions conditions={relatedConditions} />

        {/* Medical Disclaimer */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Medical Disclaimer:</strong> The information provided on this page is for educational 
                purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. 
                Please consult Dr. Prem Thurairajah or another qualified healthcare provider for personalised 
                medical guidance regarding chronic pancreatitis.
              </p>
            </div>
          </div>
        </section>
      </main>
  )
}

export default ChronicPancreatitis