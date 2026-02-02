'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Award, GraduationCap, Stethoscope, Globe, FileText, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const drPremAbout = "/dr-prem-about.jpg";
const publications = [
// FIRST AUTHOR (chronological - newest first)
{
  title: "Late acute liver allograft rejection; a study of its natural history and graft survival in the current era",
  journal: "Transplantation",
  year: "2013",
  authors: "Thurairajah PH, Carbone M, Bridgestock H, Thomas P, Hebbar S, Gunson BK, Shah T, Neuberger J"
}, {
  title: "Loss of virus-specific T cell responses in HCV exposed uninfected injection drug users with drug rehabilitation",
  journal: "J Infect Dis",
  year: "2011",
  authors: "Thurairajah PH, Hegazy D, Demaine A, et al."
}, {
  title: "Add-on combination therapy with adefovir dipivoxil induces renal impairment in patients with lamivudine-refractory hepatitis B virus",
  journal: "J Viral Hepatitis",
  year: "2010",
  authors: "Thurairajah PH, Khanna A, Mutimer D"
}, {
  title: "HCV-specific T cell responses in injection drug users with apparent resistance to HCV infection",
  journal: "J Infect Dis",
  year: "2008",
  authors: "Thurairajah PH, Hegazy D, Chokshi S, et al."
}, {
  title: "Incidence and characterization of elevations in serum transaminases in pegylated interferon and ribavirin treated patients",
  journal: "Aliment Pharmacol Ther",
  year: "2007",
  authors: "Thurairajah PH, Thorburn D, Hubscher S, et al."
}, {
  title: "Orlistat (Xenical) induced liver failure",
  journal: "Eur J Gastroenterol Hepatol",
  year: "2005",
  authors: "Thurairajah PH, Syn W, O'Neil D, Stell D, Haydon G"
}, {
  title: "Endoscopic closure of a non healing gastrocutaneous fistula following PEG removal",
  journal: "Endoscopy",
  year: "2004",
  authors: "Thurairajah PH, Hawthorne AB"
}, {
  title: "A Painful Swollen Calf",
  journal: "J R Soc Med",
  year: "2003",
  authors: "Thurairajah PH, Browne S, Bondeson J"
},
// SECOND AUTHOR (chronological - newest first)
{
  title: "What is required for achieving hepatitis C virus elimination in Singapore? A modeling study",
  journal: "J Gastroenterol Hepatol",
  year: "2021",
  authors: "Chaillon A, Thurairajah PH, Hsiang JC, Martin NK"
}, {
  title: "Efficacy and safety of sofosbuvir/velpatasvir in a real-world chronic hepatitis C genotype 3 cohort",
  journal: "J Gastroenterol Hepatol",
  year: "2021",
  authors: "Wong YJ, Thurairajah PH, Kumar R, Tan J, Fock KM, Law NM, et al."
}, {
  title: "The impact of unrestricted access to direct-acting antiviral among incarcerated hepatitis C virus-infected patients",
  journal: "Clin Mol Hepatol",
  year: "2021",
  authors: "Wong YJ, Thurairajah PH, Kumar R, Fock KM, Law NM, Chong SY, et al."
}, {
  title: "Novel non-invasive score to predict cirrhosis in the era of hepatitis C elimination: A population study of ex-substance users in Singapore",
  journal: "Hepatobiliary Pancreat Dis Int",
  year: "2019",
  authors: "Zhao Y, Thurairajah PH, Kumar R, Tan J, Teo EK, Hsiang JC"
}, {
  title: "Interleukin 12B gene polymorphism and apparent resistance to hepatitis C virus infection",
  journal: "Clin Exp Immunol",
  year: "2008",
  authors: "Hegazy D, Thurairajah PH, Metzner M, et al."
}, {
  title: "Autochthonous hepatitis E in southwest England",
  journal: "J Viral Hepatitis",
  year: "2007",
  authors: "Dalton HR, Thurairajah PH, Fellows HJ, et al."
},
// LAST AUTHOR (chronological - newest first)
{
  title: "Clinical implications of prompt ascitic drain removal among cirrhosis with refractory ascites",
  journal: "Singapore Med J",
  year: "2021",
  authors: "Wong YJ, Lum HM, Tan PT, Teo EK, Tan J, Kumar R, Thurairajah PH"
}, {
  title: "Point-of-care hepatitis C screening with direct access referral to improve linkage of care among people with substance misuse: a pilot randomised study",
  journal: "Singapore Medical Journal",
  year: "2020",
  authors: "Hsiang JC, Sinnaswami P, Lee MY, Zhang MM, Quek KE, Tan KH, Wong YM, Thurairajah PH"
}, {
  title: "Economic evaluation of direct-acting antivirals for the treatment of genotype 3 hepatitis C infection in Singapore",
  journal: "JGH Open",
  year: "2019",
  authors: "Wong YJ, Cheen MH, Hsiang JC, Kumar R, Tan J, Teo EK, Thurairajah PH"
}, {
  title: "Ombitasvir/paritaprevir/ritonavir+daclatasvir and ribavirin associated drug induced liver injury and syndrome of inappropriate secretion of antidiuretic syndrome: A case report",
  journal: "Clin Mol Hepatol",
  year: "2019",
  authors: "Kumar R, Hsiang JC, Tan J, Thurairajah PH"
}, {
  title: "Comparative study of strategies for preventing post-ERCP pancreatitis after early precut sphincterotomy for biliary access",
  journal: "J Dig Dis",
  year: "2016",
  authors: "Ang TL, Kwek AB, Song M, Li JW, Thurairajah PH"
},
// REMAINING (middle author or et al., chronological - newest first)
{
  title: "Efficacy and safety of sofosbuvir/velpatasvir with or without ribavirin in hepatitis C genotype 3 compensated cirrhosis: A meta-analysis",
  journal: "World Journal of Hepatology",
  year: "2022",
  authors: "Loo JH, Xu WXF, Low JT, Tay WX, Ang LS, Tam YS, Thurairajah PH, Kumar R, Wong YJ"
}, {
  title: "Comparable Outcomes in Early Hepatocellular Carcinomas Treated with Trans-arterial Chemoembolization and Radiofrequency Ablation",
  journal: "Biomedicines",
  year: "2022",
  authors: "Tay BWR, Huang DQ, Muthiah M, et al."
}, {
  title: "Hepatitis C elimination among people incarcerated in prisons: challenges and recommendations for action within a health system framework",
  journal: "Lancet Gastroenterol Hepatol",
  year: "2021",
  authors: "Akiyama MJ, Kronfli N, Cabezas J, Sheehan Y, Thurairajah PH, Lines R, Lloyd AR; INHSU–Prisons Network"
}, {
  title: "Novel albumin, bilirubin and platelet criteria for the exclusion of high-risk varices in compensated advanced chronic liver disease: A validation study",
  journal: "Clin Res Hepatol Gastroenterol",
  year: "2021",
  authors: "Wong YJ, Kew GS, Tan PS, Chen Z, Putera M, Yip WA, Thurairajah PH, et al."
}, {
  title: "The difference in histology yield between 19G EUS-FNA and EUS-fine-needle biopsy needles",
  journal: "Endosc Ultrasound",
  year: "2019",
  authors: "Ang TL, Li JW, Kwek ABE, Thurairajah PH, Wang LM"
}, {
  title: "Alcohol-Related Liver Disease Is Rarely Detected at Early Stages Compared with Liver Disease of Other Etiologies Worldwide",
  journal: "Clin Gastroenterol Hepatol",
  year: "2019",
  authors: "Shah ND, Ventura-Cots M, Abraldes JG, et al."
}, {
  title: "VIEKIRA PAK associated drug-induced interstitial lung disease: Case series with systematic review of literature",
  journal: "Clin Mol Hepatol",
  year: "2019",
  authors: "Wong YJ, Chew SY, Hsiang JC, Thurairajah PH, Kumar R, Teo EK, Gokhale RS, Noor IBM, Tan J"
}, {
  title: "TC-325 versus the conventional combinational combined technique for endoscopic treatment of peptic ulcers with high-risk bleeding stigmata: A randomized pilot study",
  journal: "J Dig Dis",
  year: "2017",
  authors: "Kwek BEA, Ang TL, Ong PLJ, Tan YLJ, Ang SWD, Law NM, Thurairajah PH, Fock KM"
}, {
  title: "Is narrow band imaging superior to high-definition white light endoscopy in the assessment of diminutive colorectal polyps?",
  journal: "J Gastroenterol Hepatol",
  year: "2013",
  authors: "Singh R, Bhat YM, Thurairajah PH, Shetti MP, Jayanna M, Nind G, Tam W, Walmsey R, Bourke M, Moss A, Chen R, Bampton P, Roberts-Thomson I, Schoeman M, Tucker G"
}, {
  title: "Cytokine profiles in high risk injection drug users suggests innate as opposed to adaptive immunity in apparent resistance to hepatitis C virus infection",
  journal: "J Viral Hepatitis",
  year: "2012",
  authors: "Warshow UM, Riva A, Hegazy D, Thurairajah PH, Kaminski ER, Chokshi S, Cramp ME"
}, {
  title: "Role of narrow band imaging in Barrett's Oesophagus",
  journal: "Digestive Endoscopy",
  year: "2011",
  authors: "Singh R, Nordeen N, Shanmuganathan G, Thurairajah PH, Bhat YM"
}, {
  title: "Autochthonous hepatitis E in Southwest England: natural history, complications and seasonal variation, and hepatitis E virus IgG seroprevalence in blood donors, the elderly and patients with chronic liver disease",
  journal: "Eur J Gastroenterol Hepatol",
  year: "2008",
  authors: "Dalton HR, Stableforth W, Thurairajah PH, et al."
}, {
  title: "Autochthonous hepatitis E in Southwest England: a comparison with hepatitis A",
  journal: "Eur J Clin Microbiol Infect Dis",
  year: "2008",
  authors: "Dalton HR, Stableforth W, Hazeldine S, Thurairajah PH, et al."
}, {
  title: "Serological response to hepatitis E virus genotype 3 infection: IgG quantitation, avidity, and IgM Response",
  journal: "J Med Virol",
  year: "2008",
  authors: "Bendall R, Ellis V, Ijaz S, Thurairajah PH, Dalton HR"
}, {
  title: "The role of hepatitis E virus testing in drug-induced liver injury",
  journal: "Aliment Pharmacol Ther",
  year: "2007",
  authors: "Dalton HR, Fellows HJ, Stableforth W, Joseph M, Thurairajah PH, et al."
}];
const credentials = [{
  icon: GraduationCap,
  title: "Education & Qualifications",
  items: ["MBBS – Manipal Academy of Higher Education (1998)", "MRCP (UK) – Member of the Royal College of Physicians (2002)", "PhD in Chronic Hepatitis C – University of Plymouth, UK (2010)", "FRCP (UK) – Fellow of the Royal College of Physicians (2022)"]
}, {
  icon: Stethoscope,
  title: "Specialist Training",
  items: ["Gastroenterology & Hepatology – West Midlands Deanery, Birmingham, UK", "Transplant Hepatology – Queen Elizabeth Hospital, Birmingham", "Advanced Hepatobiliary Endoscopy (ERCP & EUS) – University College London", "Certificate of Completion of Specialist Training (CCST), UK – 2011"]
}, {
  icon: Globe,
  title: "Career Highlights",
  items: ["Consultant Transplant Hepatologist – St James's Hospital, Leeds (UK)", "Assistant Professor of Medicine – University of Kentucky (USA)", "Director of Hepatology – Changi General Hospital (Singapore)", "Senior Consultant – National University Hospital (Singapore)"]
}, {
  icon: Award,
  title: "Awards & Professional Recognition",
  items: ["Best Publication Award (2020) – Singapore Medical Association", "Best Oral Presentation in Viral Hepatitis – British Association for the Study of the Liver", "Member – National Hepatitis C Elimination Steering Committee, Singapore"]
}];
export const About = () => {
  const [showAllPublications, setShowAllPublications] = useState(false);
  return <section id="about" className="py-20 lg:py-28 section-gradient">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7
        }} className="relative lg:sticky lg:top-28">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-medium">
              <Image
                src={drPremAbout}
                alt="Dr. Prem Thurairajah"
                width={800}
                height={1000}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7,
          delay: 0.2
        }}>
            <span className="text-accent text-sm font-medium tracking-widest uppercase">
              About Dr. Prem
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold text-foreground mt-3 mb-6 whitespace-nowrap">
              About Dr. Prem Thurairajah
            </h2>

            {/* Key Achievements Summary */}
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p className="text-justify">
                Dr. Prem Thurairajah is a Senior Consultant Gastroenterologist and Hepatologist with{" "}
                <strong className="text-foreground">over 25 years of international clinical and academic experience</strong> across the United Kingdom, United States, and Singapore.
              </p>
              <p className="text-justify">
                He trained in Internal Medicine and Gastroenterology through the West Midlands Deanery in Birmingham, UK, and completed advanced subspecialty fellowships in Transplant Hepatology and Hepatobiliary Endoscopy. He holds a{" "}
                <strong className="text-foreground">double fellowship</strong> from the Queen Elizabeth Hospital Liver Unit, Birmingham, and University College London (UCL), specialising in complex liver disease and therapeutic advanced endoscopic procedures in cancer detection, ERCP and EUS.
              </p>
              <p className="text-justify">
                Dr. Prem has served as a <strong className="text-foreground">Consultant Transplant Hepatologist</strong> at St James&apos;s University Hospital, Leeds, and later as an{" "}
                <strong className="text-foreground">Assistant Professor</strong> at the University of Kentucky, USA, where he managed patients with advanced liver disease and contributed to academic teaching and research.
              </p>
              <p className="text-justify">
                In addition to clinical practice, Dr. Prem completed a{" "}
                <strong className="text-foreground">PhD in Immunology and Chronic Viral Hepatitis</strong> at the University of Plymouth, supported by a UK National Health Service research grant. His work in community-based Hepatitis C care has influenced public health practice and earned the{" "}
                <strong className="text-foreground">Best Publication Award</strong> from the Singapore Medical Association. He has published{" "}
                <strong className="text-foreground">over 30 peer-reviewed scientific papers</strong> in hepatology and gastroenterology.
              </p>
              <p className="text-justify">
                Dr. Prem continues to contribute to national public health strategy as a member of Singapore&apos;s{" "}
                <strong className="text-foreground">National Hepatitis C Elimination Steering Committee</strong>.
              </p>
              <p className="text-justify">
                In Singapore, he previously served as <strong className="text-foreground">Director of Hepatology</strong> at Changi General Hospital and as a Senior Consultant at the National University Hospital (NUH). He was core faculty within both the SingHealth and NUHS residency programmes, training senior residents and fellows in gastroenterology and hepatology.
              </p>
              <p className="text-justify">
                His clinical practice today focuses on <strong className="text-foreground">evidence-based, patient-centred care</strong>, combining advanced diagnostics, modern endoscopy, and thoughtful long-term management of digestive and liver diseases.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="space-y-6">
              {credentials.map((section, index) => <motion.div key={section.title} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: 0.1 * index
            }} className="bg-card/50 rounded-2xl p-6 md:p-8 border border-border/50">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <section.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground">{section.title}</h3>
                  </div>
                  <ul className="space-y-3 text-base text-muted-foreground">
                    {section.items.map((item, i) => <li key={i} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>)}
                  </ul>

                  {/* Publications under Awards & Recognition */}
                  {section.title === "Awards & Professional Recognition" && <div className="mt-6 pt-6 border-t border-border/50">
                      <div className="flex items-center gap-3 mb-4">
                        <FileText className="w-5 h-5 text-primary" />
                        <h4 className="text-lg md:text-xl font-semibold text-foreground">Selected Publications</h4>
                      </div>
                      <ul className="space-y-3 text-base text-muted-foreground">
                        {(showAllPublications ? publications : publications.slice(0, 5)).map((pub, i) => <li key={i} className="flex items-start gap-3">
                            <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <div>
                              <span className="text-foreground">{pub.title}</span>
                              <span className="block text-sm mt-0.5">
                                <span dangerouslySetInnerHTML={{
                          __html: pub.authors.replace(/Thurairajah PH/g, '<span class="underline">Thurairajah PH</span>')
                        }} /> • <span className="text-primary font-medium">{pub.journal}</span> • {pub.year}
                              </span>
                            </div>
                          </li>)}
                      </ul>
                      <button type="button" aria-expanded={showAllPublications} onClick={e => {
                  e.preventDefault();
                  e.stopPropagation();

                  // Prevent the page from "jumping" (which can feel like navigation)
                  // when the publications list collapses/expands.
                  const btn = e.currentTarget;
                  const beforeTop = btn.getBoundingClientRect().top;
                  setShowAllPublications(prev => !prev);
                  requestAnimationFrame(() => {
                    const afterTop = btn.getBoundingClientRect().top;
                    window.scrollBy({
                      top: afterTop - beforeTop,
                      left: 0,
                      behavior: "auto"
                    });
                  });
                }} className="inline-flex items-center gap-2 mt-4 text-base text-primary hover:underline">
                        <span>{showAllPublications ? "Show less" : "View full list"}</span>
                        {showAllPublications ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>}
                </motion.div>)}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="default" size="lg" asChild>
                <Link href="/book-appointment">Schedule Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#procedures">View Expertise</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
