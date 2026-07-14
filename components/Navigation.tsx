"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const acornLogo = "/acorn-logo-transparent.png";

const conditions = [
  // Luminal
  { title: "Bowel Cancer Screening", link: "/bowel-cancer-screening", category: "Luminal" },
  { title: "Acid Reflux & Heartburn", link: "/gerd-heartburn", category: "Luminal" },
  { title: "Epigastric Pain", link: "/epigastric-pain", category: "Luminal" },
  { title: "Constipation", link: "/constipation", category: "Luminal" },
  { title: "Irritable Bowel Syndrome", link: "/ibs", category: "Luminal" },
  { title: "Inflammatory Bowel Disease", link: "/inflammatory-bowel-disease", category: "Luminal" },
  // Liver
  { title: "Fatty Liver Disease", link: "/fatty-liver-disease", category: "Liver" },
  { title: "Liver Cirrhosis", link: "/liver-cirrhosis", category: "Liver" },
  { title: "Jaundice", link: "/jaundice", category: "Liver" },
  { title: "Autoimmune Hepatitis", link: "/autoimmune-hepatitis", category: "Liver" },
  { title: "Viral Hepatitis", link: "/viral-hepatitis", category: "Liver" },
  { title: "Liver Transplantation", link: "/liver-transplantation", category: "Liver" },
  // HBP
  { title: "Pancreatic Cyst", link: "/pancreatic-cyst", category: "HBP" },
  { title: "Chronic Pancreatitis", link: "/chronic-pancreatitis", category: "HBP" },
  { title: "Cancer Screening", link: "/liver-pancreatic-cancer-screening", category: "HBP" },
  { title: "Bile Duct Stones", link: "/bile-duct-stones", category: "HBP" },
];

const procedures = [
  { title: "Gastroscopy (OGD)", link: "/gastroscopy-colonoscopy" },
  { title: "Colonoscopy", link: "/colonoscopy" },
  { title: "ERCP", link: "/ercp" },
  { title: "Endoscopic Ultrasound (EUS)", link: "/eus" },
  { title: "Bravo Capsule", link: "/bravo-capsule" },
  { title: "Video Capsule Endoscopy", link: "/video-capsule-endoscopy" },
  { title: "Fibroscan", link: "/fibroscan" },
  { title: "Liver Biopsy", link: "/liver-biopsy" },
];

const navLinks = [{
  label: "About",
  href: "/#about"
}, {
  label: "Conditions",
  href: "/#conditions",
  hasDropdown: "conditions"
}, {
  label: "Procedures",
  href: "/#procedures",
  hasDropdown: "procedures"
}, {
  label: "Why Choose Us",
  href: "/#why-choose"
}, {
  label: "Insurance",
  href: "/insurance"
}, {
  label: "FAQ",
  href: "/#faq"
}, {
  label: "Blogs",
  href: "/blogs"
}];

