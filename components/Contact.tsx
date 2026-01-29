'use client'

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
// import { supabase } from "@/integrations/supabase/client";
import Image from "next/image";
import Script from "next/script";

declare global {
  interface Window {
    onRecaptchaSuccess?: (token: string) => void;
    onRecaptchaExpired?: () => void;
    onRecaptchaError?: () => void;
    grecaptcha?: Grecaptcha;
  }
}

const drPremConsultationImage = "/dr-prem-consultation.png";
const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+65 6517 9231",
    href: "tel:+6565179231",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+65 8053 3322",
    href: "https://wa.me/6580533322",
  },
  {
    icon: Mail,
    label: "Email",
    value: "enquiries@drpremgastro.sg",
    href: "mailto:enquiries@drpremgastro.sg",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri: 9am–5pm, Sat: 9am–1pm",
    href: null,
  },
];

const locations = [
  {
    name: "Mount Elizabeth Hospital (Orchard)",
    address: "3 Mount Elizabeth, #03-10, Singapore 228510",
    href: "https://maps.google.com/?q=3+Mount+Elizabeth+Singapore+228510",
  },
  {
    name: "Farrer Park Hospital",
    address: "1 Farrer Park Station Road, #13-14, Singapore 217562",
    href: "https://maps.google.com/?q=1+Farrer+Park+Station+Road+Singapore+217562",
  },
];

const benefits = [
  "Confirmation within 24 hours",
  "Flexible scheduling options",
  "Same-week appointments often available",
  "Tri-lingual support (English, Bahasa Melayu, Tamil)",
];

export const Contact = () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
  const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    preferredLocation: "",
    message: "",
  });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");

  useEffect(() => {
    window.onRecaptchaSuccess = (token: string) => {
      setRecaptchaToken(token);
    };
    window.onRecaptchaExpired = () => {
      setRecaptchaToken("");
    };
    window.onRecaptchaError = () => {
      setRecaptchaToken("");
    };
    return () => {
      window.onRecaptchaSuccess = undefined;
      window.onRecaptchaExpired = undefined;
      window.onRecaptchaError = undefined;
    };
  }, []);

  const isFormValid =
    !!RECAPTCHA_SITE_KEY &&
    formData.name.trim().length > 0 &&
    formData.email.trim().length > 0 &&
    recaptchaToken.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!RECAPTCHA_SITE_KEY) {
      toast({
        title: "Recaptcha not configured",
        description: "Please set the recaptcha site key.",
        variant: "destructive",
      });
      return;
    }
    const token = recaptchaToken || window.grecaptcha?.getResponse?.() || "";
    if (!token) {
      toast({
        title: "Recaptcha required",
        description: "Please confirm you are not a robot.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch(`${API_URL}/bookings/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          preferred_date: formData.preferredDate || null,
          preferred_time: formData.preferredTime || null,
          preferred_location: formData.preferredLocation || null,
          message: formData.message || null,
          recaptcha_token: token,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.detail || "Failed to submit booking request.");
      }

      toast({
        title: "Booking Request Received",
        description: "Thank you! We will contact you within 24 hours to confirm your appointment.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        preferredDate: "",
        preferredTime: "",
        preferredLocation: "",
        message: "",
      });
      setRecaptchaToken("");
      window.grecaptcha?.reset?.();
    } catch (error) {
      console.error("Error sending booking request:", error);
      toast({
        title: "Error",
        description: "Failed to submit booking request. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 section-gradient">
      <div className="container mx-auto">
        {/* Hero Header with Image */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent text-sm font-medium tracking-widest uppercase">
              Schedule Your Visit
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mt-3 mb-4">
              Request an Appointment
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Arrange a consultation with Dr Prem Thurairajah to discuss your digestive or liver concerns. Our clinic team will contact you to confirm your appointment.
            </p>
            
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 text-foreground"
                >
                  <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src={drPremConsultationImage}
              alt="Dr. Prem Thurairajah consulting with a patient"
              width={1200}
              height={900}
              className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
            />
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 shadow-soft border border-border"
          >
            <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
              Request an Appointment
            </h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Full Name *
                </label>
                <Input
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="+65 9123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    autoComplete="off"
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Preferred Date
                  </label>
                  <Input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="bg-background"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Preferred Time
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select time</option>
                    <option value="Morning (9am-12pm)">Morning (9am-12pm)</option>
                    <option value="Afternoon (12pm-3pm)">Afternoon (12pm-3pm)</option>
                    <option value="Late Afternoon (3pm-5pm)">Late Afternoon (3pm-5pm)</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Preferred Location
                </label>
                <select
                  value={formData.preferredLocation}
                  onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Select location</option>
                  <option value="Mount Elizabeth Hospital (Orchard)">Mount Elizabeth Hospital (Orchard)</option>
                  <option value="Farrer Park Hospital">Farrer Park Hospital</option>
                  <option value="No preference">No preference</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Reason for Visit / Additional Notes
                </label>
                <Textarea
                  placeholder="Please briefly describe your symptoms or reason for consultation..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="bg-background resize-none"
                />
              </div>

              <div className="flex justify-center">
                <div
                  className="g-recaptcha"
                  data-sitekey={RECAPTCHA_SITE_KEY}
                  data-callback="onRecaptchaSuccess"
                  data-expired-callback="onRecaptchaExpired"
                  data-error-callback="onRecaptchaError"
                />
              </div>

              <Button type="submit" variant="default" size="lg" className="w-full" disabled={isSubmitting || !isFormValid}>
                {isSubmitting ? "Submitting..." : "Request Appointment"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                We will contact you within 24 hours to confirm your appointment.
              </p>
            </form>
          </motion.div>

          {/* Contact Info & Locations */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Need Immediate Assistance?
              </h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="default" size="lg" className="flex-1" asChild>
                  <a href="tel:+6565179231">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="flex-1" asChild>
                  <a
                    href="https://wa.me/6580533322"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-muted/30 rounded-2xl p-6">
              <h3 className="text-lg font-serif font-semibold text-foreground mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Clinic Locations */}
            <div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-4">
                Clinic Locations
              </h3>
              <div className="space-y-4">
                {locations.map((location) => (
                  <a
                    key={location.name}
                    href={location.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all"
                  >
                    <div className="flex gap-3">
                      <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">{location.name}</p>
                        <p className="text-sm text-muted-foreground">{location.address}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {RECAPTCHA_SITE_KEY ? (
        <Script src="https://www.google.com/recaptcha/api.js" async defer />
      ) : null}
    </section>
  );
};
