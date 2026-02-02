'use client'

import { motion } from "framer-motion";
import { RelatedConditions } from "@/components/RelatedConditions";
import { ArrowLeft, AlertTriangle, Calendar, Shield, Search, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const liverCancerImage = "/liver-cancer-hcc.jpg";
const familyHealthImage = "/family-health.jpg";
const ultrasoundAbdomen = "/ultrasound-abdomen.jpg";
const bloodTestImage = "/blood-test-liver.jpg";
const ctScanImage = "/ct-scan-jaundice.jpg";
const fibroscanImage = "/fibroscan-procedure.jpg";
const eusImage = "/eus-pancreas.jpeg";
const mrcpImage = "/mrcp-jaundice.jpg";

const relatedConditions = [
  {
    title: "Liver Cirrhosis",
    description: "Advanced care for chronic liver disease, complications, and transplant assessment.",
    link: "/liver-cirrhosis",
  },
  {
    title: "Fatty Liver Disease",
    description: "Diagnosis and lifestyle-based management of MASLD and MASH.",
    link: "/fatty-liver-disease",
  },
  {
    title: "Pancreatic Cyst",
    description: "Evaluation and surveillance of pancreatic cystic lesions.",
    link: "/pancreatic-cyst",
  },
];

const liverCancerRiskFactors = [
  "Chronic hepatitis B or C infection",
  "Liver cirrhosis from any cause",
  "Metabolic dysfunction-associated steatotic liver disease (MASLD/MASH)",
  "Heavy alcohol consumption",
  "Family history of liver cancer",
  "Exposure to aflatoxins (toxins from mould)",
  "Diabetes and obesity",
];

const pancreaticCancerRiskFactors = [
  "Age 50 years and above",
  "Smoking",
  "Chronic pancreatitis",
  "Family history of pancreatic cancer",
  "Hereditary syndromes (e.g., BRCA2, Lynch syndrome)",
  "Diabetes mellitus (especially new-onset)",
  "Obesity",
];

const screeningBenefits = [
  { icon: Shield, title: "Early Detection", desc: "Find cancer at treatable stages" },
  { icon: Search, title: "Accurate Diagnosis", desc: "Advanced imaging and tumour markers" },
  { icon: Activity, title: "Better Outcomes", desc: "Early treatment improves survival" },
];

const liverScreeningSteps = [
  {
    step: "Ultrasound of the Liver",
    desc: "A non-invasive imaging test that uses sound waves to create pictures of the liver. It can detect tumours as small as 1-2 cm. Recommended every 6 months for high-risk individuals.",
    image: ultrasoundAbdomen,
  },
  {
    step: "Alpha-fetoprotein (AFP) Blood Test",
    desc: "A tumour marker that may be elevated in liver cancer. Used in combination with ultrasound for better detection. Recommended every 6 months for high-risk individuals.",
    image: bloodTestImage,
  },
  {
    step: "CT or MRI Scan",
    desc: "Advanced imaging used when ultrasound findings are inconclusive or for further characterisation of liver lesions. Performed as clinically indicated.",
    image: ctScanImage,
  },
  {
    step: "Fibroscan",
    desc: "A specialised ultrasound that measures liver stiffness to assess for cirrhosis, which increases cancer risk. Recommended annually or as indicated.",
    image: fibroscanImage,
  },
];

const pancreaticScreeningSteps: { step: string; desc: string; image: string; link?: string }[] = [
  {
    step: "Endoscopic Ultrasound (EUS)",
    desc: "The most sensitive test for detecting small pancreatic lesions. A thin tube with an ultrasound probe is passed through the mouth to get close-up images of the pancreas. Recommended annually for high-risk individuals.",
    image: eusImage,
    link: "/eus",
  },
  {
    step: "MRI/MRCP",
    desc: "Magnetic resonance imaging with cholangiopancreatography provides detailed images of the pancreas and bile ducts without radiation. Recommended annually for high-risk individuals.",
    image: mrcpImage,
  },
  {
    step: "CA 19-9 Blood Test",
    desc: "A tumour marker that may be elevated in pancreatic cancer. However, it is not recommended for general screening due to limited sensitivity and specificity.",
    image: bloodTestImage,
  },
];

const LiverPancreaticCancer = () => {
  return (
    <main className="pt-20">
        {/* Hero Section with Image */}
        <section className="py-12 lg:py-20 bg-gradient-to-b from-emerald-50 to-background dark:from-emerald-950/30 dark:to-background">
          <div className="container mx-auto px-2 sm:px-4">
            <Link
              href="/#conditions"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Conditions
            </Link>

            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-emerald-600 dark:text-emerald-400 text-base font-medium tracking-widest uppercase">
                  Cancer Surveillance
                </span>
                <h1 className="text-5xl md:text-6xl font-serif font-semibold text-foreground mt-2 mb-4">
                  Liver & Pancreatic Cancer Screening
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  Liver and pancreatic cancers are among the leading causes of cancer deaths in Singapore. 
                  Early detection through appropriate screening can significantly improve treatment outcomes.
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
                <Image
                  src={liverCancerImage}
                  alt="Liver cancer screening and detection"
                  className="rounded-2xl shadow-lg w-full object-cover aspect-video"
                  width={1280}
                  height={720}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits - Visual Cards */}
        <section className="py-14 lg:py-20">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-10 text-center"
            >
              Why Get Screened?
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {screeningBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center p-6 bg-card rounded-xl border border-border"
                >
                  <benefit.icon className="h-10 w-10 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-base text-muted-foreground">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Liver Cancer Risk Factors with Image */}
        <section className="py-14 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={familyHealthImage}
                  alt="Healthy family representing preventive healthcare"
                  className="rounded-2xl shadow-lg w-full object-cover aspect-square"
                  width={1280}
                  height={720}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-amber-600" />
                  <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
                    Liver Cancer Risk Factors
                  </h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Hepatocellular carcinoma is the most common type of primary liver cancer and the 4th most common cancer in Singapore.
                </p>
                <ul className="space-y-3">
                  {liverCancerRiskFactors.map((factor, index) => (
                    <li key={index} className="flex items-center gap-3 text-foreground">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                      {factor}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Liver Screening Methods - Card Grid */}
        <section className="py-14 lg:py-20">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                Liver Cancer Screening Methods
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed text-justify">
                A combination of imaging and blood tests is used to detect liver cancer early in high-risk individuals.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {liverScreeningSteps.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="rounded-xl overflow-hidden shadow-medium bg-background border border-border"
                  >
                    <Image
                      src={item.image} 
                      alt={item.step}
                      className="w-full h-48 object-cover"
                      width={1280}
                      height={720}
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{item.step}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">{item.desc}</p>
                      {item.step === "Fibroscan" && (
                        <Link 
                          href="/fibroscan" 
                          className="inline-flex items-center text-sm text-emerald-600 dark:text-emerald-400 hover:underline mt-2 font-medium"
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

        {/* Pancreatic Cancer Risk Factors */}
        <section className="py-14 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-amber-600" />
                  <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
                    Pancreatic Cancer Risk Factors
                  </h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Pancreatic cancer is one of the most aggressive cancers. Early detection significantly improves treatment options.
                </p>
                <ul className="space-y-3">
                  {pancreaticCancerRiskFactors.map((factor, index) => (
                    <li key={index} className="flex items-center gap-3 text-foreground">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                      {factor}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-800/30"
              >
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Who Should Be Screened?
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-4">
                  Pancreatic cancer screening is recommended for high-risk individuals:
                </p>
                <ul className="space-y-3 text-muted-foreground text-base leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    Individuals with 2 or more first-degree relatives with pancreatic cancer
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    Carriers of BRCA1, BRCA2, PALB2, or other hereditary cancer syndrome genes
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    Patients with Peutz-Jeghers syndrome
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    Patients with hereditary pancreatitis
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pancreatic Screening Methods - Card Grid */}
        <section className="py-14 lg:py-20">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                Pancreatic Cancer Screening Methods
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed text-justify">
                Screening for pancreatic cancer focuses on high-risk individuals using advanced imaging techniques.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {pancreaticScreeningSteps.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="rounded-xl overflow-hidden shadow-medium bg-background border border-border"
                  >
                    <Image
                      src={item.image} 
                      alt={item.step}
                      className="w-full h-48 object-cover"
                      width={1280}
                      height={720}
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{item.step}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">{item.desc}</p>
                      {item.link && (
                        <Link 
                          href={item.link} 
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

        {/* CTA Section */}
        <section className="py-14 lg:py-20 bg-emerald-600 dark:bg-emerald-800">
          <div className="container mx-auto px-2 sm:px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-4">
                Take Control of Your Health
              </h2>
              <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                If you have risk factors for liver or pancreatic cancer, early screening could save your life. 
                Consult Dr. Prem Thurairajah for a personalised screening plan.
              </p>
              <Button asChild size="lg" variant="secondary" className="gap-2 text-white">
                <Link href="/#contact">
                  <Calendar className="h-5 w-5" />
                  Schedule a Consultation
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Related Conditions */}
        <RelatedConditions conditions={relatedConditions} />

        {/* Disclaimer */}
        <section className="py-8 bg-muted/50">
          <div className="container mx-auto px-2 sm:px-4">
            <p className="text-sm text-muted-foreground text-center max-w-3xl mx-auto">
              The information provided is for educational purposes only and should not replace professional medical advice. 
              Please consult Dr. Prem Thurairajah for personalised diagnosis and treatment options.
            </p>
          </div>
        </section>
      </main>
  )
}

export default LiverPancreaticCancer