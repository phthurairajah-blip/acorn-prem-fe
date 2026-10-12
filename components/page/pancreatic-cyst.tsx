'use client'

import { motion } from "framer-motion";
import { RelatedConditions } from "@/components/RelatedConditions";
import { ArrowLeft, AlertTriangle, CheckCircle, Heart, Calendar, Search, Info, Stethoscope, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Image from "next/image";
const pancreasHeroImage = "/pancreas-hero.jpeg";
const eusImage = "/eus-pancreas.jpeg";
const mriScanImage = "/mri-liver-scan.jpg";

const relatedConditions = [
  {
    title: "EUS (Endoscopic Ultrasound)",
    description: "Advanced imaging for detailed pancreatic assessment.",
    link: "/eus",
  },
  {
    title: "Jaundice",
    description: "Specialized evaluation of bile duct and pancreatic causes.",
    link: "/jaundice",
  },
  {
    title: "ERCP",
    description: "Therapeutic endoscopy for pancreatic and bile duct conditions.",
    link: "/ercp",
  },
];

const cystTypes = [
  {
    title: "Intraductal Papillary Mucinous Neoplasm (IPMN)",
    description: "The most common type, arising from the pancreatic duct. Can be main-duct, branch-duct, or mixed type with varying malignant potential.",
    risk: "Moderate to High"
  },
  {
    title: "Mucinous Cystic Neoplasm (MCN)",
    description: "Occurs predominantly in women, typically in the body or tail of the pancreas. Has malignant potential and often requires surgical resection.",
    risk: "Moderate to High"
  },
  {
    title: "Serous Cystadenoma",
    description: "Benign tumours with very low malignant potential. Often discovered incidentally and can be monitored safely.",
    risk: "Very Low"
  },
  {
    title: "Pseudocyst",
    description: "Non-neoplastic fluid collections that develop after pancreatitis. May resolve spontaneously or require drainage.",
    risk: "None (Non-neoplastic)"
  },
];

const kindsCyst = [
  {
    type: "Serous cyst (SCA)",
    description: "Almost always harmless. Usually just watched over time.",
  },
  {
    type: "Mucinous cyst (MCN)",
    description:
      "Small risk of change over time. May need monitoring or, rarely, removal.",
  },
  {
    type: "IPMN (a type of cyst connected to the pancreatic duct)",
    description:
      "Risk varies. Most are low-risk but need regular check-ups.",
  },
  {
    type: "Pseudocyst (from past pancreatitis)",
    description:
      "Not a true cyst — harmless and often goes away on its own.",
  },
  {
    type: "Solid pseudopapillary neoplasm (SPN)",
    description:
      "Rare. Usually recommended for removal in otherwise healthy patients.",
  },
];

const specialistsConcerns = [
  {
    feature: "A solid lump or nodule inside the cyst",
    concern: "Could be an early sign of cancer developing",
    recommendation: "See a specialist soon",
  },
  {
    feature: "The main duct (drainage tube) of the pancreas is wider than usual",
    concern: "Associated with a higher-risk type of cyst",
    recommendation: "See a specialist soon",
  },
  {
    feature: "The cyst has grown noticeably since the last scan",
    concern: "May indicate a change in behaviour",
    recommendation: "Watch more closely",
  },
  {
    feature: "The cyst wall looks thick or irregular",
    concern: "Can be a worrisome feature",
    recommendation: "Watch more closely",
  },
  {
    feature: "The cyst is larger than 3 cm",
    concern: "Requires more careful evaluation",
    recommendation: "Watch more closely",
  },
  {
    feature: "Small, simple, and stable cyst",
    concern: "Very low risk — typical finding",
    recommendation: "Routine check-ups",
  },
];

const compareMriEus = [
  {
    category: "How it's done",
    mri: "You lie in a scanner for 30–45 minutes. No needles.",
    eus: "You are sedated. A flexible scope is passed through your mouth.",
  },
  {
    category: "What it's best for",
    mri: "Regular follow-up, showing the whole pancreas and ducts, detecting size changes over time.",
    eus: "Detailed look at a specific cyst, detecting small nodules, sampling cyst fluid.",
  },
  {
    category: "Does it use radiation?",
    mri: "No",
    eus: "No",
  },
  {
    category: "Can it sample fluid?",
    mri: "No",
    eus: "Yes, if needed",
  },
  {
    category: "When is it used?",
    mri: "First-line for most follow-up.",
    eus: "When MRI is unclear or a tissue/fluid sample is needed.",
  },
];

const followupGuide = [
  {
    scenario: "Small, simple cyst with no concerning features (< 1.5 cm)",
    interval: "Every 1–2 years",
    test: "MRI / MRCP",
  },
  {
    scenario: "Cyst 1.5–3 cm, stable, no worrisome features",
    interval: "Every 6–12 months initially, then annually if stable",
    test: "MRI / MRCP",
  },
  {
    scenario: "Cyst > 3 cm or with worrisome features",
    interval: "Every 3–6 months",
    test: "MRI ± EUS",
  },
  {
    scenario: "After surgery, to check for recurrence",
    interval: "Varies — discuss with your surgeon",
    test: "MRI or CT",
  },
  {
    scenario: "Very stable cyst in older patient after many years",
    interval: "May be extended or stopped",
    test: "Discuss with specialist",
  },
];

const worrisomeFeatures = [
  "Cyst size ≥3 cm",
  "Thickened or enhancing cyst wall",
  "Main pancreatic duct 5-9 mm",
  "Non-enhancing mural nodule",
  "Abrupt change in duct calibre with distal atrophy",
  "Lymphadenopathy",
  "Elevated CA 19-9 levels",
  "Rapid cyst growth (>5 mm in 2 years)",
];

const highRiskStigmata = [
  "Obstructive jaundice with cystic lesion in pancreatic head",
  "Enhancing solid component within cyst",
  "Main pancreatic duct ≥10 mm",
];

const faqs = [
  {
    question: "If my pancreatic cyst was found incidentally on a scan, do I still need to see a specialist?",
    answer: "<p class='text-base text-muted-foreground leading-relaxed mb-4'>Even if the cyst was found completely by chance and you feel perfectly well, it is worth having at least one review with a specialist — a gastroenterologist (gut and liver doctor). The reason is not to alarm you. It is simply that pancreatic cysts come in different types, and the type matters when deciding whether regular monitoring is needed and how often. A GP or general doctor looking at the scan report may not always have the specific expertise to make that call confidently.</p>",
  },
  {
  question: "When is MRI or MRCP surveillance enough, and when is an endoscopic ultrasound needed?",
  answer: "<p class='text-base text-muted-foreground leading-relaxed mb-4'>An MRI scan — and in particular a version called an MRCP, which maps the drainage tubes of the pancreas in detail — is the workhorse of routine cyst monitoring. It does not involve radiation, gives excellent images of the whole pancreas and its ducts, and is well suited to checking that a cyst has not changed in size or character between visits. For most patients with a stable, low-risk cyst, MRI or MRCP every 6 to 24 months is all that is needed.</p><p class='text-base text-muted-foreground leading-relaxed mb-4'>An endoscopic ultrasound (EUS) is a different kind of procedure. A thin flexible tube is passed through your mouth while you are sedated, and a small ultrasound probe at its tip creates very detailed close-up images of the pancreas from inside the stomach. It is used selectively, not routinely, and tends to be called upon in specific situations.</p><p class='text-base text-muted-foreground leading-relaxed mb-4'>An EUS is usually recommended when:</p><ul class='space-y-2 mt-4 mb-4 list-disc ml-6'><li><strong>The MRI shows an unclear feature</strong> — for example, something that might be a nodule inside the cyst but cannot be confirmed on the scan alone.</li><li><strong>The cyst has grown or changed</strong>, and your specialist wants a closer look before deciding whether to refer you for surgery.</li><li><strong>A sample of the fluid inside the cyst</strong> is needed to help identify what type of cyst it is.</li><li><strong>Your cyst is large</strong> (over 3 cm) or has features that place it in a higher-risk category.</li></ul>",
},
  {
    question: "What features make a pancreatic cyst more concerning for cancer risk?",
    answer: "<p class='text-base text-muted-foreground leading-relaxed mb-4'>The vast majority of incidentally found pancreatic cysts are not cancerous and will never become so. However, we look carefully for a specific set of features that suggest a cyst may be developing in a more worrying direction. These are often grouped into two categories: features that need prompt specialist review, and features that warrant closer monitoring.</p><p class='text-base text-muted-foreground leading-relaxed mb-4'><strong>Features that need prompt specialist review</strong></p><ul class='space-y-2 mt-4 mb-4 list-disc ml-6'><li><strong>A solid lump or nodule growing inside the cyst</strong> — this is the feature taken most seriously, particularly if it is enhancing (lights up) on a contrast scan.</li><li><strong>A noticeably widened main pancreatic duct</strong> — the main drainage tube of the pancreas should be narrow; significant widening is associated with a higher-risk type of cyst.</li><li><strong>Jaundice (yellowing of the skin or eyes)</strong> alongside a cyst in the head of the pancreas.</li><li><strong>New abdominal or back pain</strong> that cannot be explained by something else.</li></ul><p class='text-base text-muted-foreground leading-relaxed mb-4'><strong>Features that warrant closer monitoring</strong></p><ul class='space-y-2 mt-4 mb-4 list-disc ml-6'><li><strong>A cyst larger than 3 cm.</strong></li><li><strong>Thickening or irregularity of the cyst wall.</strong></li><li><strong>A cyst that has grown noticeably since the last scan</strong> (roughly 5 mm or more over one to two years).</li><li><strong>New-onset diabetes</strong>, or existing diabetes that suddenly becomes harder to control.</li><li><strong>A raised blood test called CA 19-9</strong>, which can sometimes signal pancreatic activity.</li></ul>",
  },
  {
  question: "How often should a pancreatic cyst be monitored?",
  answer: "<p class='text-base text-muted-foreground leading-relaxed mb-4'>There is no single surveillance schedule for every pancreatic cyst. Follow-up depends first on <strong>what type of cyst it is</strong>, as well as its size, appearance, growth over time and whether there are any concerning features.</p><p class='text-base text-muted-foreground leading-relaxed mb-4'><strong>Branch-duct IPMN:</strong> Current international guidance uses cyst size and risk features to help determine surveillance. As a general Kyoto 2024 framework, cysts under 2 cm may be followed with MRI after 6 months and then at longer intervals if stable; cysts 2–3 cm are usually followed more closely, often yearly after an initial period of shorter-interval imaging; and cysts 3 cm or larger generally require closer surveillance. Concerning features may prompt earlier EUS or surgical assessment.</p><p class='text-base text-muted-foreground leading-relaxed mb-4'><strong>Mucinous cystic neoplasm (MCN):</strong> Smaller MCNs without concerning features may be monitored, while larger cysts, symptomatic cysts or those with mural nodules or other concerning features may require surgical assessment.</p><p class='text-base text-muted-foreground leading-relaxed mb-4'><strong>Serous cystadenoma:</strong> These are generally benign. Once the diagnosis is secure and the cyst is not causing symptoms, long-term routine surveillance is often unnecessary.</p><p class='text-base text-muted-foreground leading-relaxed mb-4'><strong>Pseudocyst:</strong> These occur in association with pancreatitis and do not require surveillance for cancer. Follow-up is determined by symptoms, persistence and complications.</p><p class='text-base text-muted-foreground leading-relaxed mb-4'>If the type of cyst is uncertain, MRI/MRCP and sometimes EUS can help establish the diagnosis and determine the appropriate follow-up plan.</p>",
},
{
  question: "When would I need to be referred to a pancreatic surgeon rather than continue surveillance?",
  answer: "<p class='text-base text-muted-foreground leading-relaxed mb-4'>Most people with a pancreatic cyst will never need surgery. Surveillance — regular monitoring with scans — is the appropriate management for the majority of patients, sometimes for many years. But there are situations where a surgical referral becomes the right next step, and your specialist will discuss this with you openly if it arises.</p><p class='text-base text-muted-foreground leading-relaxed mb-4'>Surgical referral is typically considered when:</p><ul class='space-y-2 mt-4 mb-4 list-disc ml-6'><li><strong>A solid nodule or enhancing component</strong> is confirmed inside the cyst.</li><li><strong>The main pancreatic duct</strong> has widened significantly (10 mm or more).</li><li><strong>Jaundice</strong> has developed in relation to the cyst.</li><li><strong>The cyst is causing symptoms</strong> such as pain, recurrent pancreatitis, or a blockage.</li><li><strong>The cyst type carries a meaningful risk of cancer</strong> and the patient is otherwise fit for surgery.</li><li><strong>The cyst has grown progressively</strong> despite monitoring, even without a single alarming feature.</li><li><strong>You are younger and healthy</strong>, and your specialist feels that removing it now prevents a larger problem years down the line.</li></ul><p class='text-base text-muted-foreground leading-relaxed mb-4'>A referral to a surgeon does not automatically mean an operation. It means the case is reviewed by a surgical specialist who can weigh up the risk of the cyst against the risk of surgery for you personally. Many patients are reviewed by a surgeon and continue on surveillance. Others are offered an operation and choose to have it done. The decision is always made together with you.</p>",
},
 {
  question: "Can a pancreatic cyst stay stable for years without needing treatment?",
  answer: "<p class='text-base text-muted-foreground leading-relaxed mb-4'>The short answer is yes, and for many people this is exactly what happens. Studies following large numbers of patients with incidentally found pancreatic cysts over many years consistently show that the majority remain completely stable and never require any intervention beyond monitoring.</p><p class='text-base text-muted-foreground leading-relaxed mb-4'>Serous cysts, in particular, almost never become cancerous and can be watched indefinitely without any real concern. Even many mucinous cysts and low-risk IPMNs remain unchanged for a decade or longer.</p><p class='text-base text-muted-foreground leading-relaxed mb-4'><strong>What stability actually means</strong></p><p class='text-base text-muted-foreground leading-relaxed mb-4'>Stability means the cyst has not grown significantly, no new internal features have appeared, and you remain without symptoms. A cyst that has been stable for five or more years with no concerning features at any point is genuinely reassuring, and at that stage many specialists will discuss either greatly extending the monitoring interval or stopping surveillance altogether.</p><p class='text-base text-muted-foreground leading-relaxed mb-4'><strong>What about living day to day with a cyst?</strong></p><p class='text-base text-muted-foreground leading-relaxed mb-4'>For most patients, having a known pancreatic cyst does not need to change anything about daily life. You can eat normally, exercise, travel, and work as usual. There are no specific dietary restrictions linked to having a pancreatic cyst. The monitoring plan your specialist puts in place is there as a safety net, not because anything is expected to go wrong.</p><p class='text-base text-muted-foreground leading-relaxed mb-4'>Some patients find the knowledge of having a cyst anxiety-provoking, particularly around scan time. This is completely understandable. If you find the waiting difficult, it is worth mentioning this to your specialist — they may be able to adjust the schedule or offer a brief interim check-in to give you reassurance.</p>",
},
];

const PancreaticCyst = () => {
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
                  Pancreatic Cysts
                </h1>
                <div className="space-y-4 text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                  <p>
                    Pancreatic cysts are fluid-filled lesions that are often discovered unexpectedly during a scan performed for another reason. Most pancreatic cysts are benign or have a very low risk of becoming cancerous.
                  </p>
                  <p>
                    The important first step is to determine <strong className="font-semibold text-foreground">what type of cyst you have and whether it has any features that require closer monitoring or further investigation.</strong>
                  </p>
                </div>
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
                  src={pancreasHeroImage}
                  alt="Anatomical illustration of the pancreas"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                  width={1280}
                  height={720}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Understanding Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-6">
                <Info className="h-8 w-8 text-emerald-600" />
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
                  Understanding Pancreatic Cysts
                </h2>
              </div>
              
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground mb-10 leading-loose">
                <p>
                  Pancreatic cysts are fluid-filled sacs within the pancreas. They are found in approximately 
                  2-3% of abdominal imaging studies and become more common with age. The key challenge is 
                  distinguishing benign cysts from those with malignant potential, as some can progress to 
                  pancreatic cancer if left untreated.
                </p>
                <p>
                  Accurate characterisation requires a combination of imaging, cyst fluid analysis, and 
                  clinical assessment. Dr. Prem, a Pancreatic Cysts Specialist, offers comprehensive evaluations 
                  based on the latest international guidelines to determine optimal surveillance intervals or intervention needs.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Types of Pancreatic Cysts */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
                  Common Types of Pancreatic Cysts
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Pancreatic cysts are not all the same. Identifying the type helps determine whether simple monitoring is enough or whether further assessment is needed.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-5">
                {kindsCyst.map((item, index) => (
                  <motion.div key={item.type} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{item.type}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Risk Assessment Section */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">Which Features Matter?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Most cysts remain low risk. The features below help determine whether routine surveillance, closer monitoring or prompt specialist assessment is appropriate.
                </p>
              </motion.div>

              <div className="space-y-5">
                <div className="rounded-2xl border border-emerald-200 dark:border-emerald-800/40 bg-emerald-50/60 dark:bg-emerald-950/10 p-6 md:p-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Reassuring features</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        A small, simple and stable cyst without a solid component, significant pancreatic duct enlargement or meaningful growth over time is generally reassuring.
                      </p>
                      <p className="text-base font-medium text-emerald-700 dark:text-emerald-300 mt-3">Typical approach: routine surveillance.</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-amber-200 dark:border-amber-800/40 bg-amber-50/60 dark:bg-amber-950/10 p-6 md:p-8">
                  <div className="flex items-start gap-3 mb-4">
                    <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Features needing closer monitoring</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        These findings do not necessarily mean cancer, but they may justify shorter surveillance intervals or additional assessment with EUS.
                      </p>
                    </div>
                  </div>
                  <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                    {worrisomeFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-base text-foreground leading-relaxed">
                        <span className="h-2 w-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-red-200 dark:border-red-900/40 bg-red-50/70 dark:bg-red-950/10 p-6 md:p-8">
                  <div className="flex items-start gap-3 mb-4">
                    <AlertTriangle className="h-6 w-6 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Features needing prompt specialist assessment</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        These findings do not automatically mean cancer, but they usually require further assessment and sometimes surgical review.
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {highRiskStigmata.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-base text-foreground leading-relaxed">
                        <span className="h-2 w-2 rounded-full bg-red-500 mt-2 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Patient Guide */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
                  MRI / MRCP or Endoscopic Ultrasound?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Both tests are useful, but they answer different questions. MRI/MRCP is usually the main surveillance test, while EUS provides a closer look when more detail is needed.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
                  <Image src={mriScanImage} alt="MRI scan for pancreatic cyst surveillance" width={1280} height={720} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">MRI / MRCP</h3>
                    <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                      <p><strong className="text-foreground">Best for:</strong> routine surveillance and assessing the whole pancreas and pancreatic ducts.</p>
                      <p><strong className="text-foreground">What happens:</strong> you lie in an MRI scanner while detailed images are taken.</p>
                      <p><strong className="text-foreground">Radiation:</strong> none.</p>
                      <p><strong className="text-foreground">Main advantage:</strong> excellent non-invasive monitoring of cyst size and change over time.</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
                  <Image src={eusImage} alt="Endoscopic ultrasound for pancreatic cyst assessment" width={1280} height={720} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">Endoscopic Ultrasound (EUS)</h3>
                    <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                      <p><strong className="text-foreground">Best for:</strong> examining a cyst in greater detail when MRI shows something uncertain or concerning.</p>
                      <p><strong className="text-foreground">What happens:</strong> a flexible endoscope containing an ultrasound probe is passed through the mouth while you are sedated.</p>
                      <p><strong className="text-foreground">Radiation:</strong> none.</p>
                      <p><strong className="text-foreground">Main advantage:</strong> close-up imaging with the option to sample cyst fluid or tissue when needed.</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mt-8">
                For many low-risk cysts, MRI/MRCP is sufficient. EUS is generally reserved for cysts that require closer assessment.
              </p>
            </div>
          </div>
        </section>

        {/* Surveillance Section */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-2 sm:px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10"
              >
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
                  How Are Pancreatic Cysts Monitored?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  <strong className="font-semibold text-foreground">Surveillance depends first on the type of pancreatic cyst.</strong> The size of the cyst, changes over time and the presence of concerning features then help determine how often imaging is required and whether further assessment with endoscopic ultrasound (EUS) or surgical review should be considered.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-5">
                <div className="rounded-2xl border border-emerald-200 dark:border-emerald-800/40 bg-emerald-50/60 dark:bg-emerald-950/10 p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Branch-duct IPMN</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Usually monitored with MRI/MRCP according to its size, stability and risk features. Larger or changing IPMNs may require closer surveillance or EUS.
                  </p>
                </div>

                <div className="rounded-2xl border border-amber-200 dark:border-amber-800/40 bg-amber-50/60 dark:bg-amber-950/10 p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">MCN and other cystic neoplasms</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Management depends on the cyst type, size, symptoms and concerning features. Some can be monitored, while others are better assessed for surgery.
                  </p>
                </div>

                <div className="rounded-2xl border border-sky-200 dark:border-sky-800/40 bg-sky-50/60 dark:bg-sky-950/10 p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Benign or non-neoplastic cysts</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    A confidently diagnosed asymptomatic serous cystadenoma generally does not require the same long-term surveillance as an IPMN. Pseudocysts are followed according to the underlying pancreatitis and any complications.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 md:p-8 mt-10 shadow-sm">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
                  When Might Surgery Be Considered?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  <strong className="font-semibold text-foreground">Most pancreatic cysts do not require surgery.</strong>
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  Surgical assessment may be considered when a cyst develops higher-risk features, causes symptoms, progressively enlarges, or belongs to a cyst type where the long-term cancer risk may outweigh the risks of surgery.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  <strong className="font-semibold text-foreground">Being referred to a pancreatic surgeon does not necessarily mean you need an operation.</strong> It allows the risks of continued surveillance and surgery to be considered together.
                </p>
              </div>
            </div>
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
              className="max-w-3xl mx-auto pb-10"
            >
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`faq-${index}`}
                    className="bg-card rounded-xl border border-border px-4 last:border-b last:border-border"
                  >
                    <AccordionTrigger className="hover:no-underline py-4 text-left">
                      <span className="font-medium text-lg text-foreground">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-base text-muted-foreground">
                      <div
  dangerouslySetInnerHTML={{ __html: faq.answer }}
/>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
                Clinical Management of Pancreatic Cysts
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Dr. Prem provides comprehensive evaluation and ongoing surveillance of pancreatic cysts, 
                using the latest international guidelines to ensure safe, evidence-based care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/#contact">
                    <Calendar className="h-5 w-5" />
                    Book a Consultation
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/eus">
                    Learn About EUS
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Conditions */}
        <RelatedConditions conditions={relatedConditions} />
      </main>

  )
}

export default PancreaticCyst
