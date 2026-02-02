"use client";

import { motion } from "framer-motion";
import { Award, Building2, GraduationCap, Shield } from "lucide-react";

const badges = [
  {
    icon: GraduationCap,
    title: "MBBS, MRCP (UK)",
    subtitle: "Royal College of Physicians",
  },
  {
    icon: Award,
    title: "PhD (UK)",
    subtitle: "University of Plymouth",
  },
  {
    icon: Shield,
    title: "FRCP (UK)",
    subtitle: "Fellow, Royal College of Physicians",
  },
  {
    icon: Building2,
    title: "25+ Years",
    subtitle: "International Experience",
  },
];

export const TrustBadges = () => {
  return (
    <section className="py-12 bg-card border-y border-border">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-3">
                <badge.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm">{badge.title}</h3>
              <p className="text-xs text-muted-foreground">{badge.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
