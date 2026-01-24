'use client'

/* eslint-disable @next/next/no-html-link-for-pages */
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I make an appointment?",
    answer: "You can book an appointment by calling our clinic directly, sending us a WhatsApp message, or using the contact form on this website. Our team will respond within one business day to confirm your appointment.",
  },
  {
    question: "What should I bring to my first consultation?",
    answer: "Please bring your NRIC or passport, any relevant medical records or test results, a list of current medications, and your insurance card if applicable. Arriving 15 minutes early helps ensure a smooth check-in process.",
  },
  {
    question: "Does the clinic accept insurance?",
    answer: "Yes, we accept most major insurance providers. We recommend checking with your insurer regarding coverage for specialist consultations. Our staff can provide documentation needed for claims processing.",
  },
  {
    question: "How long is a typical consultation?",
    answer: "First consultations typically last 30-45 minutes to allow thorough assessment and discussion. Follow-up appointments may be shorter depending on your needs. We believe in giving each patient adequate time.",
  },
  {
    question: "What are the clinic operating hours?",
    answer: "Our clinic operates Monday to Friday from 9:00 AM to 5:00 PM, and Saturday from 9:00 AM to 1:00 PM. We are closed on Sundays and public holidays. Urgent matters can be addressed through our after-hours contact.",
  },
  {
    question: "Can I get a second opinion?",
    answer: "Absolutely. Dr. Prem welcomes patients seeking second opinions and will provide an independent assessment of your condition. Please bring any relevant medical records, imaging, and test results from your previous consultations.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent text-sm font-medium tracking-widest uppercase">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mt-3 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Find answers to common questions about our practice, appointments, 
              and what to expect during your visit.
            </p>
            <p className="text-sm text-muted-foreground">
              Have a question not listed here?{" "}
              <a href="/#contact" className="text-primary hover:text-accent transition-colors font-medium">
                Contact us directly
              </a>
            </p>
          </motion.div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left font-serif text-foreground hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
