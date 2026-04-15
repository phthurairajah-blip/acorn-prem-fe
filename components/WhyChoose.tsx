'use client'

import { motion } from "framer-motion";
import { 
  Clock, 
  MessageSquare, 
  Stethoscope, 
  Users, 
  MapPin, 
  Shield 
} from "lucide-react";

const reasons = [
  {
    icon: Stethoscope,
    title: "Extensive Specialist Expertise",
    description: "Over 25 years of clinical experience in gastroenterology and hepatology, with specialized clinical training from recognized institutions in Singapore, the United Kingdom, and the United States.",
  },
  {
    icon: MessageSquare,
    title: "Clear, Reassuring Communication",
    description: "Complex medical information explained clearly and honestly in plain language, so you can understand your condition, options, and care plan with confidence.",
  },
  {
    icon: Clock,
    title: "Dedicated Consultation Time",
    description: "Unhurried consultations that allow thorough assessment, thoughtful discussion, and time for your questions and concerns to be fully addressed.",
  },
  {
    icon: Users,
    title: "Patient-Centred Care",
    description: "Treatment decisions made collaboratively, taking into account your preferences, values, and individual health circumstances.",
  },
  {
    icon: MapPin,
    title: "Convenient Central Location",
    description: "Conveniently located at Mount Elizabeth Orchard, with easy access via public transport and nearby parking for patient convenience.",
  },
  {
    icon: Shield,
    title: "Evidence-Based Practice",
    description: "Clinical care guided by current international guidelines and the latest medical evidence, ensuring treatments are appropriate, safe, and up to date.",
  },
];

export const WhyChoose = () => {
  return (
    <section id="why-choose" className="py-20 lg:py-28 bg-primary">
      <div className="container mx-auto px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary-foreground/70 text-sm font-medium tracking-widest uppercase">
            Our Difference
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-primary-foreground mt-3 mb-6">
            Why Patients Choose Us
          </h2>
          <p className="text-base text-primary-foreground/80 leading-relaxed">
            Specialist gastroenterology care delivered with clinical experience, clear communication, and a patient-centred approach, grounded in evidence-based medicine.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 bg-primary-foreground/5 backdrop-blur-sm rounded-xl border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center mb-4">
                <reason.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg md:text-xl font-serif font-semibold text-primary-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-base text-primary-foreground/70 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
