"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  BarChart3,
  Users,
  Share2,
  Bookmark,
  Heart,
  MessageCircle,
  Play,
  Eye,
  CheckCircle2,
  Calendar
} from "lucide-react";

const Instagram = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);


export default function InstagramAudienceStats() {
  const [activeTab, setActiveTab] = useState<"reach" | "distribution" | "engagement">("reach");
  const [followers, setFollowers] = useState(31200);
  const [hoveredDataPoint, setHoveredDataPoint] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Animate follower count on mount
  useEffect(() => {
    const target = 31642;
    const duration = 2000; // 2 seconds
    const frameRate = 1000 / 60; // 60 fps
    const totalFrames = Math.round(duration / frameRate);
    let currentFrame = 0;

    const timer = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      // Ease out quad formula for smooth decelerating count up
      const easeProgress = progress * (2 - progress);
      const currentVal = Math.round(31200 + (target - 31200) * easeProgress);

      setFollowers(currentVal);

      if (currentFrame >= totalFrames) {
        setFollowers(target);
        clearInterval(timer);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, []);

  // Reach dataset for the line chart (10k daily reach focus)
  const reachData = [
    { day: "Mon", reach: 9800, content: "Reel", label: "UI Principles" },
    { day: "Tue", reach: 10450, content: "Post", label: "Figma Shortcuts" },
    { day: "Wed", reach: 11200, content: "Reel", label: "Landing Page Hack" },
    { day: "Thu", reach: 10100, content: "Reel", label: "Aesthetic Layouts" },
    { day: "Fri: Live", reach: 12840, content: "Reel + Post", label: "Portfolio Audit" },
    { day: "Sat", reach: 10600, content: "Post", label: "Color Systems" },
    { day: "Sun", reach: 11400, content: "Reel", label: "Grid Mechanics" },
  ];

  // SVG Chart Coordinates Calculation
  const chartHeight = 120;
  const chartWidth = 340;
  const paddingX = 30;
  const paddingY = 20;

  const minReach = 8000;
  const maxReach = 14000;

  const points = reachData.map((d, index) => {
    const x = paddingX + (index / (reachData.length - 1)) * (chartWidth - paddingX * 2);
    // Invert Y coordinate because SVG 0 is top
    const y =
      chartHeight -
      paddingY -
      ((d.reach - minReach) / (maxReach - minReach)) * (chartHeight - paddingY * 2);
    return { x, y, ...d };
  });

  const pathD = points.reduce((acc, p, i) => {
    return i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`;
  }, "");

  // Area under line graph for clean gradient fill
  const areaD = `${pathD} L ${points[points.length - 1].x} ${chartHeight - paddingY} L ${points[0].x} ${chartHeight - paddingY} Z`;

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[380px] bg-white/[0.03] backdrop-blur-xl border border-white/15 rounded-3xl p-6 flex flex-col justify-between font-sans select-none relative overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] group hover:border-[var(--color-accent)]/50 transition-all duration-500"
    >
      {/* Dynamic ambient glow effect */}
      <div className="absolute -inset-px bg-gradient-to-br from-[var(--color-accent)]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Header section */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
        <a
          href="https://www.instagram.com/designpreneurss/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 group/profile hover:opacity-90 transition-opacity"
        >
          <div className="relative">
            <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-[#EB5E28] via-[#ee2a7b] to-[#6228d7]">
              <div className="w-full h-full rounded-full bg-[#121212] flex items-center justify-center overflow-hidden">
                <span className="font-extrabold text-sm tracking-tight text-white">DP</span>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-[#121212] rounded-full p-0.5 border border-white/10">
              <Instagram size={12} className="text-[#ee2a7b]" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-base text-[#FFFCF2]">@designpreneurss</span>
              <CheckCircle2 size={15} className="text-[#38bdf8] fill-[#38bdf8]/10" />
            </div>
            <span className="text-xs text-white/60 font-medium">UI/UX & Creative Tech</span>
          </div>
        </a>
      </div>

      {/* Hero Stats Panel */}
      <div className="relative z-10 grid grid-cols-3 gap-3 my-4">
        {/* Stat 1: Followers */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-3 flex flex-col justify-between hover:bg-white/[0.06] transition-all duration-300">
          <span className="text-[10px] text-white/50 font-semibold uppercase tracking-wider flex items-center gap-1">
            <Users size={11} className="text-white/50" /> Audience
          </span>
          <div className="mt-1.5 flex flex-col">
            <span className="text-xl font-extrabold text-[#FFFCF2] leading-tight tracking-tight">
              {followers.toLocaleString()}
            </span>
            <span className="text-[11px] text-emerald-400 font-bold flex items-center gap-0.5 mt-0.5">
              +12.4% <TrendingUp size={10} />
            </span>
          </div>
        </div>

        {/* Stat 2: Daily Reach */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-3 flex flex-col justify-between hover:bg-white/[0.06] transition-all duration-300">
          <span className="text-[10px] text-white/50 font-semibold uppercase tracking-wider flex items-center gap-1">
            <BarChart3 size={11} className="text-[var(--color-accent)]" /> Daily Reach
          </span>
          <div className="mt-1.5 flex flex-col">
            <span className="text-xl font-extrabold text-[var(--color-accent)] leading-tight tracking-tight">
              10K+
            </span>
            <span className="text-[11px] text-emerald-400 font-bold flex items-center gap-0.5 mt-0.5">
              Target Met
            </span>
          </div>
        </div>

        {/* Stat 3: Strategy */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-3 flex flex-col justify-between hover:bg-white/[0.06] transition-all duration-300">
          <span className="text-[10px] text-white/50 font-semibold uppercase tracking-wider flex items-center gap-1">
            <Calendar size={11} className="text-white/50" /> Posting
          </span>
          <div className="mt-1.5 flex flex-col">
            <span className="text-sm font-bold text-[#FFFCF2] leading-tight">
              Reels & Posts
            </span>
            <span className="text-[10px] text-white/60 font-medium mt-0.5">
              Daily Uploads
            </span>
          </div>
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-between min-h-[145px] bg-black/30 border border-white/10 rounded-2xl p-4">
        <AnimatePresence mode="wait">
          {activeTab === "reach" && (
            <motion.div
              key="reach"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="flex-1 flex flex-col justify-between"
            >
              {/* Chart title and mini metrics */}
              <div className="flex items-center justify-between text-xs text-white/70 mb-2">
                <span className="font-semibold text-white/90">Daily Organic Reach (Weekly View)</span>
                <span className="font-mono text-[10px] font-bold bg-emerald-500/15 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30">Avg: 10.9K/day</span>
              </div>

              {/* SVG Line Graph */}
              <div className="relative w-full h-[120px] flex items-center justify-center">
                <svg className="w-full h-full" viewBox={`0 0 ${chartWidth} ${chartHeight}`} preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1={paddingX} y1={paddingY} x2={chartWidth - paddingX} y2={paddingY} stroke="rgba(255,255,255,0.05)" strokeWidth={1} />
                  <line x1={paddingX} y1={chartHeight / 2} x2={chartWidth - paddingX} y2={chartHeight / 2} stroke="rgba(255,255,255,0.05)" strokeWidth={1} />
                  <line x1={paddingX} y1={chartHeight - paddingY} x2={chartWidth - paddingX} y2={chartHeight - paddingY} stroke="rgba(255,255,255,0.1)" strokeWidth={1} />
                  
                  {/* Target 10K line marker */}
                  <line 
                    x1={paddingX} 
                    y1={chartHeight - paddingY - ((10000 - minReach) / (maxReach - minReach)) * (chartHeight - paddingY * 2)} 
                    x2={chartWidth - paddingX} 
                    y2={chartHeight - paddingY - ((10000 - minReach) / (maxReach - minReach)) * (chartHeight - paddingY * 2)} 
                    stroke="rgba(235,94,40,0.3)" 
                    strokeWidth={1.5}
                    strokeDasharray="3,3" 
                  />

                  {/* Gradient definitions */}
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Shaded area */}
                  <path d={areaD} fill="url(#chartGradient)" />

                  {/* Main Line path */}
                  <motion.path
                    d={pathD}
                    fill="none"
                    stroke="var(--color-accent)"
                    strokeWidth={2.5}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />

                  {/* Intersect Dots */}
                  {points.map((p, i) => (
                    <g key={i}>
                      <circle
                        cx={p.x}
                        cy={p.y}
                        r={hoveredDataPoint === i ? 6 : 4}
                        fill={hoveredDataPoint === i ? "#fff" : "var(--color-background)"}
                        stroke="var(--color-accent)"
                        strokeWidth={2}
                        className="cursor-pointer transition-all duration-200"
                        onMouseEnter={() => setHoveredDataPoint(i)}
                        onMouseLeave={() => setHoveredDataPoint(null)}
                      />
                      {/* X-axis labels */}
                      <text
                        x={p.x}
                        y={chartHeight - 4}
                        textAnchor="middle"
                        fill="rgba(255,255,255,0.5)"
                        fontSize="9px"
                        fontWeight="semibold"
                      >
                        {p.day.split(":")[0]}
                      </text>
                    </g>
                  ))}
                </svg>

                {/* Animated Tooltip on Hover */}
                {hoveredDataPoint !== null && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="absolute bg-[#1a1a1f] border border-white/20 rounded-xl p-2.5 shadow-2xl text-left pointer-events-none z-20 flex flex-col gap-0.5"
                    style={{
                      left: `${(points[hoveredDataPoint].x / chartWidth) * 98}%`,
                      top: `${Math.max(5, (points[hoveredDataPoint].y / chartHeight) * 75 - 40)}px`,
                      transform: "translateX(-50%)",
                    }}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-extrabold text-[var(--color-accent)]">
                        {points[hoveredDataPoint].reach.toLocaleString()} Reach
                      </span>
                      <span className="text-[9px] bg-white/10 px-1.5 py-0.5 rounded text-white/80 font-semibold">
                        {points[hoveredDataPoint].content}
                      </span>
                    </div>
                    <span className="text-[10px] text-[#FFFCF2]/80 truncate max-w-[130px]">
                      {points[hoveredDataPoint].label}
                    </span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {activeTab === "distribution" && (
            <motion.div
              key="distribution"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="flex-1 flex flex-col justify-between"
            >
              <div className="text-xs text-white/70 mb-1 flex justify-between font-semibold">
                <span>Reach Share By Format</span>
                <span className="text-[var(--color-accent)] font-bold">Daily Reels Advantage</span>
              </div>

              <div className="space-y-3.5 my-auto">
                {/* Reels Segment */}
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="flex items-center gap-1 text-[#FFFCF2]">
                      <Play size={12} className="text-[#ee2a7b]" /> Reels
                    </span>
                    <span className="text-white/90">68% <span className="text-emerald-400 text-xs font-bold">(~7.2K daily reach)</span></span>
                  </div>
                  <div className="h-2.5 w-full bg-white/[0.04] border border-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[#ee2a7b] to-[#EB5E28]"
                      initial={{ width: 0 }}
                      animate={{ width: "68%" }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* Posts/Carousels Segment */}
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="flex items-center gap-1 text-[#FFFCF2]">
                      <Eye size={12} className="text-[#38bdf8]" /> Posts & Guides
                    </span>
                    <span className="text-white/90">32% <span className="text-emerald-400 text-xs font-bold">(~3.4K daily reach)</span></span>
                  </div>
                  <div className="h-2.5 w-full bg-white/[0.04] border border-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9]"
                      initial={{ width: 0 }}
                      animate={{ width: "32%" }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>

              <p className="text-xs text-white/60 leading-relaxed border-t border-white/10 pt-2 mt-1">
                📌 **Strategy**: Standard static posts drive save-heavy bookmarks, while micro-animated reels hit exploration algorithms to scale top-funnel reach beyond 10K.
              </p>
            </motion.div>
          )}

          {activeTab === "engagement" && (
            <motion.div
              key="engagement"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="flex-1 flex flex-col justify-between"
            >
              <div className="text-xs text-white/70 mb-2 flex justify-between font-semibold">
                <span>Engagement Benchmarks</span>
                <span className="text-emerald-400 font-bold">Total rate: 8.4% (vs 2.1% Industry Avg)</span>
              </div>

              <div className="grid grid-cols-2 gap-2.5 my-auto">
                <div className="bg-white/[0.03] border border-white/10 rounded-xl p-2.5 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#ee2a7b]/15 border border-[#ee2a7b]/30 flex items-center justify-center text-[#ee2a7b]">
                    <Heart size={14} fill="#ee2a7b" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/50 block font-medium">Likes Ratio</span>
                    <span className="text-xs font-extrabold text-[#FFFCF2]">4.1% Avg</span>
                  </div>
                </div>

                <div className="bg-white/[0.03] border border-white/10 rounded-xl p-2.5 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#38bdf8]/15 border border-[#38bdf8]/30 flex items-center justify-center text-[#38bdf8]">
                    <MessageCircle size={14} fill="#38bdf8" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/50 block font-medium">Comments</span>
                    <span className="text-xs font-extrabold text-[#FFFCF2]">1.2% Avg</span>
                  </div>
                </div>

                <div className="bg-white/[0.03] border border-white/10 rounded-xl p-2.5 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/30 flex items-center justify-center text-[var(--color-accent)]">
                    <Share2 size={14} />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/50 block font-medium">Shares</span>
                    <span className="text-xs font-extrabold text-[#FFFCF2]">2.3% Avg</span>
                  </div>
                </div>

                <div className="bg-white/[0.03] border border-white/10 rounded-xl p-2.5 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-500">
                    <Bookmark size={14} fill="rgba(245, 158, 11, 0.4)" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/50 block font-medium">Saves</span>
                    <span className="text-xs font-extrabold text-[#FFFCF2]">3.8% Avg</span>
                  </div>
                </div>
              </div>

              <div className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/20 p-2 rounded-xl flex items-center justify-center gap-1.5 mt-1">
                ⭐ Educational carousel assets average 3.2x more saves/shares than lifestyle.
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Tabs list controls */}
      <div className="relative z-10 grid grid-cols-3 gap-1.5 bg-black/40 p-1.5 rounded-2xl border border-white/10 mt-4">
        <button
          onClick={() => setActiveTab("reach")}
          className={`py-2 text-xs font-bold rounded-xl transition-all duration-300 cursor-pointer ${
            activeTab === "reach"
              ? "bg-[var(--color-accent)] text-white shadow-lg shadow-[var(--color-accent)]/25"
              : "text-white/60 hover:text-white hover:bg-white/[0.05]"
          }`}
        >
          Reach Stats
        </button>
        <button
          onClick={() => setActiveTab("distribution")}
          className={`py-2 text-xs font-bold rounded-xl transition-all duration-300 cursor-pointer ${
            activeTab === "distribution"
              ? "bg-[var(--color-accent)] text-white shadow-lg shadow-[var(--color-accent)]/25"
              : "text-white/60 hover:text-white hover:bg-white/[0.05]"
          }`}
        >
          Formats
        </button>
        <button
          onClick={() => setActiveTab("engagement")}
          className={`py-2 text-xs font-bold rounded-xl transition-all duration-300 cursor-pointer ${
            activeTab === "engagement"
              ? "bg-[var(--color-accent)] text-white shadow-lg shadow-[var(--color-accent)]/25"
              : "text-white/60 hover:text-white hover:bg-white/[0.05]"
          }`}
        >
          Engagement
        </button>
      </div>
    </div>
  );
}
