/* eslint-disable @next/next/no-html-link-for-pages */
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";
import Image from "next/image";

const acornLogo = "/acorn-logo-transparent.png";
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="https://acorngastro.com.sg" target="_blank" rel="noopener noreferrer">
              <Image
                src={acornLogo}
                alt="Acorn Gastroenterology"
                width={64}
                height={64}
                className="h-16 w-auto mb-4 hover:opacity-80 transition-opacity"
              />
            </a>
            <h3 className="font-serif text-2xl font-semibold mb-4 text-background">
              Dr. Prem Thurairajah
            </h3>
            <p className="text-background/70 leading-relaxed mb-6 max-w-md">
              Providing expert medical care with a patient-centred approach. 
              Located at Mount Elizabeth Orchard, serving patients across Singapore.
            </p>
            <div className="flex gap-4">
              <a
                href="tel:+6565179231"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href="mailto:enquiries@drpremgastro.sg"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://maps.google.com/?q=Mount+Elizabeth+Orchard+Singapore"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <MapPin className="h-4 w-4" />
              </a>
              <a
                href="/admin"
                className="text-sm text-background/70 hover:text-background transition-colors"
              >
                Sign In
              </a>
              <a
                href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
              <a href="/#about" className="text-background/70 hover:text-background transition-colors">
                  About Dr. Prem
                </a>
              </li>
              <li>
                <a href="/#conditions" className="text-background/70 hover:text-background transition-colors">
                  Conditions Treated
                </a>
              </li>
              <li>
                <a href="/#procedures" className="text-background/70 hover:text-background transition-colors">
                  Procedures & Services
                </a>
              </li>
              <li>
                <a href="/#faq" className="text-background/70 hover:text-background transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-background/70 hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Clinic Hours */}
          <div>
            <h4 className="font-semibold mb-4">Clinic Hours</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li className="flex justify-between">
                <span>Monday – Friday</span>
                <span>9am – 5pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9am – 1pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between gap-4 text-sm text-background/60">
            <p>© {currentYear} Dr. Prem Thurairajah. All rights reserved.</p>
            <p className="max-w-2xl">
              <strong>Disclaimer:</strong> The information on this website is for educational 
              purposes only and is not a substitute for professional medical advice, diagnosis, 
              or treatment. Always seek the advice of your physician or qualified health provider.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
