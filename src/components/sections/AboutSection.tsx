"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-40 bg-waabi-bg relative overflow-hidden">
      {/* Decorative blurred blobs for Waabi aesthetic */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-waabi-green/30 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="label-upper text-waabi-green-dark block mb-6"
        >
          Our Story
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="heading-xl font-serif text-dark mb-16 md:mb-24 max-w-4xl leading-[1.1]"
        >
          A sanctuary for global travelers, built on <span className="text-waabi-green-dark">community</span>, culture & comfort.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 waabi-card relative h-[400px] md:h-[600px]"
          >
            <Image
              src="/images/bp_community.png"
              alt="Community at Calcutta Backpackers"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="md:col-span-5 md:pl-10 flex flex-col justify-center"
          >
            <div className="glass-panel p-8 md:p-10 bg-white/40">
              <p className="text-dark/80 text-lg leading-relaxed mb-6">
                Founded in 2018, Calcutta Backpackers has evolved into Kolkata&apos;s
                most celebrated hostel. We are a nexus where global travelers converge
                to discover the authentic soul of the city.
              </p>
              <p className="text-dark/80 text-lg leading-relaxed mb-10">
                From our sunlit, aesthetic common areas to our curated WanderXP cultural
                experiences, every element here is meticulously designed to foster connection.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/the-nest" className="btn-primary">
                  Explore The Nest
                </Link>
                <Link href="/wanderxp" className="btn-outline">
                  WanderXP Tours
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
