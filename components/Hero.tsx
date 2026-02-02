"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const drPremHeadshot = "/dr-prem-headshot.jpg";
export const Hero = () => {
  return <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-card rounded-full blur-3xl text-[#e6f6fe]" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-card rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto pt-32 pb-20 lg:pt-24 lg:pb-24 px-2 sm:px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Photo */}
          <motion.div initial={{
          opacity: 0,
          x: 150,
          scale: 0.9
        }} animate={{
          opacity: 1,
          x: 0,
          scale: 1
        }} transition={{
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1]
        }} className="relative order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden border-4 border-card/20 shadow-glow relative">
                <Image
                  src={drPremHeadshot}
                  alt="Dr. Prem Thurairajah"
                  fill
                  sizes="(min-width: 1024px) 520px, 80vw"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 lg:w-32 lg:h-32 bg-accent/20 rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} className="text-center lg:text-left order-1">
            <motion.span initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.3,
            duration: 0.6
          }} className="inline-block text-primary-foreground/70 text-sm tracking-widest uppercase mb-4">
              Gastroenterology & Hepatology
            </motion.span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-primary-foreground leading-tight mb-6 italic">
              <span className="whitespace-nowrap">Evidence-Based Care,</span>
              <br />
              A Compassionate Approach to Your <span className="whitespace-nowrap">Digestive Health</span>
            </h1>

            <p className="text-base md:text-lg text-primary-foreground/80 mb-4 leading-relaxed text-justify">
              I provide specialist gastroenterology and hepatology care grounded in the latest medical evidence, delivered with clarity, compassion, and integrity. My approach is centred on listening carefully, explaining clearly, and tailoring care to each individual patient.
            </p>

            <p className="text-base md:text-lg text-primary-foreground/80 mb-4 leading-relaxed text-justify">I care for patients with a wide range of digestive and liver conditions, including acid reflux, bowel habit changes, irritable bowel syndrome, fatty liver and pancreatic disorders. I also have a strong focus on prevention and early detection, including bowel cancer screening and advanced endoscopic assessment.</p>

            <p className="text-base md:text-lg text-primary-foreground/80 mb-6 leading-relaxed text-justify">
              My goal is not only to diagnose and treat disease, but to guide patients toward long-term digestive health with confidence, understanding, and trust.
            </p>

            <p className="text-sm font-medium text-primary-foreground/90 mb-6">
              MBBS, MRCP (UK), PhD (UK), FRCP (UK)
              <br />
              <span className="text-primary-foreground/70">Senior Consultant Gastroenterologist & Hepatologist</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-white hover:bg-white/90 text-secondary font-semibold shadow-md">
                <Link href="/book-appointment">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1.2,
        duration: 0.6
      }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div animate={{
          y: [0, 8, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }} className="text-primary-foreground/50">
            <ChevronDown className="h-8 w-8" />
          </motion.div>
        </motion.div>
      </div>

    </section>;
};
