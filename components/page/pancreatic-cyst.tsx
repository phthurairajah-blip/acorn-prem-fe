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
    answer: "<p>Even if the cyst was found completely by chance and you feel perfectly well, it is worth having at least one review with a specialist — a gastroenterologist (gut and liver doctor). The reason is not to alarm you. It is simply that pancreatic cysts come in different types, and the type matters when deciding whether regular monitoring is needed and how often. A GP or general doctor looking at the scan report may not always have the specific expertise to make that call confidently.</p>",
  },
  {
    question: "When is MRI or MRCP surveillance enough, and when is an endoscopic ultrasound needed?",
    answer: "<p>An MRI scan — and in particular a version called an MRCP, which maps the drainage tubes of the pancreas in detail — is the workhorse of routine cyst monitoring. It does not involve radiation, gives excellent images of the whole pancreas and its ducts, and is well suited to checking that a cyst has not changed in size or character between visits. For most patients with a stable, low-risk cyst, MRI or MRCP every 6 to 24 months is all that is needed.</p><p>An endoscopic ultrasound (EUS) is a different kind of procedure. A thin flexible tube is passed through your mouth while you are sedated, and a small ultrasound probe at its tip creates very detailed close-up images of the pancreas from inside the stomach. It is used selectively, not routinely, and tends to be called upon in specific situations.</p>",
  },
  {
    question: "What features make a pancreatic cyst more concerning for cancer risk?",
    answer: "<p>The vast majority of incidentally found pancreatic cysts are not cancerous and will never become so. However, we look carefully for a specific set of features that suggest a cyst may be developing in a more worrying direction. These are often grouped into two categories: features that need urgent attention, and features that simply warrant closer monitoring.</p>",
  },
  {
    question: "How often should a pancreatic cyst be monitored?",
    answer: "<p>There is no single answer, because the right interval depends on the type of cyst, its size, whether it has any concerning features, and your overall health. Your specialist will tailor the schedule to your specific situation, guided by international clinical guidelines.</p>",
  },
  {
    question: "When would I need to be referred to a pancreatic surgeon rather than continue surveillance?",
    answer: "<p>Most people with a pancreatic cyst will never need surgery. Surveillance — regular monitoring with scans — is the appropriate management for the majority of patients, sometimes for many years. But there are situations where a surgical referral becomes the right next step, and your specialist will discuss this with you openly if it arises.</p>",
  },
  {
    question: "Can a pancreatic cyst stay stable for years without needing treatment?",
    answer: "<p>The short answer is yes, and for many people this is exactly what happens. Studies following large numbers of patients with incidentally found pancreatic cysts over many years consistently show that the majority remain completely stable and never require any intervention beyond monitoring.</p><p>Serous cysts, in particular, almost never become cancerous and can be watched indefinitely without any real concern. Even many mucinous cysts and low-risk IPMNs remain unchanged for a decade or longer.</p>",
  }
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
                  Pancreatic Cysts Specialist in Singapore
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Pancreatic cysts are increasingly detected with modern imaging. While most are benign, 
                  some carry malignant potential. Specialized evaluation and appropriate surveillance 
                  are essential for safe, evidence-based management.
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
        <section className="py-16 lg:py-20 bg-emerald-50/50 dark:bg-emerald-950/10">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-10">
                Types of Pancreatic Cysts
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {cystTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-background rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/30 shadow-sm"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-foreground">{type.title}</h3>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        type.risk === "Very Low" 
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : type.risk === "None (Non-neoplastic)"
                          ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                          : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                      }`}>
                        Risk: {type.risk}
                      </span>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed">{type.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Risk Assessment Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-8">
                <AlertTriangle className="h-8 w-8 text-amber-600" />
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
                  Risk Assessment
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
                International guidelines identify specific features that increase concern for malignancy. 
                These guide the intensity of surveillance and need for further evaluation.
              </p>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Worrisome Features */}
                <div className="bg-amber-50 dark:bg-amber-950/20 rounded-xl p-6 border border-amber-200 dark:border-amber-800/30">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Worrisome Features</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Presence of these features warrants closer surveillance or further evaluation with EUS.
                  </p>
                  <ul className="space-y-3">
                    {worrisomeFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-base text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* High-Risk Stigmata */}
                <div className="bg-red-50 dark:bg-red-950/20 rounded-xl p-6 border border-red-200 dark:border-red-800/30">
                  <h3 className="text-xl font-semibold text-foreground mb-4">High-Risk Stigmata</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    These features indicate a high likelihood of malignancy and typically require surgical evaluation.
                  </p>
                  <ul className="space-y-3">
                    {highRiskStigmata.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-base text-muted-foreground">
                        <AlertTriangle className="h-4 w-4 text-red-500 shrink-0 mt-1" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Patient Guide */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-10">
                A Cyst Was Found on My Pancreas. What Happens Next?
              </h2>
              <div className="p-6 flex items-center gap-3 mb-10 bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl border border-emerald-200 dark:border-emerald-800/30">
                <Heart className="h-8 w-8 text-emerald-500" />
                <p className="text-muted-foreground mb-2">
                  <strong>Finding a cyst doesn't mean you have cancer.</strong><br></br>
                  Most pancreatic cysts found by accident during a scan are harmless. But some do need monitoring — so it's always worth getting it checked properly. This guide explains what to expect.
                </p>
              </div>

              <h3 className="text-3xl md:text-3xl font-serif font-semibold text-foreground mb-4">
                The scan found a cyst on my pancreas — what should I do?
              </h3>
              <p className="text-muted-foreground mb-10 text-lg">
                  Finding a cyst in your pancreas on a scan done for another reason is actually quite common. Most people who discover this feel worried — which is completely understandable. But here's the important thing to know:
              </p>
              <div className="p-6 flex items-center gap-3 mb-10 bg-amber-50 dark:bg-amber-900/10 rounded-2xl border border-amber-200 dark:border-amber-800/30">
                <AlertTriangle className="h-8 w-8 text-amber-600" />
                <p className="text-muted-foreground mb-2">
                  <strong>Most incidental pancreatic cysts are benign (not cancer).</strong><br></br>
                  They are found by chance during CT or MRI scans done for other reasons like back pain, kidney stones, or abdominal discomfort. The large majority never cause any problems.
                </p>
              </div>
              <p className="text-muted-foreground font-semibold mb-4 text-lg">
                  What you should do next
              </p>
              <ul className="space-y-3 mb-10">
                <li className="flex items-start gap-3 text-base text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />Ask your doctor for a copy of the scan report</li>
                <li className="flex items-start gap-3 text-base text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />Find out whether the radiologist (the specialist who reads scans) recommended any follow-up</li>
                <li className="flex items-start gap-3 text-base text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />Ask for a referral to a specialist — either a gastroenterologist (gut specialist) or an HPB surgeon (liver, pancreas and bile duct surgeon)</li>
                <li className="flex items-start gap-3 text-base text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />In Singapore, these specialists are available at SGH, NUH, NCCS, Tan Tock Seng Hospital, and private hospitals</li>
                <li className="flex items-start gap-3 text-base text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" /><strong>Do not search online late at night —</strong> most of what you will find refers to the worst-case scenarios, not the most common ones</li>
              </ul>
              <p className="text-muted-foreground font-semibold mb-4 text-lg">
                  What kind of cyst might it be?
              </p>
              <p className="text-muted-foreground mb-10 text-lg">
                  There are several types of pancreatic cysts. Most are identified by their appearance on a scan. Your specialist may recommend an additional scan or a procedure called an endoscopic ultrasound (EUS) to get a clearer picture.
              </p>
              <table className="comparison-table border bg-background">
                <thead>
                  <tr>
                    <th>Type of cyst</th>
                    <th>What it means for you</th>
                  </tr>
                </thead>
                <tbody>
                  {kindsCyst.map((cyst) => (
                    <tr key={cyst.type}>
                      <td>{cyst.type}</td>
                      <td>{cyst.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto mt-16"
            >
              <h3 className="text-3xl md:text-3xl font-serif font-semibold text-foreground mb-4">
                Are there signs I should be seen sooner rather than later?
              </h3>
              <p className="text-muted-foreground mb-10 text-lg">
                  In most cases, your specialist will arrange a follow-up scan in 6-12 months. But certain signs — either on the scan or in how you're feeling — mean you may need to be seen sooner or have further tests done.
              </p>
              <p className="text-muted-foreground font-semibold mb-4 text-lg">
                 Tell your doctor straight away if you have:
              </p>
              <ul className="space-y-3 mb-10">
                <li className="flex items-start gap-3 text-base text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" /><strong>New or worsening pain</strong> in your upper abdomen or back</li>
                <li className="flex items-start gap-3 text-base text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" /><strong>Yellowing of your skin or eyes (jaundice)</strong></li>
                <li className="flex items-start gap-3 text-base text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />Unexplained weight loss</li>
                <li className="flex items-start gap-3 text-base text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" /><strong>New diabetes</strong> or your blood sugar suddenly becoming harder to control</li>
                <li className="flex items-start gap-3 text-base text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" /><strong>Feeling full quickly</strong> when eating, or ongoing nausea</li>
              </ul>
              <div className="p-6 flex items-center gap-3 mb-10 bg-amber-50 dark:bg-amber-900/10 rounded-2xl border border-amber-200 dark:border-amber-800/30">
                <AlertTriangle className="h-8 w-8 text-amber-600" />
                <p className="text-muted-foreground mb-2">
                  <strong>Do not wait for your next routine appointment if you develop any of these symptoms.</strong><br></br>
                  Contact your doctor or specialist promptly. These symptoms do not automatically mean something serious, but they need to be assessed.
                </p>
              </div>
              <p className="text-muted-foreground font-semibold mb-4 text-lg">
                 What scan features concern specialists?
              </p>
              <p className="text-muted-foreground mb-10 text-lg">
                  When your doctor looks at the scan report, they look for certain features that can indicate a higher risk. You don’t need to understand all of these — but here is a plain-language summary:
              </p>
               <table className="comparison-table border bg-background">
                <thead>
                  <tr>
                    <th>What the scan shows</th>
                    <th>Why it matters</th>
                    <th>What it means</th>
                  </tr>
                </thead>
                <tbody>
                  {specialistsConcerns.map((specialist) => (
                    <tr key={specialist.feature}>
                      <td>{specialist.feature}</td>
                      <td>{specialist.concern}</td>
                      <td>{specialist.recommendation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto mt-16"
            >
              <h3 className="text-3xl md:text-3xl font-serif font-semibold text-foreground mb-4">
                Do I need an operation, or just regular check-ups?
              </h3>
              <p className="text-muted-foreground mb-10 text-lg">
                This is the question most patients ask. The honest answer is: it depends on the type of cyst, what it looks like on scans, 
                how it changes over time, and your overall health. Surgery is not needed for most people.
              </p>
              <p className="text-muted-foreground font-semibold mb-6 text-lg">
                 Most people will just need regular monitoring (surveillance)
              </p>
              <p className="text-muted-foreground mb-4 text-lg">
                Monitoring usually means repeat MRI or CT scans every 6–12 months to check that nothing has changed. 
                Over time, if everything remains stable, the gap between scans is often extended.
              </p>
              <ul className="space-y-3 mb-10">
                <li className="flex items-start gap-3 text-base text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" /><strong>Small, stable cysts with no concerning features</strong> are usually just watched over time</li>
                <li className="flex items-start gap-3 text-base text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" /><strong>Serous cysts (SCA)</strong> rarely need surgery — routine imaging is usually all that is needed</li>
                <li className="flex items-start gap-3 text-base text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" /><strong>If you have other health conditions</strong> that make surgery risky, monitoring is often the right choice even for larger cysts</li>
                <li className="flex items-start gap-3 text-base text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" /><strong>You will not be abandoned</strong> — regular follow-up is active, protective care, not just waiting</li>
              </ul>
              <p className="text-muted-foreground font-semibold mb-4 text-lg">
                 Most people will just need regular monitoring (surveillance)
              </p>
              <ul className="space-y-3 mb-10">
                <li className="flex items-start gap-3 text-base text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />The scan shows a solid lump or nodule growing inside the cyst</li>
                <li className="flex items-start gap-3 text-base text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />The pancreatic duct is significantly widened</li>
                <li className="flex items-start gap-3 text-base text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />You have developed jaundice linked to the cyst</li>
                <li className="flex items-start gap-3 text-base text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />The cyst is causing pain, blockage, or other symptoms</li>
                <li className="flex items-start gap-3 text-base text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />The cyst is a type known to carry a higher risk of becoming cancerous</li>
                <li className="flex items-start gap-3 text-base text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />You are young and fit, and your doctor feels removal now prevents a bigger problem later</li>
              </ul>
              <div className="p-6 flex items-center gap-3 mb-10 bg-background rounded-xl p-6 border border-border/50">
                <Info className="h-8 w-8 text-emerald-600" />
                <p className="text-muted-foreground mb-2">
                  <strong>What questions should I ask my specialist?</strong><br></br>
                  What type of cyst do I have? • What is my risk of it becoming cancer? • How often do I need scans? • What changes should prompt me to call you? • Will I need surgery, and if so, when?
                </p>
              </div>
              <p className="text-muted-foreground font-semibold mb-4 text-lg">
                 What type of scan will I need for follow-up?
              </p>
              <ul className="space-y-3 mb-10">
                <li className="flex items-start gap-3 text-base text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" /><span><strong>MRI (with MRCP):</strong> This is the preferred scan for follow-up. It gives excellent detail without radiation and is particularly good at showing the pancreatic ducts.</span></li>
                <li className="flex items-start gap-3 text-base text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" /><span><strong>CT scan:</strong> Used when MRI is not possible. Involves a small amount of radiation.</span></li>
                <li className="flex items-start gap-3 text-base text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" /><span><strong>Endoscopic ultrasound (EUS):</strong> A camera passed gently through your mouth while you are sedated, with an ultrasound probe at the tip. Gives very detailed images and allows your doctor to take a small fluid sample from the cyst if needed.</span></li>
              </ul>
              <p className="text-muted-foreground font-semibold mb-4 text-lg">
                 Can I stop having scans eventually?
              </p>
              <p className="text-muted-foreground mb-10 text-lg">
                Yes — in many cases, your specialist will recommend stopping surveillance if your cyst has been completely stable for several years, or if your age or health means that the result of further monitoring would not change your care. This is a decision made together with you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Diagnose and Monitored */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-10">
                How Are Pancreatic Cysts Diagnosed and Monitored?
              </h2>
              <div className="p-6 flex items-center gap-3 mb-10 bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl border border-emerald-200 dark:border-emerald-800/30">
                <Heart className="h-8 w-8 text-emerald-500" />
                <p className="text-muted-foreground mb-2">
                  <strong>You don’t need to be a doctor to understand your own care.</strong><br></br>
                  This guide explains the scans used to look at pancreatic cysts, what your doctor is looking for, and how they decide how often you need to come back. The more you understand, the easier it is to ask the right questions.
                </p>
              </div>

              <h3 className="text-3xl md:text-3xl font-serif font-semibold text-foreground mb-4">
                What scans are used, and what does each one actually do?
              </h3>
              <p className="text-muted-foreground mb-10 text-lg">
                  When a cyst is found on your pancreas, your doctor needs to get a clearer picture of what kind of cyst it is and whether anything about it needs closer attention. There are two main tools used for this: a special type of MRI scan, and a procedure called an endoscopic ultrasound. They are used at different stages and for different reasons.
              </p>
              <p className="text-muted-foreground font-semibold mb-4 text-lg">
                 The MRI scan (and something called MRCP)
              </p>
              <p className="text-muted-foreground mb-2 text-lg">
                An MRI uses magnets and radio waves to build detailed images of your organs. It does not use radiation, which is one reason it is preferred for follow-up over many years.
              </p>
              <p className="text-muted-foreground mb-10 text-lg">
                When your doctor asks for a 'pancreatic protocol MRI' or an 'MRCP', they are asking for a version of the scan that is specially designed to look at the pancreas and the ducts (tubes) that drain it. MRCP stands for Magnetic Resonance Cholangiopancreatography — a long word that simply means a detailed map of the drainage tubes in and around your pancreas and liver.
              </p>
              <div className="p-6 flex items-center gap-3 mb-10 bg-background rounded-xl p-6 border border-border/50">
                <Info className="h-8 w-8 text-emerald-600" />
                <p className="text-muted-foreground mb-2">
                  <strong>What is the MRCP actually looking at?</strong><br></br>
                  The pancreas has a main drainage duct running through it, like a channel. If a cyst is pressing on this duct, or connected to it, or causing it to widen, that changes how your doctor manages things. The MRCP shows this clearly — better than a regular CT scan.
                </p>
              </div>
              <p className="text-muted-foreground font-semibold mb-4 text-lg">
                 What can MRI and MRCP tell your doctor?
              </p>
              <ul className="space-y-3 mb-10">
                <li className="flex items-start gap-3 text-base text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />The size and shape of the cyst, and whether it has changed since the last scan</li>
                <li className="flex items-start gap-3 text-base text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />Whether the cyst has any solid areas or nodules growing inside it (a feature that warrants closer attention)</li>
                <li className="flex items-start gap-3 text-base text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />Whether the cyst is connected to the main pancreatic duct</li>
                <li className="flex items-start gap-3 text-base text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />Whether the main duct has become wider than normal — this can indicate a higher-risk type of cyst</li>
                <li className="flex items-start gap-3 text-base text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />The number of cysts and where in the pancreas they sit (head, body, or tail)</li>
              </ul>
              <p className="text-muted-foreground font-semibold mb-4 text-lg">
                 What an MRI cannot always tell your doctor
              </p>
              <p className="text-muted-foreground mb-10 text-lg">
                MRI is excellent for the big picture, but it has limits. It can struggle to pick up very small nodules inside a cyst, and it cannot directly sample the fluid inside the cyst to test it. That is where the second tool comes in.
              </p>
               <p className="text-muted-foreground font-semibold mb-4 text-lg">
                 The endoscopic ultrasound (EUS) — a closer look
              </p>
              <p className="text-muted-foreground mb-2 text-lg">
                An endoscopic ultrasound is a procedure done while you are sedated (lightly asleep). A thin, flexible tube is passed gently through your mouth and down into your stomach. At the tip of the tube is a tiny ultrasound probe, 
                which sends sound waves to create detailed images of the pancreas from the inside — much closer than any external scan can get.
              </p>
              <p className="text-muted-foreground mb-10 text-lg">
                It sounds more daunting than it is. Most patients find it completely manageable, and you are kept comfortable throughout with sedation. The whole procedure usually takes 20 to 40 minutes.
              </p>
              <div className="p-6 flex items-center gap-3 mb-10 bg-background rounded-xl p-6 border border-border/50">
                <Info className="h-8 w-8 text-emerald-600" />
                <p className="text-muted-foreground mb-2">
                  <strong>Why is getting closer such an advantage?</strong><br></br>
                  The pancreas sits deep in the abdomen, surrounded by other organs. An external ultrasound or even a CT scan has to look through layers of tissue. An EUS probe sits right next to the pancreas with only the stomach wall in between. 
                  This gives images that are far more detailed for small features like nodules or wall thickening inside a cyst.
                </p>
              </div>
              <p className="text-muted-foreground font-semibold mb-4 text-lg">
                 What can an EUS tell your doctor?
              </p>
              <ul className="space-y-3 mb-10">
                <li className="flex items-start gap-3 text-base text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                    A much more detailed look at the internal structure of the cyst —
                    especially small nodules or thickening that an MRI might miss
                </li>
                <li className="flex items-start gap-3 text-base text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                  Whether a nodule inside the cyst is truly solid (higher concern) or
                  just a fold of tissue (less concern)
                </li>
                <li className="flex items-start gap-3 text-base text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                  The exact relationship of the cyst to nearby blood vessels and the
                  pancreatic duct
                </li>
                <li className="flex items-start gap-3 text-base text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                  A sample of cyst fluid, if needed, by passing a fine needle through
                  the scope (called EUS-FNA) — this fluid can be tested to help
                  identify the type of cyst and its risk
                </li>
              </ul>
              <p className="text-muted-foreground font-semibold mb-4 text-lg">
                 How does cyst fluid testing help?
              </p>
              <p className="text-muted-foreground mb-10 text-lg">
                The fluid inside different types of cysts has different characteristics. 
                Measuring the level of a substance called CEA (carcinoembryonic antigen) in the fluid can help 
                distinguish between a mucinous cyst — which carries a small but real risk — and a non-mucinous cyst, 
                which is almost always benign. The fluid can also be tested for unusual cells. This is most useful 
                when the scan picture is unclear and your specialist needs more information before deciding on a 
                management plan.
              </p>
              <p className="text-muted-foreground font-semibold mb-4 text-lg">
                 MRI vs EUS at a glance
              </p>
              <table className="comparison-table border bg-background">
                <thead>
                  <tr>
                    <th></th>
                    <th>MRI / MRCP</th>
                    <th>Endoscopic ultrasound (EUS)</th>
                  </tr>
                </thead>
                <tbody>
                  {compareMriEus.map((mrieus) => (
                    <tr key={mrieus.category}>
                      <td>{mrieus.category}</td>
                      <td>{mrieus.mri}</td>
                      <td>{mrieus.eus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto mt-16"
            >
              <h3 className="text-3xl md:text-3xl font-serif font-semibold text-foreground mb-4">
                How does my doctor decide how often I need to come back?
              </h3>
              <p className="text-muted-foreground mb-10 text-lg">
                One of the most common questions patients ask is: “How often do I really need these scans?” The answer is not the same for everyone. 
                Your specialist will look at several factors together to decide on the right interval for you personally.
              </p>
              <p className="text-muted-foreground font-semibold mb-4 text-lg">
                 The things your doctor weighs up
              </p>
              <ul className="space-y-3 mb-10">
                <li className="flex items-start gap-3 text-base text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                  <strong>What type of cyst it is —</strong> some types are inherently lower risk and
                  need less frequent checks; others are watched more carefully
                </li>
                <li className="flex items-start gap-3 text-base text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                  <strong>How big the cyst is —</strong> larger cysts are generally monitored more
                  closely, at least initially
                </li>
                <li className="flex items-start gap-3 text-base text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                  <strong>Whether the cyst has changed —</strong> a cyst that has been completely stable
                  for several years is less worrying than one that has grown
                </li>
                <li className="flex items-start gap-3 text-base text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                  <strong>Whether there are any concerning features —</strong> things like nodules, duct
                  widening, or thickened walls change the timing of follow-up
                </li>
                <li className="flex items-start gap-3 text-base text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                  <strong>Your age and general health —</strong> a younger, fit patient may need longer
                  follow-up; for older patients with other health conditions, the
                  balance of benefit shifts
                </li>
                <li className="flex items-start gap-3 text-base text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                  <strong>How you are feeling —</strong> if you develop new symptoms, the interval may be
                  shortened or a different test arranged regardless of the schedule
                </li>
              </ul>
              <div className="p-6 flex items-center gap-3 mb-10 bg-background rounded-xl p-6 border border-border/50">
                <Info className="h-8 w-8 text-emerald-600" />
                <p className="text-muted-foreground mb-2">
                  <strong>Follow-up is not one-size-fits-all.</strong><br></br>
                 International guidelines give doctors a framework, but your specialist will adapt this to your specific 
                 cyst and your overall situation. If your interval feels too long or too short for your comfort, it is always 
                 reasonable to ask your doctor to explain their reasoning.
                </p>
              </div>
              <p className="text-muted-foreground font-semibold mb-4 text-lg">
                 Typical follow-up intervals as a rough guide
              </p>
              <p className="text-muted-foreground mb-10 text-lg">
                The table below gives a general sense of how intervals are typically set. Your own schedule may differ based on the specifics of your case.
              </p>
              <table className="comparison-table border bg-background">
                <thead>
                  <tr>
                    <th>Situation</th>
                    <th>Typical scan interval</th>
                    <th>Type of scan usually used</th>
                  </tr>
                </thead>
                <tbody>
                  {followupGuide.map((guide) => (
                    <tr key={guide.scenario}>
                      <td>{guide.scenario}</td>
                      <td>{guide.interval}</td>
                      <td>{guide.test}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-muted-foreground font-semibold mb-4 mt-10 text-lg">
                 Can my follow-up interval change over time?
              </p>
               <p className="text-muted-foreground mb-2 text-lg">
                Yes, and this is actually a good sign. If your cyst remains completely stable over several years with no concerning features, 
                your specialist will often extend the gap between scans. This is not them losing interest in your care — 
                it reflects the fact that stable cysts over time carry a lower risk, and the benefit of very frequent scanning starts to diminish.
              </p>
              <p className="text-muted-foreground mb-10 text-lg">
                On the other hand, if something changes — the cyst grows, a new symptom appears, or a scan shows a new feature — 
                your interval will be brought forward and your doctor may arrange an EUS or refer you to a surgeon.
              </p>
              <div className="p-6 flex items-center gap-3 mb-10 bg-amber-50 dark:bg-amber-900/10 rounded-2xl border border-amber-200 dark:border-amber-800/30">
                <AlertTriangle className="h-8 w-8 text-amber-600" />
                <p className="text-muted-foreground mb-2">
                  <strong>Do not wait for your next scheduled scan if you develop new symptoms.</strong><br></br>
                 New abdominal or back pain, jaundice (yellowing of the skin or eyes), unexplained weight loss, 
                 or a sudden change in how you feel should prompt you to contact your specialist promptly — 
                 do not wait for the next routine appointment.
                </p>
              </div>
              <p className="text-muted-foreground font-semibold mb-4 mt-10 text-lg">
                 A note on radiation and scan safety
              </p>
              <p className="text-muted-foreground mb-10 text-lg">
                Many patients worry about the cumulative effect of repeated scans. MRI does not use radiation at all, 
                which is one reason it is the preferred tool for long-term cyst monitoring. CT scans do involve a small 
                amount of radiation, but they are used selectively. Your doctor will always try to choose the scan that 
                gives the most useful information with the least burden to you.
              </p>
            </motion.div>
          </div>
        </section>



        {/* Investigations Section */}
        <section className="py-16 lg:py-20 bg-emerald-50/50 dark:bg-emerald-950/10">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-8">
                <Search className="h-8 w-8 text-emerald-600" />
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
                  Investigations
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
                Comprehensive evaluation combines imaging and, when indicated, cyst fluid analysis.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* EUS Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-background rounded-xl overflow-hidden border border-emerald-200 dark:border-emerald-800/30 shadow-sm"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={eusImage}
                      alt="Endoscopic Ultrasound for pancreatic cyst evaluation"
                      className="w-full h-full object-cover"
                      width={1280}
                      height={720}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      EUS with FNA
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Endoscopic ultrasound provides high-resolution imaging of pancreatic cysts and allows cyst fluid sampling.
                    </p>
                    <ul className="space-y-2 mb-4">
                      {[
                        "Detailed cyst characterisation",
                        "Detection of mural nodules",
                        "Cyst fluid analysis (CEA, amylase, cytology)",
                        "Molecular markers for malignancy risk",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href="/eus" 
                      className="inline-flex items-center text-sm text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
                    >
                      Learn more about this procedure →
                    </Link>
                  </div>
                </motion.div>

                {/* MRI/MRCP Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-background rounded-xl overflow-hidden border border-emerald-200 dark:border-emerald-800/30 shadow-sm"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={mriScanImage}
                      alt="MRI scan for pancreatic cyst surveillance"
                      className="w-full h-full object-cover"
                      width={1280}
                      height={720}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      MRI/MRCP Surveillance
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      MRI with MRCP is the preferred imaging modality for surveillance, avoiding radiation exposure.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "No radiation exposure (safe for repeated imaging)",
                        "Clear soft tissue characterisation",
                        "Visualises pancreatic duct communication",
                        "Tracks cyst size changes over time",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Management Section */}
        <section className="py-16 lg:py-20 bg-emerald-50 dark:bg-emerald-950/20">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-6">
                <Stethoscope className="h-8 w-8 text-emerald-600" />
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
                  Management Approach
                </h2>
              </div>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-loose mb-8">
                <p>
                  Management is individualised based on cyst type, size, features, and patient factors. 
                  Options range from surveillance to surgical resection.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-background rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/30">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Surveillance</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Regular MRI/MRCP imaging at intervals determined by cyst characteristics. Most low-risk 
                    cysts can be safely monitored without intervention.
                  </p>
                </div>
                <div className="bg-background rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/30">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Enhanced Surveillance</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    More frequent imaging and EUS evaluation for cysts with worrisome features. Allows 
                    early detection of concerning changes.
                  </p>
                </div>
                <div className="bg-background rounded-xl p-6 border border-emerald-200 dark:border-emerald-800/30">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Surgical Referral</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    For high-risk cysts, surgical resection is a primary clinical objective for high-risk cases. Coordinated 
                    referral to experienced pancreatic surgeons when indicated.
                  </p>
                </div>
              </div>
            </motion.div>
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
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`faq-${index}`}
                    className="bg-card rounded-xl border border-border px-4"
                  >
                    <AccordionTrigger className="hover:no-underline py-4 text-left">
                      <span className="font-medium text-lg text-foreground">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-base text-muted-foreground">
                      {faq.answer}
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
