"use client";

import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Search, CheckCircle2, ArrowUpRight } from "lucide-react";

export const Services = () => {
  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-12 bg-transparent z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[var(--color-accent)] mb-4">
              <span>SPECIALIZATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#FFFCF2] leading-tight">
              One creator. A complete digital experience.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-white/60 leading-relaxed font-normal">
              One person handling AI workflows, short-form video production, and content distribution — so your brand stays consistent without juggling multiple freelancers.
            </p>
          </div>
        </div>

        {/* 3-Card Grid matching video */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 01 - BUILD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-2xl hover:border-[var(--color-accent)]/50 transition-all duration-500"
          >
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent)]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[var(--color-accent)]/20 transition-all duration-700" />
            
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">
                01 — BUILD
              </div>
              <h3 className="text-2xl font-extrabold text-[#FFFCF2] mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                AI & Automation
              </h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-6">
                End-to-end AI video production pipelines leveraging Higgsfield for visual generation, HeyGen for avatars & voiceovers, and Claude for rapid storyboarding.
              </p>
            </div>

            {/* Visual Card Mockup Area */}
            <div className="relative mt-4 p-5 rounded-2xl bg-black/40 border border-white/10 flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-white/90">
                <Sparkles size={14} className="text-[var(--color-accent)]" />
                <span>What's Included:</span>
              </div>
              <ul className="space-y-2 text-xs text-white/70">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-400" />
                  <span>Higgsfield AI video generation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-400" />
                  <span>HeyGen AI avatars & voice narration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-400" />
                  <span>Claude scripting & CapCut motion polish</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card 02 - GROW */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-2xl hover:border-purple-500/50 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-600/20 transition-all duration-700" />

            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">
                02 — GROW
              </div>
              <h3 className="text-2xl font-extrabold text-[#FFFCF2] mb-3 group-hover:text-purple-400 transition-colors">
                Content & Marketing
              </h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-6">
                Social content strategy, ad creatives, short-form reels editing, motion graphics, and organic distribution frameworks.
              </p>
            </div>

            <div className="relative mt-4 p-5 rounded-2xl bg-black/40 border border-white/10 flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-white/90">
                <TrendingUp size={14} className="text-purple-400" />
                <span>Growth Benchmarks:</span>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <div className="bg-white/5 p-2.5 rounded-xl border border-white/10">
                  <span className="text-[10px] text-white/50 block font-medium">Daily Reach</span>
                  <span className="text-sm font-extrabold text-[#FFFCF2]">10K+ Views</span>
                </div>
                <div className="bg-white/5 p-2.5 rounded-xl border border-white/10">
                  <span className="text-[10px] text-white/50 block font-medium">Audience</span>
                  <span className="text-sm font-extrabold text-emerald-400">31.6K Followers</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 03 - IMPROVE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-2xl hover:border-emerald-500/50 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-700" />

            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">
                03 — IMPROVE
              </div>
              <h3 className="text-2xl font-extrabold text-[#FFFCF2] mb-3 group-hover:text-emerald-400 transition-colors">
                Audit & Review
              </h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-6">
                An outside, expert eye on your content, brand narrative, or video workflows — with clear, actionable recommendations.
              </p>
            </div>

            <div className="relative mt-4 p-5 rounded-2xl bg-black/40 border border-white/10 flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-white/90">
                <Search size={14} className="text-emerald-400" />
                <span>What's Included:</span>
              </div>
              <ul className="space-y-2 text-xs text-white/70">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-400" />
                  <span>Content & Hook Audit</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-400" />
                  <span>Pipeline Efficiency Review</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-400" />
                  <span>Conversion & Retention Roadmap</span>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
