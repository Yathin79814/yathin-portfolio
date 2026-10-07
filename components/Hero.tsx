"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Play, CheckCircle2 } from "lucide-react";
import Image from "next/image";

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
      className="relative min-h-screen w-full flex items-center justify-center bg-transparent overflow-hidden pt-28 pb-12 px-4 sm:px-6 lg:px-12 z-10"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[var(--color-accent)]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#6228d7]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Content Column */}
        <div className="lg:col-span-6 flex flex-col items-start text-left pt-4">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md mb-6 hover:border-[var(--color-accent)]/40 transition-colors"
          >
            <Sparkles size={14} className="text-[var(--color-accent)]" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-white/90">
              AI Content Creator & Short-Form Specialist
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#FFFCF2] leading-[1.1] mb-6"
          >
            Creating the future with{" "}
            <span className="bg-gradient-to-r from-[var(--color-accent)] via-[#f28e5a] to-[#FFFCF2] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(235,94,40,0.3)]">
              AI and content
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-white/70 max-w-xl mb-8 leading-relaxed font-normal"
          >
            I help brands, healthcare organizations, and creators scale short-form AI video, automated content pipelines, and high-engagement reels that drive real organic growth.
          </motion.p>

          {/* Dual Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10"
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[var(--color-accent)] text-white text-sm font-bold shadow-[0_0_30px_rgba(235,94,40,0.4)] hover:bg-[#ff6e38] hover:shadow-[0_0_40px_rgba(235,94,40,0.6)] transition-all duration-300 cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowUpRight size={17} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection("work")}
              className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white/5 border border-white/15 text-white/90 text-sm font-semibold backdrop-blur-lg hover:bg-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer"
            >
              <Play size={15} className="text-[var(--color-accent)] fill-[var(--color-accent)]" />
              <span>See My Work</span>
            </button>
          </motion.div>

          {/* Mini Trust Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-6 border-t border-white/10 w-full max-w-lg flex flex-wrap items-center justify-between gap-4 text-xs text-white/60 font-medium"
          >
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-400" />
              <span>30K+ Audience Scaled</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-400" />
              <span>10K+ Daily Reach</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-400" />
              <span>Higgsfield & ComfyUI</span>
            </div>
          </motion.div>

        </div>

        {/* Right Visual Column — Pure CSS Alpha Mask for Perfect Seamless Fade */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-6 relative flex justify-center lg:justify-end items-end h-[500px] sm:h-[620px] lg:h-[700px] w-full mt-4 lg:mt-0"
        >
          {/* Subtle Ambient Glow Disk Behind Avatar Head */}
          <div className="absolute top-10 right-12 w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] rounded-full bg-gradient-to-tr from-[var(--color-accent)]/20 via-purple-600/15 to-transparent blur-[110px] pointer-events-none" />

          {/* Avatar Image with Bottom Gradient Fade blending smoothly into dark background */}
          <div className="relative w-full max-w-lg sm:max-w-xl h-[500px] sm:h-[620px] lg:h-[700px] flex items-end justify-center pointer-events-none overflow-hidden">
            <Image
              src="/yathin-hero.png"
              alt="Yathin - AI Content Creator"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain object-bottom filter brightness-105 contrast-105"
            />
            {/* Smooth bottom blend overlay */}
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
