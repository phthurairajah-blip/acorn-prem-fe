import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Booking Details",
};

const BookingDetailsLayout = ({ children }: { children: ReactNode }) => children;

export default BookingDetailsLayout;
