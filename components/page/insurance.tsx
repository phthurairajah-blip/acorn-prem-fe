'use client'

import { motion } from "framer-motion";
import { ArrowLeft, CreditCard, Building2, Shield} from "lucide-react";

// Insurance logos
import Link from "next/link";
import Image from "next/image";

const bupaLogo = "/insurance-bupa.jpeg";
const magentaLogo = "/insurance-magenta.jpeg";
const allianzLogo = "/insurance-allianz.jpeg";
const aetnaLogo = "/insurance-aetna.jpeg";
const cignaLogo = "/insurance-cigna.jpeg";
const prudentialLogo = "/insurance-prudential.jpeg";
const ihpLogo = "/insurance-ihp.jpeg";
const mhcLogo = "/insurance-mhc.jpeg";
const allianceLogo = "/insurance-alliance.jpeg";
const adeptLogo = "/insurance-adept.jpeg";
const parkwayLogo = "/insurance-parkway.jpeg";

const insuranceProviders = [
  { name: "Prudential", logo: prudentialLogo },
];

const corporateInsurers = [
  { name: "Aetna", logo: aetnaLogo },
  { name: "Allianz", logo: allianzLogo },
  { name: "Bupa", logo: bupaLogo },
  { name: "Cigna Healthcare", logo: cignaLogo },
  { name: "Magenta Wellness", logo: magentaLogo },
  { name: "IHP Healthcare", logo: ihpLogo },
  { name: "MHC", logo: mhcLogo },
  { name: "Alliance", logo: allianceLogo },
  { name: "Adept Health", logo: adeptLogo },
  { name: "Parkway Shenton", logo: parkwayLogo },
];

const paymentMethods = [
  { method: "Credit / Debit Cards", description: "Visa, Mastercard, AMEX accepted" },
  { method: "NETS / PayNow", description: "Direct bank transfers available" },
  { method: "Cash", description: "Singapore dollars" },
  { method: "MediSave", description: "For eligible procedures" },
];

const Insurance = () => {
  return (
    <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-sky-50 to-background dark:from-sky-950/30 dark:to-background">
          <div className="container mx-auto px-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="text-sky-600 dark:text-sky-400 text-base font-medium tracking-widest uppercase">
                Billing Information
              </span>
              <h1 className="text-5xl md:text-6xl font-serif font-semibold text-foreground mt-3 mb-6">
                Insurance & Payment
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-justify">
                We strive to make specialist gastroenterology care accessible.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Insurance Providers */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-7 w-7 text-sky-600 dark:text-sky-400" />
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
                  Integrated Shield Plans
                </h2>
              </div>
              <p className="text-base text-muted-foreground mb-10 leading-relaxed">
                If you have an ISP with rider coverage, you may be able to claim for consultations, diagnostic procedures, and treatments.
              </p>

              <div className="flex justify-center mb-10">
                {insuranceProviders.map((provider, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-center justify-center"
                  >
                    <Image
                      src={provider.logo} 
                      alt={`${provider.name} logo`}
                      className="max-h-48 max-w-full object-contain"
                      width={1280}
                      height={720}
                    />
                  </motion.div>
                ))}
              </div>

              <div className="bg-sky-50 dark:bg-sky-900/10 rounded-2xl p-8 border border-sky-200 dark:border-sky-800/30">
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Note:</strong> Coverage and claimable amounts vary depending on your 
                  specific policy and rider. We recommend contacting your insurer directly to verify your coverage before 
                  your appointment. Our staff can provide itemised bills and documentation to support your insurance claims.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Corporate Insurance */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="h-7 w-7 text-sky-600 dark:text-sky-400" />
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
                  Corporate Insurance
                </h2>
              </div>
              <p className="text-base text-muted-foreground mb-10 leading-relaxed">
                We work with various corporate medical benefit schemes and employer-sponsored health insurance plans.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
                {corporateInsurers.map((insurer, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-center justify-center"
                  >
                    <Image
                      src={insurer.logo} 
                      alt={`${insurer.name} logo`}
                      className="max-h-36 max-w-full object-contain"
                      width={1280}
                      height={720}
                    />
                  </motion.div>
                ))}
              </div>

              <p className="text-base text-muted-foreground mt-8 leading-relaxed">
                Please check with your HR department or insurer regarding your coverage eligibility and any required 
                pre-authorisation. We can apply for a Letter of Guarantee (LOG) on your behalf from your insurer.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="h-7 w-7 text-sky-600 dark:text-sky-400" />
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
                  Payment Methods
                </h2>
              </div>
              <p className="text-base text-muted-foreground mb-10 leading-relaxed">
                We offer multiple payment options for your convenience. Payment is due at the time of service unless 
                prior arrangements have been made with your insurer.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {paymentMethods.map((payment, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="p-5 bg-background border border-border rounded-xl"
                  >
                    <h4 className="font-semibold text-foreground mb-1">{payment.method}</h4>
                    <p className="text-sm text-muted-foreground">{payment.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* MediSave Section */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
                MediSave
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-loose">
                <p>
                  MediSave can be used for certain approved outpatient procedures and day surgeries. Eligible procedures 
                  include colonoscopy, gastroscopy, and other diagnostic or therapeutic endoscopic procedures.
                </p>
                <p>
                  The amount claimable depends on the specific procedure and is subject to MediSave withdrawal limits 
                  set by the Ministry of Health.
                </p>
              </div>
            </motion.div>
          </div>
        </section>


        {/* Disclaimer */}
        <section className="py-8 bg-muted/50">
          <div className="container mx-auto px-4">
            <p className="text-sm text-muted-foreground text-center max-w-3xl mx-auto">
              The information provided on this page is for general guidance only. Insurance coverage, MediSave 
              eligibility, and claimable amounts are subject to individual policy terms and government regulations. 
              Please verify with your insurer or contact our clinic for specific billing enquiries.
            </p>
          </div>
        </section>
      </main>
  )
}

export default Insurance