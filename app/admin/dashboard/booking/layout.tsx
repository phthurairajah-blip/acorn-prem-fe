import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Bookings",
};

const BookingLayout = ({ children }: { children: ReactNode }) => children;

export default BookingLayout;
