"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles, ArrowRight, FileText } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] md:min-h-screen w-full flex items-center justify-center bg-transparent overflow-hidden pt-24 pb-16 px-4 md:px-12 z-10"
    >
      {/* Main Content Box */}
      <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col items-center text-center">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(235,94,40,0.15)] mb-6 hover:border-[var(--color-accent)]/50 transition-colors duration-300 group"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--color-accent)]" />
          </span>
          <span className="text-xs md:text-sm font-medium tracking-wide text-[#FFFCF2]/90 group-hover:text-white transition-colors">
            Available for Projects & Full-time Roles
          </span>
        </motion.div>

        {/* Main Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4 text-[#FFFCF2] leading-tight"
        >
          <span className="bg-gradient-to-r from-[#FFFCF2] via-[#CCC5B9] to-[#FFFCF2] bg-clip-text text-transparent">
            Damalla
          </span>{" "}
          <span className="bg-gradient-to-r from-[#FFFCF2] via-[#F2A65A] to-[var(--color-accent)] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(235,94,40,0.3)]">
            Yathin
          </span>
        </motion.h1>

        {/* Tagline / Roles */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-wide text-[var(--color-secondary)] mb-6 flex flex-wrap items-center justify-center gap-2"
        >
          <span className="text-white font-bold">AI Content Creator</span>
          <span className="text-[var(--color-accent)]">•</span>
          <span className="text-white font-bold">Viral Content Specialist</span>
          <span className="text-[var(--color-accent)]">•</span>
          <span className="text-white font-bold">Short-Form Creative Lead</span>
        </motion.h2>

        {/* Short Mission Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-2xl text-base sm:text-lg text-[#CCC5B9]/80 mb-10 leading-relaxed font-normal"
        >
          Architecting high-velocity AI video pipelines, viral short-form campaigns, and brand storytelling. Combining generative diffusion workflows with motion design to build content that converts.
        </motion.p>

        {/* Metric Badges Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mb-12"
        >
          <div className="flex flex-col items-center p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-lg hover:border-[var(--color-accent)]/40 hover:bg-white/[0.05] transition-all duration-300">
            <span className="text-2xl md:text-3xl font-black text-[#FFFCF2] tracking-tight">30K+</span>
            <span className="text-xs uppercase tracking-widest text-[var(--color-secondary)] mt-1 font-medium">Organic Audience</span>
          </div>

          <div className="flex flex-col items-center p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-lg hover:border-[var(--color-accent)]/40 hover:bg-white/[0.05] transition-all duration-300">
            <span className="text-2xl md:text-3xl font-black text-[#FFFCF2] tracking-tight">Viral Content</span>
            <span className="text-xs uppercase tracking-widest text-[var(--color-secondary)] mt-1 font-medium">Short-Form Specialist</span>
          </div>

          <div className="flex flex-col items-center p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-lg hover:border-[var(--color-accent)]/40 hover:bg-white/[0.05] transition-all duration-300">
            <span className="text-2xl md:text-3xl font-black text-[#FFFCF2] tracking-tight">60+ Videos</span>
            <span className="text-xs uppercase tracking-widest text-[var(--color-secondary)] mt-1 font-medium">Monthly AI Pipeline</span>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          <button
            onClick={() => scrollToSection("videos")}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[var(--color-accent)] text-white font-semibold shadow-[0_0_30px_rgba(235,94,40,0.4)] hover:shadow-[0_0_45px_rgba(235,94,40,0.6)] hover:bg-[#f06935] transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
          >
            <Sparkles size={18} className="transition-transform group-hover:rotate-12 duration-300" />
            <span>Explore Work</span>
            <ArrowDown size={18} className="transition-transform group-hover:translate-y-1 duration-300" />
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/15 text-[#FFFCF2] font-semibold backdrop-blur-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] cursor-pointer"
          >
            <span>Get in Touch</span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1 duration-300 text-[var(--color-accent)]" />
          </button>

          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-6 py-4 rounded-full bg-transparent border border-white/10 text-[var(--color-secondary)] font-medium hover:text-white hover:border-white/20 transition-all duration-300 outline-none"
          >
            <FileText size={18} className="text-[var(--color-accent)]" />
            <span>Resume</span>
          </a>
        </motion.div>

      </div>

      {/* Bottom Scroll Indicator Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#CCC5B9]/60 text-xs tracking-widest uppercase pointer-events-none"
      >
        <span>Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-1 h-5 rounded-full bg-gradient-to-b from-[var(--color-accent)] to-transparent"
        />
      </motion.div>
    </section>
  );
};
