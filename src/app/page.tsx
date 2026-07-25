import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import AboutSection from "@/components/sections/AboutSection";
import RoomsShowcase from "@/components/sections/RoomsShowcase";
import ExperienceCarousel from "@/components/sections/ExperienceCarousel";
import StatsCounter from "@/components/sections/StatsCounter";
import Testimonials from "@/components/sections/Testimonials";
import GalleryGrid from "@/components/sections/GalleryGrid";
import KolkataGuide from "@/components/sections/KolkataGuide";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calcutta Backpackers | Best Backpacker Hostel in Kolkata",
  description: "Experience the ultimate stay in Kolkata with premium dorms, private rooms, and curated city tours at Calcutta Backpackers.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MarqueeStrip />
      <AboutSection />
      <RoomsShowcase />
      <ExperienceCarousel />
      <StatsCounter />
      <Testimonials />
      <GalleryGrid />
      <KolkataGuide />
      <ContactSection />
      <Footer />
    </>
  );
}
