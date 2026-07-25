import { Metadata } from "next";
import TheSocialClient from "./TheSocialClient";

export const metadata: Metadata = {
  title: "The Social | Community & Events at Calcutta Backpackers",
  description: "Join the vibrant traveler community at Calcutta Backpackers. Rooftop gigs, game nights, and meaningful connections in Kolkata.",
};

export default function TheSocialPage() {
  return <TheSocialClient />;
}
