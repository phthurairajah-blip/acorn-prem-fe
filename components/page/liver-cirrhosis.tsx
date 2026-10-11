'use client'

import { motion } from "framer-motion";
import { RelatedConditions } from "@/components/RelatedConditions";
import { ArrowLeft, AlertTriangle, CheckCircle, Calendar, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Image from "next/image";

const cirrhosisImage = "/cirrhosis-comparison.jpeg";
const portalHypertensionImage = "/portal-hypertension.jpeg";
const ascitesImage = "/ascites.jpeg";
const liverCancerImage = "/liver-cancer-hcc.jpg";
const hepaticEncephalopathyImage = "/hepatic-encephalopathy.jpeg";
const sbpPeritonitisImage = "/sbp-peritonitis.jpeg";
const hrsDialysisImage = "/hrs-dialysis.jpeg";
const bloodTestImage = "/blood-test-jaundice.jpg";
const fibroscanImage = "/fibroscan-procedure.jpg";
const ultrasoundImage = "/ultrasound-abdomen.jpg";
const ctScanImage = "/ct-scan-jaundice.jpg";
const endoscopeImage = "/endoscope-procedure.jpg";
const liverBiopsyImage = "/liver-biopsy-jaundice.jpg";

const relatedConditions = [{
  title: "Fatty Liver Disease",
  description: "Diagnosis and lifestyle-based management of MASLD and MASH.",
  link: "/fatty-liver-disease"
}, {
  title: "Jaundice",
  description: "Expert evaluation and management of liver and biliary causes of jaundice.",
  link: "/jaundice"
}, {
  title: "Liver & Pancreatic Cancer Screening",
  description: "Comprehensive imaging and tumour marker evaluation for early diagnosis.",
  link: "/liver-pancreatic-cancer-screening"
}];
const causes = ["Chronic hepatitis B infection", "Chronic hepatitis C infection", "Alcoholic liver disease", "Wilson's disease (copper accumulation)", "Autoimmune hepatitis", "Primary biliary cholangitis (PBC)", "Primary sclerosing cholangitis (PSC)", "Haemochromatosis (iron overload)", "Metabolic dysfunction-associated steatotic liver disease (MASLD/MASH)"];
const complications = [{
  name: "Portal Hypertension",
  description: "Increased pressure in the portal vein leading to enlarged veins (varices) in the oesophagus and stomach that can bleed.",
  image: portalHypertensionImage,
  alt: "portal hypertension in liver cirrhosis"
}, {
  name: "Ascites",
  description: "Accumulation of fluid in the abdomen causing swelling and discomfort.",
  image: ascitesImage,
  alt: "ascites in liver cirrhosis"
}, {
  name: "Hepatic Encephalopathy",
  description: "Confusion, altered consciousness, and cognitive changes due to toxin buildup when the liver cannot filter properly.",
  image: hepaticEncephalopathyImage,
  alt: "hepatic encephalopathy related to liver cirrhosis"
}, {
  name: "Spontaneous Bacterial Peritonitis",
  description: "Infection of the ascitic fluid requiring prompt antibiotic treatment.",
  image: sbpPeritonitisImage,
  alt: "spontaneous bacterial peritonitis in liver cirrhosis"
}, {
  name: "Hepatorenal Syndrome",
  description: "Kidney failure that can occur in advanced cirrhosis.",
  image: hrsDialysisImage,
  alt: "hepatorenal syndrome due to liver cirrhosis"
}, {
  name: "Liver Cancer (HCC)",
  description: "Cirrhosis significantly increases the risk of developing hepatocellular carcinoma.",
  image: liverCancerImage,
  alt: "liver cancer (hcc) associated with liver cirrhosis"
}];
const managementStrategies = ["Regular surveillance for liver cancer with ultrasound and AFP every 6 months", "Endoscopic screening and treatment of oesophageal varices", "Diuretic therapy and dietary sodium restriction for ascites", "Lactulose and rifaximin for hepatic encephalopathy prevention", "Vaccination against hepatitis A and B if not immune", "Nutritional support and avoidance of alcohol", "Liver transplant evaluation for suitable candidates"];

const diagnosticTests: { name: string; description: string; image: string; alt: string; link?: string }[] = [
  {
    name: "Blood Tests",
    description: "Liver function tests, platelet count, albumin, and clotting factors help assess liver function and disease severity.",
    image: bloodTestImage,
    alt: "blood tests for liver cirrhosis evaluation"
  },
  {
    name: "FibroScan",
    description: "A non-invasive test that measures liver stiffness to assess the degree of fibrosis without the need for biopsy.",
    image: fibroscanImage,
    link: "/fibroscan",
    alt: "fibroscan for assessing liver cirrhosis"
  },
  {
    name: "Ultrasound",
    description: "Evaluates liver size, texture, and detects signs of portal hypertension such as splenomegaly and ascites.",
    image: ultrasoundImage,
    alt: "ultrasound in liver cirrhosis diagnosis"
  },
  {
    name: "CT or MRI Scan",
    description: "Provides detailed imaging for comprehensive assessment of liver architecture and detection of complications.",
    image: ctScanImage,
    alt: "ct or mri scan for liver cirrhosis detection"
  },
  {
    name: "Gastroscopy",
    description: "Screens for oesophageal and gastric varices that require monitoring or preventive treatment.",
    image: endoscopeImage,
    link: "/gastroscopy",
    alt: "gastroscopy for liver cirrhosis evaluation"
  },
  {
    name: "Liver Biopsy",
    description: "May be needed in certain cases to confirm the diagnosis, identify the cause, or assess disease activity.",
    image: liverBiopsyImage,
    link: "/liver-biopsy",
    alt: "liver biopsy for assessing liver cirrhosis"
  },
];

const liverEmergencySigns = [
  {
    title: "Vomiting blood, or material that looks like coffee grounds",
    description:
      "This may indicate bleeding from varices or ulcers and can become life-threatening very quickly.",
  },
  {
    title: "Black, tarry, or foul-smelling stools",
    description:
      "A sign of bleeding higher up in the digestive tract that may not be immediately visible.",
  },
  {
    title: "Sudden or rapidly worsening abdominal swelling",
    description:
      "Can signal a significant increase in ascites or, in some cases, infection of the abdominal fluid (spontaneous bacterial peritonitis), which requires urgent antibiotics.",
  },
  {
    title: "Yellowing of the skin or eyes (jaundice) that appears or worsens quickly",
    description:
      "Suggests the liver is under acute stress and function is declining.",
  },
  {
    title: "Confusion, unusual drowsiness, slurred speech or personality changes",
    description:
      "These are signs of hepatic encephalopathy and require prompt treatment to prevent deterioration.",
  },
  {
    title: "Fever with no obvious cause",
    description:
      "People with cirrhosis are more vulnerable to serious infections, and what seems like a mild illness can escalate rapidly.",
  },
];

const liverCirrhosisFaqs = [
  {
    question:
      "What treatment will I need if I have compensated liver cirrhosis but no symptoms?",
    answer:
      "Compensated cirrhosis means your liver is still managing despite scarring. Treatment at this stage focuses on slowing progression and preventing complications.",
    points: [
      "Treat the underlying cause — antivirals for hepatitis B/C, alcohol cessation, weight loss for fatty liver disease",
      "Variceal screening — upper endoscopy (gastroscopy) to check for oesophageal varices that could bleed",
      "HCC surveillance — 6-monthly liver ultrasound and AFP blood test to screen for liver cancer",
      "Avoid hepatotoxic substances — see the dedicated FAQ below for a full list",
      "Vaccinations — hepatitis A, hepatitis B (if not immune), influenza, and pneumococcal vaccines are recommended",
      "Nutritional support — adequate protein and calorie intake to prevent muscle loss (sarcopenia)",
    ],
    additionalInfo: ""
  },
  {
    question:
      "How often should I go for scans, blood tests, and specialist follow-up?",
    answer:
      "Your follow-up schedule depends on whether your cirrhosis is compensated or decompensated, but general monitoring usually includes:",
    points: [
      "Liver ultrasound + AFP: Every 6 months for hepatocellular carcinoma (HCC) surveillance",
      "Blood tests (LFT, FBC, INR, renal panel): Every 3–6 months depending on stability",
      "Gastroscopy for varices: At diagnosis; then every 1–3 years if no varices found; annually if small varices are present",
      "Hepatology specialist review: Minimum every 6 months; more frequently if decompensated or new symptoms arise",
      "MELD score reassessment: Periodically to gauge transplant eligibility if liver function declines",
    ],
    additionalInfo: ""
  },
  {
    question:
      "What foods, supplements, painkillers, and herbal products should I avoid?",
    answer:
      "Avoid completely:",
    points: [
      "Alcohol — even small amounts accelerate liver damage",
      "Raw shellfish (oysters, clams) — risk of fatal Vibrio vulnificus infection in cirrhotic patients",
      "Traditional Chinese Medicine (TCM) herbs and supplements — many are hepatotoxic; always inform your hepatologist before taking anything",
      "NSAIDs (ibuprofen, naproxen, diclofenac) — risk of GI bleeding and kidney failure; avoid entirely",
      "Paracetamol in high doses — safe at ≤2g/day with caution only; confirm with your doctor before self-dosing",
      "Aspirin — unless specifically prescribed by your doctor",
      "Kava, pennyroyal, comfrey and other herbal supplements with known liver toxicity",
      "High-dose vitamin A or iron supplements — unless deficiency is confirmed by blood tests",
    ],
    additionalInfo:
      "Use with caution: Statins, antifungals, and certain antibiotics — always inform every doctor and pharmacist of your liver condition.",
  },
  {
    question:
      "When does fluid in the abdomen, confusion, or vomiting blood require urgent hospital treatment?",
    answer:
      "These symptoms signal life-threatening decompensation. Call 995 or go to the nearest A&E immediately if you experience:",
    points: [
      "Vomiting blood or passing black / tarry stools — likely variceal or peptic bleeding; can be rapidly fatal without treatment",
      "Sudden confusion, drowsiness, or personality change — signs of hepatic encephalopathy; can progress to coma",
      "Rapidly worsening abdominal swelling with fever or abdominal pain — may indicate spontaneous bacterial peritonitis (SBP), a life-threatening infection",
      "Difficulty breathing due to large ascites",
      "Jaundice that worsens suddenly with fever or rigors",
      "Leg swelling (oedema) with markedly reduced urine output — may signal hepatorenal syndrome",
    ],
    additionalInfo:
      "Do not wait to see if these symptoms improve on their own. Decompensation carries significant short-term mortality without prompt treatment.",
  },
  {
    question:
      "Can liver cirrhosis be managed without a transplant, and when is transplant assessment necessary?",
    answer:
      "Yes — most patients with compensated cirrhosis do not need a transplant and can be managed medically for many years with good monitoring and lifestyle changes.<br><br>Medical management includes treating the underlying cause, preventing complications (varices, infections, HCC), and managing ascites or encephalopathy when they arise.",
    points: [
      "MELD score ≥ 15–20, indicating significant 90-day mortality risk",
      "Recurrent or refractory ascites not responding to diuretics",
      "Recurrent hepatic encephalopathy despite optimal medical treatment",
      "Hepatocellular carcinoma within Milan criteria (single tumour ≤5cm, or up to 3 tumours ≤3cm each)",
      "Recurrent spontaneous bacterial peritonitis",
    ],
    additionalInfo:
      "Liver transplantation may involve either deceased-donor or living-donor transplantation, depending on suitability and donor availability.",
  },
  {
    question:
      "How is treatment different when cirrhosis is caused by hepatitis B, alcohol, or fatty liver disease?",
    answer:
      "<p class='text-base text-muted-foreground leading-relaxed'><strong>Hepatitis B cirrhosis:</strong></p><ul class='space-y-2 mt-4 mb-4 list-disc ml-6'><li><strong>Long-term antiviral therapy</strong> (tenofovir or entecavir) is the cornerstone — suppressing the virus slows progression and can allow partial fibrosis regression.</li><li>Continue antivirals indefinitely; stopping can trigger dangerous viral rebound (hepatitis flares).</li></ul><p class='text-base text-muted-foreground leading-relaxed'><strong>Alcohol-related cirrhosis:</strong></p><ul class='space-y-2 mt-4 mb-4 list-disc ml-6'><li><strong>Complete alcohol abstinence</strong> is the single most effective treatment — even advanced cirrhosis can stabilise or partially improve.</li><li><strong>Nutritional support</strong> is critical, as alcohol-related cirrhosis is commonly associated with severe malnutrition.</li><li>Transplant listing generally requires a sustained documented period of abstinence.</li></ul><p class='text-base text-muted-foreground leading-relaxed'><strong>Metabolic (fatty liver / MASH) cirrhosis:</strong></p><ul class='space-y-2 mt-4 mb-4 list-disc ml-6'><li><strong>Weight loss of ≥7–10% of body weight</strong> can meaningfully reduce liver inflammation and fibrosis.</li><li><strong>Tight control of diabetes, hypertension, and dyslipidaemia</strong> is essential for slowing liver disease progression.</li><li>Targeted therapies may be considered in selected patients, depending on the stage of liver disease and current treatment recommendations.</li><li>Avoid further hepatotoxic medications and alcohol, even in small amounts.</li></ul>",
  },
];

export const LiverCirrhosis = () => {
  return (
    <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-emerald-50 to-background dark:from-emerald-950/30 dark:to-background">
          <div className="container mx-auto px-2 sm:px-4">
            <Link href="/#conditions" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to Conditions
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }}>
                <span className="text-emerald-600 dark:text-emerald-400 text-base font-medium tracking-widest uppercase">
                  Chronic Liver Disease
                </span>
                <h1 className="text-5xl md:text-6xl font-serif font-semibold text-foreground mt-3 mb-6">
                 Liver Cirrhosis
                </h1>
                <div className="space-y-4 text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                  <p>
                    <strong className="font-semibold text-foreground">Liver cirrhosis</strong> develops when long-term liver injury causes healthy liver tissue to be replaced by scar tissue. In its earlier stages, the liver may continue to function well and you may have few or no symptoms.
                  </p>
                  <p>
                    As cirrhosis progresses, complications such as fluid retention, internal bleeding, confusion and liver cancer can occur. Identifying the cause, monitoring liver function and treating complications early can help many people remain stable for years.
                  </p>
                </div>
                <Button asChild size="lg" className="gap-2">
                  <Link href="/#contact">
                    <Calendar className="h-5 w-5" />
                    Book a Consultation
                  </Link>
                </Button>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: 20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} className="relative">
                <Image 
                  src={cirrhosisImage} 
                  alt="Comparison of healthy liver versus liver with cirrhosis showing scarring and damage" 
                  className="rounded-2xl shadow-xl w-full" 
                  width={1280}
                  height={720}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Understanding Cirrhosis */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                Understanding Liver Cirrhosis
              </h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground mb-10 leading-loose">
                <p className="text-justify">
                  The liver is a remarkable organ with the ability to regenerate. However, when it is subjected 
                  to ongoing injury over many years, the repeated cycles of damage and repair eventually lead to 
                  the formation of scar tissue. As scarring progresses, the liver becomes increasingly stiff and 
                  loses its ability to function normally.
                </p>
                <p className="text-justify">
                  Cirrhosis is classified as either &quot;compensated&quot; (when the liver still functions adequately) or 
                  &quot;decompensated&quot; (when complications develop).
                </p>
              </div>

              {/* Causes */}
              <div className="bg-muted/30 rounded-2xl p-8 border border-border mb-10">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                  Common Causes of Cirrhosis
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {causes.map((cause, index) => <div key={index} className="flex items-start gap-3 text-lg text-muted-foreground leading-relaxed">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                      {cause}
                    </div>)}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Complications */}
        <section className="py-16 lg:py-20 bg-red-50 dark:bg-red-950/10">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <AlertTriangle className="h-7 w-7 text-red-600" />
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
                  Complications of Cirrhosis
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed text-center max-w-2xl mx-auto">
                As liver cirrhosis advances, complications such as portal hypertension, ascites, hepatic encephalopathy, spontaneous bacterial peritonitis, 
                hepatorenal syndrome, and liver cancer (HCC) can develop. Recognizing these signs is crucial for timely treatment in Singapore.
              </p>

              <div className="space-y-6">
                {complications.map((complication, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex flex-col md:flex-row rounded-xl overflow-hidden shadow-medium bg-background border border-red-200 dark:border-red-800/30"
                  >
                    <Image
                      src={complication.image} 
                      alt={complication.alt}
                      className="w-full md:w-64 h-48 md:h-auto object-cover shrink-0"
                      width={1280}
                      height={720}
                    />
                    <div className="p-5 flex flex-col justify-center">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{complication.name}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">{complication.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Diagnosis */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                Diagnosis and Assessment
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Diagnosing cirrhosis and assessing its severity involves multiple approaches to determine the extent of liver damage and guide treatment decisions.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {diagnosticTests.map((test, index) => (
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
                      alt={test.alt}
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

        {/* Management */}
        <section className="py-16 lg:py-20 bg-emerald-50 dark:bg-emerald-950/20">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                Management Strategies for Liver Cirrhosis
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Effective management of cirrhosis requires a comprehensive, multidisciplinary approach focused 
                on treating the underlying cause, preventing complications, and maintaining quality of life.
              </p>

              <div className="space-y-4">
                {managementStrategies.map((strategy, index) => <motion.div key={index} initial={{
                opacity: 0,
                x: -10
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.1,
                duration: 0.4
              }} className="flex items-start gap-4 p-4 bg-background rounded-lg border border-emerald-200 dark:border-emerald-800/30">
                    <CheckCircle className="h-6 w-6 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-lg text-foreground leading-relaxed">{strategy}</p>
                  </motion.div>)}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">How Is Liver Cirrhosis Treated?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Cirrhosis is a serious condition, but its progression can often be slowed or stopped when the underlying cause is treated. In some people, liver function can improve and scarring may partially regress over time.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Treatment has two main goals: <strong>to control the cause of liver damage and to prevent or manage complications of cirrhosis.</strong>
              </p>

              <h3 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">Treating the Underlying Cause</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">Controlling the source of ongoing liver injury is one of the most important parts of treatment.</p>
              <div className="grid md:grid-cols-2 gap-5 mb-8">
                {[
                  { title: "Hepatitis B", text: "Antiviral medication can suppress the virus, reduce liver inflammation and lower the risk of further liver damage." },
                  { title: "Hepatitis C", text: "Hepatitis C can now be cured in most patients with direct-acting antiviral tablets, often taken for 8–12 weeks." },
                  { title: "Alcohol-related liver disease", text: "Complete abstinence from alcohol is essential. Even in advanced cirrhosis, stopping alcohol can improve liver function and reduce the risk of further deterioration." },
                  { title: "Metabolic dysfunction-associated steatotic liver disease (MASLD)", text: "Treatment focuses on weight management, physical activity and control of associated conditions such as diabetes, high cholesterol and high blood pressure. Medication may also be appropriate for selected patients." },
                  { title: "Autoimmune hepatitis", text: "Corticosteroids and other immunosuppressive medications may be used to control inflammation and prevent further liver injury." },
                ].map((item, index) => (
                  <div key={index} className={`bg-background rounded-xl border border-emerald-200 dark:border-emerald-800/30 p-5 ${index === 4 ? "md:col-span-2 md:w-[calc(50%-0.625rem)] md:justify-self-center" : ""}`}>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">Treating the underlying cause can prevent further damage and, in some patients, allow liver function and fibrosis to improve.</p>

              <h3 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">Preventing and Managing Complications</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">Cirrhosis can increase pressure within the liver circulation and reduce the liver&apos;s ability to perform its normal functions. Regular monitoring allows many complications to be identified and treated before they become more serious.</p>
              <div className="grid md:grid-cols-2 gap-5 mb-10">
                {[
                  { title: "Varices", text: "Enlarged veins can develop in the oesophagus or stomach and may cause serious bleeding. Screening endoscopy and, where appropriate, non-selective beta-blockers or endoscopic band ligation can reduce this risk." },
                  { title: "Ascites", text: "Fluid can accumulate within the abdomen, causing swelling and discomfort. Treatment may include reducing dietary salt and taking diuretics. Larger amounts of fluid may need to be drained by paracentesis." },
                  { title: "Hepatic encephalopathy", text: "When the liver cannot adequately clear certain toxins from the blood, patients may develop confusion, forgetfulness, changes in behaviour or drowsiness. Treatment commonly includes lactulose and, in selected patients, rifaximin." },
                  { title: "Liver cancer surveillance", text: "Cirrhosis increases the risk of hepatocellular carcinoma (HCC). Regular liver imaging, usually every six months, is recommended so that liver cancer can be detected at an earlier and more treatable stage." },
                ].map((item, index) => (
                  <div key={index} className="bg-background rounded-xl border border-border p-5">
                    <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">When Is Liver Transplantation Considered?</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">Most people with compensated cirrhosis do not require a liver transplant. However, transplantation may be considered when liver function becomes significantly impaired or complications can no longer be adequately controlled. This may include recurrent ascites, variceal bleeding, hepatic encephalopathy, worsening jaundice or liver failure. Selected patients with hepatocellular carcinoma may also be considered for transplantation.</p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-emerald-50 dark:bg-emerald-950/20">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">Living With Liver Cirrhosis</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">Living well with cirrhosis means protecting the remaining liver function, maintaining good nutrition and detecting complications early.</p>

              <h3 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-5">Daily Precautions</h3>
              <div className="grid md:grid-cols-2 gap-5 mb-10">
                {[
                  { title: "Avoid alcohol completely", text: "Once cirrhosis is established, alcohol can cause further liver injury regardless of the original cause. Avoiding alcohol gives the liver the best opportunity to remain stable." },
                  { title: "Reduce salt if you have fluid retention", text: "For patients with ascites or swelling, reducing dietary sodium helps prevent fluid accumulation. Your doctor or dietitian can advise you on an appropriate daily intake." },
                  { title: "Check medications and supplements", text: "Some medicines may need to be avoided or adjusted in cirrhosis. NSAIDs such as ibuprofen can be particularly problematic in advanced liver disease, and some herbal or complementary medicines can cause liver injury." },
                  { title: "Maintain good nutrition and muscle strength", text: "Loss of muscle mass and malnutrition are common in cirrhosis. Adequate calories and protein are important, and protein should not routinely be restricted because of hepatic encephalopathy. Small, frequent meals and a late-evening snack can help reduce prolonged fasting and muscle breakdown." },
                  { title: "Keep physically active", text: "Regular activity and resistance exercise, where appropriate, can help maintain muscle mass, strength and overall health." },
                  { title: "Attend regular follow-up", text: "Blood tests, imaging, endoscopy and clinical review allow complications to be detected and treated early, even when they have not yet caused obvious symptoms." },
                ].map((item, index) => (
                  <div key={index} className="bg-background rounded-xl border border-emerald-200 dark:border-emerald-800/30 p-5">
                    <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">When to Seek Urgent Medical Attention</h3>
              <div className="rounded-2xl border border-red-200 dark:border-red-800/30 bg-red-50 dark:bg-red-950/10 p-6 mb-6">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">Seek urgent medical assessment if you develop:</p>
                <ul className="space-y-3">
                  {[
                    "Vomiting blood or coffee-ground material — this may indicate bleeding from the upper digestive tract.",
                    "Black, tarry stools — this can be a sign of gastrointestinal bleeding.",
                    "Rapidly increasing abdominal swelling or new abdominal pain — this may indicate worsening ascites or infection.",
                    "New or rapidly worsening jaundice — increasing yellowing of the skin or eyes can indicate deterioration in liver function.",
                    "Confusion, unusual drowsiness or changes in behaviour — these may be signs of hepatic encephalopathy.",
                    "Fever or other signs of infection — infections can become serious more quickly in people with advanced cirrhosis.",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed">
                      <AlertTriangle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">If these symptoms occur, seek medical assessment promptly rather than waiting for them to resolve on their own.</p>
            </motion.div>
          </div>
        </section>

        {/* Liver Transplant */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                Liver Transplantation
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                For selected patients with decompensated cirrhosis or progressive liver failure, liver transplantation can offer definitive treatment.
                With specialist training and experience in transplant hepatology at Queen Elizabeth Hospital Birmingham and the University of Kentucky, I provide:
              </p>
              <div className="space-y-4 mb-8">
                {["Comprehensive assessment of transplant candidacy", "Optimisation of health while awaiting transplantation", "Coordination with transplant centres", "Long-term follow-up care"].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-lg text-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <Button asChild variant="outline" size="lg" className="gap-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/30">
                <Link href="/liver-transplantation">
                  Learn More About Liver Transplantation
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-primary/5">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
               Specialised Liver Cirrhosis Management
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Living with cirrhosis requires expert care and regular monitoring. Schedule a consultation 
                to develop a personalised management plan.
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

        {/* FAQ Section */}
                <section className="pt-14 pb-28 lg:pt-20 lg:pb-36 overflow-visible">
                  <div className="container mx-auto px-2 sm:px-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="text-center mb-10"
                    >
                      <div className="flex items-center justify-center gap-3 mb-4">
                        <HelpCircle className="h-6 w-6 text-emerald-500" />
                        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
                          Frequently Asked Questions
                        </h2>
                      </div>
                    </motion.div>
        
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="max-w-3xl mx-auto pb-12 overflow-visible"
                    >
                      <Accordion type="single" collapsible className="w-full space-y-3 pb-4 overflow-visible">
                        {liverCirrhosisFaqs.map((faq, index) => (
                          <AccordionItem 
                            key={index} 
                            value={`faq-${index}`}
                            className="bg-card rounded-xl border border-border px-4 overflow-visible last:border-b last:border-border last:mb-2"
                          >
                            <AccordionTrigger className="hover:no-underline py-4 text-left">
                              <h3 className="font-medium text-lg text-foreground">{faq.question}</h3>
                            </AccordionTrigger>
                            <AccordionContent className="pb-4 text-base text-muted-foreground">
                              <div
  dangerouslySetInnerHTML={{ __html: faq.answer }}
/>
                              {faq.points &&
                              <ul className="space-y-2 mt-4 mb-4">
                                {faq.points.map((point, i) => (
                                <li key={i} className="flex items-start text-muted-foreground leading-relaxed"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 mr-3 shrink-0"></span> {point}</li>
                                ))}
                              </ul> }

                              {faq.additionalInfo && <p>{faq.additionalInfo}</p>}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </motion.div>
                  </div>
          </section>
      </main>
  )
}
