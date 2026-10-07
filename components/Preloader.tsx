"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Video, Zap } from "lucide-react";

export const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const duration = 1800; // 1.8s smooth preloader
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(100, Math.round((currentStep / steps) * 100));
      setProgress(nextProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsLoading(false);
        }, 400);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  // Status message based on progress
  const getStatusMessage = () => {
    if (progress < 30) return "INITIALIZING AI CREATIVE ENGINE";
    if (progress < 65) return "LOADING HIGGSFIELD & HEYGEN PIPELINES";
    if (progress < 95) return "PREPARING REELS & MOTION GRAPHICS";
    return "PORTFOLIO READY";
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <div className="fixed inset-0 z-[9999] pointer-events-auto select-none overflow-hidden flex flex-col items-center justify-center">
          
          {/* Top Half Curtain */}
          <motion.div
            initial={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 left-0 right-0 h-1/2 bg-[#0a0a0e] border-b border-white/10 z-10"
          />

          {/* Bottom Half Curtain */}
          <motion.div
            initial={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#0a0a0e] border-t border-white/10 z-10"
          />

          {/* Central Preloader Content Container */}
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="relative z-20 flex flex-col items-center justify-center p-6 text-center"
          >
            {/* Ambient Background Lighting Disk */}
            <div className="absolute w-[450px] h-[450px] rounded-full bg-[var(--color-accent)]/20 blur-[130px] pointer-events-none" />

            {/* Glowing Orbital Ring + Center Icon */}
            <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
              {/* Outer Rotating Gradient Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[var(--color-accent)] border-r-purple-500 animate-[spin_3s_linear_infinite]" />
              <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-[#FFB703] border-l-[var(--color-accent)] animate-[spin_2s_linear_infinite_reverse]" />

              {/* Core Badge */}
              <div className="w-14 h-14 rounded-2xl bg-[#141418] border border-white/20 flex items-center justify-center text-[var(--color-accent)] shadow-[0_0_25px_rgba(235,94,40,0.6)]">
                <Sparkles size={24} className="fill-[var(--color-accent)] animate-pulse" />
              </div>
            </div>

            {/* Name & Role */}
            <div className="mb-6">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#FFFCF2] block">
                YATHIN
              </span>
              <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-accent)] mt-1 block">
                AI Content Creator & Video Specialist
              </span>
            </div>

            {/* Giant Percentage Counter */}
            <div className="font-mono text-5xl sm:text-7xl font-black text-[#FFFCF2] tracking-tighter drop-shadow-[0_0_30px_rgba(235,94,40,0.6)] mb-4">
              {progress.toString().padStart(2, "0")}
              <span className="text-2xl sm:text-4xl text-[var(--color-accent)] font-bold">%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-64 sm:w-80 h-2 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/15 mb-3">
              <motion.div
                className="h-full bg-gradient-to-r from-[#EB5E28] via-[#FFB703] to-[#EB5E28] rounded-full shadow-[0_0_20px_rgba(235,94,40,0.9)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Dynamic Status Text */}
            <div className="text-[11px] font-mono font-bold tracking-wider text-white/60 uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-ping" />
              <span>{getStatusMessage()}</span>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
