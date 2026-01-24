/* eslint-disable react-hooks/set-state-in-effect */
'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const endoscopeImage = "/endoscope-procedure.jpg";
const colonoscopyImage = "/colonoscopy-procedure-new.jpeg";
const ercpImage = "/ercp-jaundice.jpg";
const eusImage = "/eus-pancreas.jpeg";
const bravoImage = "/bravo-ph-capsule.jpg";
const fibroscanImage = "/fibroscan-procedure.jpg";
const videoCapsuleImage = "/video-capsule-endoscopy.jpeg";
const liverBiopsyImage = "/liver-biopsy-procedure.jpeg";
const procedures = [
  {
    title: "Gastroscopy (OGD)",
    description:
      "Upper gastrointestinal endoscopy for the diagnosis and management of conditions affecting the oesophagus, stomach, and duodenum, including reflux disease, gastritis, ulcers, and upper GI bleeding.",
    image: endoscopeImage,
    link: "/gastroscopy",
  },
  {
    title: "Colonoscopy",
    description:
      "Lower gastrointestinal endoscopy for bowel cancer screening, polyp detection and removal, and evaluation of symptoms such as altered bowel habits, bleeding, and anaemia.",
    image: colonoscopyImage,
    link: "/colonoscopy",
  },
  {
    title: "ERCP",
    description:
      "A specialised therapeutic endoscopic procedure for the diagnosis and treatment of bile duct and pancreatic disorders, including gallstones, strictures, cholangitis, and obstructive jaundice.",
    image: ercpImage,
    link: "/ercp",
  },
  {
    title: "EUS (Endoscopic Ultrasound)",
    description:
      "Advanced imaging that combines endoscopy and ultrasound for detailed evaluation of the pancreas, bile ducts, gastrointestinal wall, and surrounding structures, including tissue sampling where appropriate.",
    image: eusImage,
    link: "/eus",
  },
  {
    title: "Bravo™ Capsule pH Monitoring",
    description:
      "Wireless oesophageal pH monitoring using the Bravo™ capsule to objectively diagnose gastro-oesophageal reflux disease (GERD). This test measures acid exposure in the oesophagus over several days and helps guide personalised reflux management.",
    image: bravoImage,
    link: "/bravo-capsule",
  },
  {
    title: "Video Capsule Endoscopy",
    description:
      "A swallowable camera capsule used for non-invasive imaging of the small intestine, particularly useful in evaluating unexplained anaemia, obscure gastrointestinal bleeding, Crohn's disease, and suspected small bowel pathology.",
    image: videoCapsuleImage,
    link: "/video-capsule-endoscopy",
  },
  {
    title: "FibroScan® (Liver Elastography)",
    description:
      "A non-invasive ultrasound-based test that measures liver stiffness and fat content, commonly used to assess liver fibrosis and fatty liver disease without the need for biopsy.",
    image: fibroscanImage,
    link: "/fibroscan",
  },
  {
    title: "Liver Biopsy",
    description:
      "A targeted tissue sampling procedure performed when definitive diagnosis of liver disease is required. Liver biopsy provides detailed histological information to guide accurate diagnosis, staging, and management.",
    image: liverBiopsyImage,
    link: "/liver-biopsy",
  },
];

const LOADED_IMAGES_SESSION_KEY = "drprem_loaded_images_v1";

const readLoadedImagesFromSession = (): string[] => {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.sessionStorage.getItem(LOADED_IMAGES_SESSION_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((v): v is string => typeof v === "string");
  } catch {
    return [];
  }
};

const writeLoadedImagesToSession = (images: string[]) => {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(
      LOADED_IMAGES_SESSION_KEY,
      JSON.stringify(images),
    );
  } catch {
    // ignore (storage may be unavailable)
  }
};

const loadedImageSrcs = new Set<string>();
let loadedImagesInitialized = false;

const ensureLoadedImagesInitialized = () => {
  if (loadedImagesInitialized) return;
  loadedImagesInitialized = true;
  const stored = readLoadedImagesFromSession();
  stored.forEach((src) => loadedImageSrcs.add(src));
};

const markImageLoaded = (src: string) => {
  ensureLoadedImagesInitialized();
  if (loadedImageSrcs.has(src)) return;
  loadedImageSrcs.add(src);
  writeLoadedImagesToSession(Array.from(loadedImageSrcs));
};

const isImageCached = (src: string | { src: string }) => {
  ensureLoadedImagesInitialized();
  const srcStr = typeof src === "string" ? src : src.src;
  if (loadedImageSrcs.has(srcStr)) return true;
  if (typeof window === "undefined") return false;

  const img = new (window.Image as any)();
  img.src = srcStr;

  if (img.complete) {
    markImageLoaded(srcStr);
    return true;
  }

  return false;
};

const preloadImage = (src: string | { src: string }) =>
  new Promise<void>((resolve) => {
    if (typeof window === "undefined") return resolve();
    ensureLoadedImagesInitialized();
    if (isImageCached(src)) return resolve();

    const srcStr = typeof src === "string" ? src : src.src;
    let settled = false;
    const settle = () => {
      if (settled) return;
      settled = true;
      markImageLoaded(srcStr);
      resolve();
    };

    const img = new (window.Image as any)();
    img.onload = settle;
    img.onerror = settle;
    img.src = srcStr;
  });

interface ProcedureCardProps {
  procedure: (typeof procedures)[0];
  index: number;
  imagesReady: boolean;
  animateIn: boolean;
}

const ProcedureCard = ({
  procedure,
  index,
  imagesReady,
  animateIn,
}: ProcedureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl bg-card shadow-soft hover:shadow-medium transition-all duration-300"
    >
      <div className="aspect-square overflow-hidden relative bg-muted/30">
        <div
          aria-hidden="true"
          className={`absolute inset-0 bg-muted transition-opacity duration-300 pointer-events-none ${
            imagesReady ? "opacity-0" : "opacity-100"
          }`}
        />

        {imagesReady && (
          <Image
            src={procedure.image}
            alt={procedure.title}
            loading="eager"
            decoding="async"
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 80vw"
            className={`w-full h-full object-cover object-top transition-transform duration-500 will-change-transform group-hover:scale-105 ${
              animateIn ? "animate-in fade-in-0 duration-500" : ""
            }`}
          />
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg md:text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {procedure.title}
        </h3>
        <p className="text-base text-muted-foreground leading-relaxed mb-4">
          {procedure.description}
        </p>
        <Link
          href={procedure.link}
          className="inline-flex items-center text-base font-medium text-primary hover:text-accent transition-colors"
        >
          Learn More
          <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export const Procedures = () => {
  const [imagesReady, setImagesReady] = useState(false);
  const [animateIn, setAnimateIn] = useState(true);

  useEffect(() => {
    const ready = procedures.every((p) => isImageCached(p.image));
    setAnimateIn(!ready);
    if (ready) {
      setImagesReady(true);
      return;
    }

    let cancelled = false;

    Promise.all(procedures.map((p) => preloadImage(p.image))).then(() => {
      if (!cancelled) setImagesReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="procedures" className="py-20 lg:py-28 section-gradient">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-widest uppercase">
            Services Offered
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mt-3 mb-6">
            Procedures & Services
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From preventive health screening to advanced diagnostic and therapeutic procedures, Dr Prem provides a comprehensive range of gastroenterology and hepatology services, guided by clinical assessment and delivered with care and attention to patient wellbeing.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {procedures.map((procedure, index) => (
            <ProcedureCard
              key={procedure.title}
              procedure={procedure}
              index={index}
              imagesReady={imagesReady}
              animateIn={animateIn}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
