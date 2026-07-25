import { Metadata } from "next";
import TheNestClient from "./TheNestClient";

export const metadata: Metadata = {
  title: "The Nest | Rooms & Accommodation at Calcutta Backpackers",
  description: "Cozy, secure, and aesthetic dorms and private rooms at Calcutta Backpackers. Find your perfect stay in Kolkata.",
};

export default function TheNestPage() {
  return <TheNestClient />;
}

