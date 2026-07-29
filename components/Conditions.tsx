'use client'

import { motion } from "framer-motion";

// Import anatomical images
import Link from "next/link";
import Image from "next/image";

const colonImage = "/colon-anatomy.jpeg";
const jaundiceImage = "/jaundice-eye.jpg";
const cirrhosisImage = "/cirrhosis-liver-only.png";
const fattyLiverImage = "/fatty-liver-histology.jpeg";
const heartburnImage = "/heartburn-2.jpeg";
const epigastricImage = "/epigastric-pain-2.jpeg";
const pancreasImage = "/pancreas-hero.jpeg";
const constipationImage = "/constipation-hero.jpeg";
const ibsImage = "/abdominal-pain-jaundice.jpg";
const autoimmuneImage = "/liver-biopsy-procedure.jpeg";
const cancerScreeningImage = "/liver-cancer-hcc.jpg";
const bileDuctImage = "/ercp-stone-removal.jpeg";
const viralHepatitisImage = "/viral-hepatitis-icon.jpeg";
const liverTransplantImage = "/liver-transplant-new.jpeg";
const chronicPancreatitisImage = "/chronic-pancreatitis.jpeg";
const ibdImage = "/ibd-icon.jpeg";

const conditions: {
  title: string;
  image: string;
  link?: string;
  alt?: string;
}[] = [{
  title: "Acid Reflux & Heartburn",
  image: heartburnImage,
  link: "/gerd-heartburn",
  alt: "acid reflux & heartburn treatment",
}, {
  title: "Autoimmune Hepatitis",
  image: autoimmuneImage,
  link: "/autoimmune-hepatitis",
  alt: "autoimmune hepatitis condition",
}, {
  title: "Bile Duct Stones",
  image: bileDuctImage,
  link: "/bile-duct-stones",
  alt: "bile duct stones treatment",
}, {
  title: "Bowel Cancer Screening",
  image: colonImage,
  link: "/bowel-cancer-screening",
  alt: "bowel cancer screening procedure",
}, {
  title: "Chronic Pancreatitis",
  image: chronicPancreatitisImage,
  link: "/chronic-pancreatitis",
  alt: "chronic pancreatitis condition",
}, {
  title: "Constipation",
  image: constipationImage,
  link: "/constipation",
  alt: "constipation condition",
}, {
  title: "Epigastric Pain",
  image: epigastricImage,
  link: "/epigastric-pain",
  alt: "epigastric pain symptoms",
}, {
  title: "Fatty Liver Disease",
  image: fattyLiverImage,
  link: "/fatty-liver-disease",
  alt: "fatty liver disease visual representation",
}, {
  title: "Inflammatory Bowel Disease",
  image: ibdImage,
  link: "/inflammatory-bowel-disease",
  alt: "inflammatory bowel disease information",
}, {
  title: "Irritable Bowel Syndrome",
  image: ibsImage,
  link: "/ibs",
  alt: "irritable bowel syndrome symptoms",
}, {
  title: "Jaundice",
  image: jaundiceImage,
  link: "/jaundice",
  alt: "jaundice symptoms and signs",
}, {
  title: "Liver & Pancreatic Cancer Screening",
  image: cancerScreeningImage,
  link: "/liver-pancreatic-cancer-screening",
  alt: "liver cancer & pancreatic cancer screening",
}, {
  title: "Liver Cirrhosis",
  image: cirrhosisImage,
  link: "/liver-cirrhosis",
  alt: "liver cirrhosis condition",
}, {
  title: "Liver Transplantation",
  image: liverTransplantImage,
  link: "/liver-transplantation",
  alt: "liver transplantation procedure",
}, {
  title: "Pancreatic Cyst",
  image: pancreasImage,
  link: "/pancreatic-cyst",
  alt: "pancreatic cyst condition",
}, {
  title: "Viral Hepatitis (Hep B & C)",
  image: viralHepatitisImage,
  link: "/viral-hepatitis",
  alt: "viral hepatitis (hep b & c) information",
}];

const ConditionCard = ({
  title,
  image
}: {
  title: string;
  image: string;
}) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-28 h-28 md:w-32 md:h-32 mb-4 rounded-full overflow-hidden border-2 border-sky-200 dark:border-sky-600 shadow-sm">
      <Image
        src={image} 
        alt={title} 
        width={128}
        height={128}
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="text-base md:text-lg font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
      {title}
    </h3>
  </div>
);

export const Conditions = () => {
  return <section id="conditions" className="py-20 lg:py-28 bg-sky-50 dark:bg-sky-950/40">
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
      }} className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sky-600 dark:text-sky-400 text-sm font-medium tracking-widest uppercase">
            Areas of Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mt-3 mb-6">Gastroenterological Conditions We Treat</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {conditions.map((condition, index) => <motion.div key={condition.title} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1,
          duration: 0.5
        }}>
              {condition.link ? condition.link.startsWith("/") ? <Link href={condition.link} className="block group p-6 bg-sky-100/80 dark:bg-sky-800/50 rounded-xl border border-sky-200 dark:border-sky-600/60 hover:shadow-medium hover:border-sky-300 hover:bg-sky-150/70 dark:hover:bg-sky-700/50 transition-all duration-300 h-full">
                    <ConditionCard title={condition.title} image={condition.image} />
                  </Link> : <a href={condition.link} target="_blank" rel="noopener noreferrer" className="block group p-6 bg-sky-100/80 dark:bg-sky-800/50 rounded-xl border border-sky-200 dark:border-sky-600/60 hover:shadow-medium hover:border-sky-300 hover:bg-sky-150/70 dark:hover:bg-sky-700/50 transition-all duration-300 h-full">
                    <ConditionCard title={condition.title} image={condition.image} />
                  </a> : <div className="group p-6 bg-sky-100/80 dark:bg-sky-800/50 rounded-xl border border-sky-200 dark:border-sky-600/60 hover:shadow-medium hover:border-sky-300 hover:bg-sky-150/70 dark:hover:bg-sky-700/50 transition-all duration-300 h-full">
                  <ConditionCard title={condition.title} image={condition.image} />
                </div>}
            </motion.div>)}
        </div>

      </div>
    </section>;
};
