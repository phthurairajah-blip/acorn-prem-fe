import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { BookAppointmentComponent } from "@/components/page/book-appointment";

export const metadata: Metadata = {
  title: "Request an Appointment | Dr. Prem Thurairajah - Gastroenterologist Singapore",
  description:
    "Request an appointment with Dr. Prem Thurairajah, Senior Consultant Gastroenterologist in Singapore. Easy online scheduling for consultations at Mount Elizabeth or Farrer Park Hospital.",
  keywords: [
    "request appointment",
    "gastroenterologist Singapore",
    "consultation",
    "Mount Elizabeth Hospital",
    "Farrer Park Hospital",
  ],
  alternates: {
    canonical: "https://drpremgastro.sg/book-appointment",
  },
};


const BookAppointment = () => {

  return (
    <>
      <Navigation alwaysWhite/>

      <BookAppointmentComponent/>

      <Footer />
    </>
  );
};

export default BookAppointment;
