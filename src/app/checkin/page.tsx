import { Suspense } from "react";
import { Metadata } from "next";
import CheckinForm from "./CheckinForm";

export const metadata: Metadata = {
  title: "Check-in | Calcutta Backpackers",
  description: "Complete your online check-in securely before arriving at Calcutta Backpackers.",
};

export default function CheckinPage() {
  return (
    <Suspense fallback={<div className="h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-waabi-green border-t-dark rounded-full animate-spin"></div></div>}>
      <CheckinForm />
    </Suspense>
  );
}