export const Navigation = ({
  alwaysWhite = false,
}: {
  alwaysWhite?: boolean;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Check if this is a regular route (not a hash link)
    if (!href.includes('#')) {
      e.preventDefault();
      router.push(href);
      return;
    }
    
    e.preventDefault();
    const hash = href.replace('/', '');
    
    const scrollToElement = () => {
      const element = document.querySelector(hash) as HTMLElement;
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        // Fade out current view
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.15s ease-out';
        
        setTimeout(() => {
          // Instant scroll
          window.scrollTo({
            top: offsetPosition,
            behavior: 'auto'
          });
          
          // Fade in new view
          document.body.style.opacity = '1';
        }, 150);
      }
    };
    
    if (pathname !== '/') {
      router.push('/');
      setTimeout(scrollToElement, 100);
    } else {
      scrollToElement();
    }
  };

  const getDropdownItems = (type: string) => {
    return type === "conditions" ? conditions : procedures;
  };
  
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 overflow-visible transition-all duration-300 ${
        alwaysWhite || isScrolled ? "bg-white shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-2 sm:px-4 overflow-visible">
        <nav className="flex items-center justify-between h-20 min-w-0">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 min-w-0">
            <Image src={acornLogo} alt="acorn gastroenterology logo" width={56} height={56} className="h-14 w-auto" />
            <div className="hidden sm:flex flex-col min-w-0">
              <span
                className={`font-serif text-lg font-semibold transition-colors truncate ${
                  alwaysWhite || isScrolled ? "text-primary" : "text-primary-foreground"
                }`}
              >
                Dr. Prem Thurairajah
              </span>
              <span
                className={`text-xs tracking-wide transition-colors truncate ${
                  alwaysWhite || isScrolled ? "text-muted-foreground" : "text-primary-foreground/70"
                }`}
              >
                MBBS, MRCP (UK), PhD (UK), FRCP (UK)
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              link.hasDropdown ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.hasDropdown)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                      alwaysWhite || isScrolled
                        ? "text-foreground/80 hover:text-primary"
                        : "text-primary-foreground/80 hover:text-primary-foreground"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === link.hasDropdown ? "rotate-180" : ""}`} />
                  </a>
                  
                  {/* Dropdown Menu */}
                  {openDropdown === link.hasDropdown && (
                    <div className="absolute top-full left-0 pt-2 z-[60]">
                      {link.hasDropdown === "conditions" ? (
                        <div className="bg-white border border-border rounded-lg shadow-lg p-4 z-50 grid grid-cols-3 gap-6 min-w-[520px]">
                          <div>
                            <div className="pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider border-b border-border mb-2">Luminal</div>
                            {conditions.filter(c => c.category === "Luminal").map((item) => (
                              <Link key={item.link} href={item.link} className="block px-2 py-1.5 text-sm text-foreground/80 hover:bg-muted hover:text-primary transition-colors rounded">
                                {item.title}
                              </Link>
                            ))}
                          </div>
                          <div>
                            <div className="pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider border-b border-border mb-2">Liver</div>
                            {conditions.filter(c => c.category === "Liver").map((item) => (
                              <Link key={item.link} href={item.link} className="block px-2 py-1.5 text-sm text-foreground/80 hover:bg-muted hover:text-primary transition-colors rounded">
                                {item.title}
                              </Link>
                            ))}
                          </div>
                          <div>
                            <div className="pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider border-b border-border mb-2">Biliary & Pancreatic</div>
                            {conditions.filter(c => c.category === "HBP").map((item) => (
                              <Link key={item.link} href={item.link} className="block px-2 py-1.5 text-sm text-foreground/80 hover:bg-muted hover:text-primary transition-colors rounded">
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="bg-white border border-border rounded-lg shadow-lg py-2 min-w-[280px] z-50">
                          {getDropdownItems(link.hasDropdown).map((item) => (
                            <Link key={item.link} href={item.link} className="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-primary transition-colors">
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium transition-colors ${
                    alwaysWhite || isScrolled
                      ? "text-foreground/80 hover:text-primary"
                      : "text-primary-foreground/80 hover:text-primary-foreground"
                  }`}
                >
                  {link.label}
                </a>
              )
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            
            <a
              href="tel:+6565179231"
              className={`transition-colors ${
                alwaysWhite || isScrolled
                  ? "text-muted-foreground hover:text-primary"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              <Phone className="h-5 w-5" />
            </a>
            <a
              href="mailto:enquiried@drpremgastro.sg"
              className={`transition-colors ${
                alwaysWhite || isScrolled
                  ? "text-muted-foreground hover:text-primary"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              <Mail className="h-5 w-5" />
            </a>
            <Button variant="default" size="default" asChild>
              <Link href="/book-appointment">Book Appointment</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${
              alwaysWhite || isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-border pb-6"
          >
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map(link => (
                link.hasDropdown ? (
                  <div key={link.href}>
                    <button
                      onClick={() => setMobileOpenDropdown(mobileOpenDropdown === link.hasDropdown ? null : link.hasDropdown)}
                      className="flex items-center justify-between w-full text-base font-medium text-foreground/80 hover:text-primary transition-colors px-2"
                    >
                      {link.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${mobileOpenDropdown === link.hasDropdown ? "rotate-180" : ""}`} />
                    </button>
                    {mobileOpenDropdown === link.hasDropdown && (
                      <div className="mt-2 ml-4 flex flex-col gap-1">
                        {link.hasDropdown === "conditions" ? (
                          <>
                            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 pt-2">Luminal</div>
                            {conditions.filter(c => c.category === "Luminal").map((item) => (
                              <Link key={item.link} href={item.link} onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-foreground/70 hover:text-primary transition-colors px-2 py-1">
                                {item.title}
                              </Link>
                            ))}
                            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 pt-2">Liver</div>
                            {conditions.filter(c => c.category === "Liver").map((item) => (
                              <Link key={item.link} href={item.link} onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-foreground/70 hover:text-primary transition-colors px-2 py-1">
                                {item.title}
                              </Link>
                            ))}
                            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 pt-2">Biliary & Pancreatic</div>
                            {conditions.filter(c => c.category === "HBP").map((item) => (
                              <Link key={item.link} href={item.link} onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-foreground/70 hover:text-primary transition-colors px-2 py-1">
                                {item.title}
                              </Link>
                            ))}
                          </>
                        ) : (
                          getDropdownItems(link.hasDropdown).map((item) => (
                            <Link key={item.link} href={item.link} onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-foreground/70 hover:text-primary transition-colors px-2 py-1">
                              {item.title}
                            </Link>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      handleNavClick(e, link.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-base font-medium text-foreground/80 hover:text-primary transition-colors px-2"
                  >
                    {link.label}
                  </a>
                )
              ))}
              <div className="flex items-center gap-4 pt-4 px-2">
                <Button variant="default" size="lg" className="flex-1" asChild>
                  <Link href="/book-appointment" onClick={() => setIsMobileMenuOpen(false)}>Book Appointment</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};
