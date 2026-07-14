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
      "How often should I go for scans, blood tests, and specialist follow-up in Singapore?",
    answer:
      "Your schedule depends on whether your cirrhosis is compensated or decompensated, but general guidance from liver specialists in Singapore includes:",
    points: [
      "Liver ultrasound + AFP: Every 6 months for hepatocellular carcinoma (HCC) surveillance",
      "Blood tests (LFT, FBC, INR, renal panel): Every 3–6 months depending on stability",
      "Gastroscopy for varices: At diagnosis; then every 1–3 years if no varices found; annually if small varices are present",
      "Hepatology specialist review: Minimum every 6 months; more frequently if decompensated or new symptoms arise",
      "MELD score reassessment: Periodically to gauge transplant eligibility if liver function declines",
    ],
    additionalInfo: "Restructure these visits under the Subsidised Outpatient Specialist care pathway at SGH, NUH, or TTSH to manage out-of-pocket costs"
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
      "In Singapore, liver transplantation is available at SGH and NUH. Living donor liver transplant (from a willing family member) is an option given the limited deceased donor pool.",
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
                 Liver Cirrhosis Treatment in Singapore
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-justify">
                  Cirrhosis represents the end stage of chronic liver disease, where normal liver tissue is replaced 
                  by scar tissue (fibrosis). Although liver cirrhosis cannot be reversed, early detection and appropriate treatment 
                  in Singapore can slow its progression, prevent complications, and significantly enhance quality of life.
                </p>
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
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed text-center max-w-2xl mx-auto text-justify">
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
                      <p className="text-base text-muted-foreground leading-relaxed text-justify">{complication.description}</p>
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
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed text-justify">
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
                      <p className="text-base text-muted-foreground leading-relaxed text-justify">{test.description}</p>
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
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed text-justify">
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
                    <p className="text-lg text-foreground leading-relaxed text-justify">{strategy}</p>
                  </motion.div>)}
              </div>
            </motion.div>
          </div>
        </section>

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
                How Is Liver Cirrhosis Treated?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-justify">
                Cirrhosis cannot be reversed once scarring has formed, but treatment can slow its progression significantly, 
                manage symptoms, and in some cases allow the liver to stabilise. The approach depends on two things: 
                addressing whatever caused the damage in the first place, and staying ahead of the complications that cirrhosis tends to produce over time.
              </p>
              <h3 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
                Treating the Underlying Cause
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4 text-justify">
                The single most important step is removing or controlling the source of ongoing liver injury. 
                If that damage continues, scarring will keep advancing regardless of other treatment.
              </p>
              <div className="space-y-4 mb-8">
                {[
                "Hepatitis B can be suppressed with antiviral medications, reducing the viral load to levels where liver inflammation settles down.", 
                "Hepatitis C is now curable in most people with a short course of direct-acting antivirals — often eight to twelve weeks of tablets with very high success rates.", 
                "Alcohol-related liver disease requires stopping alcohol completely. Even in advanced cirrhosis, abstinence gives the liver the best possible chance to stabilise, and some inflammation can resolve over time.", 
                "Metabolic dysfunction-associated fatty liver disease (MASLD), previously called NAFLD, is managed through weight loss, blood sugar control, and treating high cholesterol or diabetes — there are also newer medications being used in this area.", 
                "Autoimmune hepatitis is treated with corticosteroids and immunosuppressant drugs to calm the immune system's attack on liver tissue."].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-lg text-foreground leading-relaxed text-justify">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4 mb-8 text-justify">
                Treating the cause does not undo existing scarring, but it can prevent new scarring from forming and meaningfully extend the liver's functional life.
              </p>
              <h3 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
                Managing Complications Before They Become Emergencies
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4 text-justify">
                As cirrhosis progresses, the liver's internal pressure rises and its ability to perform essential functions declines. 
                This creates a predictable set of complications — all of which are far more manageable when caught early.
              </p>
              <div className="space-y-4 mb-8">
                {[
                "Varices are enlarged, fragile veins that develop in the oesophagus or stomach when blood cannot flow normally through a scarred liver. They carry a risk of sudden, serious bleeding. Regular endoscopies monitor their size, and beta-blocker medications or small banding procedures can reduce that risk considerably.", 
                "Ascites is a build-up of fluid in the abdomen, causing bloating and discomfort. It's managed with a low-salt diet and diuretic medications. When fluid accumulates quickly, it can be drained directly through a procedure called paracentesis.", 
                "Hepatic encephalopathy happens when the liver can no longer filter toxins from the blood effectively, and those toxins affect brain function — causing confusion, forgetfulness, or in severe cases, disorientation. Lactulose (a laxative that reduces toxin absorption) and antibiotics such as rifaximin are used to keep this under control.", 
                "Liver cancer surveillance is recommended for everyone with cirrhosis, because scarred liver tissue carries a higher risk of developing hepatocellular carcinoma. An ultrasound scan and a blood test every six months allows any changes to be caught at a stage when treatment is still most effective."].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-lg text-foreground leading-relaxed text-justify">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4 mb-8 text-justify">
                Staying on top of these complications is not just about comfort — it directly affects how long the liver continues to function and how much time a person has before more significant decisions need to be made.
              </p>
              <h3 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
                When a Liver Transplant Is Considered
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                For most people with cirrhosis, the treatments above provide years of stable, manageable life. 
                But when the liver has deteriorated to the point where complications can no longer be controlled — 
                or when liver function has declined to a level that poses a serious risk — a transplant moves from a 
                distant possibility to an active conversation.
              </p>
            </motion.div>
          </div>
          </section>

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
                What Are the Tips and Precautions if Living with Liver Cirrhosis?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-justify">
                Living with cirrhosis means working with your liver rather than against it. The liver has a remarkable ability to compensate — 
                to keep doing its job even when significantly damaged — but that capacity is not unlimited. The daily choices and habits below 
                are not abstract lifestyle advice; they directly affect how well the liver continues to function and how quickly complications develop.
              </p>
              <h3 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
                Daily Precautions That Matter
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4 text-justify">
                <strong>Avoid alcohol completely</strong> This applies even if alcohol was not the original cause of cirrhosis. 
                A liver that is already scarred has almost no tolerance for additional toxic injury. 
                Even moderate drinking accelerates scarring, increases the risk of liver cancer, and can tip a 
                stable liver into crisis. There is no safe level once cirrhosis is established.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4 text-justify">
                <strong>Be careful with salt</strong> If ascites or fluid retention has been a problem, a low-sodium diet 
                is one of the most effective tools for keeping it under control. This means avoiding processed foods, 
                cured meats, tinned soups, and adding salt at the table — not just cutting back slightly. Many people with 
                cirrhosis are advised to keep sodium below 2,000 mg per day, though your doctor will give specific guidance 
                based on your situation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4 text-justify">
                <strong>Review every medication with your doctor</strong> The liver processes most medications, and a cirrhotic liver 
                does this more slowly and less efficiently. This matters for prescribed drugs, but also for things people often 
                don't think to mention — paracetamol at higher doses, NSAIDs such as ibuprofen, herbal supplements, and vitamins. 
                Some of these are genuinely harmful in cirrhosis. Nothing should be started, stopped, or changed without checking first.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4 text-justify">
                <strong>Eat well, and eat enough</strong> Malnutrition is surprisingly common in cirrhosis, partly because a 
                congested liver affects digestion and appetite. Protein is particularly important — it supports muscle maintenance 
                and helps prevent encephalopathy. Small, frequent meals tend to work better than large ones. 
                A late evening snack, particularly something with complex carbohydrates or protein, helps prevent the overnight 
                fasting period that can stress a struggling liver.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-justify">
                <strong>Keep all follow-up appointments</strong> Cirrhosis is a condition that changes over time, and many of its 
                most dangerous complications develop silently. Regular blood tests, ultrasound scans, endoscopies and clinical reviews 
                are not routine box-ticking — they are how problems get caught early enough to be managed. Missing appointments is one of the most common 
                and preventable reasons people end up in hospital with complications that could have been intercepted.
              </p>
              <h3 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
                When to Seek Urgent Review
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4 text-justify">
                Most days with cirrhosis are manageable, but there are specific symptoms that should never be waited out or monitored at home. 
                If any of the following occur, seek emergency medical attention the same day — or call emergency services if severe:
              </p>
              <ul className="space-y-4">
                {liverEmergencySigns.map((item, index) => (
                  <li key={index} className="flex">
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5 mr-4" />
                    <span><strong>{item.title}</strong> — {item.description}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4 mt-4 text-justify">
                When in doubt, it is always better to be seen and reassured than to wait. 
                These symptoms do not always mean the worst, but they all need a clinical assessment the same day.
              </p>
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
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-justify">
                For patients with decompensated liver cirrhosis or those who develop decompensation, 
                liver transplantation is a definitive therapeutic option for end-stage liver cirrhosis in Singapore. 
                With my training and experience in liver transplant medicine from Queen Elizabeth Hospital Birmingham and the University of Kentucky, I provide:
              </p>
              <div className="space-y-4 mb-8">
                {["Comprehensive assessment of transplant candidacy", "Optimisation of health while awaiting transplantation", "Coordination with transplant centres", "Long-term follow-up care"].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-lg text-foreground leading-relaxed text-justify">{item}</p>
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
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-justify">
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
                <section className="py-14 lg:py-20">
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
                      className="max-w-3xl mx-auto"
                    >
                      <Accordion type="single" collapsible className="w-full space-y-3">
                        {liverCirrhosisFaqs.map((faq, index) => (
                          <AccordionItem 
                            key={index} 
                            value={`faq-${index}`}
                            className="bg-card rounded-xl border border-border px-4"
                          >
                            <AccordionTrigger className="hover:no-underline py-4 text-left">
                              <h3 className="font-medium text-lg text-foreground">{faq.question}</h3>
                            </AccordionTrigger>
                            <AccordionContent className="pb-4 text-base text-muted-foreground">
                              {faq.answer}
                              
                              <ul className="space-y-2 mt-4 mb-4">
                                {faq.points.map((point, i) => (
                                <li key={i} className="flex items-start text-muted-foreground leading-relaxed"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 mr-3 shrink-0"></span> {point}</li>
                                ))}
                              </ul>

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
