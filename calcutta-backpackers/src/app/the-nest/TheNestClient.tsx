"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Star, Users, Award, Wifi, Wind, Lock, Tv, UtensilsCrossed, WashingMachine } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const rooms = [
  {
    id: "social-dorms",
    name: "The Social Dorms",
    tagline: "Social. Secure. Smart.",
    description: "Premium capsule-style bunks with privacy curtains, personal reading lights, and secure lockers. Built for community and comfort.",
    price: "₹499",
    image: "/images/Dorm1.webp",
    features: ["Air Conditioned", "Privacy Curtains", "Personal Lockers", "Free WiFi", "Reading Lights", "Charging Ports"],
    capacity: "8 Bed Mixed Dorm",
  },
  {
    id: "private-ensuite",
    name: "Private Ensuite",
    tagline: "Your Personal Retreat.",
    description: "A gorgeous private sanctuary featuring a king-size bed, en-suite bathroom, and dedicated workspace with plenty of natural light.",
    price: "₹1,999",
    image: "/images/private room.webp",
    features: ["En-suite Bathroom", "King Size Bed", "Work Desk", "City View", "Air Conditioned", "Free WiFi"],
    capacity: "2 Guests",
  },
  {
    id: "bunk-beds",
    name: "Bunk Beds",
    tagline: "Budget Friendly. Community Driven.",
    description: "Comfortable bunk beds in a shared space perfect for budget travelers looking to connect with fellow adventurers.",
    price: "₹399",
    image: "/images/Dorm1.webp",
    features: ["Air Conditioned", "Shared Bathroom", "Personal Lockers", "Free WiFi"],
    capacity: "6 Bed Dorm",
  },
  {
    id: "deluxe-apartment",
    name: "Deluxe Apartment",
    tagline: "Home Away From Home.",
    description: "Fully furnished apartment with kitchen, living area, and premium amenities. Perfect for extended stays and families.",
    price: "₹3,499",
    image: "/images/private1.webp",
    features: ["Full Kitchen", "Living Room", "Washing Machine", "Smart TV", "Air Conditioned", "Free WiFi"],
    capacity: "4 Guests",
  },
];

const stats = [
  { value: "15,000+", label: "Happy Guests", icon: Users },
  { value: "4.9/5", label: "Google Rating", icon: Star },
  { value: "15+", label: "Awards Won", icon: Award },
];

export default function TheNestPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] bg-dark overflow-hidden">
        <Image
          src="/images/bp_community.png"
          alt="The Nest - Calcutta Backpackers"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
        <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col justify-end pb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="label-upper text-waabi-green block mb-4"
          >
            The Nest
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-serif font-medium text-white mb-6 max-w-3xl"
          >
            Your cozy spot in the <span className="text-waabi-green italic">city.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/70 text-lg max-w-xl"
          >
            Reserve dorm beds, private rooms, or furnished apartments. Your adventure starts with the perfect stay.
          </motion.p>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-waabi-green py-8 md:py-12">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex items-center gap-4 text-center md:text-left"
            >
              <stat.icon size={28} className="text-dark/60" />
              <div>
                <div className="text-3xl font-serif font-bold text-dark">{stat.value}</div>
                <p className="text-dark/60 text-sm font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Rooms */}
      <section className="py-24 md:py-32 bg-waabi-bg">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="heading-xl font-serif text-dark mb-16 md:mb-20 text-center"
          >
            Choose your <span className="text-waabi-green-dark italic">stay.</span>
          </motion.h2>

          <div className="space-y-12">
            {rooms.map((room, i) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="waabi-card bg-white p-4 md:p-6"
              >
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${i % 2 === 1 ? 'md:direction-rtl' : ''}`}>
                  <div className={`relative h-[300px] md:h-[450px] rounded-2xl overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-dark/70 backdrop-blur-md text-white text-xs font-bold rounded-full">
                      {room.capacity}
                    </div>
                  </div>

                  <div className={`flex flex-col justify-center py-4 md:py-8 ${i % 2 === 1 ? 'md:order-1 md:pr-8' : 'md:pl-4'}`}>
                    <span className="inline-block px-4 py-1.5 bg-waabi-green/30 text-waabi-green-dark text-xs font-bold uppercase tracking-widest rounded-full w-fit mb-6">
                      {room.tagline}
                    </span>
                    <h3 className="heading-lg font-serif mb-4 text-dark">{room.name}</h3>
                    <p className="text-dark/70 leading-relaxed text-lg mb-8">{room.description}</p>

                    <div className="grid grid-cols-2 gap-3 mb-10">
                      {room.features.map((f) => (
                        <div key={f} className="flex items-center gap-3 text-sm text-dark/80 font-medium">
                          <div className="w-6 h-6 rounded-full bg-waabi-green flex items-center justify-center flex-shrink-0">
                            <Check size={14} className="text-dark" />
                          </div>
                          {f}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-6 pt-8 border-t border-dark/10">
                      <div>
                        <span className="text-sm text-dark/50 font-medium block">Starting from</span>
                        <span className="text-3xl font-serif font-bold text-dark">{room.price}<span className="text-base font-sans font-normal text-dark/50">/night</span></span>
                      </div>
                      <Link
                        href={`/booking?room=${room.id}`}
                        className="btn-primary sm:ml-auto w-full sm:w-auto shadow-lg"
                      >
                        Book This Room <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg font-serif text-dark mb-12 text-center"
          >
            Our <span className="text-waabi-green-dark italic">Spots</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 bg-waabi-bg/50"
            >
              <h3 className="font-serif text-2xl text-dark mb-2">Main — Calcutta Backpackers</h3>
              <p className="text-dark/60 leading-relaxed">6/27a, Pashupati Bhattacharya Road, Kolkata 700034</p>
              <p className="text-dark/50 text-sm mt-4">Near Sudder Street • Park Street Metro • 10 min from New Market</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel p-8 bg-waabi-bg/50"
            >
              <h3 className="font-serif text-2xl text-dark mb-2">The Studio</h3>
              <p className="text-dark/60 leading-relaxed">Location details coming soon</p>
              <p className="text-dark/50 text-sm mt-4">Our newest space for extended stays and creative retreats</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

