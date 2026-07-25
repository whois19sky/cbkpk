import { Metadata } from "next";
import WanderXPClient from "./WanderXPClient";

export const metadata: Metadata = {
  title: "WanderXP Tours | Curated Local Adventures in Kolkata",
  description: "Discover the hidden gems of Kolkata with WanderXP. From street food crawls to heritage walks, experience the real City of Joy.",
};

export default function WanderXPPage() {
  return <WanderXPClient />;
}

