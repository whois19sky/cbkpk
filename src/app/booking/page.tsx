import { Suspense } from "react";
import { Metadata } from "next";
import BookingForm from "./BookingForm";

export const metadata: Metadata = {
  title: "Book Your Stay | Calcutta Backpackers",
  description: "Reserve your dorm or private room at Calcutta Backpackers. Best rates guaranteed when you book directly with us.",
};

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-waabi-green border-t-dark rounded-full animate-spin"></div></div>}>
      <BookingForm />
    </Suspense>
  );
}
