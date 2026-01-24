import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import BileDuctStones from "@/components/page/bile-duct-stones";



export const metadata: Metadata = {
  title:
    "Bile Duct Stones (Choledocholithiasis) | Dr. Prem Thurairajah - Gastroenterologist Singapore",
  description:
    "Expert diagnosis and treatment of bile duct stones in Singapore. ERCP stone removal and comprehensive biliary care by Dr. Prem Thurairajah.",
  keywords: [
    "bile duct stones",
    "choledocholithiasis",
    "ERCP",
    "stone removal",
    "biliary obstruction",
    "jaundice",
    "Singapore gastroenterologist",
  ],
  alternates: {
    canonical: "https://drpremgastro.com/bile-duct-stones",
  },
};


const BileDuctStonesPage = () => {
  return (
    <>
      <Navigation alwaysWhite/>

      <BileDuctStones/>

      <Footer />
    </>
  );
};

export default BileDuctStonesPage;
